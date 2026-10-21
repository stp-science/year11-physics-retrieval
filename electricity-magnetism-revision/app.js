'use strict';
const sections = [
  {
    "id": "charge",
    "name": "Charge and fields",
    "short": "Particles, forces and charge",
    "icon": "＋ −",
    "intro": "Explain charge using electrons, and predict attraction and repulsion.",
    "lessons": [
      [
        "Charge and electric fields",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://ichef.bbci.co.uk/images/ic/480xn/p0b9ybrw.jpg\" alt=\"Balloon attracting hair after rubbing\"><figcaption>Static charge in action · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/zshqqfr\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>Protons have positive charge and electrons have negative charge of equal magnitude. A neutral object has equal amounts of positive and negative charge. Gaining electrons makes an object negative; losing electrons makes it positive. Protons stay in the nucleus when objects are charged.</p><p>Like charges repel; opposite charges attract. A charged object can also attract a neutral object because charge rearranges within it. An <strong>electric field</strong> is a region where a charge experiences a force without contact. Greater charge gives a stronger force; greater separation gives a weaker force.</p><section class=\"model\"><h4>Modelled example · Predict charge</h4><ol><li>A neutral rod has equal positive and negative charge.</li><li>Rubbing transfers electrons from a cloth onto the rod. The rod now has an excess of electrons.</li><li>The rod is negative and the cloth, having lost electrons, is positive.</li></ol><p class=\"model-finish\">The protons did not move between objects.</p></section><section class=\"video-block\" aria-label=\"Year 11 revision video\"><div class=\"video-copy\"><strong>Watch and revisit</strong><p>Year 11 Physics Static Electricity · Pause after the friction example and explain which way electrons move.</p></div><div class=\"video-frame\"><iframe loading=\"lazy\" src=\"https://www.youtube-nocookie.com/embed/d7_dMHwqpgM\" title=\"Year 11 Physics Static Electricity\" referrerpolicy=\"strict-origin-when-cross-origin\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></div><a class=\"video-fallback\" href=\"https://www.youtube.com/watch?v=d7_dMHwqpgM\" target=\"_blank\" rel=\"noopener noreferrer\">Open this video on YouTube ↗</a></section>"
      ],
      [
        "Charging by friction, conduction and induction",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://ichef.bbci.co.uk/images/ic/480x270/p0bh28l3.png\" alt=\"After rubbing: electrons move to the balloon, leaving the jumper positive and balloon negative\"><figcaption>Charging by friction · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/zshqqfr\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p><strong>Friction:</strong> rubbing two different insulators transfers electrons. One gains electrons and becomes negative; the other loses electrons and becomes positive. <strong>Conduction:</strong> a charged conductor touches another conductor, allowing electrons to flow and charge to be shared. <strong>Induction:</strong> a nearby charged object redistributes charge without touching. A conductor allows mobile electrons to move; in an insulator charges shift locally.</p><p>A negatively charged rod near neutral paper repels electrons slightly farther away, leaving the near side effectively positive. The nearer attraction can exceed the farther repulsion, so the paper moves toward the rod.</p><figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/zqhbg7h/large\" alt=\"Negative balloon beside a neutral wall, with positive charge induced on the closer side\"><figcaption>Charge separation explains attraction to a neutral object · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/zshqqfr\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><section class=\"model\"><h4>Modelled example · Explain attraction to neutral paper</h4><ol><li>The rod makes charges in the paper shift slightly; the paper stays neutral overall.</li><li>The near side has an induced opposite charge; the far side has an induced like charge.</li><li>The attractive force from the nearer side is greater than the repulsion from the farther side.</li></ol><p class=\"model-finish\">The paper moves towards the rod without first acquiring a net charge.</p></section>"
      ],
      [
        "Discharging, sparks and lightning",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://ichef.bbci.co.uk/images/ic/480xn/p09x5wfc.jpg\" alt=\"Spark between charged dome and earthed conductor\"><figcaption>A spark is a brief discharge across air · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/z4h94xs\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>Earthing provides a path for electrons to flow to or from the Earth until excess charge is reduced. A large potential difference can create a strong enough electric field to make normally insulating air conduct: a spark jumps the gap. In storms, charge separation in clouds induces opposite charge on the ground.</p><p><strong>Safety:</strong> never experiment with mains electricity or thunderstorms. In class, use the teacher's low voltage apparatus.</p><section class=\"model\"><h4>Modelled example · Explain a lightning strike</h4><ol><li>Charge separates in a storm cloud and induces the opposite charge on the ground.</li><li>The large charge difference creates a strong electric field across the air.</li><li>When the air becomes conducting, charge flows rapidly as a spark.</li></ol><p class=\"model-finish\">Lightning is a large electrostatic discharge.</p></section>"
      ],
      [
        "Charge, force and potential energy",
        "<p>Charge is measured in <strong>coulombs (C)</strong>. A proton has charge +1.60 × 10<sup>−19</sup> C and an electron −1.60 × 10<sup>−19</sup> C: equal size, opposite signs. Neutral means balanced charge, not no charged particles.</p><p>Electrostatic forces act without contact. Qualitatively, Coulomb’s law says more charge on either object means a stronger force, while greater distance means a weaker force. Compare the amount of charge and the separation to explain whether the force becomes stronger or weaker.</p><p>Electrical energy changes when charges move or are separated. Moving a charge towards a like charge requires work against repulsion and increases electric potential energy. Letting like charges separate lowers it. Moving opposite charges apart requires work against attraction; letting them approach lowers it. The electric force can do work as electric potential energy becomes movement or other forms of energy. <strong>Potential energy and voltage are different:</strong> voltage is energy transferred per unit charge.</p><section class=\"model\"><h4>Modelled example · Identify an unknown charge</h4><ol><li>Bring a known positive charge near the test object without touching.</li><li>Repulsion shows the test object is positive. Attraction alone is inconclusive because a neutral object can also be attracted.</li><li>Repeat with a known negative charge. Repulsion now shows the test object is negative.</li></ol><p class=\"model-finish\">Use repulsion with a known charge to identify the sign.</p></section>"
      ],
      [
        "Conductors, insulators and charge distribution",
        "<p>A conductor has mobile charge carriers; an insulator has no freely moving charge carriers under ordinary conditions. In a metal, electrons move throughout the material while the positive ions remain in place. Static electricity is a build-up of net charge; current electricity is a flow of charge, carried by electrons in metal wires.</p><p>Mobile electrons can move through a conductor. In an insulator, transferred charge stays mainly near where it was deposited.</p><p>Charging by friction separates charge; it does not create electrons. Charge cannot grow without limit: as charge accumulates, the electric field increasingly opposes further transfer, while leakage through air, moisture or a spark can discharge the object.</p><section class=\"model\"><h4>Modelled example · Share charge by conduction</h4><ol><li>A charged conductor touches a neutral conductor, providing a path for electrons.</li><li>For a negative conductor, electrons spread to the neutral one. For a positive conductor, electrons flow from the neutral one to it.</li><li>Charge redistributes until there is no potential difference driving further flow. Identical isolated spheres end with equal charge; different shapes and sizes need not.</li></ol><p class=\"model-finish\">Total charge is conserved. Redistribution reduces the system’s electric potential energy.</p></section>"
      ],
      [
        "Induction and lifting neutral paper",
        "<p>Polarisation separates charge within a neutral object without changing its total charge. Mobile electrons in a conductor can move across it; in an insulator, bound charges shift only slightly within atoms or molecules. Under comparable conditions this allows greater charge separation, and often stronger attraction, in a conductor.</p><p>To leave a conductor with a net induced charge: bring a charged rod near it, connect the conductor to Earth, <strong>disconnect Earth while the rod is still present</strong>, then remove the rod. A negative rod repels electrons to Earth and leaves the conductor positive; a positive rod draws electrons from Earth and leaves it negative. Without earthing, the isolated conductor is polarised but stays neutral overall.</p><p>A paper scrap lifts from the table when the upward electrostatic force is greater than its downward weight: <strong>F<sub>e</sub> &gt; F<sub>g</sub></strong>. The forces are unbalanced, so it accelerates upwards.</p>"
      ],
      [
        "Earthing, electric shocks and discharge between materials",
        "<p>Earth is a very large charge reservoir. A conducting connection lets electrons leave a negatively charged object or enter a positively charged object. This reduces excess charge and the system’s electric potential energy.</p><p>A charged person can induce charge separation in a neutral metal object. As the finger approaches, the gap decreases and the electric field grows. A sufficient potential difference ionises the normally poorly conducting air, so charge moves rapidly across the gap as a spark: an electric shock.</p><p>In a storm, charge separation and induced charge can produce a large potential difference between a cloud and the ground. If the air becomes conducting, charge flows as a lightning discharge.</p><p>A spark can transfer charge between two insulators or between an insulator and a conductor. On an insulator it mainly changes charge near the discharge point because charge elsewhere cannot move freely. A conductor can redistribute charge throughout itself, allowing a more complete discharge, especially if earthed. An isolated conductor can still retain net charge after a spark.</p>"
      ]
    ],
    "checks": [
      [
        "A neutral object gains electrons. What charge does it acquire, and why?",
        "Negative: it now has more electrons than protons."
      ],
      [
        "Why can a charged balloon attract a neutral paper scrap?",
        "It polarises the paper; the opposite charge on the closer side gives a greater attractive force than repulsion from the farther side."
      ],
      [
        "What moves when a plastic rod is charged by rubbing?",
        "Electrons transfer between the materials; protons do not move from their nuclei."
      ],
      [
        "How does earthing discharge a positively charged metal object?",
        "Electrons flow from the Earth to the object until its charge is reduced."
      ],
      [
        "How much charge does one electron have, and in what unit?",
        "−1.60 × 10⁻¹⁹ C, measured in coulombs. A proton has equal magnitude with positive sign."
      ],
      [
        "How can you distinguish a positive object from a neutral object using a known positive charge?",
        "Repulsion proves the object is positive. Attraction alone does not: a neutral object can be polarised and attracted."
      ],
      [
        "What happens to electrostatic force as two charged objects move farther apart?",
        "It becomes weaker, with the charges unchanged."
      ],
      [
        "Why does pushing two like charges closer together increase potential energy?",
        "Work is done against their repulsive force, increasing the system’s electric potential energy."
      ],
      [
        "Why can rubbing an insulator not build up unlimited charge?",
        "Increasing charge opposes further transfer; leakage or air breakdown can discharge it."
      ],
      [
        "What must be true for neutral paper to lift towards a rod above it?",
        "The upward electrostatic force exceeds the paper’s weight: Fe > Fg."
      ],
      [
        "How is charging by induction different from polarising an isolated conductor?",
        "Polarisation only redistributes existing charge. Earthing while the rod is present, then disconnecting Earth before removing the rod, can leave a net charge."
      ],
      [
        "Why does a conductor usually discharge more completely than an insulator?",
        "Mobile electrons redistribute throughout the conductor; in an insulator charge away from the spark site cannot readily reach it."
      ],
      [
        "How does Earth discharge a negatively charged object?",
        "Excess electrons flow from the object to Earth through a conducting connection."
      ],
      [
        "What happens to electric potential energy as opposite charges move closer together?",
        "It decreases. The attractive electrostatic force does work as the charges approach."
      ],
      [
        "Compare charge separation in a neutral conductor and a neutral insulator near a charged rod.",
        "Mobile electrons move across the conductor, allowing greater charge separation. In an insulator, bound charges shift only locally. Under comparable conditions the conductor can experience stronger attraction."
      ],
      [
        "Why does sharing charge by conduction reduce potential energy?",
        "Electrons flow between the charged and neutral conductors because of a potential difference. Charge redistributes, reducing the system’s potential energy until no potential difference drives further flow."
      ],
      [
        "Explain an electric shock as a charged finger approaches a neutral metal object.",
        "The finger induces charge separation in the metal. A shorter gap strengthens the field. If the field ionises the normally poorly conducting air, rapid charge transfer across the gap produces a spark."
      ]
    ],
    "resource": "static"
  },
  {
    "id": "circuits",
    "name": "Circuits and quantities",
    "short": "Current, voltage and resistance",
    "icon": "⏚",
    "intro": "Describe a complete DC circuit and how to measure its electrical quantities.",
    "lessons": [
      [
        "DC current and potential difference",
        "<img class=\"diagram\" src=\"./circuit.svg\" alt=\"Ammeter in series and voltmeter in parallel with a lamp\"><p>A closed conducting loop is needed for current to flow. Current is measured in amperes (A). A cell or battery provides a potential difference, measured in volts (V). Resistance opposes current and is measured in ohms (Ω).</p><p>Components transfer electrical energy to other forms, such as light, heat or movement. Current is not used up as it passes through a component.</p>"
      ],
      [
        "Measuring in circuits",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/zyg23k7/large\" alt=\"BBC circuit showing ammeter in series and voltmeter across a resistor\"><figcaption>Meter positions in a measurement circuit · <a href=\"https://www.bbc.co.uk/bitesize/guides/zpdtv9q/revision/5\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>An ammeter goes <strong>in series</strong> so current flows through it. It is designed to have very low resistance. A voltmeter goes <strong>in parallel</strong> across a component and has very high resistance. Use the correct circuit symbols, draw straight wires and connect every branch clearly. An unintended very low resistance path may short circuit a component and cause a large current.</p><section class=\"model\"><h4>Modelled example · Place meters around a lamp</h4><ol><li>To measure the current through a lamp, place the ammeter in the same conducting path as the lamp.</li><li>To measure potential difference, connect the voltmeter to the two ends of the lamp.</li><li>Check the ammeter is in series and the voltmeter is in parallel.</li></ol><p class=\"model-finish\">An ammeter has low resistance; a voltmeter has high resistance.</p></section>"
      ],
      [
        "Ohm’s law and power",
        "<p class=\"formula\">V = I × R &nbsp;&nbsp; P = V × I</p><p>Use voltage V in volts (V), current I in amperes (A), resistance R in ohms (Ω), and power P in watts (W). Power is the rate of energy transfer.</p><section class=\"model\"><h4>Calculate voltage</h4><ol><li>A current of 2 A flows through a 4 Ω resistor.</li><li>Use V = I × R.</li><li>V = 2 × 4 = 8 V.</li></ol></section><section class=\"model\"><h4>Calculate current</h4><ol><li>A 6 Ω resistor is connected across 18 V.</li><li>Use I = V ÷ R.</li><li>I = 18 ÷ 6 = 3 A.</li></ol></section><section class=\"model\"><h4>Calculate power</h4><ol><li>A device draws 0.50 A from a 12 V supply.</li><li>Use P = V × I.</li><li>P = 12 × 0.50 = 6 W.</li></ol></section>"
      ],
      [
        "What changes current, resistance and power?",
        "<p class=\"formula\">I = V ÷ R &nbsp;&nbsp; P = V × I</p><p>At the same resistance, increasing the supply voltage increases current. At the same supply voltage, increasing resistance reduces current.</p><p>Power describes how quickly energy is transferred. Use P = V × I to calculate the power of a component from its voltage and current.</p><p>Draw a complete circuit using standard symbols. Connect an ammeter in series with the component and a voltmeter in parallel across it. Opening a switch breaks the circuit and stops current through that path.</p>"
      ]
    ],
    "checks": [
      [
        "A 12 V supply is connected across a 4 Ω fixed resistor. Find the current.",
        "I = V/R = 12/4 = 3 A."
      ],
      [
        "Where should a voltmeter go to measure voltage across a lamp?",
        "In parallel with the lamp."
      ],
      [
        "At fixed resistance, what happens to current if supply voltage doubles?",
        "It doubles, because I = V/R."
      ],
      [
        "Why does opening the switch make a lamp go out in a series circuit?",
        "The circuit is broken, so current cannot flow through the lamp."
      ]
    ],
    "resource": "circuits"
  },
  {
    "id": "networks",
    "name": "Series and parallel",
    "short": "Loops, junctions and power",
    "icon": "⌁",
    "intro": "Apply current and voltage rules to simple series and parallel circuits.",
    "lessons": [
      [
        "Series circuits  one path",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/zwc7pv4/large\" alt=\"BBC photograph and circuit diagram showing two lamps in series\"><figcaption>Follow the single path through both lamps · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/zs3htrd\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>In a <strong>series circuit</strong>, charge has only one route around the loop. Work through the three quantities separately:</p><div class=\"rule-grid\"><section class=\"rule-card\"><h4>Current  I</h4><p class=\"rule-main\">The <strong>same current</strong> flows through every component: I₁ = I₂ = I<sub>supply</sub>.</p><p><strong>How to measure:</strong> Put an <strong>ammeter in series</strong>, in the path you want to measure. Move it before or after either component: the reading is the same.</p><p><strong>Use it:</strong> If one ammeter reads 2 A, another anywhere in the same series loop reads 2 A.</p></section><section class=\"rule-card\"><h4>Voltage  V</h4><p class=\"rule-main\">The supply potential difference is <strong>shared</strong> between components: V<sub>supply</sub> = V₁ + V₂.</p><p><strong>How to measure:</strong> Put a <strong>voltmeter across</strong> the two terminals of one component. Move it across the supply to read the total, or across each resistor to read its share.</p><p><strong>Use it:</strong> If the supply is 12 V and one component has 4 V across it, the other has 8 V.</p></section><section class=\"rule-card\"><h4>Resistance  R</h4><p class=\"rule-main\">For fixed resistors, the total <strong>adds</strong>: R<sub>total</sub> = R₁ + R₂. More resistance means less current at a fixed supply voltage.</p><p><strong>How to measure:</strong> Measure the current through a resistor and the voltage across <em>that same resistor</em>; calculate its resistance using R = V ÷ I.</p><p><strong>Use it:</strong> A 2 Ω and a 4 Ω resistor in series have 6 Ω total.</p></section></div><section class=\"model\"><h4>Find a missing voltage</h4><ol><li>Two lamps are connected in series across a 12 V supply.</li><li>The voltage across the first lamp is 5 V.</li><li>The voltage across the second lamp is 12 − 5 = 7 V.</li></ol><p>Check: 5 V + 7 V = 12 V.</p></section><section class=\"video-block\" aria-label=\"Year 11 revision video\"><div class=\"video-copy\"><strong>Watch and revisit</strong><p>Year 11 Physics Series Circuits · Listen for the current, voltage and resistance rules in order.</p></div><div class=\"video-frame\"><iframe loading=\"lazy\" src=\"https://www.youtube-nocookie.com/embed/Hk4JEB5DITw\" title=\"Year 11 Physics Series Circuits\" referrerpolicy=\"strict-origin-when-cross-origin\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></div><a class=\"video-fallback\" href=\"https://www.youtube.com/watch?v=Hk4JEB5DITw\" target=\"_blank\" rel=\"noopener noreferrer\">Open this video on YouTube ↗</a></section>"
      ],
      [
        "Parallel circuits  separate paths",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/zq9msbk/large\" alt=\"BBC photograph and circuit diagram showing two lamps in parallel\"><figcaption>Each branch has its own path · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/z34yf82\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>In a <strong>parallel circuit</strong>, current has a choice of paths at a junction. Branches connected between the same two points share a potential difference. Work through the three quantities separately:</p><div class=\"rule-grid\"><section class=\"rule-card\"><h4>Current  I</h4><p class=\"rule-main\">The supply current <strong>splits</strong> at a junction and recombines: I<sub>supply</sub> = I₁ + I₂. It is not used up.</p><p><strong>How to measure:</strong> Place an <strong>ammeter before the junction</strong> for total current, or <strong>inside one branch</strong> for that branch current. Never connect an ammeter across a component.</p><p><strong>Use it:</strong> If the branches carry 1 A and 2 A, the supply ammeter reads 3 A.</p></section><section class=\"rule-card\"><h4>Voltage  V</h4><p class=\"rule-main\">Each complete branch across the same two supply points has the <strong>same voltage</strong>: V₁ = V₂ = V<sub>supply</sub>.</p><p><strong>How to measure:</strong> Place a <strong>voltmeter across</strong> each branch, or across the supply. Its probes must touch the two ends of the part being measured.</p><p><strong>Use it:</strong> Across a 6 V supply, each complete branch has 6 V, not 3 V.</p></section><section class=\"rule-card\"><h4>Resistance  R</h4><p class=\"rule-main\">The equivalent resistance is <strong>less than either branch</strong>. Adding a branch lowers the total because there is an additional conducting path.</p><p><strong>How to measure:</strong> Measure supply voltage and total supply current, then use R<sub>total</sub> = V<sub>supply</sub> ÷ I<sub>supply</sub>. For one branch use that branch voltage and current.</p><p><strong>Use it:</strong> At 6 V, branch currents of 1 A and 2 A give Rtotal = 6 ÷ 3 = 2 Ω.</p></section></div><figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/zp9x6g8/large\" alt=\"BBC junction diagram with 5 A splitting into 3 A and 2 A\"><figcaption>Current entering a junction equals current leaving · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgy39j6/articles/z34yf82\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><section class=\"model\"><h4>Find a missing branch current</h4><ol><li>The total current before a junction is 1.8 A.</li><li>One branch carries 0.6 A.</li><li>The other branch carries 1.8 − 0.6 = 1.2 A.</li></ol><p>Each complete branch directly across a 6 V supply has 6 V.</p></section><section class=\"video-block\" aria-label=\"Year 11 revision video\"><div class=\"video-copy\"><strong>Watch and revisit</strong><p>Year 11 Physics Parallel Circuits · Focus on the meter location and what its reading represents.</p></div><div class=\"video-frame\"><iframe loading=\"lazy\" src=\"https://www.youtube-nocookie.com/embed/GIvE5Zlpea8\" title=\"Year 11 Physics Parallel Circuits\" referrerpolicy=\"strict-origin-when-cross-origin\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></div><a class=\"video-fallback\" href=\"https://www.youtube.com/watch?v=GIvE5Zlpea8\" target=\"_blank\" rel=\"noopener noreferrer\">Open this video on YouTube ↗</a></section>"
      ],
      [
        "Series and parallel compared",
        "<p>Choose the rule by tracing the paths before you calculate. Use a voltmeter <strong>across</strong> what you want to measure and an ammeter <strong>in</strong> the path whose current you want.</p><div class=\"comparison-wrap\"><table class=\"comparison\"><thead><tr><th scope=\"col\">Quantity</th><th scope=\"col\">Series  one path</th><th scope=\"col\">Parallel  branches</th></tr></thead><tbody><tr><th scope=\"row\">Current</th><td>Same through every component.<br>I₁ = I₂ = I<sub>supply</sub></td><td>Splits at junctions.<br>I<sub>supply</sub> = I₁ + I₂</td></tr><tr><th scope=\"row\">Voltage</th><td>Shared between components.<br>V<sub>supply</sub> = V₁ + V₂</td><td>Same across complete branches connected to the supply.<br>V₁ = V₂ = V<sub>supply</sub></td></tr><tr><th scope=\"row\">Resistance</th><td>Add the fixed resistors.<br>R<sub>total</sub> = R₁ + R₂</td><td>Total is smaller than the smallest branch.<br>Use R<sub>total</sub> = V<sub>supply</sub> ÷ I<sub>supply</sub> after finding branch currents.</td></tr></tbody></table></div>"
      ]
    ],
    "checks": [
      [
        "In a series loop an ammeter reads 0.35 A before the first lamp. What will it read after the second lamp?",
        "0.35 A: current is the same everywhere in a single series path."
      ],
      [
        "A 12 V supply has two series lamps. A voltmeter across one reads 5 V. What is the voltage across the other?",
        "7 V: the voltage drops add to 12 V."
      ],
      [
        "Two resistors of 3 Ω and 5 Ω are in series. Find the total resistance.",
        "3 + 5 = 8 Ω."
      ],
      [
        "Two parallel lamps each connect directly across an ideal 9 V battery. What does a voltmeter across either lamp read?",
        "9 V across each branch."
      ],
      [
        "A supply ammeter reads 1.2 A before a junction. One branch ammeter reads 0.5 A. Find the current in the other branch.",
        "0.7 A: the branch currents add to the supply current."
      ],
      [
        "Two parallel branches have equal resistance. How is current shared?",
        "Equally. If their resistances differ, the lower-resistance branch carries more current at the same branch voltage."
      ],
      [
        "What happens when a component is added in series at fixed supply voltage?",
        "Total resistance increases and supply current decreases."
      ]
    ],
    "resource": "circuits"
  },
  {
    "id": "magnetism",
    "name": "Magnetic fields",
    "short": "Poles, lines and Earth",
    "icon": "N S",
    "intro": "Read and draw magnetic field diagrams and distinguish permanent from induced magnetism.",
    "lessons": [
      [
        "Magnetic materials and interactions",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://ichef.bbci.co.uk/images/ic/976xn/p0b2srvk.jpg.webp\" alt=\"BBC photograph of bar magnet with marked north and south poles\"><figcaption>Every bar magnet has two poles · <a href=\"https://www.bbc.co.uk/bitesize/topics/z3sf8p3/articles/zh766g8\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>Like magnetic poles repel; unlike poles attract. A magnet can attract an unmagnetised ferromagnetic object because it induces magnetism in it. Iron, nickel and cobalt are ferromagnetic. An induced magnet has both poles while magnetised; the near end becomes the opposite pole to the approaching magnet, so attraction occurs regardless of which pole approaches. Some materials retain magnetism after the external field is removed; others lose most of it.</p><section class=\"model\"><h4>Modelled example · A north pole approaches an iron nail</h4><ol><li>The approaching north pole induces a south pole at the near end of the nail.</li><li>A north pole appears at the far end while the nail is magnetised.</li><li>The nearer unlike poles attract.</li></ol><p class=\"model-finish\">An induced magnet has both poles; attraction alone does not prove an object is a permanent magnet.</p></section><section class=\"video-block\" aria-label=\"Year 11 revision video\"><div class=\"video-copy\"><strong>Watch and revisit</strong><p>Year 11 Physics Permanent and Induced Magnets · Pause and explain why an induced magnet is attracted by either approaching pole.</p></div><div class=\"video-frame\"><iframe loading=\"lazy\" src=\"https://www.youtube-nocookie.com/embed/bHLsHjRMAsU\" title=\"Year 11 Physics Permanent and Induced Magnets\" referrerpolicy=\"strict-origin-when-cross-origin\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></div><a class=\"video-fallback\" href=\"https://www.youtube.com/watch?v=bHLsHjRMAsU\" target=\"_blank\" rel=\"noopener noreferrer\">Open this video on YouTube ↗</a></section>"
      ],
      [
        "Magnetic field lines",
        "<figure class=\"bbc-figure\"><img loading=\"lazy\" src=\"https://bam.files.bbci.co.uk/bam/live/content/z296yrd/large\" alt=\"BBC magnetic field diagram with arrows from north to south outside a bar magnet\"><figcaption>Field direction outside the magnet is north to south · <a href=\"https://www.bbc.co.uk/bitesize/topics/zgw7vj6/articles/zc8qfdm\" target=\"_blank\" rel=\"noopener noreferrer\">BBC Bitesize ↗</a></figcaption></figure><p>A magnetic field is a region where a magnetic object experiences a force. Outside a bar magnet, field lines go from <strong>north to south</strong>; they form closed loops when the path inside the magnet is included. Closer line spacing indicates a stronger field, usually near the poles. The field weakens with distance. Straight, parallel, equally spaced lines indicate an approximately uniform field. Earth also has a magnetic field, which influences a compass needle.</p><section class=\"model\"><h4>Modelled example · Read a field diagram</h4><ol><li>Follow the arrows outside the magnet: they leave north and enter south.</li><li>Look for closely spaced lines near the poles: the field is stronger there.</li><li>If lines are straight, parallel and equally spaced, the field is approximately uniform.</li></ol><p class=\"model-finish\">Field lines show direction and relative strength, not the path a magnet physically travels.</p></section><section class=\"video-block\" aria-label=\"Year 11 revision video\"><div class=\"video-copy\"><strong>Watch and revisit</strong><p>Year 11 Physics Magnets and Field Lines · Practise adding arrowheads in the right direction.</p></div><div class=\"video-frame\"><iframe loading=\"lazy\" src=\"https://www.youtube-nocookie.com/embed/3elpPfyHV0E\" title=\"Year 11 Physics Magnets and Field Lines\" referrerpolicy=\"strict-origin-when-cross-origin\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></div><a class=\"video-fallback\" href=\"https://www.youtube.com/watch?v=3elpPfyHV0E\" target=\"_blank\" rel=\"noopener noreferrer\">Open this video on YouTube ↗</a></section>"
      ],
      [
        "Drawing Earth’s field and uniform fields",
        "<p>Magnetic fields are produced by permanent or induced magnets and by electric currents (moving charges). Ferromagnetic iron, nickel and cobalt can become magnetised when magnetic domains become more aligned.</p><p>To draw a bar magnet field, label N and S, draw curved closed field lines, and add arrows from N to S outside the magnet. Use closer spacing near the poles and wider spacing farther away. Lines never cross. A non-uniform field changes strength or direction; a uniform field is shown by straight, parallel, equally spaced lines, such as approximately between broad opposite poles.</p><p>To sketch Earth’s field, draw Earth with its geographical north at the top. Draw a dipole pattern like a bar magnet, with arrows outside Earth entering near geographical north and leaving near geographical south. The region near geographical north behaves like a magnetic <strong>south</strong> pole, attracting the north-seeking end of a compass. Earth’s magnetic and geographical axes are tilted relative to one another.</p><section class=\"model\"><h4>Modelled example · Draw Earth’s magnetic field</h4><ol><li>Draw and label geographical north and south on a circle representing Earth.</li><li>Sketch curved field lines looping around Earth; keep them closer together in the polar regions.</li><li>Add arrows entering near geographical north and leaving near geographical south.</li><li>Draw a compass tangent to a field line with its north-seeking end pointing along the field arrow.</li></ol><p class=\"model-finish\">This is an approximate dipole model, not an exact map of Earth’s changing field.</p></section>"
      ]
    ],
    "checks": [
      [
        "A north pole approaches an unmagnetised iron nail. What is induced at the near end?",
        "A south pole; the nail is attracted."
      ],
      [
        "Does an induced magnet have only one pole?",
        "No. It has north and south poles while magnetised."
      ],
      [
        "What do closely spaced magnetic field lines show?",
        "A stronger magnetic field."
      ],
      [
        "In which direction do field lines point outside a bar magnet?",
        "From north to south."
      ],
      [
        "Name two sources of magnetic fields.",
        "Magnets and electric currents (moving charges)."
      ],
      [
        "How should field lines be drawn for a uniform magnetic field?",
        "Straight, parallel and equally spaced, with arrows in the same direction."
      ],
      [
        "Which way do Earth’s external field lines point near geographical north?",
        "Into Earth near geographical north, which behaves like a magnetic south pole."
      ]
    ],
    "resource": "magnet"
  },
  {
    "id": "electromagnet",
    "name": "Current and magnetism",
    "short": "Wires, solenoids and uses",
    "icon": "◎",
    "intro": "Describe fields around wires and solenoids, calculate field strength, and explain electromagnet applications.",
    "lessons": [
      [
        "Field around a wire",
        "<svg class=\"diagram\" viewBox=\"0 0 600 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Concentric circular field lines around a wire; arrows are omitted\"><g fill=\"none\" stroke=\"#167aa3\" stroke-width=\"3\"><circle cx=\"300\" cy=\"150\" r=\"35\"/><circle cx=\"300\" cy=\"150\" r=\"75\"/><circle cx=\"300\" cy=\"150\" r=\"125\"/></g><circle cx=\"300\" cy=\"150\" r=\"8\" fill=\"#18344b\"/><text x=\"300\" y=\"310\" text-anchor=\"middle\" font-size=\"21\" fill=\"#18344b\">Wire viewed end-on; field lines form circles</text></svg><p>A straight wire carrying a current produces concentric circular magnetic field lines centred on the wire. The field becomes weaker farther from the wire. Increasing the current makes the field stronger.</p>"
      ],
      [
        "Solenoids and electromagnets",
        "<p>A solenoid is a coil of wire. Its magnetic field resembles the field of a bar magnet, with a north pole and a south pole. Inside a long solenoid, the field is approximately uniform.</p><p>Increase the current, increase the number of turns over the same length, or add a soft iron core to strengthen the electromagnet.</p><p>Soft iron becomes magnetised when the current is switched on and loses most of its magnetism when the current stops. This lets an electromagnet attract and release an iron armature in a bell or door lock.</p>"
      ],
      [
        "Electromagnets and electric bells",
        "<p>In an electric bell, the electromagnet attracts an iron armature. A soft iron core strengthens the field and loses most of its magnetism when current stops.</p><section class=\"model\"><h4>Explain a repeating electric bell</h4><ol><li>Closing the switch lets current flow through the coil, magnetising the core.</li><li>The electromagnet attracts the armature and the striker hits the bell.</li><li>The armature's movement breaks the contact, opening the circuit.</li><li>The current stops and the magnetic pull weakens.</li><li>A spring returns the armature, remaking contact so the cycle repeats.</li></ol></section><p>A door lock uses magnetic attraction to move an iron armature or latch. Whether switching on locks or unlocks it depends on the mechanism.</p>"
      ],
      [
        "Calculate magnetic field strength: B = KI/d",
        "<p class=\"formula\">B = KI/d</p><p>Use this equation for the magnetic field around a <strong>long straight current carrying wire</strong> in air. B is magnetic field strength in tesla (T); I is current in amperes (A); d is the perpendicular distance from the centre of the wire in metres (m). Use <strong>K = 2.0 × 10<sup>−7</sup> T m/A</strong>.</p><p>Convert distances before substituting: 1 cm = 0.01 m and 1 mm = 0.001 m. Give B in T, or convert using 1 mT = 10<sup>−3</sup> T and 1 μT = 10<sup>−6</sup> T.</p><p>Rearrange to find <strong>I = Bd/K</strong> or <strong>d = KI/B</strong>. At fixed distance, doubling current doubles B. At fixed current, doubling distance halves B: B is inversely proportional to distance. This straight-wire equation is not the equation for the field inside a solenoid.</p><section class=\"model\"><h4>Modelled example · Calculate B</h4><ol><li>A long straight wire carries 4.0 A. Find the field 5.0 cm from its centre.</li><li>Convert d = 5.0 cm = 0.050 m.</li><li>B = KI/d = (2.0 × 10⁻⁷ × 4.0)/0.050.</li><li>B = 1.6 × 10⁻⁵ T = 16 μT.</li></ol><p class=\"model-finish\">Divide by distance in metres, not by the wire length.</p></section><section class=\"model\"><h4>Modelled example · Calculate current</h4><ol><li>At d = 0.020 m, the field is 3.0 × 10⁻⁵ T.</li><li>Rearrange B = KI/d to I = Bd/K.</li><li>I = (3.0 × 10⁻⁵ × 0.020)/(2.0 × 10⁻⁷) = 3.0 A.</li></ol><p class=\"model-finish\">Use brackets around numerator and denominator.</p></section><section class=\"model\"><h4>Modelled example · Calculate distance</h4><ol><li>A wire carries 5.0 A and produces B = 2.0 × 10⁻⁵ T.</li><li>Rearrange to d = KI/B.</li><li>d = (2.0 × 10⁻⁷ × 5.0)/(2.0 × 10⁻⁵) = 0.050 m = 5.0 cm.</li></ol><p class=\"model-finish\">d is the shortest distance from the wire to the observation point.</p></section>"
      ]
    ],
    "checks": [
      [
        "Give two ways to strengthen a solenoid electromagnet.",
        "Increase current; increase number of turns per unit length; add a suitable soft iron core (any two)."
      ],
      [
        "Why can an electromagnet operate a door lock remotely?",
        "Switching current on or off changes its magnetic field, which moves an iron armature or latch."
      ],
      [
        "Why does an electric bell repeatedly stop and restart its current?",
        "The attracted armature breaks the contact; the field weakens and a spring returns it, remaking the contact."
      ],
      [
        "State B = KI/d and the meaning and unit of each symbol.",
        "B is field strength in T; I is current in A; d is perpendicular distance from the wire’s centre in m; K = 2.0 × 10⁻⁷ T m/A."
      ],
      [
        "A wire carries 3.0 A. Calculate B at 2.0 cm from its centre.",
        "d = 0.020 m. B = (2.0 × 10⁻⁷ × 3.0)/0.020 = 3.0 × 10⁻⁵ T = 30 μT."
      ],
      [
        "B = 4.0 × 10⁻⁵ T at d = 0.030 m. Calculate the current.",
        "I = Bd/K = (4.0 × 10⁻⁵ × 0.030)/(2.0 × 10⁻⁷) = 6.0 A."
      ],
      [
        "A 2.0 A wire produces B = 1.0 × 10⁻⁵ T. Calculate the distance.",
        "d = KI/B = (2.0 × 10⁻⁷ × 2.0)/(1.0 × 10⁻⁵) = 0.040 m = 4.0 cm."
      ],
      [
        "What happens to B if current doubles at the same distance?",
        "B doubles because B = KI/d is directly proportional to I when d is fixed."
      ],
      [
        "What happens to B if distance doubles at the same current?",
        "B halves because B = KI/d is inversely proportional to d when I is fixed."
      ],
      [
        "Current doubles and distance doubles. What happens to B?",
        "B stays the same: the factor of two in the numerator cancels the factor of two in the denominator."
      ],
      [
        "What is the shape of the field lines around a straight wire carrying current?",
        "Concentric circles centred on the wire."
      ]
    ],
    "resource": "magnet"
  }
];
const exam = [
  [
    "A neutral plastic rod is rubbed with a cloth. Electrons move from the cloth to the rod. State the charge on each and explain why. [3]",
    "The rod gains electrons and becomes negative (1). The cloth loses electrons and becomes positive (1). Protons remain in the nuclei (1).",
    "charge"
  ],
  [
    "A charged rod attracts small neutral pieces of paper. Explain this observation using induced charge and distance. [4]",
    "Charge is redistributed or polarised in the paper (1). The nearer side has opposite charge to the rod (1). The farther side has like charge (1). The attraction is stronger at the smaller separation than the repulsion, giving a net force toward the rod (1).",
    "charge"
  ],
  [
    "Explain how a cloud and ground can produce a lightning strike. Include charge separation, induced charge and the role of air. [4]",
    "Charge separates in the cloud (1), inducing opposite charge on the ground (1). The large potential difference produces a strong electric field (1), which ionises the air so charge can flow as a spark (1).",
    "charge"
  ],
  [
    "A 9.0 V supply is connected across a fixed 3.0 Ω resistor. Calculate the current and the power transferred. Show working. [4]",
    "I = V/R = 9.0/3.0 = 3.0 A (2). P = VI = 9.0 × 3.0 = 27 W (2).",
    "circuits"
  ],
  [
    "Describe how to connect an ammeter and voltmeter to measure the current through and potential difference across a lamp. Explain the resistance of each meter. [4]",
    "Ammeter in series (1) with very low resistance (1). Voltmeter in parallel across the lamp (1) with very high resistance (1).",
    "circuits"
  ],
  [
    "Two parallel branches contain resistors of 6 Ω and 3 Ω. Each branch is directly across an ideal 6 V supply. Find each branch current and the total supply current. [4]",
    "Each branch is at 6 V (1). I6Ω = 6/6 = 1 A (1). I3Ω = 6/3 = 2 A (1). Total = 3 A (1).",
    "networks"
  ],
  [
    "An iron nail is attracted by both ends of a bar magnet. Explain why this does not prove the nail is a permanent magnet. State a test that would show the nail is a magnet. [4]",
    "The field induces magnetism in the nail (1). Its near end becomes the opposite pole, so either end attracts (1). Bring a known pole of a magnet toward both ends of the nail (1); repulsion at one end would show it has a fixed pole and is magnetised (1).",
    "magnetism"
  ],
  [
    "Describe the pattern and direction of field lines around a bar magnet. Explain how the diagram shows field strength. [3]",
    "Lines emerge from north and enter south outside the magnet (1). Lines curve around and do not cross (1). Closer spacing near poles shows a stronger field (1).",
    "magnetism"
  ],
  [
    "A door lock uses a solenoid with an iron core. Explain how switching on the current releases the latch and give two ways to increase the pull. [5]",
    "Current produces a magnetic field around the coil (1). The iron core becomes magnetised and strengthens the field (1). Magnetic attraction moves the iron armature/latch (1). Increase current (1) and increase turns per unit length (1).",
    "electromagnet"
  ],
  [
    "Explain how a neutral conductor can be left positively charged using a negatively charged rod without touching it. [4]",
    "Bring the rod near to repel electrons (1). Earth the conductor so electrons leave (1). Remove the Earth connection while the rod is present (1). Remove the rod; the electron deficit leaves positive charge (1).",
    "charge"
  ],
  [
    "A charged rod above a neutral paper scrap causes it to lift. Explain the charge separation and force condition. [4]",
    "The paper is polarised (1). Opposite charge is nearer the rod (1), giving stronger attraction than the farther repulsion (1). The upward electrostatic force exceeds weight (1).",
    "charge"
  ],
  [
    "Explain why a spark between two charged insulators may leave more charge behind than a spark involving an earthed conductor. [3]",
    "Charges cannot move freely through the insulators (1), so discharge is mainly local (1). Mobile electrons in the conductor can redistribute and flow to or from Earth (1).",
    "charge"
  ],
  [
    "The current through a fixed 4 Ω resistor increases from 1 A to 2 A. Calculate its voltage and power before and after. [4]",
    "Before: V = 1 × 4 = 4 V (1), P = 4 × 1 = 4 W (1). After: V = 2 × 4 = 8 V (1), P = 8 × 2 = 16 W (1).",
    "circuits"
  ],
  [
    "Sketch Earth’s magnetic field and label geographical north and south. State the direction of the external field near geographical north. [3]",
    "Dipole-like curved lines around Earth (1), labelled geographical poles with lines more concentrated near polar regions (1), and arrows entering near geographical north and leaving near geographical south (1).",
    "magnetism"
  ],
  [
    "Explain the repeating action of an electric bell. [4]",
    "Current magnetises the core (1). It attracts the armature, striking the bell and breaking contact (1). Current stops and the magnetic pull weakens (1). A spring returns the armature, remaking contact so the cycle repeats (1).",
    "electromagnet"
  ],
  [
    "A long straight wire carries 6.0 A. Calculate the field strength 4.0 cm from its centre. Use K = 2.0 × 10⁻⁷ T m/A. [3]",
    "d = 0.040 m (1). B = KI/d = (2.0 × 10⁻⁷ × 6.0)/0.040 (1). B = 3.0 × 10⁻⁵ T = 30 μT (1).",
    "electromagnet"
  ],
  [
    "The magnetic field 5.0 cm from a long straight wire is 2.0 × 10⁻⁵ T. Find the current. Use K = 2.0 × 10⁻⁷ T m/A. [3]",
    "d = 0.050 m (1). I = Bd/K (1). I = (2.0 × 10⁻⁵ × 0.050)/(2.0 × 10⁻⁷) = 5.0 A (1).",
    "electromagnet"
  ],
  [
    "A long straight wire carries 8.0 A. At what distance is B = 4.0 × 10⁻⁵ T? Use K = 2.0 × 10⁻⁷ T m/A. [3]",
    "d = KI/B (1). d = (2.0 × 10⁻⁷ × 8.0)/(4.0 × 10⁻⁵) (1). d = 0.040 m = 4.0 cm (1).",
    "electromagnet"
  ],
  [
    "A wire’s current triples while the distance from it doubles. Use B = KI/d to explain the change in field strength. [2]",
    "B is proportional to I and inversely proportional to d (1). New B is 3/2 = 1.5 times the original field (1).",
    "electromagnet"
  ],
  [
    "A negatively charged conductor touches an identical neutral conductor. Explain the charging by conduction. [3]",
    "Mobile electrons move to the neutral conductor (1), sharing excess charge between them (1). Redistribution reduces electric potential energy; both identical isolated conductors finish negative with equal charge (1).",
    "charge"
  ],
  [
    "Compare the charge separation produced in a neutral conductor and a neutral insulator near a charged rod. [3]",
    "Electrons can move across the conductor (1). In the insulator, bound charges shift only locally (1). The conductor can have greater charge separation and stronger attraction under comparable conditions (1).",
    "charge"
  ],
  [
    "A straight wire produces a field of 0.030 mT at a fixed point when the current is 2 A. Calculate the field at that same point when the current is 5 A. [2]",
    "Current increases by a factor of 5/2 = 2.5 (1). Field strength = 0.030 × 2.5 = 0.075 mT (1).",
    "electromagnet"
  ],
  [
    "Draw a complete circuit containing a cell, switch and lamp, with meters to measure the lamp’s current and voltage. [4]",
    "Standard symbols for cell, switch and lamp (1). A closed conducting loop with clear connections (1). Ammeter in series with the lamp (1). Voltmeter connected in parallel across the lamp (1).",
    "circuits"
  ],
  [
    "Two lamps are connected in series across a 12 V supply. The voltage across the first lamp is 5 V. Find the voltage across the second lamp. [2]",
    "Supply voltage = V₁ + V₂ (1). V₂ = 12 − 5 = 7 V (1).",
    "networks"
  ],
  [
    "A current of 2 A flows through a 4 Ω resistor. Calculate the voltage across it. Use V = I × R. [2]",
    "V = 2 × 4 (1) = 8 V (1).",
    "circuits"
  ],
  [
    "Describe the shape of the magnetic field around a straight wire carrying current. State what happens to its strength farther from the wire. [2]",
    "Concentric circles centred on the wire (1). The field becomes weaker farther away (1).",
    "electromagnet"
  ]
];

