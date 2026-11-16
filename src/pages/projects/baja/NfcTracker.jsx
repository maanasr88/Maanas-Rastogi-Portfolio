import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import StatRow from '../../../components/StatRow'
import DataTable from '../../../components/DataTable'
import { IconNfc } from '../../../components/Icons'
import img from '../../../img'

const toc = [
  { id: 'overview',   label: 'Overview' },
  { id: 'variants',   label: 'Board Revisions' },
  { id: 'display',    label: 'Display & Touch' },
  { id: 'pinmap',     label: 'ESP32-S3 Pin Map' },
  { id: 'status',     label: 'Status' },
]

const specs = [
  { value: '120 × 172 mm', label: 'Board Size' },
  { value: '2-Layer',       label: 'PCB Stackup' },
  { value: '4',             label: 'Design Revisions' },
  { value: 'KiCad 7',       label: 'Design Tool' },
]

export default function NfcTracker() {
  return (
    <DetailPage
      toc={toc}
      backTo="/baja"
      backLabel="All Baja work"
      tag="Longhorn Baja Racing · Electronics Team Tool"
      status="coming-soon"
      title="NFC Tracker — Shop Tap Station"
      icon={<IconNfc />}
      software={['KiCad 7', 'ESP32-S3', 'SPI', 'PCB Design']}
      roles={['Designer']}
    >
      <ScrollReveal>
        <div id="overview" className="project-section">
          <h3>Overview</h3>
          <p>
            A standalone NFC tap station for the shop: tap a tagged tool, part, or team member's card
            against the board's PN532 reader and its record pulls up right there on a 4.0&Prime; touch
            display, no phone or laptop needed at the bench. An ESP32-S3 drives the reader, the display,
            and a 5-way D-pad for menu navigation, with status LEDs for at-a-glance feedback.
          </p>
          <figure className="project-image-single-fig">
            <img
              src={img('/images/baja-racing/nfc-tracker/board-layout-render.jpg')}
              alt="NFC Tracker rev C KiCad PCB layout: NFC tap zone at top, 4.0 inch TFT touch display in the middle, 5-way D-pad and status LEDs at bottom left, and a plug-in ESP32-S3-DevKitC-1 socketed at bottom right"
              className="project-image-single"
              style={{ maxHeight: 560 }}
            />
            <figcaption>Rev C KiCad layout — tap zone, display, D-pad, and the socketed ESP32-S3 DevKit.</figcaption>
          </figure>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="variants" className="project-section">
          <h3>Board Revisions</h3>
          <p>
            Four revisions so far, each trading off assembly difficulty against cost. Rev C, the
            current revision, swaps a soldered-down microcontroller module for a plug-in dev kit,
            cutting the fine-pitch soldering out of the build entirely.
          </p>
          <DataTable
            columns={['Revision', 'Microcontroller', 'NFC Reader', 'Notes']}
            rows={[
              { cells: ['Rev A', 'ESP32-S3-WROOM-1 (soldered)', 'PN532 chip-down, PCB loop antenna', 'Onboard USB-C + AMS1117 regulator; 10× 0805 LED bar switched by 2N7002s'] },
              { cells: ['Rev A-THT', 'ESP32-S3-WROOM-1 (soldered)', 'PN532 chip-down, PCB loop antenna', 'Same as Rev A, with 2× 5 mm THT LEDs driven directly from GPIO'] },
              { cells: ['Rev B', 'ESP32-S3-WROOM-1 (soldered)', 'Off-the-shelf PN532 V3 module, cabled', 'High-brightness 5 mm LEDs from 5V via 2N7002 (green 91 Ω, red 150 Ω)'] },
              { cells: ['Rev C (current)', 'ESP32-S3-DevKitC-1 (plug-in, 2× 1×22 sockets)', 'Off-the-shelf PN532 V3 module, cabled', 'DevKit supplies 5V/3V3, USB programming, and reset/boot — no onboard USB-C, LDO, ESD, fuse, or power LED needed'], strong: true },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="display" className="project-section">
          <h3>Display &amp; Touch</h3>
          <p>
            The display is a Hosyond 4.0&Prime; ST7796S SPI TFT with XPT2046 resistive touch, mounted
            screen-up with its 14-pin header on the right edge and its SD-card pads (unused, no header
            fitted) on the left. Working out that orientation took comparing the module's own back
            silkscreen against a reference wiring diagram, since the header's as-manufactured pinout
            isn't obvious from the front. It's fixed correctly only on Rev C &mdash; Rev A/A-THT/B still
            carry the earlier, incorrect header order and shouldn't be built as-is.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="pinmap" className="project-section">
          <h3>ESP32-S3 Pin Map</h3>
          <p>
            The display, touch controller, and SD card share one SPI bus; the NFC reader runs on its
            own, separate bus so a card tap never has to wait behind a screen redraw.
          </p>
          <DataTable
            columns={['Function', 'Pins']}
            rows={[
              { cells: ['Display SPI (+ touch, SD)', 'SCK IO12 · MOSI IO11 · MISO IO13 · CS IO10 · DC IO9 · RST IO14 · BL IO21 · Touch CS IO47 · Touch IRQ IO48/IO39 (Rev C) · SD CS IO38/IO8 (Rev C)'] },
              { cells: ['NFC SPI (own bus)', 'SCK IO4 · MOSI IO5 · MISO IO6 · SS IO7 · IRQ IO15 · RST IO16'] },
              { cells: ['Status LEDs', 'Green IO17 · Red IO18 (active high)'] },
              { cells: ['D-pad', 'Up IO1 · Down IO2 · Left IO42 · Right IO41 · Select IO40 (active low, 10 kΩ pull-ups)'] },
              { cells: ['Reserved', 'IO35–37 (octal PSRAM, DevKit)'] },
            ]}
            note="Touch IRQ and SD CS pins were reassigned in Rev C to stay clear of the DevKit's onboard RGB LED pins."
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="status" className="project-section">
          <h3>Status</h3>
          <p>
            The schematic and pin map are settled through Rev C; what's left is confirming the display
            module's exact header-to-edge spacing by measurement (currently assumed at 3.0 mm, matching
            the mounting holes) before sending the board out for fabrication and assembly.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
