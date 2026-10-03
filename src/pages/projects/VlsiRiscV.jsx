import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import CodeBlock from '../../components/CodeBlock'
import img from '../../img'

const toc = [
  { id: 'overview',  label: 'Overview' },
  { id: 'rtl',       label: 'RTL & Simulation' },
  { id: 'source',    label: 'Source Code (Verilog)' },
  { id: 'physical',  label: 'Physical Design' },
  { id: 'takeaways', label: 'What I Learned' },
]

const specs = [
  { value: '32-bit', label: 'Custom ISA' },
  { value: '50 MHz', label: 'Target Clock Frequency' },
  { value: '15%',    label: 'Area Overhead Reduced' },
  { value: 'RTL→GDS', label: 'Full ASIC Flow' },
]

const PROGRAM_COUNTER = `module program_counter(
    input clk,
    input rst,
    input[31:0] pc_in,
    output reg[31:0] pc_out
);

    always @(posedge clk or posedge rst)begin
        if(rst)begin
            pc_out <= 32'b00;
        end else begin
            pc_out <= pc_in;
        end
    end
endmodule


module pc_adder(
    input [31:0] pc_in,
    output reg [31:0] pc_next
);

    always @(*) begin
        pc_next = pc_in + 4;
    end
endmodule


module pc_mux(
    input [31:0] pc_in,
    input [31:0] pc_branch,
    input pc_select,
    output reg [31:0] pc_out
);

    always@(*) begin
        if (pc_select == 1'b00) begin
            pc_out = pc_in;
        end else begin
            pc_out = pc_branch;
        end
    end
endmodule`