let active='charge',tab='learn';const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function render(){const s=sections.find(x=>x.id===active);document.querySelector('#topics').innerHTML=sections.map(x=>`<button data-topic="${x.id}" class="${x.id===active?'active':''}" aria-current="${x.id===active?'true':'false'}"><strong>${x.icon} &nbsp;${x.name}</strong><small>${x.short}</small></button>`).join('');document.querySelectorAll('.tabs button').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===tab)));let body=`<div class="section-head"><p class="eyebrow">${s.name.toUpperCase()}</p><h2>${tab==='exam'?'Exam Practice':tab==='check'?'Quick Check':s.name}</h2><p>${tab==='learn'?s.intro:tab==='check'?'Try each question before revealing the model answer.':`Practise questions matched to the unit plan. Mark values guide the level of detail.`}</p></div>`;
if(tab==='learn'){body+=s.lessons.map(([title,html])=>`<article class="card"><h3>${title}</h3>${html}</article>`).join('');}
else{const list=tab==='check'?s.checks.map(([q,a])=>[q,a]):exam.filter(q=>q[2]===s.id).map(([q,a])=>[q,a]);body+=`<div class="check-list">${list.map(([q,a],i)=>`<article class="card ${tab==='exam'?'exam':''}"><div class="question">${i+1}. ${esc(q)}</div>${tab==='exam'?'<div class="answer-lines"></div><div class="answer-lines"></div><div class="answer-lines"></div>':''}<button class="reveal" type="button" aria-expanded="false">Show model answer</button><div class="answer" hidden>${esc(a)}</div></article>`).join('')}</div>`}
document.querySelector('#content').innerHTML=body}
document.addEventListener('click',e=>{const topic=e.target.closest('[data-topic]'),mode=e.target.closest('[data-tab]'),reveal=e.target.closest('.reveal');if(topic){active=topic.dataset.topic;render()}if(mode){tab=mode.dataset.tab;render()}if(reveal){const ans=reveal.nextElementSibling;ans.hidden=!ans.hidden;reveal.setAttribute('aria-expanded',String(!ans.hidden));reveal.textContent=ans.hidden?'Show model answer':'Hide model answer'}});render();


