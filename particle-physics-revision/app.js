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
      intro: "Use the particle model to explain solids, liquids, gases, internal energy and changes of state.",
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
            <table class="mini-table"><thead><tr><th>Change</th><th>From</th><th>To</th></tr></thead><tbody>
              <tr><td>Melting</td><td>Solid</td><td>Liquid</td></tr><tr><td>Freezing</td><td>Liquid</td><td>Solid</td></tr>
              <tr><td>Boiling / evaporation</td><td>Liquid</td><td>Gas</td></tr><tr><td>Condensation</td><td>Gas</td><td>Liquid</td></tr>
              <tr><td>Sublimation</td><td>Solid</td><td>Gas</td></tr><tr><td>Condensation</td><td>Gas</td><td>Solid</td></tr>
            </tbody></table>
          `,
        },
      ],
    },
    thermal: {
      name: "Thermal Physics",
      number: "02",
      colour: "#e56b2f",
      intro: "Connect temperature to particle motion, explain thermal transfer and calculate energy changes using specific heat capacity and latent heat.",
      lessons: [
        {
          title: "Temperature, Celsius and Kelvin",
          body: `
            ${diagram("temperature")}
            <p>Temperature measures the <strong>average kinetic energy</strong> of the particles. It is not the same as internal energy, which depends on all particles and includes potential energy.</p>
            <div class="equation">temperature in K = temperature in °C + 273</div>
            <div class="worked"><strong>Example</strong><p>25 °C = 25 + 273 = 298 K. Absolute zero is 0 K, approximately -273 °C.</p></div>
            <div class="mistake"><strong>Common mistake:</strong> Do not write a degree symbol with kelvin. Use 298 K, not 298 °K.</div>
          `,
        },
        {
          title: "Conduction, convection and radiation",
          body: `
            ${diagram("transfer")}
            <div class="concept-grid">
              <div class="concept"><strong>Conduction</strong><p>Energy passes through collisions and vibrations between neighbouring particles. Free electrons make metals effective conductors.</p></div>
              <div class="concept"><strong>Convection</strong><p>Warmer, less-dense liquids and gases rise. Cooler, denser liquids and gases sink. This makes a convection current.</p></div>
              <div class="concept"><strong>Radiation</strong><p>Infrared electromagnetic waves transfer energy and do not require particles.</p></div>
            </div>
            <div class="worked"><strong>Vacuum flask</strong><p>The vacuum reduces conduction and stops convection. Shiny surfaces reduce infrared emission and absorption. An insulating stopper reduces conduction.</p></div>
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
            <div class="worked"><strong>Worked example</strong><p>Heating 2.0 kg of water (c = 4180 J kg⁻¹ °C⁻¹) by 10 °C requires Q = 2.0 × 4180 × 10 = 83,600 J.</p></div>
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
            <ul><li><strong>Specific latent heat of fusion:</strong> solid ↔ liquid.</li><li><strong>Specific latent heat of vaporisation:</strong> liquid ↔ gas.</li></ul>
            <div class="worked"><strong>Worked example</strong><p>Melting 0.50 kg of ice where L = 334,000 J kg⁻¹ requires Q = 0.50 × 334,000 = 167,000 J.</p></div>
            ${videos.latent}
          `,
        },
      ],
    },
    nuclear: {
      name: "Nuclear Physics",
      number: "03",
      colour: "#17875f",
      intro: "Describe atoms and isotopes, calculate particle numbers and track mass number and atomic number through alpha and beta decay.",
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
            <div class="diagram-wrap"><svg viewBox="0 0 760 210" role="img" aria-label="Carbon-12 and carbon-14 isotope notation">
              <rect x="80" y="35" width="240" height="140" rx="16" fill="none" stroke="#17875f" stroke-width="3"/><rect x="440" y="35" width="240" height="140" rx="16" fill="none" stroke="#17875f" stroke-width="3"/>
              <text x="104" y="83" font-size="32" fill="currentColor">¹²₆C</text><text x="180" y="83" font-size="21" fill="currentColor">carbon-12</text>
              <text x="104" y="125" font-size="18" fill="currentColor">6 protons, 6 neutrons</text>
              <text x="464" y="83" font-size="32" fill="currentColor">¹⁴₆C</text><text x="540" y="83" font-size="21" fill="currentColor">carbon-14</text>
              <text x="464" y="125" font-size="18" fill="currentColor">6 protons, 8 neutrons</text>
              <text x="215" y="197" font-size="18" fill="currentColor">same atomic number</text><text x="445" y="197" font-size="18" fill="currentColor">different mass number</text>
            </svg></div>
          `,
        },
        {
          title: "Natural radioactivity",
          body: `
            ${diagram("radioactivity")}
            <p>Some nuclei are unstable. They give out radiation to become more stable. This decay is random, so we cannot predict exactly when one nucleus will decay.</p>
            <div class="mistake"><strong>Course boundary:</strong> You need alpha and beta decay here. Half-life, fission and fusion are not included in this topic overview.</div>
          `,
        },
        {
          title: "Alpha and beta decay",
          body: `
            ${diagram("decay")}
            <div class="concept-grid">
              <div class="concept"><strong>Alpha decay</strong><p>The nucleus loses 2 protons and 2 neutrons. Mass number decreases by 4; atomic number decreases by 2.</p></div>
              <div class="concept"><strong>Beta decay</strong><p>A neutron changes into a proton and an electron is emitted. Mass number stays the same; atomic number increases by 1.</p></div>
              <div class="concept"><strong>Conservation</strong><p>Total mass numbers and total atomic numbers balance on both sides of a nuclear equation.</p></div>
            </div>
            <div class="equation">²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He</div>
            <div class="equation">¹⁴₆C → ¹⁴₇N + ⁰₋₁e</div>
            ${videos.decay}
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
    q("t1","thermal","What does temperature measure in the particle model?",["Total potential energy","Average kinetic energy of particles","Total internal energy","The number of particles"],1,"Temperature measures average particle kinetic energy."),
    q("t2","thermal","What temperature is 25 °C on the Kelvin scale?",["248 K","273 K","298 K","325 K"],2,"25 + 273 = 298 K."),
    q("t3","thermal","How much energy heats 2.0 kg of water by 10 °C if c = 4180 J kg⁻¹ °C⁻¹?",["836 J","8,360 J","41,800 J","83,600 J"],3,"Q = mcΔT = 2.0 × 4180 × 10 = 83,600 J."),
    q("t4","thermal","Which process can transfer thermal energy through a vacuum?",["Conduction only","Convection only","Infrared radiation","Conduction and convection"],2,"Electromagnetic radiation does not require particles."),
    q("t5","thermal","Why does temperature remain constant during a change of state?",["No energy is transferred","Energy changes particle potential energy and arrangement","The particles lose all kinetic energy","The thermometer stops working"],1,"Latent heat changes particle arrangement and potential energy."),
    q("n1","nuclear","What determines which element an atom is?",["Number of neutrons","Mass number","Number of protons","Number of electron shells"],2,"The atomic number, or number of protons, identifies the element."),
    q("n2","nuclear","How many neutrons are in carbon-14?",["6","8","14","20"],1,"Neutrons = mass number - atomic number = 14 - 6 = 8."),
    q("n3","nuclear","Which statement describes isotopes?",["Same neutrons, different protons","Same protons, different neutrons","Different protons and different electrons only","Same mass number, different atomic number"],1,"Isotopes have the same proton number but different neutron numbers."),
    q("n4","nuclear","What happens to a nucleus in alpha decay?",["A decreases by 4 and Z decreases by 2","A stays the same and Z increases by 1","A increases by 4 and Z increases by 2","A decreases by 1 and Z stays the same"],0,"An alpha particle contains 2 protons and 2 neutrons."),
    q("n5","nuclear","What happens to mass number A and atomic number Z in beta-minus decay?",["A decreases by 4; Z decreases by 2","A stays the same; Z increases by 1","A increases by 1; Z stays the same","A stays the same; Z decreases by 1"],1,"A neutron becomes a proton, so A is unchanged and Z increases by 1."),
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
  const state = { view: "learn", module: "particle", checkIndex: 0, checkAnswered: null, examId: "pe1", activeGame: null, gameIndex: 0, gameScore: 0, gameLives: 3, gameTime: 0, gamePosition: 1, reactorA: 0, reactorZ: 0 };
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
    const diagrams = {
      kinetic: ["Particles are always moving", `<circle cx="55" cy="65" r="13"/><circle cx="138" cy="42" r="13"/><circle cx="210" cy="88" r="13"/><circle cx="290" cy="48" r="13"/><path d="M72 62h38m45-13 31 20m42 9 35-22"/><path d="m99 53 11 9-11 9m77-10 10 8-13 4m80-25 10 8-12 5"/>`],
      states: ["Particle arrangement in each state", `<g><text x="58" y="24">solid</text><circle cx="45" cy="55" r="9"/><circle cx="70" cy="55" r="9"/><circle cx="95" cy="55" r="9"/><circle cx="45" cy="80" r="9"/><circle cx="70" cy="80" r="9"/><circle cx="95" cy="80" r="9"/></g><g><text x="145" y="24">liquid</text><circle cx="140" cy="70" r="9"/><circle cx="164" cy="78" r="9"/><circle cx="190" cy="67" r="9"/><circle cx="151" cy="48" r="9"/><circle cx="180" cy="43" r="9"/></g><g><text x="250" y="24">gas</text><circle cx="240" cy="48" r="9"/><circle cx="305" cy="80" r="9"/><circle cx="273" cy="35" r="9"/><circle cx="247" cy="91" r="9"/></g>`],
      changes: ["Changes of state", `<rect x="18" y="45" width="78" height="42" rx="10"/><rect x="121" y="45" width="78" height="42" rx="10"/><rect x="224" y="45" width="78" height="42" rx="10"/><text x="39" y="71">solid</text><text x="137" y="71">liquid</text><text x="250" y="71">gas</text><path d="M96 56h25m78 0h25M121 78H96m128 0h-25"/><text x="96" y="25">heating →</text><text x="106" y="111">← cooling</text>`],
      temperature: ["Higher temperature means faster average motion", `<g opacity=".65"><circle cx="48" cy="62" r="11"/><circle cx="92" cy="39" r="11"/><circle cx="118" cy="82" r="11"/><path d="M60 60h15m28-17 10-9"/></g><path d="M157 20v82"/><g><circle cx="205" cy="65" r="11"/><circle cx="265" cy="34" r="11"/><circle cx="303" cy="82" r="11"/><path d="M218 61h35m24-22 22-13m-5 51 28 13"/></g><text x="38" y="112">cooler</text><text x="248" y="112">hotter</text>`],
      transfer: ["Three pathways for thermal energy", `<rect x="12" y="35" width="88" height="48" rx="9"/><text x="20" y="28">conduction</text><circle cx="32" cy="59" r="7"/><circle cx="54" cy="59" r="7"/><circle cx="76" cy="59" r="7"/><path d="M100 59h28"/><text x="130" y="28">convection</text><path d="M155 82c-22-28 25-55 45-27m0 0-1-17m1 17-17-2"/><text x="235" y="28">radiation</text><path d="M238 53c17-18 34 18 51 0m-51 20c17-18 34 18 51 0"/>`],
      shc: ["Energy raises the temperature", `<path d="M40 84h150l-16-52H56z"/><path d="M115 20v58"/><circle cx="115" cy="84" r="10"/><path d="M218 26v62m-12 0h24"/><text x="244" y="62">ΔT</text><text x="62" y="108">mass m, capacity c</text>`],
      mixing: ["Energy lost equals energy gained", `<path d="M28 42h82l-9 61H37z"/><path d="M212 42h82l-9 61h-64z"/><path d="M110 70h91m-12-9 12 9-12 9"/><text x="45" y="31">hot</text><text x="235" y="31">cold</text><text x="111" y="101">shared final temperature</text>`],
      latent: ["Temperature stays level during a state change", `<path d="M25 100 92 52h82l68-35"/><path d="M92 52h82" stroke-width="7"/><text x="98" y="43">change of state</text><path d="M21 14v91h285M18 17l3-7 3 7m279 85 8 3-8 3"/><text x="3" y="64" transform="rotate(-90 3 64)">temperature</text>`],
      atom: ["A tiny nucleus with electrons around it", `<ellipse cx="160" cy="65" rx="125" ry="38"/><ellipse cx="160" cy="65" rx="38" ry="58" transform="rotate(60 160 65)"/><circle cx="160" cy="65" r="25"/><circle cx="38" cy="65" r="7"/><circle cx="278" cy="65" r="7"/><circle cx="180" cy="12" r="7"/><text x="138" y="71">nucleus</text>`],
      radioactivity: ["Unstable nuclei decay randomly", `<circle cx="78" cy="65" r="40"/><circle cx="68" cy="57" r="10"/><circle cx="89" cy="71" r="10"/><circle cx="70" cy="80" r="8"/><path d="M120 65h80m-12-9 12 9-12 9"/><circle cx="242" cy="65" r="25"/><path d="M270 52l38-22m-35 38h43m-46 12 38 22"/><text x="29" y="118">unstable</text><text x="221" y="118">more stable</text>`],
      decay: ["Track A and Z through decay", `<rect x="13" y="18" width="140" height="42" rx="9"/><text x="26" y="44">alpha: A −4, Z −2</text><rect x="13" y="76" width="160" height="42" rx="9"/><text x="26" y="102">beta: A same, Z +1</text><path d="M181 38h112m-12-9 12 9-12 9M181 96h112m-12-9 12 9-12 9"/>`],
    };
    const [label, shapes] = diagrams[type];
    return `<figure class="info-diagram"><svg viewBox="0 0 330 130" role="img" aria-label="${label}"><g>${shapes}</g></svg><figcaption>${label}</figcaption></figure>`;
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
  function awardCheck(id){ if(!progress.earned.includes(id)){ progress.earned.push(id); saveProgress(); toast("+1 XP — new game progress!"); } }
  function updateProgress(){
    const score=xp(); xpTotal.textContent=score;
    const completed=new Set(progress.visited).size+progress.earned.length+Object.keys(progress.examBest).length;
    const total=Object.values(modules).reduce((s,m)=>s+m.lessons.length,0)+checks.length+examQuestions.length;
    const percent=Math.min(100,Math.round(completed/total*100)); progressBar.style.width=`${percent}%`; progressPercent.textContent=`${percent}%`;
    const unlocks=Object.values(gameData).filter(g=>score>=g.unlock).length; gamesBadge.textContent=`${unlocks}/3`;
    const next=Object.values(gameData).find(g=>score<g.unlock);
    nextUnlock.textContent=next ? `${next.unlock-score} XP until ${next.title} unlocks` : "All revision games unlocked";
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
      particle:[["Particle model","Arrangement and movement explain the three states."],["Internal energy","Total kinetic and potential energy of the particles."],["State changes","Know melting, freezing, boiling, condensation and sublimation."]],
      thermal:[["Temperature","A measure of average particle kinetic energy."],["Energy transfer","Conduction, convection and infrared radiation."],["Heating","Use Q = mcΔT and convert values into the correct units."],["Changing state","Use Q = mL; temperature stays constant during the change."]],
      nuclear:[["The atom","Know the charge, mass and location of each particle."],["A and Z","Mass number = protons + neutrons; atomic number = protons."],["Isotopes","Same protons but different neutrons."],["Decay","Alpha: A −4, Z −2. Beta-minus: A same, Z +1."]],
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
    const right=state.checkAnswered===item.correct; document.querySelector("#check-feedback").innerHTML=`<div class="feedback-box ${right?"good":"review"}"><strong>${right?"Correct — 1 XP earned":"Not yet — check the physics"}</strong><br>${item.explanation}</div>`;
  }

  function moduleExams(){ return examQuestions.filter(item=>item.module===state.module); }
  function renderExam(){
    const pool=moduleExams(); if(!pool.some(q=>q.id===state.examId)) state.examId=pool[0].id; const item=pool.find(q=>q.id===state.examId);
    panel.innerHTML=heading("Exam Practice","Write a complete answer, then check which marking points you included.","✎")+`<div class="exam-shell"><div class="exam-picker">${pool.map((q,i)=>`<button data-exam="${q.id}" class="${q.id===item.id?"active":""}" type="button">Question ${i+1}</button>`).join("")}</div><article class="question-card"><div class="question-meta"><span>${modules[state.module].name}</span><span class="mark-badge">${item.marks} marks</span></div><h4>${item.question}</h4><textarea class="answer-input" id="exam-answer" placeholder="Write your answer here..." aria-label="Your exam answer"></textarea><div class="control-row"><button class="primary-button" id="mark-answer" type="button">Check my answer</button><button class="secondary-button" id="clear-answer" type="button">Clear</button></div><div id="marker-output"></div></article><p class="provisional">This gives an estimated mark by checking for key physics ideas. Always compare your answer with the model answer.</p></div>`;
    panel.querySelectorAll("[data-exam]").forEach(b=>b.addEventListener("click",()=>{state.examId=b.dataset.exam;renderExam();}));
    document.querySelector("#mark-answer").addEventListener("click",()=>markExam(item)); document.querySelector("#clear-answer").addEventListener("click",()=>{document.querySelector("#exam-answer").value="";document.querySelector("#marker-output").innerHTML="";});
  }
  function normalise(text){ return text.toLowerCase().replace(/[×*]/g," ").replace(/[⁻−–—]/g,"-").replace(/[,()=:]/g," ").replace(/\s+/g," ").trim(); }
  function pointHit(answer,point){ return point.tests.some(test=>test.every(term=>answer.includes(normalise(term)))); }
  function markExam(item){
    const raw=document.querySelector("#exam-answer").value.trim(); if(raw.length<8){toast("Write a fuller answer before checking.");return;}
    const answer=normalise(raw); const hits=item.points.map(p=>pointHit(answer,p)); const score=hits.filter(Boolean).length; const old=Number(progress.examBest[item.id]||0);
    if(score>old){ progress.examBest[item.id]=score; saveProgress(); toast(`Best score improved: +${score-old} XP`); }
    document.querySelector("#marker-output").innerHTML=`<div class="marker-result"><div class="score-line"><strong>${score} / ${item.marks}</strong><span class="provisional">estimated mark</span></div><div class="mark-points">${item.points.map((p,i)=>`<div class="mark-point ${hits[i]?"hit":"miss"}"><span aria-hidden="true">${hits[i]?"✓":"○"}</span><span>${hits[i]?"Included":"Add"}: ${p.label}</span></div>`).join("")}</div><div class="model-answer"><strong>Model answer</strong>${item.model}</div></div>`;
  }

  function renderGames(){
    const score=xp(); const unlocked=Object.entries(gameData).filter(([,g])=>score>=g.unlock).length;
    panel.innerHTML=`<div class="games-intro"><div><h3>Revision Arcade</h3><p>Earn XP through revision to unlock proper arcade games. The games themselves contain no physics questions.</p></div><span class="mark-badge">${unlocked} of 3 unlocked</span></div><div class="game-grid">${Object.entries(gameData).map(([key,g])=>{const open=score>=g.unlock;return `<article class="game-card ${open?"":"locked"}" style="--game:${g.colour}"><span class="game-icon">${g.icon}</span><span class="lock-label">${open?`Best: ${progress.gameBest[key]||0}`:`🔒 ${g.unlock} XP`}</span><h4>${g.title}</h4><p>${g.description}</p><button class="${open?"primary-button":"secondary-button"}" data-game="${key}" type="button" ${open?"":"disabled"}>${open?"Play game":"Locked"}</button></article>`;}).join("")}</div><div id="game-stage"></div>`;
    panel.querySelectorAll("[data-game]").forEach(b=>b.addEventListener("click",()=>startGame(b.dataset.game)));
    if(state.activeGame && score>=gameData[state.activeGame].unlock) renderGameStage();
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