const INSTRUCTION_MEMORY = `module Instruction_Memory (rst, clk, read_address, instruction_out);

    input rst, clk;
    input [31:0] read_address;
    output [31:0] instruction_out;
    reg [31:0] I_Mem [63:0];
    integer k;
    assign instruction_out = I_Mem[read_address];

    always @(posedge clk or posedge rst)
    begin
        if (rst) begin
            for (k = 0; k < 64; k = k + 1) begin
                I_Mem[k] = 32'b00;
            end
        end else begin

            // R-type Register: Pure data processing inside the CPU. It takes two source registers, does math/logic, and puts the result in a destination register.
            I_Mem[0]  = 32'b0000_0000_0000_0000_0000_0000_0000_0000 ;  // no operation
            I_Mem[4]  = 32'b0000_0001_1001_1000_1100_0110_1011_0011 ;  // add x13, x16, x25
            I_Mem[8]  = 32'b0100_0000_0011_0100_0000_0010_1011_0011 ;  // sub x5, x8, x3
            I_Mem[12] = 32'b0000_0000_0011_0001_0111_0000_1011_0011 ;  // and x1, x2, x3
            I_Mem[16] = 32'b0000_0000_0101_0001_1110_0010_0011_0011 ;  // or x4, x3, x5
            I_Mem[20] = 32'b0000_0000_0101_0001_1100_0010_0011_0011 ;  // xor x4, x3, x5
            I_Mem[24] = 32'b0000_0000_0101_0001_1001_0010_0011_0011 ;  // sll x4, x3, x5
            I_Mem[28] = 32'b0000_0000_0101_0001_1101_0010_0011_0011 ;  // srl x4, x3, x5
            I_Mem[32] = 32'b0100_0000_0010_0001_1101_0010_1011_0011 ;  // sra x5, x3, x2
            I_Mem[36] = 32'b0000_0000_0010_0001_1010_0010_1011_0011 ;  // slt x5, x3, x2

            // I-type Register: Modifies a register's value using a fixed, hardcoded constant (immediate) instead of a second register.
            I_Mem[40] = 32'b0000_0000_0010_1010_1000_1011_0001_0011 ;  // addi x22, x21, 2
            I_Mem[44] = 32'b0000_0000_0011_0100_0110_0100_1001_0011 ;  // ori x9, x8, 3
            I_Mem[48] = 32'b0000_0000_0100_0100_0100_0100_1001_0011 ;  // xori x9, x8, 4
            I_Mem[52] = 32'b0000_0000_0101_0001_0111_0000_1001_0011 ;  // andi x1, x2, 5
            I_Mem[56] = 32'b0000_0000_0110_0001_1001_0010_0001_0011 ;  // slli x4, x3, 6
            I_Mem[60] = 32'b0000_0000_0111_0001_1101_0010_0001_0011 ;  // srli x4, x3, 7
            I_Mem[64] = 32'b0100_0000_1000_0001_1101_0010_0001_0011 ;  // srai x5, x3, 8
            I_Mem[68] = 32'b0000_0000_1001_0001_1010_0010_1001_0011 ;  // slti x5, x3, 9

            // L-type Register: Pulls data out of your RAM chip and loads it into a CPU register so you can actually do math on it.
            I_Mem[72] = 32'b0000_0000_0101_0001_1000_0100_1000_0011 ;  // lb x9, 5(x3)
            I_Mem[76] = 32'b0000_0000_0101_0001_1001_0100_1000_0011 ;  // lh x9, 5(x3)
            I_Mem[80] = 32'b0000_0000_1111_0001_0010_0100_0000_0011 ;  // lw x8, 15(x2)

            // S-type Register: It takes data currently sitting in a CPU register and saves it out to RAM for long-term storage. Reverse of load
            I_Mem[84]  = 32'b0000_0000_0111_1000_1100_0010_0001_0011 ;  // sb x15, 8(x3), x3 = 12
            I_Mem[86]  = 32'b0000_0000_0111_0001_1000_1010_1001_0011 ;  // sh x14, 10(x6), x6 = 44
            I_Mem[90]  = 32'b0000_0000_0111_0001_1001_0011_0001_0011 ;  // sw x14, 12(x6), x6 = 44

            // B-type Register: t implements if statements and loops. It compares two registers, and if the condition is true (like if they are equal),
            // it jumps to a different part of the program by adding a relative offset to the Program Counter (PC).
            I_Mem[94]  = 32'b0000_0000_1001_0100_1000_0110_0110_0011 ;  // beq x9, x9, 12, (PC + 12 if x9 = x9)
            I_Mem[98]  = 32'b0000_0000_1001_0100_1001_0111_0110_0011 ;  // bne x9, x9, 14, (PC + 14 if x9 != x9)

            // U-type Register: RISC-V instructions are only 32 bits total, so an I-type instruction can only hold a small 12-bit constant.
            // If you need to build a huge 32-bit number or memory address, you use a U-type instruction to load a massive 20-bit number into the upper part of a register.
            I_Mem[102] = 32'b0000_0000_0000_0010_1000_0001_1011_0111 ;  // lui x3, 40
            I_Mem[106] = 32'b0000_0000_0000_0101_0000_0101_0001_0111 ;  // auipc x5, 20 (rd = PC + (imm << 12))

            // J-type Register: This is how you call functions or perform unconditional jumps (like a goto statement).
            I_Mem[110] = 32'b0000_0000_0000_0000_1010_0000_1110_1111 ;  // jal x1, 20

        end
    end

endmodule`

const REGISTER_FILE = `module Register_File (clk, rst, RegWrite, Rs1, Rs2, Rd, Write_data, read_data1, read_data2);

    input clk, rst, RegWrite;
    input [4:0] Rs1, Rs2, Rd;
    input [31:0] Write_data;
    output [31:0] read_data1, read_data2;

    reg [31:0] Registers [31:0];

    initial begin
    Registers[0]  = 0;   // zero (Hardwired zero)
    Registers[1]  = 3;   // ra   (Return address)
    Registers[2]  = 2;   // sp   (Stack pointer)
    Registers[3]  = 12;  // gp   (Global pointer)
    Registers[4]  = 20;  // tp   (Thread pointer)
    Registers[5]  = 3;   // t0   (Temporary 0)
    Registers[6]  = 44;  // t1   (Temporary 1)
    Registers[7]  = 4;   // t2   (Temporary 2)
    Registers[8]  = 2;   // s0/fp(Saved register 0 / Frame pointer)
    Registers[9]  = 1;   // s1   (Saved register 1)
    Registers[10] = 23;  // a0   (Function argument / Return value 0)
    Registers[11] = 4;   // a1   (Function argument / Return value 1)
    Registers[12] = 90;  // a2   (Function argument 2)
    Registers[13] = 10;  // a3   (Function argument 3)
    Registers[14] = 20;  // a4   (Function argument 4)
    Registers[15] = 30;  // a5   (Function argument 5)
    Registers[16] = 40;  // a6   (Function argument 6)
    Registers[17] = 50;  // a7   (Function argument 7)
    Registers[18] = 60;  // s2   (Saved register 2)
    Registers[19] = 70;  // s3   (Saved register 3)
    Registers[20] = 80;  // s4   (Saved register 4)
    Registers[21] = 80;  // s5   (Saved register 5)
    Registers[22] = 90;  // s6   (Saved register 6)
    Registers[23] = 70;  // s7   (Saved register 7)
    Registers[24] = 60;  // s8   (Saved register 8)
    Registers[25] = 65;  // s9   (Saved register 9)
    Registers[26] = 4;   // s10  (Saved register 10)
    Registers[27] = 32;  // s11  (Saved register 11)
    Registers[28] = 12;  // t3   (Temporary 3)
    Registers[29] = 34;  // t4   (Temporary 4)
    Registers[30] = 5;   // t5   (Temporary 5)
    Registers[31] = 10;  // t6   (Temporary 6)
end


    integer k;
    always @(posedge clk) begin
    if (rst)
    begin
        for (k = 0; k < 32; k = k + 1) begin
            Registers [k] = 32'b00;
        end
      end

    else if (RegWrite) begin
       Registers[Rd] = Write_data;
     end
   end


   assign read_data1 = Registers[Rs1];
   assign read_data2 = Registers[Rs2];
endmodule`

