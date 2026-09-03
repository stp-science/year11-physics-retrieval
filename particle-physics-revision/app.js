(() => {
  "use strict";

  const STORAGE_KEY = "stp-particle-physics-revision-v1";
  const THEME_KEY = "stp-year11-physics-theme";

  const videos = {
    states: video("OTksau0_VoI", "Particle theory and states of matter", "Cognito", "Focus on particle arrangement, movement and changes of state."),
    transfer: video("Eizsm5V8c_c", "Conduction, convection and radiation", "Cognito", "A clear GCSE explanation of the three ways thermal energy is transferred."),
    shc: video("LUHGFLR2p8k", "Specific heat capacity and internal energy", "Cognito", "Links temperature change to Q = mcΔT and works through the calculation."),
    latent: video("VFwf1JldiJA", "Specific latent heat", "Cognito", "Explains fusion, vaporisation and Q = mL during a change of state."),
    atom: video("KwOHJbE4Tro", "Atomic structure and isotopes", "Cognito", "Focus on protons, neutrons, electrons and isotopes. Electron shells are extension material for this course."),
    decay: video("xpSBhUpBXic", "Nuclear equations", "Freesciencelessons", "Focus on the alpha- and beta-decay examples."),
  };

  const modules = {
    particle: {
      name: "Particle Model",
      number: "01",
      colour: "#6554c0",
      intro: "Use the particle model to explain solids, liquids, gases, internal energy, changes of state and heating or cooling curves.",
      lessons: [
        {
          title: "The particle model",
          body: `
            ${diagram("kinetic")}
            <p>The particle model says that all substances are made from tiny particles. We use it to explain things that are too small to see.</p>
            <ul>
              <li>Particles are always moving.</li>
              <li>The arrangement, spacing and movement of particles depend on the state.</li>
              <li>There are forces of attraction between particles.</li>
              <li>Particles collide with each other and with the walls of their container.</li>
            </ul>
            <div class="mistake"><strong>Common mistake:</strong> Particles do not expand when a substance is heated. Their motion and average separation change.</div>
          `,
        },
        {
          title: "Solids, liquids and gases",
          body: `
            ${diagram("states")}
            <div class="concept-grid">
              <div class="concept"><strong>Solid</strong><p>Closely packed in a regular arrangement. Particles vibrate about fixed positions.</p></div>
              <div class="concept"><strong>Liquid</strong><p>Closely packed but irregular. Particles move past one another.</p></div>
              <div class="concept"><strong>Gas</strong><p>Far apart and moving rapidly in random directions.</p></div>
            </div>
            <table class="mini-table"><thead><tr><th>State</th><th>Shape</th><th>Volume</th><th>Compressibility</th></tr></thead><tbody>
              <tr><td>Solid</td><td>Fixed</td><td>Fixed</td><td>Very difficult</td></tr>
              <tr><td>Liquid</td><td>Takes container shape</td><td>Fixed</td><td>Very difficult</td></tr>
              <tr><td>Gas</td><td>Fills container</td><td>Not fixed</td><td>Can be compressed</td></tr>
            </tbody></table>
            <div class="worked"><strong>Using melting and boiling points</strong><p>Compare the temperature with the substance's melting point and boiling point.</p>
              <ul>
                <li>If the temperature is <strong>below the melting point</strong>, the substance is solid.</li>
                <li>If it is <strong>between the melting point and boiling point</strong>, it is liquid.</li>
                <li>If it is <strong>above the boiling point</strong>, it is gas.</li>
                <li>At the melting or boiling point itself, a change of state can be taking place, so two states may be present.</li>
              </ul>
            </div>
            <div class="worked"><strong>Example</strong><p>A substance melts at -20 °C and boils at 85 °C. At 30 °C it is a liquid because 30 °C lies between the two temperatures.</p></div>
            ${videos.states}
          `,
        },
        {
          title: "Internal energy and changes of state",
          body: `
            ${diagram("changes")}
            <p><strong>Internal energy</strong> is the total kinetic energy and potential energy of all the particles in a system.</p>
            <ul>
              <li>Heating within one state usually increases average kinetic energy and temperature.</li>
              <li>During a change of state, energy changes particle separation and potential energy while temperature remains constant.</li>
            </ul>
            <table class="mini-table"><thead><tr><th>Change</th><th>From</th><th>To</th><th>Energy transfer</th></tr></thead><tbody>
              <tr><td>Melting</td><td>Solid</td><td>Liquid</td><td>Takes in energy</td></tr>
              <tr><td>Freezing</td><td>Liquid</td><td>Solid</td><td>Gives out energy</td></tr>
              <tr><td>Boiling / evaporation</td><td>Liquid</td><td>Gas</td><td>Takes in energy</td></tr>
              <tr><td>Condensation</td><td>Gas</td><td>Liquid</td><td>Gives out energy</td></tr>
              <tr><td>Sublimation</td><td>Solid</td><td>Gas</td><td>Takes in energy</td></tr>
              <tr><td>Condensation</td><td>Gas</td><td>Solid</td><td>Gives out energy</td></tr>
            </tbody></table>
            <div class="worked"><strong>Energy rule</strong><p>Changes toward a less ordered, more separated state need energy to be supplied. The reverse changes release energy to the surroundings.</p></div>
          `,
        },
        {
          title: "Heating and cooling curves",
          body: `
            ${diagram("stategraph")}
            <p>A <strong>heating or cooling curve</strong> shows how the temperature of a substance changes as energy is transferred to it or away from it.</p>
            <div class="concept-grid">
              <div class="concept"><strong>Sloping sections</strong><p>The substance stays in one state. Its temperature changes, so the average kinetic energy of its particles changes.</p></div>
              <div class="concept"><strong>Flat sections</strong><p>The substance is changing state. Its temperature stays constant, so the average kinetic energy of its particles stays constant.</p></div>
              <div class="concept"><strong>What happens to the energy?</strong><p>During a change of state, energy changes the particle arrangement and potential energy rather than raising or lowering the temperature.</p></div>
            </div>
            <table class="mini-table"><thead><tr><th>Flat section</th><th>Heating curve</th><th>Cooling curve</th></tr></thead><tbody>
              <tr><td>Melting/freezing point</td><td>Melting: solid → liquid</td><td>Freezing: liquid → solid</td></tr>
              <tr><td>Boiling/condensing point</td><td>Boiling: liquid → gas</td><td>Condensation: gas → liquid</td></tr>
            </tbody></table>
            <ul>
              <li>The temperature at a flat section is the <strong>melting/freezing point</strong> or the <strong>boiling/condensing point</strong>.</li>
              <li>On a heating curve, the first plateau is usually melting and the second is boiling.</li>
              <li>On a cooling curve, the reverse changes occur: condensation and freezing.</li>
              <li>If the heater supplies energy at a constant rate, a longer flat section means more energy was needed for that change of state.</li>
            </ul>
            <div class="worked"><strong>Exam tip</strong><p>If a question asks why the line is flat, say that energy is changing the <strong>potential energy and arrangement</strong> of the particles. Their average kinetic energy does not change, so the temperature stays constant.</p></div>
          `,
        },
      ],
    },
    thermal: {
      name: "Thermal Physics",
      number: "02",
      colour: "#e56b2f",
      intro: "Distinguish heat from temperature, connect temperature to particle motion, explain thermal transfer and calculate energy changes using specific heat capacity and latent heat.",
      lessons: [
        {
          title: "Heat and temperature",
          body: `
            ${diagram("temperature")}
            <p><strong>Heat</strong> is energy transferred from a hotter object to a colder object because there is a temperature difference.</p>
            <p><strong>Temperature</strong> tells us how hot or cold something is and, in the particle model, is linked to the <strong>average kinetic energy</strong> of its particles.</p>
            <div class="concept-grid">
              <div class="concept"><strong>Heat</strong><p>An energy transfer. It moves from higher temperature to lower temperature. Energy transferred is measured in joules (J).</p></div>
              <div class="concept"><strong>Temperature</strong><p>A measure linked to the average kinetic energy of particles. It is measured in °C or K.</p></div>
              <div class="concept"><strong>Internal energy</strong><p>The total kinetic and potential energy of all the particles in the system.</p></div>
            </div>
            <div class="worked"><strong>Key difference</strong><p>Two objects can have the same temperature but different internal energies because they may contain different amounts of material or be made from different substances.</p></div>
            <p>When two objects at different temperatures touch, energy is transferred by heating from the hotter object to the colder object until they reach the same temperature. This is called <strong>thermal equilibrium</strong>.</p>
            <div class="equation">temperature in K = temperature in °C + 273</div>
            <div class="worked"><strong>Example</strong><p>25 °C = 25 + 273 = 298 K. Absolute zero is 0 K, approximately -273 °C.</p></div>
            <div class="mistake"><strong>Common mistake:</strong> Heat and temperature are not the same thing. Heat is an energy transfer; temperature describes the thermal state of an object.</div>
          `,
        },
        {
          title: "Conduction, convection and radiation",
          body: `
            <div class="concept-grid">
              <div class="concept"><strong>Conduction</strong><p>Energy is passed between neighbouring particles. In metals, free electrons also transfer energy quickly, so metals are good thermal conductors.</p></div>
              <div class="concept"><strong>Convection</strong><p>Heating a liquid or gas makes it expand. The same mass occupies a larger volume, so its density decreases and it rises. Cooler, denser fluid sinks.</p></div>
              <div class="concept"><strong>Radiation</strong><p>Infrared electromagnetic waves transfer energy. Radiation does not need particles, so it can travel through a vacuum.</p></div>
            </div>

            <div class="support-visual-grid">
              <figure class="support-visual">
                <img loading="lazy" src="https://bam.files.bbci.co.uk/bam/live/content/zrwccmn/large" alt="BBC Bitesize conduction experiment using metal rods heated by a Bunsen burner">
                <figcaption><strong>Conduction in metals</strong><span>BBC Bitesize GCSE Science</span></figcaption>
              </figure>
              <figure class="support-visual">
                <img loading="lazy" src="https://ichef.bbci.co.uk/images/ic/976xn/p09vxnxl.png" alt="BBC Bitesize convection current showing hot less dense water rising and cooler denser water sinking">
                <figcaption><strong>Convection current in water</strong><span>BBC Bitesize GCSE Science</span></figcaption>
              </figure>
              <figure class="support-visual">
                <img loading="lazy" src="https://igcsepro.org/content/images/2025/04/Matt-black-shiny-surface-experiment-igcse-physics.png" alt="Radiation absorption experiment comparing a shiny surface and a dull black surface">
                <figcaption><strong>Infrared absorption</strong><span>Dull black absorbs more; shiny surfaces reflect more</span></figcaption>
              </figure>
              <figure class="support-visual">
                <img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vacuum%20Dewar%20Flask.svg?width=700" alt="Cross-section of a vacuum flask showing the insulated double-wall structure">
                <figcaption><strong>Vacuum flask</strong><span>Vacuum reduces conduction and convection; reflective surfaces reduce radiation</span></figcaption>
              </figure>
              <figure class="support-visual">
                <img loading="lazy" src="https://images.imagerenderer.com/images/artworkimages/mediumlarge/2/thermal-conduction-in-water-science-photo-library.jpg" alt="Boiling tube demonstration showing water boiling at the top while ice remains at the bottom">
                <figcaption><strong>Water is a poor conductor</strong><span>Heating at the top transfers energy downward only slowly</span></figcaption>
              </figure>
            </div>

            <div class="worked"><strong>Good and poor conductors</strong><p>Metals are good conductors. Materials such as plastic, wood and trapped air are poor conductors and are used as thermal insulators. Water is also a relatively poor conductor, which is why heating water from above transfers energy downward only slowly.</p></div>
            <table class="mini-table"><thead><tr><th>Surface</th><th>Infrared absorption</th><th>Infrared emission</th><th>Reflection</th></tr></thead><tbody>
              <tr><td>Dull black</td><td>Best absorber</td><td>Best emitter</td><td>Poor reflector</td></tr>
              <tr><td>Shiny / light</td><td>Poor absorber</td><td>Poor emitter</td><td>Good reflector</td></tr>
            </tbody></table>
            <div class="worked"><strong>Explaining convection fully</strong><p>Do not say that the particles themselves become less dense. Heating makes the fluid expand because the particles become more spread out. The fluid's density decreases, so that region rises and cooler, denser fluid moves in to replace it.</p></div>
            <div class="worked"><strong>Vacuum flask example</strong>
              <ul>
                <li><strong>Vacuum:</strong> there are no particles between the walls, so conduction is greatly reduced and convection cannot occur there.</li>
                <li><strong>Shiny/silvered surfaces:</strong> reflect infrared radiation and are poor emitters.</li>
                <li><strong>Plastic/cork stopper:</strong> a poor conductor that also prevents convection through the opening.</li>
                <li><strong>Outer case/supports:</strong> reduce direct contact and help limit conduction.</li>
              </ul>
            </div>
            ${videos.transfer}
          `,
        },
        {
          title: "Specific heat capacity",
          body: `
            ${diagram("shc")}
            <p>Specific heat capacity, <strong>c</strong>, is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).</p>
            <div class="equation">Q = mcΔT</div>
            <table class="mini-table"><tbody><tr><th>Q</th><td>energy transferred, J</td><th>m</th><td>mass, kg</td></tr><tr><th>c</th><td>specific heat capacity, J kg⁻¹ °C⁻¹</td><th>ΔT</th><td>temperature change, °C or K</td></tr></tbody></table>
            <div class="equation">c = Q ÷ (mΔT) &nbsp;&nbsp; ΔT = Q ÷ (mc) &nbsp;&nbsp; m = Q ÷ (cΔT)</div>
            <div class="worked"><strong>Worked example: find energy</strong><p>Heating 1.5 kg of water (c = 4200 J kg⁻¹ °C⁻¹) by 8 °C requires Q = 1.5 × 4200 × 8 = 50,400 J.</p></div>
            <div class="worked"><strong>Worked example: find specific heat capacity</strong><p>A 0.50 kg block receives 18,000 J and its temperature rises by 30 °C. c = 18,000 ÷ (0.50 × 30) = 1200 J kg⁻¹ °C⁻¹.</p></div>
            <div class="mistake"><strong>Check units:</strong> mass must be in kilograms and ΔT means the temperature change, not the final temperature.</div>
            ${videos.shc}
          `,
        },
        {
          title: "Mixing substances",
          body: `
            ${diagram("mixing")}
            <p>When a hot substance is mixed with a colder substance, thermal energy moves from hot to cold until both reach the same temperature. If no energy escapes:</p>
            <div class="equation">thermal energy lost by hot material = thermal energy gained by cold material</div>
            <p>For each material, calculate energy with Q = mcΔT. Use the final temperature to define the two temperature changes, then solve.</p>
            <div class="mistake"><strong>Check:</strong> The final temperature must lie between the two starting temperatures.</div>
          `,
        },
        {
          title: "Specific latent heat",
          body: `
            ${diagram("latent")}
            <p>Specific latent heat is the energy needed to change the state of 1 kg of a substance without changing its temperature.</p>
            <div class="equation">Q = mL</div>
            <ul>
              <li><strong>Specific latent heat of fusion:</strong> solid ↔ liquid.</li>
              <li><strong>Specific latent heat of vaporisation:</strong> liquid ↔ gas.</li>
              <li>Melting and boiling take in energy. Freezing and condensation give out energy.</li>
            </ul>
            <div class="worked"><strong>Worked example</strong><p>Melting 0.30 kg of a solid where L = 250,000 J kg⁻¹ requires Q = 0.30 × 250,000 = 75,000 J.</p></div>
            <div class="worked"><strong>Why steam can cause a worse burn</strong><p>Steam at 100 °C condenses on the skin. During condensation it releases its latent heat of vaporisation. The resulting hot water can then cool further and transfer even more energy to the skin.</p></div>
            <div class="worked"><strong>Multi-stage calculation</strong><p>If a liquid is first heated and then boiled, calculate each stage separately and add them:</p>
              <div class="equation">total energy = mcΔT + mL</div>
              <p>Example: 0.10 kg of water is heated from 25 °C to 100 °C and then vaporised. Using c = 4200 J kg⁻¹ °C⁻¹ and L = 2,260,000 J kg⁻¹: heating = 31,500 J; vaporising = 226,000 J; total = 257,500 J.</p>
            </div>
            ${videos.latent}
          `,
        },
      ],
    },
    nuclear: {
      name: "Nuclear Physics",
      number: "03",
      colour: "#17875f",
      intro: "Describe atoms and isotopes, compare alpha, beta and gamma radiation, explain penetration and ionisation, use nuclear equations and calculate half-life.",
      lessons: [
        {
          title: "Inside the atom",
          body: `
            ${diagram("atom")}
            <table class="mini-table"><thead><tr><th>Particle</th><th>Relative charge</th><th>Relative mass</th><th>Location</th></tr></thead><tbody>
              <tr><td>Proton</td><td>+1</td><td>1</td><td>Nucleus</td></tr><tr><td>Neutron</td><td>0</td><td>1</td><td>Nucleus</td></tr><tr><td>Electron</td><td>-1</td><td>Very small (about 1/1836)</td><td>Around the nucleus</td></tr>
            </tbody></table>
            <ul><li><strong>Atomic number, Z</strong> = number of protons.</li><li><strong>Mass number, A</strong> = protons + neutrons.</li><li>In a neutral atom, electrons = protons.</li></ul>
            <div class="equation">neutrons = mass number - atomic number</div>
            ${videos.atom}
          `,
        },
        {
          title: "The periodic table and isotopes",
          body: `
            <p>An element's position in the periodic table is determined by its atomic number, so every atom of one element has the same number of protons.</p>
            <p><strong>Isotopes</strong> are atoms of the same element with the same number of protons but different numbers of neutrons.</p>
            <figure class="isotope-source">
              <img loading="lazy" src="https://bam.files.bbci.co.uk/bam/live/content/z3tprwx/large" alt="BBC Bitesize table comparing hydrogen isotopes">
              <figcaption><strong>Hydrogen isotopes</strong><span>Image: BBC Bitesize GCSE Science</span></figcaption>
            </figure>
            <div class="worked"><strong>What the diagram shows</strong><p>Hydrogen-1, hydrogen-2 and hydrogen-3 each have 1 proton but different numbers of neutrons. They are isotopes of the same element because they have the same number of protons.</p></div>
          `,
        },
        {
          title: "Natural radioactivity, activity and risk",
          body: `
            ${diagram("radioactivity")}
            <p>Some nuclei are unstable. They give out radiation to become more stable. Radioactive decay is <strong>spontaneous</strong> and <strong>random</strong>.</p>
            <div class="concept-grid">
              <div class="concept"><strong>Activity</strong><p>The number of nuclear decays each second. The SI unit is the becquerel (Bq), where 1 Bq = 1 decay per second.</p></div>
              <div class="concept"><strong>Count rate</strong><p>The number of detections recorded by a detector each second or minute. It is a measured value and can be lower than the true activity.</p></div>
              <div class="concept"><strong>Random decay</strong><p>We cannot predict when one particular nucleus will decay, but large samples follow a predictable decay pattern.</p></div>
            </div>
            <div class="worked"><strong>Why ionising radiation can be harmful</strong><p>Ionising radiation can remove electrons from atoms in living cells. This can damage molecules and DNA, cause mutations and increase the risk of cancer.</p></div>
            <div class="worked"><strong>Internal vs external exposure</strong><p>An alpha source outside the body is usually less dangerous because alpha is stopped by skin. If an alpha-emitting substance is inhaled or swallowed, it can be much more dangerous because strongly ionising alpha radiation is then released inside the body close to living cells. Radioactive gases such as radon are an example.</p></div>
          `,
        },
        {
          title: "Alpha, beta and gamma radiation",
          body: `
            ${diagram("decay")}
            <table class="mini-table"><thead><tr><th>Radiation</th><th>What it is</th><th>Charge</th><th>Ionising</th><th>Penetrating</th></tr></thead><tbody>
              <tr><td><strong>Alpha (α)</strong></td><td>Helium nucleus: 2 protons + 2 neutrons</td><td>+2</td><td>Strongest</td><td>Lowest</td></tr>
              <tr><td><strong>Beta-minus (β)</strong></td><td>Fast electron emitted from the nucleus</td><td>-1</td><td>Medium</td><td>Medium</td></tr>
              <tr><td><strong>Gamma (γ)</strong></td><td>High-energy electromagnetic wave</td><td>0</td><td>Weakest</td><td>Highest</td></tr>
            </tbody></table>
            <div class="concept-grid">
              <div class="concept"><strong>Alpha penetration</strong><p>Alpha is strongly ionising, so it interacts with matter very often and loses its energy quickly. A sheet of paper or a few centimetres of air stops it.</p></div>
              <div class="concept"><strong>Beta penetration</strong><p>Beta is less ionising than alpha, so it travels further. A few millimetres of aluminium can stop it.</p></div>
              <div class="concept"><strong>Gamma penetration</strong><p>Gamma is weakly ionising, so it is less likely to interact with matter and can travel much further. Thick lead or concrete reduces it.</p></div>
            </div>
            <div class="worked"><strong>The key link</strong><p>The more strongly ionising a radiation is, the faster it loses energy as it travels through matter, so the less penetrating it is.</p></div>
            <div class="worked"><strong>Identifying radiation using absorbers</strong>
              <ul>
                <li>A large drop when paper or thin card is inserted shows that <strong>alpha</strong> was present.</li>
                <li>A further drop when aluminium is inserted shows that <strong>beta</strong> was present.</li>
                <li>Radiation that still reaches the detector through paper and aluminium, but is reduced by thick lead, indicates <strong>gamma</strong>.</li>
                <li>A source can emit more than one type, so compare how the count rate changes at each stage.</li>
              </ul>
            </div>
          `,
        },
        {
          title: "Nuclear equations",
          body: `
            <div class="concept-grid">
              <div class="concept"><strong>Alpha decay</strong><p>The nucleus loses 2 protons and 2 neutrons. Mass number decreases by 4 and atomic number decreases by 2.</p></div>
              <div class="concept"><strong>Beta-minus decay</strong><p>A neutron changes into a proton and an electron is emitted. Mass number stays the same and atomic number increases by 1.</p></div>
              <div class="concept"><strong>Gamma emission</strong><p>The nucleus loses excess energy as a gamma ray. Mass number and atomic number do not change.</p></div>
            </div>
            <div class="equation">²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He</div>
            <div class="equation">¹⁴₆C → ¹⁴₇N + ⁰₋₁e</div>
            <div class="equation">excited nucleus → same nucleus + γ</div>
            <div class="worked"><strong>Conservation rule</strong><p>Total mass number and total atomic number must balance on both sides of a nuclear equation.</p></div>
            <div class="worked"><strong>More than one decay</strong><p>Apply each decay one at a time. For example, after one alpha decay and then one beta-minus decay: mass number changes by -4 overall, while atomic number changes by -2 then +1, so the overall atomic-number change is -1.</p></div>
            ${videos.decay}
          `,
        },
        {
          title: "Half-life and decay graphs",
          body: `
            ${diagram("halflife")}
            <p><strong>Half-life</strong> is the time taken for the number of undecayed radioactive nuclei in a sample, or its activity/count rate, to fall to half its value.</p>
            <div class="concept-grid">
              <div class="concept"><strong>Reading a graph</strong><p>Choose a count rate, halve it, read across to the decay curve and then down to the time axis. The time difference is one half-life.</p></div>
              <div class="concept"><strong>Repeated halving</strong><p>After each half-life, half of the radioactive nuclei remain: 1, 1/2, 1/4, 1/8, 1/16 ...</p></div>
              <div class="concept"><strong>Shape of the graph</strong><p>Radioactive decay gives a curved exponential graph. It falls quickly at first and then more slowly, but each half-life takes the same amount of time.</p></div>
            </div>
            <div class="equation">number of half-lives = total time ÷ half-life</div>
            <div class="worked"><strong>Worked example</strong><p>A source has a half-life of 6 hours and an initial count rate of 720 counts/s. After 18 hours, 3 half-lives have passed: 720 → 360 → 180 → 90 counts/s.</p></div>
            <div class="worked"><strong>Working backwards</strong><p>If a sample falls from 640 g to 80 g, it has halved three times: 640 → 320 → 160 → 80. If this took 18 hours, the half-life is 18 ÷ 3 = 6 hours.</p></div>
            <table class="mini-table"><thead><tr><th>Half-lives elapsed</th><th>Fraction remaining</th><th>Percentage remaining</th></tr></thead><tbody>
              <tr><td>0</td><td>1</td><td>100%</td></tr>
              <tr><td>1</td><td>1/2</td><td>50%</td></tr>
              <tr><td>2</td><td>1/4</td><td>25%</td></tr>
              <tr><td>3</td><td>1/8</td><td>12.5%</td></tr>
              <tr><td>4</td><td>1/16</td><td>6.25%</td></tr>
            </tbody></table>
            <div class="worked"><strong>Graph skills</strong>
              <ul>
                <li>Plot points accurately using sensible, labelled axes and units.</li>
                <li>For radioactive decay, draw a <strong>smooth curve</strong> through the trend rather than joining every point with straight segments.</li>
                <li>To estimate a missing reading, interpolate from the smooth curve.</li>
                <li>To find half-life, choose an activity or count rate, halve it, use horizontal and vertical guide lines to read the two times, then find the time difference.</li>
              </ul>
            </div>
            <div class="worked"><strong>Practice dataset</strong><p>A different source gives 600, 426, 302, 214 and 151 counts/min at 0, 2, 4, 6 and 8 minutes. Plotting these would give a smooth decay curve. The data suggest a half-life of about 4 minutes because the count rate falls from about 600 to about 300 in that time.</p></div>
            <div class="mistake"><strong>Common mistake:</strong> The amount does not decrease by the same number each half-life. It decreases by the same <em>fraction</em>: one half.</div>
          `,
        },
      ],
    },
  };

  const checks = [
    q("p1","particle","In a solid, how do particles usually move?",["They travel freely in straight lines.","They vibrate about fixed positions.","They remain completely still.","They slide past one another."],1,"Solid particles vibrate about fixed positions."),
    q("p3","particle","What is internal energy?",["Only the kinetic energy of the fastest particle","The energy transferred by heating each second","The total kinetic and potential energy of all particles","The temperature multiplied by the mass"],2,"Internal energy is the total kinetic and potential energy of the particles."),
    q("p4","particle","Which change of state is gas directly to solid?",["Sublimation","Condensation","Melting","Freezing"],1,"In this course, gas changing directly to solid is called condensation."),
    q("p5","particle","During melting, what happens while the temperature stays constant?",["Particle kinetic energy steadily decreases","Energy changes particle separation and potential energy","All particles stop moving","The mass of the substance increases"],1,"The supplied energy changes arrangement and potential energy rather than temperature."),
    q("p6","particle","What does a flat section on a heating curve show?",["The substance is cooling rapidly","A change of state at constant temperature","The particles have stopped moving","The mass of the substance is increasing"],1,"During a change of state, temperature stays constant while energy changes particle arrangement and potential energy."),
    q("p7","particle","A substance melts at 12 °C and boils at 96 °C. What state is it in at 45 °C?",["Solid","Liquid","Gas","Changing directly from solid to gas"],1,"45 °C lies between the melting point and boiling point, so the substance is liquid."),
    q("p8","particle","Which pair of changes both give energy out to the surroundings?",["Melting and boiling","Freezing and condensation","Melting and sublimation","Boiling and condensation"],1,"Freezing and condensation release energy; melting and boiling require energy to be supplied."),
    q("t0","thermal","Which statement best defines heat?",["The temperature of an object","Energy transferred because of a temperature difference","The total kinetic energy of one particle","The energy stored only in hot objects"],1,"Heat is energy transferred from a hotter object to a colder object because of a temperature difference."),
    q("t1","thermal","What does temperature measure in the particle model?",["Total potential energy","Average kinetic energy of particles","Total internal energy","The number of particles"],1,"Temperature measures average particle kinetic energy."),
    q("t2","thermal","What temperature is 25 °C on the Kelvin scale?",["248 K","273 K","298 K","325 K"],2,"25 + 273 = 298 K."),
    q("t3","thermal","How much energy heats 2.0 kg of water by 10 °C if c = 4180 J kg⁻¹ °C⁻¹?",["836 J","8,360 J","41,800 J","83,600 J"],3,"Q = mcΔT = 2.0 × 4180 × 10 = 83,600 J."),
    q("t4","thermal","Which process can transfer thermal energy through a vacuum?",["Conduction only","Convection only","Infrared radiation","Conduction and convection"],2,"Electromagnetic radiation does not require particles."),
    q("t5","thermal","Why does temperature remain constant during a change of state?",["No energy is transferred","Energy changes particle potential energy and arrangement","The particles lose all kinetic energy","The thermometer stops working"],1,"Latent heat changes particle arrangement and potential energy."),
    q("t6","thermal","Which surface is the best absorber of infrared radiation?",["Shiny silver","Dull black","Glossy white","Transparent glass"],1,"Dull black surfaces are the best absorbers and emitters of infrared radiation."),
    q("t7","thermal","Why does heated water rise in a convection current?",["Its particles gain mass","The water becomes less dense as it expands","Its molecules become less dense","Gravity stops acting on it"],1,"Heating makes the water expand. The same mass occupies a larger volume, so the water becomes less dense and rises."),
    q("t8","thermal","A 0.40 kg block receives 9600 J and warms by 20 °C. What is its specific heat capacity?",["480 J kg⁻¹ °C⁻¹","960 J kg⁻¹ °C⁻¹","1200 J kg⁻¹ °C⁻¹","19,200 J kg⁻¹ °C⁻¹"],2,"c = Q ÷ (mΔT) = 9600 ÷ (0.40 × 20) = 1200 J kg⁻¹ °C⁻¹."),
    q("t9","thermal","Why can steam at 100 °C cause a more severe burn than liquid water at 100 °C?",["Steam has a higher temperature","Steam releases latent heat when it condenses","Steam has no internal energy","Water cannot transfer energy"],1,"Steam releases additional latent heat when it condenses on the skin."),
    q("n1","nuclear","What determines which element an atom is?",["Number of neutrons","Mass number","Number of protons","Number of electron shells"],2,"The atomic number, or number of protons, identifies the element."),
    q("n2","nuclear","How many neutrons are in carbon-14?",["6","8","14","20"],1,"Neutrons = mass number - atomic number = 14 - 6 = 8."),
    q("n3","nuclear","Which statement describes isotopes?",["Same neutrons, different protons","Same protons, different neutrons","Different protons and different electrons only","Same mass number, different atomic number"],1,"Isotopes have the same proton number but different neutron numbers."),
    q("n4","nuclear","What happens to a nucleus in alpha decay?",["A decreases by 4 and Z decreases by 2","A stays the same and Z increases by 1","A increases by 4 and Z increases by 2","A decreases by 1 and Z stays the same"],0,"An alpha particle contains 2 protons and 2 neutrons."),
    q("n5","nuclear","What happens to mass number A and atomic number Z in beta-minus decay?",["A decreases by 4; Z decreases by 2","A stays the same; Z increases by 1","A increases by 1; Z stays the same","A stays the same; Z decreases by 1"],1,"A neutron becomes a proton, so A is unchanged and Z increases by 1."),
    q("n6","nuclear","What happens to mass number and atomic number when a nucleus emits gamma radiation?",["Both decrease","Mass number decreases only","Atomic number increases only","Neither changes"],3,"Gamma emission removes energy from the nucleus but does not change the number of protons or neutrons."),
    q("n7","nuclear","Why is alpha radiation less penetrating than gamma radiation?",["Alpha travels more slowly because it has no energy","Alpha is more strongly ionising and loses energy more quickly in matter","Gamma has a larger mass","Gamma is stopped by paper"],1,"Alpha interacts strongly with matter and ionises frequently, so it loses energy quickly. Gamma is weakly ionising and travels further."),
    q("n8","nuclear","A source has a half-life of 3 hours and starts at 640 counts/min. What is its count rate after 9 hours?",["320 counts/min","160 counts/min","80 counts/min","40 counts/min"],2,"9 hours is 3 half-lives: 640 → 320 → 160 → 80 counts/min."),
    q("n9","nuclear","After three half-lives, what percentage of the original radioactive nuclei remain undecayed?",["50%","25%","12.5%","6.25%"],2,"After three half-lives the remaining fraction is 1/8, which is 12.5%."),
    q("n10","nuclear","A detector reading drops a lot when thin card is added, drops again with aluminium, and is reduced further by thick lead. What does this suggest?",["Only alpha is present","Only gamma is present","Alpha and beta only","Alpha, beta and gamma are present"],3,"The separate drops show alpha is stopped first, beta next, and penetrating gamma remains until thick shielding reduces it."),
    q("n11","nuclear","Why is an alpha-emitting substance especially dangerous if inhaled?",["Alpha passes easily through the body","It places strongly ionising radiation close to living cells","Alpha cannot ionise atoms","It turns into gamma inside the lungs"],1,"Inside the body, short-range but strongly ionising alpha radiation can damage nearby cells and DNA."),
  ];

  const examQuestions = [
    exam("pe2","particle",3,"Compare the particle arrangement and movement in a solid and a gas.",[
      mp("Solid particles are closely packed in a regular arrangement",[["solid","clos","regular"],["solid","closely packed"]]),
      mp("Solid particles vibrate about fixed positions",[["solid","vibrat","fixed"]]),
      mp("Gas particles are far apart and move rapidly in random directions",[["gas","far apart","random"],["gas","spread","random"],["gas","rapid","random"]]),
    ],"In a solid, particles are closely packed in a regular arrangement and vibrate about fixed positions. In a gas, particles are far apart and move rapidly in random directions."),
    exam("pe3","particle",3,"Explain why the temperature of a substance stays constant while it melts even though energy is being supplied.",[
      mp("The supplied energy changes the state or arrangement",[["energy","chang","state"],["energy","rearrang","particle"]]),
      mp("Energy weakens or overcomes forces between particles, increasing potential energy",[["overcome","force"],["weaken","force"],["potential energy","increas"]]),
      mp("Average kinetic energy does not increase, so temperature remains constant",[["kinetic energy","not increas"],["average kinetic","constant"],["temperature","constant","kinetic"]]),
    ],"The energy supplied is used to weaken the forces between particles and change their arrangement, increasing particle potential energy. It does not increase their average kinetic energy, so the temperature remains constant."),
    exam("pe4","particle",3,"Compare the arrangement and movement of particles in a liquid and a gas.",[
      mp("Liquid particles are close together",[["liquid","close"]]),
      mp("Liquid particles move past one another",[["liquid","move past"],["liquid","slide"]]),
      mp("Gas particles are far apart and move quickly in random directions",[["gas","far apart","random"],["gas","spread","quick"]]),
    ],"Liquid particles are close together but can move past one another. Gas particles are much further apart and move quickly in random directions."),
    exam("pe5","particle",3,"A solid is heated but does not melt. Explain what happens to its particles and internal energy.",[
      mp("The particles gain kinetic energy",[["gain","kinetic energy"],["kinetic energy","increase"]]),
      mp("The particles vibrate faster",[["vibrat","faster"],["vibrat","more"]]),
      mp("Its temperature and internal energy increase",[["temperature","increase","internal energy"],["internal energy","increase"]]),
    ],"The particles gain kinetic energy and vibrate faster about their fixed positions. The temperature rises, so the internal energy of the solid increases."),
    exam("pe6","particle",4,"Name and describe the changes when a solid changes directly into a gas and when a gas changes directly into a solid.",[
      mp("Solid to gas is sublimation",[["solid","gas","sublimation"]]),
      mp("Gas to solid is condensation",[["gas","solid","condensation"]]),
      mp("Sublimation requires energy to be supplied",[["sublimation","energy","supplied"],["solid","gas","heating"]]),
      mp("Condensation transfers energy away from the substance",[["condensation","energy","away"],["gas","solid","cool"]]),
    ],"A solid changing directly into a gas is sublimation and needs energy to be supplied. In this course, a gas changing directly into a solid is called condensation; energy is transferred away from the substance."),
    exam("pe7","particle",4,"Explain what the sloping and flat sections of a heating curve show in terms of the particles and their energy.",[
      mp("On a sloping section the substance remains in one state",[["sloping","one state"],["slope","same state"]]),
      mp("On a sloping section the average kinetic energy and temperature change",[["kinetic energy","temperature","increase"],["average kinetic","increase"]]),
      mp("A flat section shows a change of state at constant temperature",[["flat","change of state"],["plateau","change of state"],["flat","temperature","constant"]]),
      mp("During the flat section energy changes potential energy or particle arrangement rather than kinetic energy",[["potential energy","increase"],["particle","arrangement","energy"],["kinetic energy","not increase"]]),
    ],"On a sloping section the substance stays in one state and its particles gain average kinetic energy, so the temperature rises. On a flat section the substance changes state. The energy changes particle arrangement and potential energy instead of increasing average kinetic energy, so the temperature remains constant."),
    exam("te1","thermal",4,"Calculate the energy needed to heat 2.0 kg of water from 20 °C to 30 °C. The specific heat capacity of water is 4180 J kg⁻¹ °C⁻¹.",[
      mp("Uses Q = mcΔT",[["q","m","c"],["energy","mass","specific heat","temperature"]]),
      mp("Finds ΔT = 10 °C",[["10","temperature"],["30","20","10"]]),
      mp("Substitutes 2.0 × 4180 × 10",[["2","4180","10"]]),
      mp("Gives 83,600 J or 83.6 kJ",[["83600","j"],["83 600","j"],["83.6","kj"]]),
    ],"ΔT = 30 - 20 = 10 °C. Q = mcΔT = 2.0 × 4180 × 10 = 83,600 J (83.6 kJ)."),
    exam("te2","thermal",4,"Explain how a vacuum flask reduces thermal energy transfer from a hot drink.",[
      mp("The vacuum reduces conduction because there are very few particles",[["vacuum","conduction","particle"],["vacuum","reduce","conduction"]]),
      mp("The vacuum prevents convection because no fluid can circulate",[["vacuum","convection"],["no particle","convection"]]),
      mp("Shiny surfaces reduce infrared emission or absorption",[["shiny","infrared"],["reflect","radiation"],["shiny","radiation"]]),
      mp("The stopper reduces conduction",[["stopper","conduction"],["lid","insulat"]]),
    ],"The vacuum contains too few particles for conduction and prevents convection currents. Shiny surfaces reduce infrared radiation, while the insulating stopper reduces conduction through the top."),
    exam("te3","thermal",4,"Hot water is mixed with colder water in an insulated container. Describe how you would calculate their final temperature.",[
      mp("Thermal energy moves from the hotter water to the colder water",[["hot","cold","energy"],["hotter","colder","heat"]]),
      mp("Assumes energy lost by the hot water equals energy gained by the cold water",[["energy lost","energy gain"],["lost","hot","gain","cold"]]),
      mp("Uses Q = mcΔT for both samples",[["q","m","c"],["mc","temperature"]]),
      mp("Solves for a shared final temperature between the starting temperatures",[["final temperature","between"],["same temperature"],["shared temperature"]]),
    ],"Set the energy lost by the hot water equal to the energy gained by the cold water. Write Q = mcΔT for each sample using the same unknown final temperature, then solve. The result must lie between the two starting temperatures."),
    exam("te4","thermal",3,"Calculate the energy needed to melt 0.25 kg of ice. The specific latent heat of fusion of ice is 334,000 J kg⁻¹.",[
      mp("Uses Q = mL",[["q","m","l"],["energy","mass","latent heat"]]),
      mp("Substitutes 0.25 × 334,000",[["0.25","334000"],["0.25","334 000"]]),
      mp("Gives 83,500 J or 83.5 kJ",[["83500","j"],["83 500","j"],["83.5","kj"]]),
    ],"Q = mL = 0.25 × 334,000 = 83,500 J, or 83.5 kJ."),
    exam("te5","thermal",2,"Convert 35 °C to kelvin and state the temperature of absolute zero in kelvin.",[
      mp("35 °C is 308 K",[["308","k"]]),
      mp("Absolute zero is 0 K",[["absolute zero","0 k"],["0","kelvin"]]),
    ],"35 °C = 35 + 273 = 308 K. Absolute zero is 0 K."),
    exam("te6","thermal",4,"Explain how thermal energy is transferred through the metal base and the water in a saucepan.",[
      mp("Energy passes through the metal by conduction",[["metal","conduction"]]),
      mp("Particles in the metal vibrate and pass energy to neighbours",[["particle","vibrat","neighbour"],["collision","metal","energy"]]),
      mp("Water at the bottom warms, expands and becomes less dense",[["water","bottom","less dense"],["water","warm","expand"]]),
      mp("Warm water rises and cooler water sinks to form a convection current",[["warm","rise","cool","sink"],["convection current"]]),
    ],"Energy moves through the metal base by conduction as vibrating particles pass energy to neighbouring particles. Water at the bottom warms, expands and becomes less dense, so it rises. Cooler, denser water sinks, forming a convection current."),
    exam("ne1","nuclear",3,"State the numbers of protons, neutrons and electrons in a neutral carbon-14 atom. Carbon has atomic number 6.",[
      mp("6 protons",[["6","proton"]]),
      mp("8 neutrons",[["8","neutron"]]),
      mp("6 electrons",[["6","electron"]]),
    ],"Carbon-14 has 6 protons, 14 - 6 = 8 neutrons, and 6 electrons because the atom is neutral."),
    exam("ne2","nuclear",4,"Uranium-238 undergoes alpha decay. Explain how the nucleus changes and identify the daughter nucleus.",[
      mp("An alpha particle contains 2 protons and 2 neutrons",[["2 proton","2 neutron"],["helium","nucleus"]]),
      mp("Mass number decreases by 4",[["mass number","decreas","4"],["238","234"]]),
      mp("Atomic number decreases by 2",[["atomic number","decreas","2"],["92","90"]]),
      mp("The daughter nucleus is thorium-234",[["thorium 234"],["234","90","th"]]),
    ],"The nucleus emits an alpha particle containing 2 protons and 2 neutrons. Its mass number falls from 238 to 234 and its atomic number falls from 92 to 90, producing thorium-234."),
    exam("ne3","nuclear",4,"Carbon-14 undergoes beta-minus decay. Explain what happens inside the nucleus and identify the daughter nucleus.",[
      mp("A neutron changes into a proton",[["neutron","proton"]]),
      mp("An electron or beta particle is emitted",[["electron","emit"],["beta","emit"]]),
      mp("Mass number stays 14 while atomic number rises from 6 to 7",[["mass number","same","14"],["atomic number","6","7"]]),
      mp("The daughter nucleus is nitrogen-14",[["nitrogen 14"],["14","7","n"]]),
    ],"A neutron changes into a proton and an electron is emitted. The mass number remains 14, while the atomic number increases from 6 to 7, so the daughter nucleus is nitrogen-14."),
    exam("ne4","nuclear",3,"Explain why carbon-12 and carbon-14 are isotopes of the same element.",[
      mp("They both have 6 protons",[["both","6","proton"],["same","proton"]]),
      mp("They have different numbers of neutrons",[["different","neutron"]]),
      mp("Carbon-12 has 6 neutrons and carbon-14 has 8",[["12","6 neutron","14","8 neutron"],["6","8","neutron"]]),
    ],"Both atoms have 6 protons, so they are the same element. Carbon-12 has 6 neutrons, while carbon-14 has 8 neutrons, so they are different isotopes."),
    exam("ne5","nuclear",4,"Radium-226 has atomic number 88 and undergoes alpha decay. State the mass number and atomic number of the daughter nucleus and explain your answer.",[
      mp("An alpha particle contains 2 protons and 2 neutrons",[["2 proton","2 neutron"],["alpha","helium nucleus"]]),
      mp("Mass number decreases by 4",[["mass number","decrease","4"]]),
      mp("Daughter mass number is 222",[["222","mass number"],["226","222"]]),
      mp("Daughter atomic number is 86",[["86","atomic number"],["88","86"]]),
    ],"An alpha particle contains 2 protons and 2 neutrons. The mass number decreases by 4 to 222 and the atomic number decreases by 2 to 86."),
    exam("ne6","nuclear",4,"A nucleus has mass number 24 and atomic number 11. It undergoes beta-minus decay. Describe the change and give the two numbers for the daughter nucleus.",[
      mp("A neutron changes into a proton",[["neutron","proton"]]),
      mp("An electron or beta particle is emitted",[["electron","emit"],["beta","emit"]]),
      mp("Mass number stays 24",[["mass number","24","same"],["mass number","unchanged"]]),
      mp("Atomic number increases to 12",[["atomic number","12"],["11","12"]]),
    ],"A neutron changes into a proton and an electron is emitted. The mass number stays 24 and the atomic number increases from 11 to 12."),
    exam("te7","thermal",3,"Two beakers are both at 50 °C, but one contains much more water than the other. Explain what the equal temperature tells you, why their internal energies may differ, and what happens if one is placed in contact with an object at 20 °C.",[
      mp("Equal temperature means the particles have the same average kinetic energy",[["same","temperature","average kinetic"],["equal temperature","kinetic energy"]]),
      mp("The larger amount of water can have more internal energy because it contains more particles",[["more water","internal energy"],["more particles","internal energy"]]),
      mp("Energy is transferred by heating from the warmer water to the cooler object",[["energy","warm","cool"],["heat","hotter","colder"]]),
    ],"The equal temperature means the water particles have the same average kinetic energy. The larger amount of water can have more internal energy because it contains more particles. When placed against the 20 °C object, energy is transferred by heating from the warmer water to the cooler object."),
    exam("ne7","nuclear",4,"Explain why alpha radiation is strongly ionising but has low penetrating power, whereas gamma radiation is weakly ionising but has high penetrating power.",[
      mp("Alpha interacts strongly or frequently with matter",[["alpha","interact","matter"],["alpha","collision","frequent"]]),
      mp("Alpha loses energy quickly so is stopped over a short distance",[["alpha","lose","energy","quick"],["alpha","short distance","stopp"]]),
      mp("Gamma interacts less frequently with matter",[["gamma","interact","less"],["gamma","less likely","interact"]]),
      mp("Gamma loses energy more slowly and so penetrates further",[["gamma","penetrat","further"],["gamma","lose energy","slow"]]),
    ],"Alpha is strongly ionising because it interacts frequently with matter. It loses energy quickly, so it has a short range and low penetrating power. Gamma is much less likely to interact, so it is weakly ionising and can travel much further through matter."),
    exam("ne8","nuclear",4,"A radioactive source has an initial count rate of 960 counts/s and a half-life of 4 hours. Calculate the count rate after 12 hours and explain your method.",[
      mp("12 hours is 3 half-lives",[["12","3","half"],["12","4","3"]]),
      mp("After one half-life the count rate is 480 counts/s",[["480"]]),
      mp("After two half-lives the count rate is 240 counts/s",[["240"]]),
      mp("After three half-lives the count rate is 120 counts/s",[["120"]]),
    ],"12 ÷ 4 = 3 half-lives. The count rate halves three times: 960 → 480 → 240 → 120 counts/s. Therefore the final count rate is 120 counts/s."),
    exam("pe8","particle",3,"A material has a melting point of -8 °C and a boiling point of 72 °C. State its physical state at -20 °C, 25 °C and 90 °C, and explain how you decided.",[
      mp("At -20 °C it is solid",[["-20","solid"]]),
      mp("At 25 °C it is liquid",[["25","liquid"]]),
      mp("At 90 °C it is gas and the decision is made by comparing each temperature with the melting and boiling points",[["90","gas"],["compare","melting","boiling"]]),
    ],"Below -8 °C the material is solid, between -8 °C and 72 °C it is liquid, and above 72 °C it is gas. Therefore the three states are solid, liquid and gas."),
    exam("te8","thermal",4,"A 0.60 kg metal block receives 27,000 J of energy and its temperature rises by 45 °C. Calculate its specific heat capacity and state the correct unit.",[
      mp("Uses c = Q ÷ (mΔT)",[["c","q","m"],["27000","0.60","45"]]),
      mp("Multiplies 0.60 × 45 = 27",[["27"]]),
      mp("Calculates c = 1000",[["1000"]]),
      mp("Gives J kg⁻¹ °C⁻¹",[["j kg"],["kg","°c"],["kg","c-1"]]),
    ],"c = 27,000 ÷ (0.60 × 45) = 1000 J kg⁻¹ °C⁻¹."),
    exam("te9","thermal",4,"Explain why a dull black solar collector warms more effectively than a shiny metal one, and explain how a plastic handle reduces the chance of a burn.",[
      mp("Dull black surfaces absorb infrared radiation well",[["black","absorb","infrared"],["dull black","radiation"]]),
      mp("Shiny surfaces reflect more infrared and are poor absorbers",[["shiny","reflect"],["shiny","poor absorber"]]),
      mp("Plastic is a poor thermal conductor or an insulator",[["plastic","poor conductor"],["plastic","insulator"]]),
      mp("So less thermal energy is conducted to the hand",[["less","energy","hand"],["reduce","conduction"]]),
    ],"A dull black surface is a very good absorber of infrared radiation, whereas a shiny surface reflects more and absorbs less. Plastic is a poor thermal conductor, so it reduces the rate at which energy is conducted to the user's hand."),
    exam("te10","thermal",4,"A 0.12 kg liquid is heated from 30 °C to its boiling point of 90 °C and then completely vaporised. Its specific heat capacity is 2500 J kg⁻¹ °C⁻¹ and its specific latent heat of vaporisation is 1.8 × 10⁶ J kg⁻¹. Calculate the total energy required.",[
      mp("Calculates heating energy using mcΔT",[["0.12","2500","60"],["18000"]]),
      mp("Heating energy is 18,000 J",[["18000"]]),
      mp("Calculates vaporising energy using mL = 216,000 J",[["216000"],["0.12","1.8"]]),
      mp("Adds the stages to obtain 234,000 J",[["234000"]]),
    ],"Heating: Q = 0.12 × 2500 × 60 = 18,000 J. Vaporising: Q = 0.12 × 1.8 × 10⁶ = 216,000 J. Total = 234,000 J."),
    exam("ne9","nuclear",4,"A source is tested with three absorbers. Paper causes a large fall in count rate, aluminium causes a further fall, and thick lead reduces the remaining count rate. Explain what this tells you about the radiation emitted.",[
      mp("The drop with paper shows alpha radiation is present",[["paper","alpha"]]),
      mp("The further drop with aluminium shows beta radiation is present",[["aluminium","beta"]]),
      mp("The radiation remaining after aluminium indicates gamma is present",[["gamma","remain"],["gamma","aluminium"]]),
      mp("Thick lead reduces gamma because gamma is the most penetrating",[["lead","gamma"],["gamma","penetrating"]]),
    ],"Paper removing part of the count shows alpha is present. A further decrease with aluminium shows beta is also present. Radiation still reaching the detector after aluminium is gamma, which is more penetrating and is reduced by thick lead."),
    exam("ne10","nuclear",4,"A nucleus has mass number 212 and atomic number 84. It emits one alpha particle and then one beta-minus particle. Determine the final mass number and atomic number, showing the effect of each decay.",[
      mp("After alpha, mass number becomes 208",[["208"]]),
      mp("After alpha, atomic number becomes 82",[["82"]]),
      mp("Beta-minus leaves mass number at 208",[["beta","208"],["mass","same"]]),
      mp("Beta-minus increases atomic number to 83",[["83"]]),
    ],"Alpha decay changes A by -4 and Z by -2, giving A = 208 and Z = 82. Beta-minus leaves A unchanged and increases Z by 1, giving final values A = 208 and Z = 83."),
    exam("ne11","nuclear",4,"A radioactive sample falls from 480 counts/min to about 60 counts/min in 21 minutes. Calculate its half-life and explain the halving steps.",[
      mp("480 to 240 is one half-life",[["480","240"]]),
      mp("240 to 120 is the second half-life",[["240","120"]]),
      mp("120 to 60 is the third half-life",[["120","60"]]),
      mp("21 minutes ÷ 3 gives a half-life of 7 minutes",[["7","minute"],["21","3"]]),
    ],"480 → 240 → 120 → 60 is three half-lives. Therefore the half-life is 21 ÷ 3 = 7 minutes."),
    exam("ne12","nuclear",3,"A radioactive gas is inhaled and emits alpha radiation inside the lungs. Explain why this can increase the person's health risk.",[
      mp("Alpha radiation is strongly ionising",[["alpha","strong","ionis"]]),
      mp("Ionisation can damage cells or DNA and cause mutations",[["damage","dna"],["damage","cell"],["mutation"]]),
      mp("Because the source is inside the body, the short-range alpha radiation is released close to living tissue",[["inside","body"],["close","cell"],["inhaled","tissue"]]),
    ],"Alpha radiation is strongly ionising. If the source is inside the lungs, the alpha particles deposit their energy close to living cells, where ionisation can damage DNA, cause mutations and increase cancer risk."),
  ];

  const gameData = {
    particle: {
      title: "Space Invaders", colour: "#6554c0", icon: "👾", unlock: 3,
      description: "Defend the planet. Move, shoot and clear wave after wave of invaders."
    },
    thermal: {
      title: "Breakout", colour: "#e56b2f", icon: "▦", unlock: 7,
      description: "Keep the ball in play and smash every brick for the highest score."
    },
    nuclear: {
      title: "Snake", colour: "#17875f", icon: "◉", unlock: 12,
      description: "Classic Snake. Grab the food, grow longer and avoid crashing."
    },
  };

  let progress = loadProgress();
  const state = { view: "learn", module: "particle", checkIndex: 0, checkAnswered: null, examId: "pe2", activeGame: null, gameIndex: 0, gameScore: 0, gameLives: 3, gameTime: 0, gamePosition: 1, reactorA: 0, reactorZ: 0 };
  let arcadeFrame = null;
  let arcadeInterval = null;
  let arcadeTimeout = null;
  let arcadeRun = 0;
  let arcadeKeydown = null;
  let arcadeKeyup = null;
  const arcadeKeys = {};
  const panel = document.querySelector("#content-panel");
  const xpTotal = document.querySelector("#xp-total");
  const progressBar = document.querySelector("#progress-bar");
  const progressPercent = document.querySelector("#progress-percent");
  const nextUnlock = document.querySelector("#next-unlock");
  const gamesBadge = document.querySelector("#games-badge");
  const themeToggle = document.querySelector("#theme-toggle");

  function video(id, title, channel, note) {
    return `<div class="video-card"><div class="video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${id}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-copy"><h5>${title}</h5><p><strong>${channel}</strong></p><p>${note}</p><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Open on YouTube ↗</a></div></div>`;
  }
  function diagram(type) {
    const images = {
      kinetic: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zv7y4wx/large",
        alt:"BBC Bitesize particle model comparing solid, liquid and gas particles",
        caption:"Particle arrangement and movement in solids, liquids and gases"
      },
      states: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zv7y4wx/large",
        alt:"BBC Bitesize diagram showing particles in solids, liquids and gases",
        caption:"The particle model for solids, liquids and gases"
      },
      changes: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zqjs8mn/large",
        alt:"BBC Bitesize changes of state diagram showing melting, freezing, boiling, condensation and sublimation",
        caption:"Changes of state"
      },
      stategraph: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zttrmsg/large",
        alt:"BBC Bitesize heating curve with flat sections at melting and boiling",
        caption:"Heating curve showing changes of state"
      },
      temperature: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zxxb7p3/large",
        alt:"BBC Bitesize diagram of water being heated and particles moving faster",
        caption:"Heating increases the energy of the particles"
      },
      transfer: {
        urls:[
          "https://bam.files.bbci.co.uk/bam/live/content/ztwngk7/large",
          "https://bam.files.bbci.co.uk/bam/live/content/zhjsr82/large",
          "https://bam.files.bbci.co.uk/bam/live/content/zpqfcdm/large"
        ],
        alt:"BBC Bitesize sequence showing conduction through a metal",
        caption:"Conduction through a metal"
      },
      shc: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/ztdp97h/medium",
        alt:"BBC Bitesize specific heat capacity practical apparatus with thermometer beakers and stopwatch",
        caption:"Specific heat capacity practical setup"
      },
      mixing: null,
      latent: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zttrmsg/large",
        alt:"BBC Bitesize heating curve showing constant temperature during changes of state",
        caption:"Heating curve and latent heat"
      },
      atom: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/z8vbw6f/large",
        alt:"BBC Bitesize atomic structure diagram showing protons, neutrons and electrons",
        caption:"Structure of an atom"
      },
      radioactivity: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/z3rmb82/large",
        alt:"BBC Bitesize graph showing the stability of nuclei",
        caption:"Nuclear stability"
      },
      decay: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/zghcjxs/large",
        alt:"BBC Bitesize diagram comparing the penetrating power of alpha, beta and gamma radiation",
        caption:"Penetrating power of alpha, beta and gamma radiation"
      },
      halflife: {
        url:"https://bam.files.bbci.co.uk/bam/live/content/ztyxy4j/large",
        alt:"BBC Bitesize radioactive decay graph used to determine half-life",
        caption:"Using a radioactive decay graph to determine half-life"
      }
    };
    const item=images[type];
    if(!item)return "";
    const media=item.urls
      ? `<div class="source-image-strip">${item.urls.map((url,i)=>`<img loading="lazy" src="${url}" alt="${item.alt} step ${i+1}">`).join("")}</div>`
      : `<img loading="lazy" src="${item.url}" alt="${item.alt}">`;
    return `<figure class="info-diagram sourced-diagram">${media}<figcaption><strong>${item.caption}</strong><span>Image: BBC Bitesize GCSE Science</span></figcaption></figure>`;
  }

  function q(id,module,question,options,correct,explanation){ return {id,module,question,options,correct,explanation}; }
  function mp(label,tests){ return {label,tests}; }
  function exam(id,module,marks,question,points,model){ return {id,module,marks,question,points,model}; }
  function loadProgress(){
    try { const data=JSON.parse(localStorage.getItem(STORAGE_KEY)); return data && typeof data==="object" ? {earned:[],examBest:{},visited:[],gameBest:{},...data} : {earned:[],examBest:{},visited:[],gameBest:{}}; }
    catch { return {earned:[],examBest:{},visited:[],gameBest:{}}; }
  }
  function saveProgress(){ try { localStorage.setItem(STORAGE_KEY,JSON.stringify(progress)); } catch {} updateProgress(); }
  function xp(){ return progress.earned.length + Object.values(progress.examBest).reduce((a,b)=>a+Number(b||0),0); }

  function masteredQuickChecks(){
    return checks.filter(item=>progress.earned.includes(item.id)).length;
  }
  function masteredExamQuestions(){
    return examQuestions.filter(item=>Number(progress.examBest[item.id]||0)>=item.marks).length;
  }
  function masteryStatus(){
    const quickDone=masteredQuickChecks();
    const examDone=masteredExamQuestions();
    const quickTotal=checks.length;
    const examTotal=examQuestions.length;
    return {
      quickDone, examDone, quickTotal, examTotal,
      done:quickDone+examDone,
      total:quickTotal+examTotal,
      complete:quickDone===quickTotal && examDone===examTotal
    };
  }
  function awardCheck(id){
    if(!progress.earned.includes(id)){
      progress.earned.push(id);
      saveProgress();
      toast("Correct — Quick Check mastered!");
    }
  }
  function updateProgress(){
    const score=xp();
    xpTotal.textContent=score;

    const mastery=masteryStatus();
    const lessonsVisited=new Set(progress.visited).size;
    const lessonTotal=Object.values(modules).reduce((s,m)=>s+m.lessons.length,0);
    const completed=lessonsVisited+mastery.done;
    const total=lessonTotal+mastery.total;
    const percent=Math.min(100,Math.round(completed/total*100));
    progressBar.style.width=`${percent}%`;
    progressPercent.textContent=`${percent}%`;

    gamesBadge.textContent=mastery.complete ? "3/3" : "0/3";
    if(mastery.complete){
      nextUnlock.textContent="All Quick Checks and exam questions mastered — arcade unlocked!";
    } else {
      const quickLeft=mastery.quickTotal-mastery.quickDone;
      const examLeft=mastery.examTotal-mastery.examDone;
      const parts=[];
      if(quickLeft) parts.push(`${quickLeft} Quick Check${quickLeft===1?"":"s"}`);
      if(examLeft) parts.push(`${examLeft} exam question${examLeft===1?"":"s"}`);
      nextUnlock.textContent=`Master ${parts.join(" and ")} to unlock the arcade`;
    }
  }
  function toast(message){ const old=document.querySelector(".toast"); old?.remove(); const el=document.createElement("div"); el.className="toast"; el.textContent=message; document.body.append(el); setTimeout(()=>el.remove(),2400); }

  function render(){
    document.querySelectorAll(".mode-tab").forEach(b=>b.classList.toggle("active",b.dataset.view===state.view));
    document.querySelectorAll(".module-button").forEach(b=>b.classList.toggle("active",b.dataset.module===state.module));
    panel.style.setProperty("--module",modules[state.module].colour);
    if(state.view==="learn") renderLearn(); else if(state.view==="check") renderCheck(); else if(state.view==="exam") renderExam(); else renderGames();
    updateProgress();
  }

  function heading(title,intro,number=modules[state.module].number){ return `<div class="section-heading"><div><h3>${title}</h3><p>${intro}</p></div><span class="module-number">${number}</span></div>`; }
  function knowledgeSummary(key){
    const items={
      particle:[["Particle model","Arrangement and movement explain the three states."],["State from data","Use melting and boiling points to identify whether a substance is solid, liquid or gas."],["Internal energy","Total kinetic and potential energy of the particles."],["State changes","Know the changes and whether energy is taken in or given out."],["Heating curves","Slopes show temperature change; flat sections show a change of state at constant temperature."]],
      thermal:[["Heat","Energy transferred from hotter to colder because of a temperature difference."],["Temperature","Linked to the average kinetic energy of particles."],["Conduction & insulation","Know good and poor conductors, including metals, plastics and water."],["Convection","Explain expansion, density change, rising warm fluid and sinking cool fluid."],["Infrared","Dull black = good absorber/emitter; shiny surfaces = good reflectors."],["Specific heat capacity","Use and rearrange Q = mcΔT."],["Latent heat","Use Q = mL and combine heating + state-change stages when needed."]],
      nuclear:[["The atom","Read isotope notation and calculate protons, neutrons and electrons."],["Activity","Know activity, count rate and the random nature of decay."],["Radiation","Identify alpha, beta and gamma and compare ionising and penetrating power."],["Absorbers","Use paper/card, aluminium and lead results to identify radiation."],["Decay","Apply alpha, beta-minus and gamma changes, including sequential decays."],["Half-life","Calculate repeated halving, percentages and read half-life from decay graphs."],["Health effects","Ionisation can damage cells and DNA; internal alpha sources are especially hazardous."]],
    };
    return `<section class="knowledge-summary"><div class="summary-title"><span>KNOWLEDGE ORGANISER</span><strong>Must know</strong></div><div class="summary-grid">${items[key].map(([title,text])=>`<div><strong>${title}</strong><p>${text}</p></div>`).join("")}</div></section>`;
  }
  function renderLearn(){
    const m=modules[state.module];
    panel.innerHTML=heading(m.name,m.intro)+knowledgeSummary(state.module)+`<div class="lesson-grid">${m.lessons.map((l,i)=>`<article class="lesson-card open"><button class="lesson-toggle" data-lesson="${i}" type="button" aria-expanded="true"><span class="lesson-title"><b>${String(i+1).padStart(2,"0")}</b>${l.title}</span><span class="chevron" aria-hidden="true">⌄</span></button><div class="lesson-body">${l.body}</div></article>`).join("")}</div>`;
    panel.querySelectorAll(".lesson-toggle").forEach(button=>button.addEventListener("click",()=>{
      const card=button.closest(".lesson-card"); const open=!card.classList.contains("open"); card.classList.toggle("open",open); button.setAttribute("aria-expanded",String(open));
      if(open){ const key=`${state.module}:${button.dataset.lesson}`; if(!progress.visited.includes(key)){ progress.visited.push(key); saveProgress(); } }
    }));
  }

  function moduleChecks(){ return checks.filter(item=>item.module===state.module); }
  function renderCheck(){
    const pool=moduleChecks(); state.checkIndex=Math.min(state.checkIndex,pool.length-1); const item=pool[state.checkIndex];
    panel.innerHTML=heading("Quick Check",`Answer without looking back. Correct answers earn 1 XP the first time you solve them.`,"?")+`<div class="check-shell"><article class="question-card"><div class="question-meta"><span>${modules[state.module].name}</span><span>Question ${state.checkIndex+1} of ${pool.length}</span></div><h4>${item.question}</h4><div class="option-list">${item.options.map((o,i)=>`<button class="option-button" data-option="${i}" type="button" ${state.checkAnswered!==null?"disabled":""}><span class="option-letter">${"ABCD"[i]}</span><span>${o}</span></button>`).join("")}</div><div id="check-feedback"></div><div class="control-row"><button class="secondary-button" id="check-prev" type="button" ${state.checkIndex===0?"disabled":""}>← Previous</button><button class="primary-button" id="check-next" type="button">${state.checkIndex===pool.length-1?"Start again":"Next →"}</button></div></article></div>`;
    if(state.checkAnswered!==null) showCheckFeedback(item);
    panel.querySelectorAll(".option-button").forEach(button=>button.addEventListener("click",()=>{ state.checkAnswered=Number(button.dataset.option); if(state.checkAnswered===item.correct) awardCheck(item.id); renderCheck(); }));
    document.querySelector("#check-prev").addEventListener("click",()=>{state.checkIndex--;state.checkAnswered=null;renderCheck();});
    document.querySelector("#check-next").addEventListener("click",()=>{state.checkIndex=state.checkIndex===pool.length-1?0:state.checkIndex+1;state.checkAnswered=null;renderCheck();});
  }
  function showCheckFeedback(item){
    panel.querySelectorAll(".option-button").forEach((b,i)=>{ if(i===item.correct)b.classList.add("correct"); else if(i===state.checkAnswered)b.classList.add("incorrect"); });
    const right=state.checkAnswered===item.correct;
    const mastered=progress.earned.includes(item.id);
    document.querySelector("#check-feedback").innerHTML=`<div class="feedback-box ${right?"good":"review"}"><strong>${right?"Correct — mastered":mastered?"Already mastered — but this attempt needs another go":"Not yet — try this one again later"}</strong><br>${item.explanation}${right?"":"<br><span class=\"provisional\">An incorrect attempt does not block you. Return to this question and get it correct to master it.</span>"}</div>`;
  }

  function moduleExams(){ return examQuestions.filter(item=>item.module===state.module); }
  function renderExam(){
    const pool=moduleExams(); if(!pool.some(q=>q.id===state.examId)) state.examId=pool[0].id; const item=pool.find(q=>q.id===state.examId);
    panel.innerHTML=heading("Exam Practice","Write a complete answer, then check which marking points you included.","✎")+`<div class="exam-shell"><div class="exam-picker">${pool.map((q,i)=>{const done=Number(progress.examBest[q.id]||0)>=q.marks;return `<button data-exam="${q.id}" class="${q.id===item.id?"active":""} ${done?"mastered":""}" type="button">${done?"✓ ":""}Question ${i+1}</button>`;}).join("")}</div><article class="question-card"><div class="question-meta"><span>${modules[state.module].name}</span><span class="mark-badge">${item.marks} marks</span></div><h4>${item.question}</h4><textarea class="answer-input" id="exam-answer" placeholder="Write your answer here..." aria-label="Your exam answer"></textarea><div class="control-row"><button class="primary-button" id="mark-answer" type="button">Check my answer</button><button class="secondary-button" id="clear-answer" type="button">Clear</button></div><div id="marker-output"></div></article><p class="provisional">This gives an estimated mark by checking for key physics ideas. Always compare your answer with the model answer.</p></div>`;
    panel.querySelectorAll("[data-exam]").forEach(b=>b.addEventListener("click",()=>{state.examId=b.dataset.exam;renderExam();}));
    document.querySelector("#mark-answer").addEventListener("click",()=>markExam(item)); document.querySelector("#clear-answer").addEventListener("click",()=>{document.querySelector("#exam-answer").value="";document.querySelector("#marker-output").innerHTML="";});
  }
  function normalise(text){ return text.toLowerCase().replace(/[×*]/g," ").replace(/[⁻−–—]/g,"-").replace(/[,()=:]/g," ").replace(/\s+/g," ").trim(); }
  function pointHit(answer,point){ return point.tests.some(test=>test.every(term=>answer.includes(normalise(term)))); }
  function markExam(item){
    const raw=document.querySelector("#exam-answer").value.trim();
    if(raw.length<8){toast("Write a fuller answer before checking.");return;}
    const answer=normalise(raw);
    const hits=item.points.map(p=>pointHit(answer,p));
    const score=hits.filter(Boolean).length;
    const old=Number(progress.examBest[item.id]||0);
    const wasMastered=old>=item.marks;

    if(score>old){
      progress.examBest[item.id]=score;
      saveProgress();
      if(score>=item.marks && !wasMastered) toast("Full marks — exam question mastered!");
      else toast(`Best score improved: ${score} / ${item.marks}`);
    } else if(score>=item.marks && !wasMastered){
      progress.examBest[item.id]=item.marks;
      saveProgress();
      toast("Full marks — exam question mastered!");
    }

    const mastered=Number(progress.examBest[item.id]||0)>=item.marks;
    document.querySelector("#marker-output").innerHTML=`<div class="marker-result"><div class="score-line"><strong>${score} / ${item.marks}</strong><span class="provisional">${mastered?"✓ mastered":"estimated mark"}</span></div><div class="mark-points">${item.points.map((p,i)=>`<div class="mark-point ${hits[i]?"hit":"miss"}"><span aria-hidden="true">${hits[i]?"✓":"○"}</span><span>${hits[i]?"Included":"Add"}: ${p.label}</span></div>`).join("")}</div><div class="model-answer"><strong>Model answer</strong>${item.model}</div>${mastered?"":`<div class="feedback-box review"><strong>Not mastered yet</strong><br>Improve the missing marking points and check this question again. A previous incorrect attempt does not matter once you achieve full marks.</div>`}</div>`;
  }

  function renderGames(){
    const mastery=masteryStatus();
    const open=mastery.complete;
    const remaining=mastery.total-mastery.done;

    panel.innerHTML=`<div class="games-intro"><div><h3>Revision Arcade</h3><p>The arcade unlocks only after every Quick Check has been answered correctly and every exam-style question has achieved full marks. Wrong first attempts are fine — go back, improve them and master them.</p></div><span class="mark-badge">${open?"3 of 3 unlocked":`${mastery.done} / ${mastery.total} mastered`}</span></div>
      ${open?"":`<div class="mastery-gate"><strong>🔒 Arcade locked</strong><p>You still need to master <strong>${remaining}</strong> question${remaining===1?"":"s"}.</p><div class="mastery-breakdown"><span>Quick Check: <b>${mastery.quickDone}/${mastery.quickTotal}</b></span><span>Exam Practice: <b>${mastery.examDone}/${mastery.examTotal}</b></span></div><p class="provisional">A question counts once you eventually get it correct. Earlier incorrect attempts do not count against you.</p></div>`}
      <div class="game-grid">${Object.entries(gameData).map(([key,g])=>`<article class="game-card ${open?"":"locked"}" style="--game:${g.colour}"><span class="game-icon">${g.icon}</span><span class="lock-label">${open?`Best: ${progress.gameBest[key]||0}`:"🔒 Master all questions"}</span><h4>${g.title}</h4><p>${g.description}</p><button class="${open?"primary-button":"secondary-button"}" data-game="${key}" type="button" ${open?"":"disabled"}>${open?"Play game":"Locked"}</button></article>`).join("")}</div><div id="game-stage"></div>`;

    panel.querySelectorAll("[data-game]").forEach(b=>b.addEventListener("click",()=>startGame(b.dataset.game)));
    if(state.activeGame && open) renderGameStage();
  }

  function stopArcade(){
    arcadeRun++;
    if(arcadeFrame) cancelAnimationFrame(arcadeFrame);
    if(arcadeInterval) clearInterval(arcadeInterval);
    if(arcadeTimeout) clearTimeout(arcadeTimeout);
    arcadeFrame=arcadeInterval=arcadeTimeout=null;
    if(arcadeKeydown) document.removeEventListener("keydown",arcadeKeydown);
    if(arcadeKeyup) document.removeEventListener("keyup",arcadeKeyup);
    arcadeKeydown=arcadeKeyup=null;
    Object.keys(arcadeKeys).forEach(k=>delete arcadeKeys[k]);
  }

  function bindArcadeKeys(){
    arcadeKeydown=e=>{
      if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," ","a","d","w","s","A","D","W","S"].includes(e.key)) e.preventDefault();
      arcadeKeys[e.key.toLowerCase()]=true;
      arcadeKeys[e.key]=true;
    };
    arcadeKeyup=e=>{
      arcadeKeys[e.key.toLowerCase()]=false;
      arcadeKeys[e.key]=false;
    };
    document.addEventListener("keydown",arcadeKeydown);
    document.addEventListener("keyup",arcadeKeyup);
  }

  function bindTouchControls(stage){
    stage.querySelectorAll("[data-key]").forEach(button=>{
      const key=button.dataset.key;
      const down=e=>{e.preventDefault();arcadeKeys[key]=true;};
      const up=e=>{e.preventDefault();arcadeKeys[key]=false;};
      button.addEventListener("pointerdown",down);
      button.addEventListener("pointerup",up);
      button.addEventListener("pointercancel",up);
      button.addEventListener("pointerleave",up);
    });
  }

  function startGame(key){
    if(!masteryStatus().complete){
      toast("Master every Quick Check and exam question to unlock the arcade.");
      return;
    }
    stopArcade();
    state.activeGame=key;
    state.gameScore=0;
    state.gameLives=3;
    renderGames();
  }

  function renderGameStage(){
    if(state.activeGame==="particle") startSpaceInvaders();
    else if(state.activeGame==="thermal") startBreakout();
    else startSnake();
  }

  function arcadeHud(title){
    return `<div class="arcade-hud"><strong>${title}</strong><span>Score <b id="arcade-score">${state.gameScore}</b></span><span>Lives <b id="arcade-lives">${"♥".repeat(state.gameLives)}</b></span></div>`;
  }

  function updateArcadeHud(){
    const score=document.querySelector("#arcade-score");
    const lives=document.querySelector("#arcade-lives");
    if(score) score.textContent=state.gameScore;
    if(lives) lives.textContent="♥".repeat(Math.max(0,state.gameLives));
  }

  function gameShell(title,instruction,controls){
    return `<section class="game-stage arcade-shell">${arcadeHud(title)}<p class="arcade-instruction">${instruction}</p><div class="arcade-canvas-wrap"><canvas class="arcade-canvas" width="720" height="420"></canvas></div><div class="arcade-controls touch-controls">${controls}</div></section>`;
  }

  function startSpaceInvaders(){
    const stage=document.querySelector("#game-stage");
    const run=arcadeRun;
    stage.innerHTML=gameShell("Space Invaders","Move with ← → or A/D. Fire with Space.","<button data-key=\"ArrowLeft\">◀</button><button data-key=\" \">FIRE</button><button data-key=\"ArrowRight\">▶</button>");
    stage.scrollIntoView({behavior:"smooth",block:"start"});
    bindArcadeKeys(); bindTouchControls(stage);
    const canvas=stage.querySelector("canvas"), ctx=canvas.getContext("2d");
    const player={x:339,y:386,w:42,h:16,speed:330};
    let bullets=[], enemyBullets=[], aliens=[], direction=1, alienSpeed=38, last=performance.now(), lastShot=0, enemyShot=0;

    function makeWave(){
      aliens=[];
      for(let r=0;r<4;r++) for(let col=0;col<9;col++) aliens.push({x:75+col*62,y:48+r*42,w:32,h:20,alive:true});
      direction=1;
      alienSpeed+=6;
    }
    makeWave();

    function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
    function shoot(){
      const now=performance.now();
      if(now-lastShot>240){bullets.push({x:player.x+player.w/2-2,y:player.y-8,w:4,h:10});lastShot=now;}
    }
    function loseLife(){
      state.gameLives--; updateArcadeHud();
      enemyBullets=[]; player.x=339;
      if(state.gameLives<=0) finishGame();
    }
    function tick(now){
      if(run!==arcadeRun || state.gameLives<=0) return;
      const dt=Math.min(.035,(now-last)/1000); last=now;
      if(arcadeKeys.ArrowLeft||arcadeKeys.a) player.x-=player.speed*dt;
      if(arcadeKeys.ArrowRight||arcadeKeys.d) player.x+=player.speed*dt;
      player.x=Math.max(8,Math.min(canvas.width-player.w-8,player.x));
      if(arcadeKeys[" "]) shoot();

      bullets.forEach(b=>b.y-=440*dt);
      enemyBullets.forEach(b=>b.y+=235*dt);
      bullets=bullets.filter(b=>b.y>-20);
      enemyBullets=enemyBullets.filter(b=>b.y<canvas.height+20);

      let edge=false;
      aliens.filter(a=>a.alive).forEach(a=>{a.x+=direction*alienSpeed*dt;if(a.x<16||a.x+a.w>canvas.width-16)edge=true;});
      if(edge){
        direction*=-1;
        aliens.filter(a=>a.alive).forEach(a=>{a.y+=14;a.x+=direction*alienSpeed*dt*2;});
      }

      for(const b of bullets){
        for(const a of aliens){
          if(a.alive&&hit(b,a)){a.alive=false;b.y=-99;state.gameScore+=10;break;}
        }
      }
      bullets=bullets.filter(b=>b.y>-20);
      updateArcadeHud();

      if(now-enemyShot>650){
        const alive=aliens.filter(a=>a.alive);
        if(alive.length){const a=alive[Math.floor(Math.random()*alive.length)];enemyBullets.push({x:a.x+a.w/2-2,y:a.y+a.h,w:4,h:10});}
        enemyShot=now;
      }
      if(enemyBullets.some(b=>hit(b,player))){loseLife();if(state.gameLives<=0)return;}
      if(aliens.some(a=>a.alive&&a.y+a.h>=player.y)){loseLife();makeWave();}
      if(!aliens.some(a=>a.alive)){state.gameScore+=100;makeWave();}

      ctx.fillStyle="#050b18";ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="#ffffff";for(let i=0;i<45;i++)ctx.fillRect((i*137)%canvas.width,(i*83)%canvas.height,1.5,1.5);
      ctx.fillStyle="#55e6ff";ctx.fillRect(player.x,player.y,player.w,player.h);ctx.fillRect(player.x+14,player.y-8,14,8);
      aliens.forEach((a,i)=>{if(!a.alive)return;ctx.fillStyle=i%2?"#9cff68":"#ff6ed6";ctx.fillRect(a.x,a.y,a.w,a.h);ctx.fillStyle="#050b18";ctx.fillRect(a.x+7,a.y+7,5,5);ctx.fillRect(a.x+20,a.y+7,5,5);});
      ctx.fillStyle="#ffe56b";bullets.forEach(b=>ctx.fillRect(b.x,b.y,b.w,b.h));
      ctx.fillStyle="#ff665f";enemyBullets.forEach(b=>ctx.fillRect(b.x,b.y,b.w,b.h));
      arcadeFrame=requestAnimationFrame(tick);
    }
    arcadeFrame=requestAnimationFrame(tick);
  }

  function startBreakout(){
    const stage=document.querySelector("#game-stage");
    const run=arcadeRun;
    stage.innerHTML=gameShell("Breakout","Move the paddle with ← → or A/D. Clear the bricks.","<button data-key=\"ArrowLeft\">◀</button><button data-key=\"ArrowRight\">▶</button>");
    stage.scrollIntoView({behavior:"smooth",block:"start"});
    bindArcadeKeys(); bindTouchControls(stage);
    const canvas=stage.querySelector("canvas"),ctx=canvas.getContext("2d");
    const paddle={x:300,y:390,w:120,h:14,speed:420};
    let ball={x:360,y:330,r:7,vx:220,vy:-250};
    let last=performance.now();
    let bricks=[];

    function makeBricks(){
      bricks=[];
      for(let r=0;r<5;r++)for(let col=0;col<10;col++)bricks.push({x:34+col*66,y:45+r*30,w:58,h:20,alive:true});
    }
    function resetBall(){ball={x:360,y:330,r:7,vx:(Math.random()>.5?1:-1)*220,vy:-250};paddle.x=300;}
    function circleRect(b,r){return b.x+b.r>r.x&&b.x-b.r<r.x+r.w&&b.y+b.r>r.y&&b.y-b.r<r.y+r.h;}
    makeBricks();

    function tick(now){
      if(run!==arcadeRun||state.gameLives<=0)return;
      const dt=Math.min(.035,(now-last)/1000);last=now;
      if(arcadeKeys.ArrowLeft||arcadeKeys.a)paddle.x-=paddle.speed*dt;
      if(arcadeKeys.ArrowRight||arcadeKeys.d)paddle.x+=paddle.speed*dt;
      paddle.x=Math.max(8,Math.min(canvas.width-paddle.w-8,paddle.x));
      ball.x+=ball.vx*dt;ball.y+=ball.vy*dt;
      if(ball.x-ball.r<0){ball.x=ball.r;ball.vx=Math.abs(ball.vx);}
      if(ball.x+ball.r>canvas.width){ball.x=canvas.width-ball.r;ball.vx=-Math.abs(ball.vx);}
      if(ball.y-ball.r<0){ball.y=ball.r;ball.vy=Math.abs(ball.vy);}
      if(circleRect(ball,paddle)&&ball.vy>0){
        const offset=(ball.x-(paddle.x+paddle.w/2))/(paddle.w/2);
        ball.vx=offset*330;ball.vy=-Math.abs(ball.vy);
      }
      for(const brick of bricks){
        if(brick.alive&&circleRect(ball,brick)){brick.alive=false;ball.vy*=-1;state.gameScore+=10;updateArcadeHud();break;}
      }
      if(ball.y-ball.r>canvas.height){
        state.gameLives--;updateArcadeHud();
        if(state.gameLives<=0){finishGame();return;}
        resetBall();
      }
      if(!bricks.some(b=>b.alive)){state.gameScore+=100;makeBricks();resetBall();updateArcadeHud();}

      ctx.fillStyle="#061225";ctx.fillRect(0,0,canvas.width,canvas.height);
      bricks.forEach((b,i)=>{if(!b.alive)return;ctx.fillStyle=["#55e6ff","#ff6ed6","#ffe56b","#9cff68","#ff865c"][Math.floor(i/10)%5];ctx.fillRect(b.x,b.y,b.w,b.h);});
      ctx.fillStyle="#ffffff";ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h);
      ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);ctx.fillStyle="#ffe56b";ctx.fill();
      arcadeFrame=requestAnimationFrame(tick);
    }
    arcadeFrame=requestAnimationFrame(tick);
  }

  function startSnake(){
    const stage=document.querySelector("#game-stage");
    const run=arcadeRun;
    state.gameLives=1;
    stage.innerHTML=gameShell("Snake","Use the arrow keys or buttons. Eat the food and don't hit the wall or yourself.","<button data-key=\"ArrowUp\">▲</button><div></div><button data-key=\"ArrowLeft\">◀</button><button data-key=\"ArrowDown\">▼</button><button data-key=\"ArrowRight\">▶</button>");
    stage.scrollIntoView({behavior:"smooth",block:"start"});
    bindArcadeKeys(); bindTouchControls(stage);
    const canvas=stage.querySelector("canvas"),ctx=canvas.getContext("2d");
    const cell=20,cols=36,rows=21;
    let snake=[{x:18,y:11},{x:17,y:11},{x:16,y:11}],dir={x:1,y:0},next={x:1,y:0};
    let food={x:25,y:11};

    function placeFood(){
      do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};}
      while(snake.some(s=>s.x===food.x&&s.y===food.y));
    }
    function setDirection(){
      if((arcadeKeys.ArrowUp||arcadeKeys.w)&&dir.y!==1)next={x:0,y:-1};
      else if((arcadeKeys.ArrowDown||arcadeKeys.s)&&dir.y!==-1)next={x:0,y:1};
      else if((arcadeKeys.ArrowLeft||arcadeKeys.a)&&dir.x!==1)next={x:-1,y:0};
      else if((arcadeKeys.ArrowRight||arcadeKeys.d)&&dir.x!==-1)next={x:1,y:0};
    }
    function draw(){
      ctx.fillStyle="#061225";ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="#ff6ed6";ctx.fillRect(food.x*cell+3,food.y*cell+3,cell-6,cell-6);
      snake.forEach((s,i)=>{ctx.fillStyle=i===0?"#9cff68":"#55e6ff";ctx.fillRect(s.x*cell+2,s.y*cell+2,cell-4,cell-4);});
    }
    arcadeInterval=setInterval(()=>{
      if(run!==arcadeRun)return;
      setDirection();dir=next;
      const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
      const crashed=head.x<0||head.x>=cols||head.y<0||head.y>=rows||snake.some(s=>s.x===head.x&&s.y===head.y);
      if(crashed){state.gameLives=0;updateArcadeHud();finishGame();return;}
      snake.unshift(head);
      if(head.x===food.x&&head.y===food.y){state.gameScore+=10;updateArcadeHud();placeFood();}
      else snake.pop();
      draw();
    },95);
    draw();
  }

  function finishGame(){
    const key=state.activeGame;
    stopArcade();
    progress.gameBest[key]=Math.max(Number(progress.gameBest[key]||0),state.gameScore);
    saveProgress();
    const stage=document.querySelector("#game-stage");
    if(stage) stage.innerHTML=`<section class="game-stage arcade-finish"><span class="game-icon" style="--game:${gameData[key].colour}">${gameData[key].icon}</span><h4>Game over</h4><p>Final score: <strong>${state.gameScore}</strong> · Best score: <strong>${progress.gameBest[key]}</strong></p><button class="primary-button" id="play-again" type="button">Play again</button></section>`;
    document.querySelector("#play-again")?.addEventListener("click",()=>startGame(key));
  }

  document.querySelectorAll(".mode-tab").forEach(button=>button.addEventListener("click",()=>{stopArcade();state.view=button.dataset.view;state.activeGame=null;render();}));
  document.querySelectorAll(".module-button").forEach(button=>button.addEventListener("click",()=>{stopArcade();state.module=button.dataset.module;state.checkIndex=0;state.checkAnswered=null;state.examId=moduleExams()[0].id;render();}));
  function applyTheme(theme){ document.documentElement.dataset.theme=theme; themeToggle.textContent=theme==="dark"?"☀":"☾"; themeToggle.setAttribute("aria-label",theme==="dark"?"Use light theme":"Use dark theme"); }
  themeToggle.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";applyTheme(next);try{localStorage.setItem(THEME_KEY,next);}catch{}});
  let storedTheme=null; try{storedTheme=localStorage.getItem(THEME_KEY);}catch{} applyTheme(storedTheme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
  render();
})();
