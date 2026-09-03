(() => {
  "use strict";

  const STORAGE_KEY = "stp-particle-physics-revision-v1";
  const THEME_KEY = "stp-year11-physics-theme";

  const videos = {
    states: video("OTksau0_VoI", "Particle theory and states of matter", "Cognito", "Focus on particle arrangement, movement and changes of state."),
    transfer: video("Eizsm5V8c_c", "Conduction, convection and radiation", "Cognito", "A clear GCSE explanation of all three thermal-transfer pathways."),
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
      intro: "Use the kinetic model to explain solids, liquids, gases, Brownian motion, internal energy and changes of state.",
      lessons: [
        {
          title: "The kinetic model and its assumptions",
          body: `
            <p>The kinetic model represents matter as a very large number of tiny particles. It helps us explain observations that are too small to see directly.</p>
            <ul>
              <li>Particles are in constant motion.</li>
              <li>Their arrangement, spacing and freedom to move depend on the state.</li>
              <li>Particles interact through forces; their potential energy changes when their spacing changes.</li>
              <li>Collisions transfer energy and momentum.</li>
            </ul>
            <div class="mistake"><strong>Common mistake:</strong> Particles do not expand when a substance is heated. Their motion and average separation change.</div>
          `,
        },
        {
          title: "Solids, liquids and gases",
          body: `
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
          title: "Brownian motion",
          body: `
            <p>Brownian motion is the random, jerky movement of visible particles suspended in a fluid. It provides evidence that much smaller, invisible molecules are moving randomly.</p>
            <div class="diagram-wrap">
              <svg viewBox="0 0 760 230" role="img" aria-label="A large smoke particle follows a random path as smaller air molecules collide with it">
                <defs><marker id="arrowP" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#6554c0"/></marker></defs>
                <rect x="10" y="10" width="740" height="210" rx="18" fill="none" stroke="currentColor" opacity=".2"/>
                <g fill="#00a9d6" opacity=".78">${Array.from({length:22},(_,i)=>`<circle cx="${35+(i*83)%690}" cy="${35+(i*47)%160}" r="5"/>`).join("")}</g>
                <path d="M95 150 L170 83 L235 142 L315 70 L387 126 L470 52 L565 105 L650 58" fill="none" stroke="#6554c0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrowP)"/>
                <circle cx="95" cy="150" r="18" fill="#f2b84b" stroke="#936013" stroke-width="3"/>
                <text x="28" y="202" fill="currentColor" font-size="18">visible smoke particle</text>
                <text x="505" y="190" fill="currentColor" font-size="18">random, jerky path</text>
              </svg>
            </div>
            <div class="worked"><strong>Explain it fully</strong><p>Air molecules move randomly and collide unevenly with the larger smoke particle. The resultant force keeps changing direction, so the smoke particle follows an irregular path.</p></div>
          `,
        },
        {
          title: "Internal energy and changes of state",
          body: `
            <p><strong>Internal energy</strong> is the total kinetic energy and potential energy of all the particles in a system.</p>
            <ul>
              <li>Heating within one state usually increases average kinetic energy and temperature.</li>
              <li>During a change of state, energy changes particle separation and potential energy while temperature remains constant.</li>
            </ul>
            <table class="mini-table"><thead><tr><th>Change</th><th>From</th><th>To</th></tr></thead><tbody>
              <tr><td>Melting</td><td>Solid</td><td>Liquid</td></tr><tr><td>Freezing</td><td>Liquid</td><td>Solid</td></tr>
              <tr><td>Boiling / evaporation</td><td>Liquid</td><td>Gas</td></tr><tr><td>Condensation</td><td>Gas</td><td>Liquid</td></tr>
              <tr><td>Sublimation</td><td>Solid</td><td>Gas</td></tr><tr><td>Deposition</td><td>Gas</td><td>Solid</td></tr>
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
            <p>Temperature measures the <strong>average kinetic energy</strong> of the particles. It is not the same as internal energy, which depends on all particles and includes potential energy.</p>
            <div class="equation">temperature in K = temperature in °C + 273</div>
            <div class="worked"><strong>Example</strong><p>25 °C = 25 + 273 = 298 K. Absolute zero is 0 K, approximately -273 °C.</p></div>
            <div class="mistake"><strong>Common mistake:</strong> Do not write a degree symbol with kelvin. Use 298 K, not 298 °K.</div>
          `,
        },
        {
          title: "Conduction, convection and radiation",
          body: `
            <div class="concept-grid">
              <div class="concept"><strong>Conduction</strong><p>Energy passes through collisions and vibrations between neighbouring particles. Free electrons make metals effective conductors.</p></div>
              <div class="concept"><strong>Convection</strong><p>Warmer, less-dense fluid rises while cooler, denser fluid sinks, creating a convection current.</p></div>
              <div class="concept"><strong>Radiation</strong><p>Infrared electromagnetic waves transfer energy and do not require particles.</p></div>
            </div>
            <div class="worked"><strong>Vacuum flask</strong><p>The vacuum reduces conduction and stops convection. Shiny surfaces reduce infrared emission and absorption. An insulating stopper reduces conduction.</p></div>
            ${videos.transfer}
          `,
        },
        {
          title: "Specific heat capacity",
          body: `
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
            <p>When an isolated hot substance is mixed with a colder substance, they reach one final temperature. Assuming no energy escapes:</p>
            <div class="equation">thermal energy lost by hot material = thermal energy gained by cold material</div>
            <p>For each material, calculate energy with Q = mcΔT. Use the final temperature to define the two temperature changes, then solve.</p>
            <div class="mistake"><strong>Check:</strong> The final temperature must lie between the two starting temperatures.</div>
          `,
        },
        {
          title: "Specific latent heat",
          body: `
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
            <p>Some nuclei are unstable. They decay spontaneously and randomly, emitting radiation as they become more stable. The decay of one nucleus cannot be predicted, although large samples show regular patterns.</p>
            <div class="mistake"><strong>Course boundary:</strong> You need alpha and beta decay here. Half-life, fission and fusion are not included in this topic overview.</div>
          `,
        },
        {
          title: "Alpha and beta decay",
          body: `
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
    q("p2","particle","What causes the random movement seen in Brownian motion?",["Gravity pulling visible particles down","Uneven collisions by smaller fluid particles","The visible particles expanding","A chemical reaction with air"],1,"Random collisions from much smaller fluid particles continually change the resultant force."),
    q("p3","particle","What is internal energy?",["Only the kinetic energy of the fastest particle","The energy transferred by heating each second","The total kinetic and potential energy of all particles","The temperature multiplied by the mass"],2,"Internal energy is the total kinetic and potential energy of the particles."),
    q("p4","particle","Which change of state is gas directly to solid?",["Sublimation","Deposition","Condensation","Freezing"],1,"Gas changing directly to solid is deposition."),
    q("p5","particle","During melting, what happens while the temperature stays constant?",["Particle kinetic energy steadily decreases","Energy changes particle separation and potential energy","All particles stop moving","The mass of the substance increases"],1,"The supplied energy changes arrangement and potential energy rather than temperature."),
    q("t1","thermal","What does temperature measure in the kinetic model?",["Total potential energy","Average kinetic energy of particles","Total internal energy","The number of particles"],1,"Temperature measures average particle kinetic energy."),
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
    exam("pe1","particle",4,"Explain how observing Brownian motion provides evidence for the kinetic model.",[
      mp("The suspended particle moves randomly or jerkily",[["random","move"],["jerky","move"],["irregular","path"]]),
      mp("Invisible fluid particles are in constant random motion",[["air","particle","random"],["fluid","particle","random"],["molecule","random","motion"]]),
      mp("The fluid particles collide with the visible particle",[["collid","visible","particle"],["hit","smoke","particle"]]),
      mp("Uneven collisions create a changing resultant force or direction",[["uneven","collision"],["resultant","force","chang"],["different","direction","collision"]]),
    ],"The visible particle moves in a random, jerky way because much smaller fluid particles, which are in constant random motion, collide unevenly with it. These changing collisions create a changing resultant force, providing evidence that the invisible fluid particles are moving."),
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
  ];

  const gameData = {
    particle: {
      title: "Particle Sort", colour: "#6554c0", icon: "●", unlock: 3,
      description: "Sort particle descriptions into solid, liquid or gas before your streak breaks.",
      cards: [
        ["Particles vibrate about fixed positions", "Solid"], ["Particles move rapidly in random directions", "Gas"],
        ["Particles are close together but can move past each other", "Liquid"], ["Has a fixed shape", "Solid"],
        ["Can be compressed easily", "Gas"], ["Has a fixed volume but takes the container's shape", "Liquid"],
      ],
    },
    thermal: {
      title: "Heat Transfer Match", colour: "#e56b2f", icon: "↟", unlock: 7,
      description: "Match each real situation to conduction, convection or radiation.",
      cards: [
        ["A metal spoon becomes hot in soup", "Conduction"], ["Warm air rises above a heater", "Convection"],
        ["Energy travels from the Sun to Earth", "Radiation"], ["A pan handle heats from the pan", "Conduction"],
        ["Water circulates as it boils", "Convection"], ["A shiny surface reduces infrared transfer", "Radiation"],
      ],
    },
    nuclear: {
      title: "Nuclear Decay Challenge", colour: "#17875f", icon: "⚛", unlock: 12,
      description: "Complete alpha and beta-decay changes without losing the nucleus.",
      cards: [
        ["U-238 emits alpha. What daughter forms?", ["Th-234", "Pa-238", "U-234", "Th-236"], 0],
        ["C-14 emits beta-minus. What daughter forms?", ["N-14", "B-14", "C-13", "N-13"], 0],
        ["What changes in alpha decay?", ["A -4, Z -2", "A same, Z +1", "A -2, Z -4", "A +4, Z +2"], 0],
        ["What changes in beta-minus decay?", ["A same, Z +1", "A -4, Z -2", "A +1, Z same", "A same, Z -1"], 0],
      ],
    },
  };

  let progress = loadProgress();
  const state = { view: "learn", module: "particle", checkIndex: 0, checkAnswered: null, examId: "pe1", activeGame: null, gameIndex: 0, gameScore: 0 };
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
  function renderLearn(){
    const m=modules[state.module];
    panel.innerHTML=heading(m.name,m.intro)+`<div class="lesson-grid">${m.lessons.map((l,i)=>`<article class="lesson-card"><button class="lesson-toggle" data-lesson="${i}" type="button" aria-expanded="false"><span>${l.title}</span><span class="chevron" aria-hidden="true">⌄</span></button><div class="lesson-body">${l.body}</div></article>`).join("")}</div>`;
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
    panel.innerHTML=heading("Exam Practice","Write a complete answer, then use the smart marker to check which physics points you included.","✎")+`<div class="exam-shell"><div class="exam-picker">${pool.map((q,i)=>`<button data-exam="${q.id}" class="${q.id===item.id?"active":""}" type="button">Question ${i+1}</button>`).join("")}</div><article class="question-card"><div class="question-meta"><span>${modules[state.module].name}</span><span class="mark-badge">${item.marks} marks</span></div><h4>${item.question}</h4><textarea class="answer-input" id="exam-answer" placeholder="Write your answer here..." aria-label="Your exam answer"></textarea><div class="control-row"><button class="primary-button" id="mark-answer" type="button">Check my answer</button><button class="secondary-button" id="clear-answer" type="button">Clear</button></div><div id="marker-output"></div></article><p class="provisional">The smart marker checks for required ideas and gives provisional feedback. Compare your wording with the model answer before deciding what to improve.</p></div>`;
    panel.querySelectorAll("[data-exam]").forEach(b=>b.addEventListener("click",()=>{state.examId=b.dataset.exam;renderExam();}));
    document.querySelector("#mark-answer").addEventListener("click",()=>markExam(item)); document.querySelector("#clear-answer").addEventListener("click",()=>{document.querySelector("#exam-answer").value="";document.querySelector("#marker-output").innerHTML="";});
  }
  function normalise(text){ return text.toLowerCase().replace(/[×*]/g," ").replace(/[⁻−–—]/g,"-").replace(/[,()=:]/g," ").replace(/\s+/g," ").trim(); }
  function pointHit(answer,point){ return point.tests.some(test=>test.every(term=>answer.includes(normalise(term)))); }
  function markExam(item){
    const raw=document.querySelector("#exam-answer").value.trim(); if(raw.length<8){toast("Write a fuller answer before checking.");return;}
    const answer=normalise(raw); const hits=item.points.map(p=>pointHit(answer,p)); const score=hits.filter(Boolean).length; const old=Number(progress.examBest[item.id]||0);
    if(score>old){ progress.examBest[item.id]=score; saveProgress(); toast(`Best score improved: +${score-old} XP`); }
    document.querySelector("#marker-output").innerHTML=`<div class="marker-result"><div class="score-line"><strong>${score} / ${item.marks}</strong><span class="provisional">provisional smart-marker score</span></div><div class="mark-points">${item.points.map((p,i)=>`<div class="mark-point ${hits[i]?"hit":"miss"}"><span aria-hidden="true">${hits[i]?"✓":"○"}</span><span>${hits[i]?"Included":"Add"}: ${p.label}</span></div>`).join("")}</div><div class="model-answer"><strong>Model answer</strong>${item.model}</div></div>`;
  }

  function renderGames(){
    const score=xp(); const unlocked=Object.entries(gameData).filter(([,g])=>score>=g.unlock).length;
    panel.innerHTML=`<div class="games-intro"><div><h3>Revision Arcade</h3><p>Correct science unlocks the games. Your best game scores stay on this device.</p></div><span class="mark-badge">${unlocked} of 3 unlocked</span></div><div class="game-grid">${Object.entries(gameData).map(([key,g])=>{const open=score>=g.unlock;return `<article class="game-card ${open?"":"locked"}" style="--game:${g.colour}"><span class="game-icon">${g.icon}</span><span class="lock-label">${open?`Best: ${progress.gameBest[key]||0}`:`🔒 ${g.unlock} XP`}</span><h4>${g.title}</h4><p>${g.description}</p><button class="${open?"primary-button":"secondary-button"}" data-game="${key}" type="button" ${open?"":"disabled"}>${open?"Play game":"Locked"}</button></article>`;}).join("")}</div><div id="game-stage"></div>`;
    panel.querySelectorAll("[data-game]").forEach(b=>b.addEventListener("click",()=>startGame(b.dataset.game)));
    if(state.activeGame && score>=gameData[state.activeGame].unlock) renderGameStage();
  }
  function startGame(key){ state.activeGame=key;state.gameIndex=0;state.gameScore=0;renderGames(); }
  function renderGameStage(){
    const stage=document.querySelector("#game-stage"); const g=gameData[state.activeGame]; const card=g.cards[state.gameIndex];
    if(!card){ finishGame();return; }
    let controls="";
    if(state.activeGame==="particle") controls=`<div class="particle-card">${card[0]}</div><div class="sort-bins">${["Solid","Liquid","Gas"].map(x=>`<button class="sort-bin" data-game-answer="${x}" type="button"><strong>${x}</strong><span>Choose this state</span></button>`).join("")}</div>`;
    else if(state.activeGame==="thermal") controls=`<div class="particle-card">${card[0]}</div><div class="match-grid">${["Conduction","Convection","Radiation"].map(x=>`<button class="match-button" data-game-answer="${x}" type="button">${x}</button>`).join("")}</div>`;
    else controls=`<div class="decay-equation">${card[0]}</div><div class="decay-options">${card[1].map((x,i)=>`<button class="match-button" data-game-answer="${i}" type="button">${x}</button>`).join("")}</div>`;
    stage.innerHTML=`<section class="game-stage"><div class="question-meta"><span>${g.title}</span><span>Round ${state.gameIndex+1} of ${g.cards.length} · Score ${state.gameScore}</span></div>${controls}<div class="game-feedback" id="game-feedback"></div></section>`;
    stage.scrollIntoView({behavior:"smooth",block:"start"}); stage.querySelectorAll("[data-game-answer]").forEach(b=>b.addEventListener("click",()=>answerGame(b.dataset.gameAnswer)));
  }
  function answerGame(value){
    const g=gameData[state.activeGame]; const card=g.cards[state.gameIndex]; const correct=state.activeGame==="nuclear"?Number(value)===card[2]:value===card[1];
    if(correct) state.gameScore++; document.querySelector("#game-feedback").textContent=correct?"Correct!":"Not this time — the correct answer was "+(state.activeGame==="nuclear"?card[1][card[2]]:card[1])+".";
    document.querySelectorAll("[data-game-answer]").forEach(b=>b.disabled=true);
    setTimeout(()=>{state.gameIndex++;renderGames();},850);
  }
  function finishGame(){
    const key=state.activeGame; progress.gameBest[key]=Math.max(Number(progress.gameBest[key]||0),state.gameScore); saveProgress();
    const stage=document.querySelector("#game-stage"); if(stage) stage.innerHTML=`<section class="game-stage"><h4>Game complete</h4><p>You scored ${state.gameScore} out of ${gameData[key].cards.length}.</p><button class="primary-button" id="play-again" type="button">Play again</button></section>`;
    document.querySelector("#play-again")?.addEventListener("click",()=>startGame(key));
  }

  document.querySelectorAll(".mode-tab").forEach(button=>button.addEventListener("click",()=>{state.view=button.dataset.view;state.activeGame=null;render();}));
  document.querySelectorAll(".module-button").forEach(button=>button.addEventListener("click",()=>{state.module=button.dataset.module;state.checkIndex=0;state.checkAnswered=null;state.examId=moduleExams()[0].id;render();}));
  function applyTheme(theme){ document.documentElement.dataset.theme=theme; themeToggle.textContent=theme==="dark"?"☀":"☾"; themeToggle.setAttribute("aria-label",theme==="dark"?"Use light theme":"Use dark theme"); }
  themeToggle.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="dark"?"light":"dark";applyTheme(next);try{localStorage.setItem(THEME_KEY,next);}catch{}});
  let storedTheme=null; try{storedTheme=localStorage.getItem(THEME_KEY);}catch{} applyTheme(storedTheme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
  render();
})();