const MAIN_CONTROL_UNIT = `module main_control_unit(
    input [6:0] opcode,
    output reg RegWrite,
    output reg MemRead,
    output reg MemWrite,
    output reg MemToReg,
    output reg ALUSrc,
    output reg Branch,
    output reg [1:0] ALUOp
);

always @(*) begin
    case (opcode)
        7'b0110011: begin // R-type
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b0, 1'b0, 1'b1, 1'b0, 1'b0, 1'b0, 2'b10};
        end

        7'b0010011: begin // I-type
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b1, 1'b0, 1'b1, 1'b0, 1'b0, 1'b0, 2'b10};
        end

        7'b0000011: begin // Load
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b1, 1'b1, 1'b1, 1'b1, 1'b0, 1'b0, 2'b00};
        end

        7'b0100011: begin // Store
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b1, 1'b0, 1'b0, 1'b0, 1'b1, 1'b0, 2'b00};
        end

        7'b1100011: begin // Branch
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b0, 1'b0, 1'b0, 1'b0, 1'b0, 1'b1, 2'b11};
        end

        7'b1101111: begin // Jump
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b0, 1'b0, 1'b1, 1'b0, 1'b0, 1'b0, 2'b10};
        end

        7'b0110111: begin // LUI
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b0, 1'b0, 1'b1, 1'b0, 1'b0, 1'b0, 2'b10};
        end

        default: begin
            {ALUSrc, MemToReg, RegWrite, MemRead, MemWrite, Branch, ALUOp} <= {1'b0, 1'b0, 1'b0, 1'b0, 1'b0, 1'b0, 2'b00};
        end
    endcase
end

endmodule`

const IMMEDIATE_GENERATOR = `module immediate_generator(
    input [31:0] instruction,
    output reg [31:0] imm_out
);

always @(*) begin
    case (instruction[6:0])
        7'b0010011: begin // I-type
            imm_out = {{20{instruction[31]}}, instruction[31:20]};
        end

        7'b0000011: begin // Load-type
            imm_out = {{20{instruction[31]}}, instruction[31:20]};
        end

        7'b0100011: begin // Store-type
            imm_out = {{20{instruction[31]}}, instruction[31:25], instruction[11:7]};
        end

        7'b1100011: begin // B-type
            imm_out = {{19{instruction[31]}}, instruction[7], instruction[30:25], instruction[11:8], 1'b0};
        end

        7'b0110111: begin // U-type
            imm_out = {instruction[31:12], 12'b0};
        end

        7'b0010111: begin // U-type
            imm_out = {instruction[31:12], 12'b0};
        end

        7'b1101111: begin // J-type
            imm_out = {{11{instruction[31]}}, instruction[19:12], instruction[20], instruction[30:21], 1'b0};
        end

        default: begin // Default case
            imm_out = 32'b0;
        end
    endcase
end

endmodule`

