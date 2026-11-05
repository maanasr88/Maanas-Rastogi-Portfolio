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
      heroImage={img('/images/banerjee-lab/mrc-building.jpg')}
      heroStyle={{ backgroundPosition: 'center 65%' }}
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

          <h4 className="project-subheading">Deposition</h4>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/molecular-beam-epitaxy.jpg')} alt="Molecular Beam Epitaxy system" loading="lazy" />
              <figcaption><strong>Molecular Beam Epitaxy</strong>UHV MBE with in-situ XPS, variable-temp STM/AFM, UPS, Auger XPS</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/rpcvd-system.jpg')} alt="RPCVD system" loading="lazy" />
              <figcaption><strong>RPCVD</strong>Si/Ge plasma-enhanced low-temperature epitaxial growth</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/rtcvd-system.jpg')} alt="RTCVD system" loading="lazy" />
              <figcaption><strong>RTCVD</strong>Si/Ge-compatible UHV growth, 14 kW lamp</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/ald-savannah.jpg')} alt="ALD Cambridge NanoTech Savannah TM 200 system" loading="lazy" />
              <figcaption><strong>ALD &mdash; Cambridge NanoTech Savannah&trade; 200</strong>Atomic layer deposition</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/ald-fiji.jpg')} alt="ALD Fiji system with remote plasma and ozone source" loading="lazy" />
              <figcaption><strong>ALD &mdash; Fiji</strong>Remote plasma &amp; ozone-assisted atomic layer deposition</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cha-ebeam-evaporator.jpg')} alt="CHA e-beam evaporator" loading="lazy" />
              <figcaption><strong>CHA #1 E-beam Evaporator</strong>Physical vapor deposition for metal electrodes</figcaption>
            </figure>
          </div>

          <h4 className="project-subheading">Thermal &amp; Patterning</h4>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/anneal-gate-oxide.jpg')} alt="MRL gate-oxide anneal furnace" loading="lazy" />
              <figcaption><strong>Anneal (Gate Oxide) &mdash; MRL</strong>Thermal annealing furnace, MER 1.756</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/xactic-etcher.jpg')} alt="Xactic XF2 reactive ion etcher" loading="lazy" />
              <figcaption><strong>Xactic XF2 Etcher</strong>Reactive ion etching, MER 1.748</figcaption>
            </figure>
          </div>

          <h4 className="project-subheading">Characterization</h4>
          <div className="project-image-grid equipment-grid">
            <figure>
              <img src={img('/images/banerjee-lab/xrd-rigaku.jpg')} alt="XRD Rigaku SmartLab system" loading="lazy" />
              <figcaption><strong>XRD &mdash; Rigaku SmartLab</strong>X-ray diffraction, MER 1.802</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/afm-bruker-icon1.jpg')} alt="Atomic Force Microscope Bruker Icon" loading="lazy" />
              <figcaption><strong>AFM &mdash; Bruker Icon</strong>Atomic force microscopy</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/afm-bruker-icon2.jpg')} alt="Atomic Force Microscope Bruker Icon, second unit" loading="lazy" />
              <figcaption><strong>AFM &mdash; Bruker Icon #2</strong>Atomic force microscopy, MER 1.728</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cascade-probe-station.jpg')} alt="Cascade Summit 11000 AP probe station" loading="lazy" />
              <figcaption><strong>Cascade Summit 11000 AP</strong>DC&ndash;RF probed measurements (HP 4156, Agilent E8361C PNA to 67 GHz)</figcaption>
            </figure>
            <figure>
              <img src={img('/images/banerjee-lab/cascade-attoguard-probestation.jpg')} alt="Summit 11000 AttoGuard Cascade probe station" loading="lazy" />
              <figcaption><strong>Summit 11000 AttoGuard</strong>Shared MRC probe station, MER 2.816</figcaption>
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
