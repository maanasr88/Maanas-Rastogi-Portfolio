import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import DataTable from '../../components/DataTable'
import img from '../../img'

const toc = [
  { id: 'overview',   label: 'Overview' },
  { id: 'facility',   label: 'The MRC Facility' },
  { id: 'objectives', label: 'Research Objectives' },
  { id: 'approach',   label: 'Technical Approach' },
  { id: 'materials',  label: 'Substrates & Materials' },
  { id: 'next',       label: 'What’s Next' },
]

const specs = [
  { value: '10–20 hrs',  label: 'Lab Time / Week' },
  { value: 'Weekly',          label: 'MRC Usage' },
  { value: '3',               label: 'Researchers on Project' },
  { value: 'Electronics',     label: 'UT-MRC Category' },
]

export default function BanerjeeLab() {
  return (
    <DetailPage
      toc={toc}
      backTo="/experience"
      backLabel="Industry & Research Experience"
      tag="Banerjee Lab (Nanoelectronics & Novel Devices Lab) · UT Austin · Oct 2026 – Present"
      status="in-progress"
      title="Thin Film Growth, Dopant Phase Stabilization, and Device Characterization"
      heroImage={img('/images/banerjee-lab/wafer-characterization-cover.jpg')}
      heroStyle={{ backgroundPosition: 'center 38%' }}
      software={['Atomic Layer Deposition', 'X-ray Diffraction', 'Probe-Station Electrical Characterization', 'Cleanroom Processing']}
      roles={['Undergraduate Researcher']}
    >
      <ScrollReveal>
        <div id="overview" className="project-section">
          <h3>Overview</h3>
          <p>
            I recently joined the Banerjee Lab (the Nanoelectronics and Novel Devices Lab) at UT
            Austin, led by Prof. Sanjay Banerjee, as an undergraduate researcher on a project proposed
            through the UT Microelectronics Research Center (UT-MRC): <em>Thin Film Growth, Dopant
            Phase Stabilization, and Device Characterization</em>. I'm working alongside graduate
            researchers John Komoll and Luke Sloan on ferroelectric and high-k dielectric thin films,
            with weekly cleanroom and characterization time booked through the MRC facility.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="facility" className="project-section">
          <h3>The MRC Facility</h3>
          <p>
            BanerjeeLab is housed at the Microelectronics Research Center in the J. J. Pickle Research
            Campus in North Austin &mdash; home to a class-100/1000 nanofabrication cleanroom and
            extensive support facilities, funded by the NSF through the National Nanotechnology
            Coordinated Infrastructure (NNCI). Photos below are real equipment from the lab's own site
            and the shared UT-MRC equipment list, organized by where each tool fits in the process flow.
          </p>
          <figure className="project-image-single-fig">
            <img
              src={img('/images/banerjee-lab/mrc-building-campus.jpg')}
              alt="The Microelectronics Research Center building on the J.J. Pickle Research Campus"
              className="project-image-single"
              loading="lazy"
              style={{ maxHeight: 320, objectFit: 'cover' }}
            />
            <figcaption>The Microelectronics Research Center, home of BanerjeeLab.</figcaption>
          </figure>

          <h4 className="project-subheading">Deposition</h4>
          <p className="project-subheading-note">
            Every device starts as a stack of ultra-thin films built up one layer at a time. These
            tools are the different ways we grow or deposit those layers onto a wafer.
          </p>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/molecular-beam-epitaxy.jpg')} alt="Molecular Beam Epitaxy system" loading="lazy" />
              <figcaption><strong>Molecular Beam Epitaxy</strong>Grows ultra-pure crystal films one atomic layer at a time in a vacuum chamber &mdash; the gold standard for near-flawless, precisely controlled thin films.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/rpcvd-system.jpg')} alt="RPCVD system" loading="lazy" />
              <figcaption><strong>RPCVD</strong>Deposits silicon/germanium films from a reactive gas plasma at low temperature, growing crystalline layers without damaging what's already on the wafer.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/rtcvd-system.jpg')} alt="RTCVD system" loading="lazy" />
              <figcaption><strong>RTCVD</strong>Flash-heats the wafer with a 14 kW lamp during growth, giving tight control over the thickness and purity of silicon/germanium films.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/ald-savannah.jpg')} alt="ALD Cambridge NanoTech Savannah TM 200 system" loading="lazy" />
              <figcaption><strong>ALD &mdash; Cambridge NanoTech Savannah&trade; 200</strong>Builds films one atomic layer at a time by alternating gas pulses &mdash; our main tool for growing the Yttrium-doped HfO&#8322; dielectric with atomic-scale thickness control.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/ald-fiji.jpg')} alt="ALD Fiji system with remote plasma and ozone source" loading="lazy" />
              <figcaption><strong>ALD &mdash; Fiji</strong>A second atomic-layer-deposition system with plasma and ozone sources, used when a film needs an extra chemical push to fully react at each layer.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cha-ebeam-evaporator.jpg')} alt="CHA e-beam evaporator" loading="lazy" />
              <figcaption><strong>CHA #1 E-beam Evaporator</strong>Melts metal with an electron beam in vacuum and condenses it onto the wafer &mdash; how we deposit the metal electrodes above and below each device.</figcaption>
            </figure>
          </div>

          <h4 className="project-subheading">Thermal &amp; Patterning</h4>
          <p className="project-subheading-note">
            After a film is deposited, it needs heat to crystallize into a useful phase and precise
            etching to become an actual test structure instead of a blanket coating.
          </p>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/anneal-gate-oxide.jpg')} alt="MRL gate-oxide anneal furnace" loading="lazy" />
              <figcaption><strong>Anneal (Gate Oxide) &mdash; MRL</strong>Bakes the wafer at high temperature in a controlled gas atmosphere, which is what coaxes the deposited film into its ferroelectric crystal phase.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/xactic-etcher.jpg')} alt="Xactic XF2 reactive ion etcher" loading="lazy" />
              <figcaption><strong>Xactic XF2 Etcher</strong>Uses a reactive plasma to remove material with high precision, carving blanket films down into individual test-device patterns.</figcaption>
            </figure>
          </div>

          <h4 className="project-subheading">Characterization</h4>
          <p className="project-subheading-note">
            Once a device exists, we still have to prove what it actually is: what crystal phase
            formed, how smooth the surface is, and how it behaves electrically.
          </p>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/xrd-rigaku.jpg')} alt="XRD Rigaku SmartLab system" loading="lazy" />
              <figcaption><strong>XRD &mdash; Rigaku SmartLab</strong>Fires X-rays at the film and reads the diffraction pattern to identify which crystal phase actually formed &mdash; our main check that the ferroelectric phase took.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/afm-bruker-icon1.jpg')} alt="Atomic Force Microscope Bruker Icon" loading="lazy" />
              <figcaption><strong>AFM &mdash; Bruker Icon</strong>Drags a nanometer-scale tip across the surface to map it in 3D, showing how smooth or rough a film is down to atomic-scale bumps.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/afm-bruker-icon2.jpg')} alt="Atomic Force Microscope Bruker Icon, second unit" loading="lazy" />
              <figcaption><strong>AFM &mdash; Bruker Icon #2</strong>A second unit for the same nanometer-scale surface mapping, used when the first is booked by another project.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cascade-probe-station.jpg')} alt="Cascade Summit 11000 AP probe station" loading="lazy" />
              <figcaption><strong>Cascade Summit 11000 AP</strong>Lands fine metal probes directly on a device's electrodes to run electrical tests, from everyday DC measurements up to 67 GHz RF.</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cascade-attoguard-probestation.jpg')} alt="Summit 11000 AttoGuard Cascade probe station" loading="lazy" />
              <figcaption><strong>Summit 11000 AttoGuard</strong>A shielded, ultra-low-noise probe station for measuring very small currents and voltages without outside electrical interference.</figcaption>
            </figure>
          </div>

          <p style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Photos of the facility and equipment, from BanerjeeLab's own site and the shared UT-MRC
            equipment list &mdash; these are tools available at the MRC, not necessarily the specific
            instrument used at every step of this particular project.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="objectives" className="project-section">
          <h3>Research Objectives</h3>
          <p>
            The project centers on Yttrium-doped HfO<sub>2</sub> and superlattice thin films, and on
            getting those films to crystallize into the phase that actually makes them useful:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 1.9, fontSize: '0.95rem' }}>
            <li>Investigate thin film deposition, composition engineering, and crystalline phase evolution in ferroelectric and high-k dielectric thin films, focusing on Yttrium-doped HfO<sub>2</sub> and superlattice structures.</li>
            <li>Evaluate the role of Yttrium doping concentration and thermal annealing profiles in stabilizing the ferroelectric orthorhombic phase against the non-ferroelectric monoclinic/tetragonal phases.</li>
            <li>Study interface engineering and thin film integration directly on Germanium (Ge) substrates, including surface pre-treatment, native oxide desorption/passivation, and interfacial capacitance minimization.</li>
            <li>Fabricate and characterize test devices (MFM capacitors, metal-ferroelectric-insulator-semiconductor / MFIS stacks, and FeFET test structures on Ge/Si) to measure polarization switching, interface trap density, gate leakage, and endurance.</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="approach" className="project-section">
          <h3>Technical Approach</h3>
          <p>
            The process flow moves from surface preparation through deposition, annealing, patterning,
            and finally electrical characterization:
          </p>
          <DataTable
            columns={['Stage', 'Equipment / Method']}
            rows={[
              { cells: ['Surface Preparation', 'Chemical cleaning of silicon and germanium substrates on wet chemical benches.'] },
              { cells: ['Film Deposition', 'Atomic layer deposition for atomic-scale thickness and doping control of hafnium, zirconium, and yttrium oxides; physical vapor deposition sputtering for metal top/bottom electrodes.'] },
              { cells: ['Thermal Treatment', 'Rapid thermal annealing under nitrogen or forming-gas ambients to promote crystallization.'] },
              { cells: ['Patterning', 'Photolithography mask aligners with reactive ion etching or lift-off to define test pads.'] },
              { cells: ['Characterization', 'Ellipsometry for film thickness; X-ray diffraction and atomic force microscopy for structural/phase analysis; electrical probe stations with parameter analyzers for P-V hysteresis, C-V curves, and leakage current.'] },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="materials" className="project-section">
          <h3>Substrates &amp; Materials</h3>
          <p>
            Because this work introduces non-standard substrates and chemistries into the shared MRC
            cleanroom, the proposal specifies exactly what's involved so it can clear facility
            contamination-control review before any processing starts:
          </p>
          <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 1.9, fontSize: '0.95rem' }}>
            <li><strong>Substrates:</strong> Germanium wafers processed in cleanroom equipment, in compliance with facility contamination-control guidelines.</li>
            <li><strong>Materials &amp; precursors:</strong> Deposition precursors and targets containing hafnium oxide, zirconium oxide, yttrium oxide, and related rare-earth dopants, alongside electrode materials including titanium nitride, tantalum nitride, tungsten, and aluminum.</li>
            <li><strong>Chemicals:</strong> Standard hydrofluoric acid, buffered oxide etch, hydrogen peroxide, and mild deoxygenated rinses for surface cleaning and native-oxide removal on germanium.</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="next" className="project-section">
          <h3>What&rsquo;s Next</h3>
          <p>
            The project just started, with cleanroom time ramping up to 10–20 hours per week. My
            first stretch of work is on the surface-preparation and deposition stages: getting
            consistent native-oxide removal on the germanium substrates before film growth begins, and
            building out the atomic layer deposition recipes for the Yttrium-doped HfO<sub>2</sub>{' '}
            stack. Device-level characterization (polarization-voltage hysteresis, interface trap
            density, endurance) is the goal once a stable, phase-controlled film process is in hand.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