const ALU_AND_CONTROL = `module ALU(
    input [31:0] A,
    input [31:0] B,
    input [3:0] ALUcontrol_In,
    output reg [31:0] Result,
    output reg Zero
);

always @(A or B or ALUcontrol_In) begin
    case (ALUcontrol_In)
        4'b0000: Result = A + B;                            // ADD
        4'b0001: Result = A - B;                            // SUB
        4'b0010: Result = A & B;                            // AND
        4'b0011: Result = A | B;                            // OR
        4'b0100: Result = A ^ B;                            // XOR
        4'b0101: Result = A << B[4:0];                      // SLL (Shift Left Logical)
        4'b0110: Result = A >> B[4:0];                      // SRL (Shift Right Logical)
        4'b0111: Result = $signed(A) >>> B[4:0];            // SRA (Shift Right Arithmetic)
        4'b1000: Result = ($signed(A) < $signed(B)) ? 32'b1 : 32'b0;
        default: Result = 32'b0;
    endcase

    Zero = (Result == 32'b0) ? 1 : 0;
end

endmodule


module ALU_Control(
    input [2:0] funct3,
    input [6:0] funct7,
    input [1:0] ALUOp,
    output reg [31:0] ALUcontrol_Out
);

always @(*) begin
    case ({ALUOp, funct7, funct3})
        12'b10_0000000_000 : ALUcontrol_Out <= 4'b0000;    // ADD
        12'b00_0000000_000 : ALUcontrol_Out <= 4'b0000;    // ADD
        12'b00_0000000_001 : ALUcontrol_Out <= 4'b0000;    // ADD
        12'b00_0000000_010 : ALUcontrol_Out <= 4'b0000;    // ADD
        12'b10_0100000_000 : ALUcontrol_Out <= 4'b0001;    // SUB
        12'b10_0000000_111 : ALUcontrol_Out <= 4'b0010;    // AND
        12'b10_0000000_110 : ALUcontrol_Out <= 4'b0011;    // OR
        12'b10_0000000_100 : ALUcontrol_Out <= 4'b0100;    // XOR
        12'b10_0000000_001 : ALUcontrol_Out <= 4'b0101;    // SLL
        12'b10_0000000_101 : ALUcontrol_Out <= 4'b0110;    // SRL
        12'b10_0100000_101 : ALUcontrol_Out <= 4'b0111;    // SRA
        12'b10_0000000_010 : ALUcontrol_Out <= 4'b1000;    // SLT
        default            : ALUcontrol_Out <= 4'b0000;
    endcase
end

endmodule`

const MEMORY_AND_MUXES = `module MUX2to1(
    inout[31:0] input0,
    input[31:0] input1,
    input select,
    output[31:0] out
);

assign out = (select) ? input1 : input0;

endmodule


module Data_Memory(
    input clk,
    input rst,
    input MemRead,
    input MemWrite,
    input [31:0] address,
    input [31:0] write_data,
    output [31:0] read_data
);

reg [31:0] D_Memory [63:0];

integer k;

assign read_data = (MemRead) ? D_Memory[address] : 32'b00;

always @(posedge clk) begin
    D_Memory[17] = 56;
    D_Memory[15] = 65;
end

always @(posedge clk or posedge rst) begin
    if (rst) begin
        for (k = 0; k < 64; k = k + 1) begin
            D_Memory[k] = 32'b00;
        end
    end else if (MemWrite) begin
        D_Memory[address] = write_data;
    end
end

endmodule


module MUX2to1_DataMemory(
    input [31:0] input0,
    input [31:0] input1,
    input select,
    output [31:0] out
);

    assign out = select ? input1 : input0;

endmodule


module Branch_Adder(
    input [31:0] PC,
    input [31:0] offset,
    output reg [31:0] branch_target
);

always @(*) begin
    branch_target <= PC + (offset);
end

endmodule`

const RISCV_TOP = `module RISCV_Top(
    input clk, rst
);
//.......................................................................................................................//

wire [31:0] pc_out_wire, pc_next_wire, pc_wire, decode_wire, read_data1, regtomux, WB_wire, branch_target, immgen_wire, muxtoAlu, read_data_wire, WB_data_wire;
wire RegWrite, ALUSrc, MemRead, MemWrite, MemToReg, Branch, Zero;
wire [1:0] ALUOp_wire;
wire [3:0] ALUcontrol_wire;

//.......................................................................................................................//

// Program Counter
program_counter PC(.clk(clk), .rst(rst), .pc_in(pc_wire), .pc_out(pc_out_wire));

// PC Adder
pc_adder PC_Adder(.pc_in(pc_out_wire), .pc_next(pc_next_wire));

// PC Mux
pc_mux pc_mux(.pc_in(pc_next_wire), .pc_branch(branch_target), .pc_select(Branch&Zero), .pc_out(pc_wire));

// Instruction Memory
Instruction_Memory Instr_Mem(.rst(rst), .clk(clk), .read_address(pc_out_wire), .instruction_out(decode_wire));

// Register File
Register_File Reg_File(.rst(rst), .clk(clk), .RegWrite(RegWrite), .Rs1(decode_wire[19:15]), .Rs2(decode_wire[24:20]), .Rd(decode_wire[11:7]), .Write_data(WB_data_wire), .read_data1(read_data1), .read_data2(regtomux));

// Control Unit
main_control_unit Control_Unit(.opcode(decode_wire[6:0]), .RegWrite(RegWrite), .MemRead(MemRead), .MemWrite(MemWrite), .MemToReg(MemToReg), .ALUSrc(ALUSrc), .Branch(Branch), .ALUOp(ALUOp_wire));

// ALU_Control
ALU_Control ALU_Control(.funct3(decode_wire[14:12]), .funct7(decode_wire[31:25]), .ALUOp(ALUOp_wire), .ALUcontrol_Out(ALUcontrol_wire));

// ALU
ALU ALU(.A(read_data1), .B(muxtoAlu), .ALUcontrol_In(ALUcontrol_wire), .Result(WB_wire), .Zero(Zero));

// Immediate Generator
immediate_generator Imm_Gen(.instruction(decode_wire), .imm_out(immgen_wire));

// ALU Mux
MUX2to1 Imm_Mux(.input0(regtomux), .input1(immgen_wire), .select(ALUSrc), .out(muxtoAlu));

// Data Memory
Data_Memory Data_Mem(.clk(clk), .rst(rst), .MemRead(MemRead), .MemWrite(MemWrite), .address(WB_wire), .write_data(regtomux), .read_data(read_data_wire));

// WB Mux
MUX2to1_DataMemory WB_Mux(.input0(WB_wire), .input1(read_data_wire), .select(MemToReg), .out(WB_data_wire));

// Branch_Adder
Branch_Adder Branch_Adder(.PC(pc_out_wire), .offset(immgen_wire), .branch_target(branch_target));

endmodule`

export default function VlsiRiscV() {
  return (
    <DetailPage
        toc={toc}
        backTo="/projects"
        backLabel="Personal Projects"
        tag="Personal Project · VLSI / Digital Design"
        title="32-bit Custom RISC-V Processor — RTL to Physical Layout"
        heroImage={img('/images/vlsi-risc-v/die-layout-cover.svg')}
        software={['Verilog', 'Vivado', 'OpenROAD']}
        roles={['Designer']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              I'm designing a 32-bit custom RISC-V processor to drive a full-stack ASIC development
              flow, from architectural specification all the way through to physical layout. Rather
              than stopping at a working simulation, the goal is to carry a single design through every
              stage a real chip would go through before fabrication.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="rtl" className="project-section">
            <h3>RTL &amp; Simulation</h3>
            <p>
              The processor's datapath and control logic are written in Verilog, with HDL programming,
              simulation, and synthesis all carried out inside the Vivado environment. Working at the
              RTL level means every architectural decision, from instruction decode to the pipeline's
              control signals, has to be verified in simulation before it ever reaches the physical
              design stage. It's a single-cycle datapath: every instruction fetches, decodes, executes,
              accesses memory, and writes back within one clock period, which keeps the control logic
              simple at the cost of clock speed, exactly the kind of trade-off physical design (below)
              then has to work against.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="source" className="project-section">
            <h3>Source Code (Verilog)</h3>
            <p>
              The full single-cycle datapath, broken out module by module. Each block below is wired
              together in <code>RISCV_Top</code> at the bottom, which instantiates every module exactly
              once and connects them with the wires that make up the processor's data and control paths.
            </p>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Fetch Stage — Program Counter, PC Adder, PC Mux
            </h4>
            <p style={{ marginBottom: 8 }}>
              The processor's execution pointer. On every clock edge the PC register updates to the
              next instruction address; a dedicated adder keeps PC+4 ready for the normal sequential
              case, and a 2-to-1 mux swaps in the branch target instead whenever a taken branch says to.
            </p>
            <CodeBlock language="Verilog">{PROGRAM_COUNTER}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Instruction Memory
            </h4>
            <p style={{ marginBottom: 8 }}>
              The program ROM, hand-loaded here with one worked example of every RISC-V instruction
              format (R, I, L, S, B, U, and J-type) so the datapath can be verified against each
              encoding path independently.
            </p>
            <CodeBlock language="Verilog">{INSTRUCTION_MEMORY}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Register File
            </h4>
            <p style={{ marginBottom: 8 }}>
              The 32 general-purpose registers, pre-loaded with non-zero test values (except x0, which
              RISC-V hardwires to zero) so a waveform dump immediately shows whether each instruction
              read and wrote the correct operands.
            </p>
            <CodeBlock language="Verilog">{REGISTER_FILE}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Main Control Unit
            </h4>
            <p style={{ marginBottom: 8 }}>
              Decodes the 7-bit opcode into the control bundle (RegWrite, MemRead, MemWrite, MemToReg,
              ALUSrc, Branch, and a 2-bit ALUOp hint) that steers every mux and enable signal in the
              datapath for that instruction class.
            </p>
            <CodeBlock language="Verilog">{MAIN_CONTROL_UNIT}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Immediate Generator
            </h4>
            <p style={{ marginBottom: 8 }}>
              RISC-V scatters a 32-bit instruction's immediate bits across different fixed positions
              depending on format, specifically to let the register-file source fields (rs1, rs2) stay
              in the same place for every instruction. This module un-scrambles and sign-extends those
              bits back into a clean 32-bit value.
            </p>
            <CodeBlock language="Verilog">{IMMEDIATE_GENERATOR}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              ALU &amp; ALU Control
            </h4>
            <p style={{ marginBottom: 8 }}>
              The ALU does the actual arithmetic/logic and raises a Zero flag used by branch
              instructions; ALU_Control is its sub-decoder, combining the control unit's 2-bit ALUOp
              hint with funct3/funct7 to pick the exact operation (ADD, SUB, AND, OR, XOR, shifts, SLT).
            </p>
            <CodeBlock language="Verilog">{ALU_AND_CONTROL}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              Memory Stage — ALU Mux, Data Memory, Write-Back Mux, Branch Adder
            </h4>
            <p style={{ marginBottom: 8 }}>
              The ALU's second operand is muxed between a register value and the decoded immediate;
              Data_Memory is the system RAM for loads and stores; a second mux chooses between the ALU
              result and a loaded value for write-back; and a dedicated Branch_Adder computes the
              branch target (PC + offset) in parallel so it's ready the instant a branch is taken.
            </p>
            <CodeBlock language="Verilog">{MEMORY_AND_MUXES}</CodeBlock>

            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 24, marginBottom: 4 }}>
              RISCV_Top — Structural Wiring
            </h4>
            <p style={{ marginBottom: 8 }}>
              The top-level module that instantiates every block above exactly once and wires them
              together with explicit named connections, the physical chassis the rest of the design
              hangs off of.
            </p>
            <CodeBlock language="Verilog">{RISCV_TOP}</CodeBlock>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="physical" className="project-section">
            <h3>Physical Design</h3>
            <p>
              Once the RTL is verified, I harden the digital design into physical silicon using
              OpenROAD, an open-source RTL-to-GDSII toolchain. The physical design stage is built around
              two explicit optimization constraints: hitting a target clock frequency of 50 MHz and
              reducing area overhead by 15% relative to an unoptimized baseline. Those two goals pull in
              different directions, a tighter floorplan can hurt timing closure, so a meaningful part of
              the work is iterating on placement and routing constraints to satisfy both at once.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
            <h3>What I Learned</h3>
            <p>
              Carrying a processor design through the full RTL-to-GDS flow, rather than stopping at
              simulation, has been the clearest way to understand how architectural choices actually
              cash out in silicon. Decisions that look free in Verilog, like adding another pipeline
              stage or a wider register file, show up immediately as area and timing pressure once the
              design hits physical implementation in OpenROAD.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
