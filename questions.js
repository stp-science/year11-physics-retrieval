(() => {
  "use strict";

  const topicMeta = [
    { name: "Forces and Motion", icon: "↗", colour: "#7656c8" },
    { name: "Waves", icon: "〰", colour: "#168eb2" },
    { name: "Nuclear Radiation", icon: "☢", colour: "#d97925" },
    { name: "Particle Physics", icon: "●", colour: "#2c9b69" },
    { name: "Scientific Skills", icon: "⌁", colour: "#b04475" },
  ];

  const questions = [];
  const counters = {};
  const add = (topic, subtopic, question, answer) => {
    counters[topic] = (counters[topic] || 0) + 1;
    questions.push({
      id: `${topic.toLowerCase().replaceAll(" ", "-")}-${String(counters[topic]).padStart(3, "0")}`,
      topic,
      subtopic,
      question,
      answer,
    });
  };
  const addMany = (topic, subtopic, pairs) =>
    pairs.forEach(([question, answer]) => add(topic, subtopic, question, answer));
  const tidy = (value) => Number(value.toFixed(3)).toString();

  // AQA GCSE Physics: Forces
  addMany("Forces and Motion", "Forces and interactions", [
    ["What is a force?", "A push or pull acting on an object."],
    ["What is the unit of force?", "The newton (N)."],
    ["Is force a scalar or a vector quantity?", "A vector, because it has both magnitude and direction."],
    ["Name three contact forces.", "Any three from friction, air resistance, tension and normal contact force."],
    ["Name three non-contact forces.", "Gravitational, magnetic and electrostatic forces."],
    ["What is a resultant force?", "The single force that has the same effect as all the forces acting together."],
    ["What does it mean when forces are balanced?", "The resultant force is zero."],
    ["What happens to an object at rest when the forces on it are balanced?", "It remains at rest."],
    ["What happens to a moving object when the forces on it are balanced?", "It continues at constant speed in a straight line."],
    ["How are two forces acting in the same direction combined?", "Add their magnitudes."],
    ["How are two forces acting in opposite directions combined?", "Subtract the smaller force from the larger force and give the direction of the larger force."],
    ["What does a free-body diagram show?", "The forces acting on one object."],
    ["What should the direction of an arrow show on a free-body diagram?", "The direction in which the force acts."],
    ["What should the length of a force arrow represent?", "The size of the force."],
    ["A 12 N force acts right and a 7 N force acts left. What is the resultant force?", "5 N to the right."],
    ["A 20 N force acts left and a 20 N force acts right. What is the resultant force?", "0 N."],
  ]);

  addMany("Forces and Motion", "Weight and gravity", [
    ["What is mass?", "The amount of matter in an object, measured in kilograms (kg)."],
    ["What is weight?", "The force acting on an object due to gravity."],
    ["What is the unit of weight?", "The newton (N)."],
    ["Write the equation linking weight, mass and gravitational field strength.", "weight = mass × gravitational field strength; W = mg."],
    ["What is the approximate gravitational field strength on Earth?", "9.8 N/kg, often rounded to 10 N/kg."],
    ["Which instrument is used to measure weight?", "A newton meter or force meter."],
    ["Which instrument is used to measure mass?", "A balance."],
    ["Does an astronaut's mass change on the Moon?", "No. Mass stays the same."],
    ["Why does an astronaut weigh less on the Moon?", "The Moon has a smaller gravitational field strength than Earth."],
    ["Where does the weight of an object appear to act?", "Through its centre of mass."],
  ]);
  [[2, 10], [5, 10], [12, 10], [0.5, 10], [20, 9.8], [65, 9.8]].forEach(([mass, g]) =>
    add("Forces and Motion", "Weight calculations",
      `Calculate the weight of a ${mass} kg object where g = ${g} N/kg.`,
      `W = mg = ${mass} × ${g} = ${tidy(mass * g)} N.`));

  addMany("Forces and Motion", "Motion", [
    ["What is distance?", "The total length of the path travelled."],
    ["What is displacement?", "The straight-line distance from start to finish in a stated direction."],
    ["Which is a scalar: distance or displacement?", "Distance."],
    ["Which is a vector: distance or displacement?", "Displacement."],
    ["What is speed?", "Distance travelled per unit time."],
    ["Write the equation for speed.", "speed = distance ÷ time; v = s/t."],
    ["What is the SI unit of speed?", "Metres per second (m/s)."],
    ["How is velocity different from speed?", "Velocity includes direction; speed does not."],
    ["What is acceleration?", "The rate of change of velocity."],
    ["Write the equation for acceleration.", "acceleration = change in velocity ÷ time; a = (v − u)/t."],
    ["What is the unit of acceleration?", "Metres per second squared (m/s²)."],
    ["What is deceleration?", "Acceleration that reduces an object's speed."],
    ["A runner completes a lap and finishes where they started. What is their displacement?", "0 m."],
    ["Can an object travelling in a circle at constant speed be accelerating?", "Yes. Its direction, and therefore its velocity, is changing."],
  ]);
  [[100, 20], [150, 30], [240, 20], [45, 5], [500, 40], [72, 8]].forEach(([distance, time]) =>
    add("Forces and Motion", "Speed calculations",
      `An object travels ${distance} m in ${time} s. Calculate its speed.`,
      `speed = distance ÷ time = ${distance} ÷ ${time} = ${tidy(distance / time)} m/s.`));
  [[0, 12, 4], [5, 15, 5], [20, 5, 3], [0, 20, 10], [8, 14, 2], [25, 0, 5]].forEach(([u, v, time]) =>
    add("Forces and Motion", "Acceleration calculations",
      `Velocity changes from ${u} m/s to ${v} m/s in ${time} s. Calculate the acceleration.`,
      `a = (v − u)/t = (${v} − ${u}) ÷ ${time} = ${tidy((v - u) / time)} m/s².`));

  addMany("Forces and Motion", "Motion graphs", [
    ["What does the gradient of a distance–time graph represent?", "Speed."],
    ["What does a horizontal line on a distance–time graph show?", "The object is stationary."],
    ["What does a steeper line on a distance–time graph show?", "A greater speed."],
    ["What does a straight sloping line on a distance–time graph show?", "Constant speed."],
    ["What does a curve getting steeper on a distance–time graph show?", "The object is accelerating."],
    ["What does the gradient of a velocity–time graph represent?", "Acceleration."],
    ["What does a horizontal line on a velocity–time graph show?", "Constant velocity."],
    ["What does the area under a velocity–time graph represent?", "Distance travelled, or displacement when direction is included."],
    ["How can acceleration be found from a velocity–time graph?", "Calculate change in velocity ÷ change in time."],
    ["A velocity–time graph has a zero gradient. What is the acceleration?", "0 m/s²."],
  ]);

  addMany("Forces and Motion", "Newton's laws", [
    ["State Newton's first law.", "An object remains at rest or at constant velocity unless a resultant force acts on it."],
    ["What is inertia?", "The tendency of an object to resist a change in its motion."],
    ["Which property measures how difficult it is to change an object's velocity?", "Its mass."],
    ["Write the equation linking force, mass and acceleration.", "resultant force = mass × acceleration; F = ma."],
    ["What happens to acceleration if resultant force increases and mass stays the same?", "Acceleration increases."],
    ["What happens to acceleration if mass increases and resultant force stays the same?", "Acceleration decreases."],
    ["State Newton's third law.", "When two objects interact, they exert equal and opposite forces on each other."],
    ["Do the forces in a Newton's third-law pair act on the same object?", "No. They act on different objects."],
    ["A car pushes the road backwards. What is the paired force?", "The road pushes the car forwards with an equal force."],
  ]);
  [[2, 3], [5, 4], [10, 2], [0.5, 8], [20, 1.5], [50, 0.4]].forEach(([mass, acceleration]) =>
    add("Forces and Motion", "Force calculations",
      `A ${mass} kg object accelerates at ${acceleration} m/s². Calculate the resultant force.`,
      `F = ma = ${mass} × ${acceleration} = ${tidy(mass * acceleration)} N.`));

  addMany("Forces and Motion", "Stopping and momentum", [
    ["What is stopping distance?", "Thinking distance plus braking distance."],
    ["What is thinking distance?", "The distance travelled during the driver's reaction time."],
    ["What is braking distance?", "The distance travelled while the brakes slow the vehicle to a stop."],
    ["Give two factors that can increase thinking distance.", "Any two from tiredness, alcohol, drugs, distractions and greater speed."],
    ["Give three factors that can increase braking distance.", "Any three from greater speed, wet or icy roads, worn tyres, worn brakes and greater vehicle mass."],
    ["Why does braking transfer energy to the surroundings?", "Friction transfers the vehicle's kinetic energy to thermal energy."],
    ["Write the equation for momentum.", "momentum = mass × velocity; p = mv."],
    ["What is the unit of momentum?", "kg m/s."],
    ["State the conservation of momentum rule.", "Total momentum before an interaction equals total momentum after, in a closed system."],
    ["Why can airbags reduce injury?", "They increase the time taken to change momentum, reducing the force."],
  ]);
  [[2, 4], [5, 3], [10, 2], [0.5, 12], [20, 1.5]].forEach(([mass, velocity]) =>
    add("Forces and Motion", "Momentum calculations",
      `Calculate the momentum of a ${mass} kg object moving at ${velocity} m/s.`,
      `p = mv = ${mass} × ${velocity} = ${tidy(mass * velocity)} kg m/s.`));

  addMany("Forces and Motion", "Work, springs and moments", [
    ["When is work done on an object?", "When a force causes the object to move through a distance."],
    ["Write the equation for work done.", "work done = force × distance; W = Fs."],
    ["What is the unit of work done?", "The joule (J)."],
    ["One joule is equal to what?", "One newton metre (1 J = 1 N m)."],
    ["What does a spring do when it is elastically deformed?", "It returns to its original shape when the force is removed."],
    ["State Hooke's law.", "Extension is directly proportional to force, up to the limit of proportionality."],
    ["Write the equation linking force, spring constant and extension.", "F = ke."],
    ["What is the unit of spring constant?", "N/m."],
    ["What happens beyond the limit of proportionality?", "Force and extension are no longer directly proportional."],
    ["What is a moment?", "The turning effect of a force."],
    ["Write the equation for a moment.", "moment = force × perpendicular distance from the pivot; M = Fd."],
    ["What is the unit of a moment?", "N m."],
    ["When is an object in rotational equilibrium?", "When total clockwise moment equals total anticlockwise moment."],
  ]);

  // AQA GCSE Physics: Waves
  addMany("Waves", "Wave basics", [
    ["What do waves transfer from one place to another?", "Energy, without transferring matter overall."],
    ["What is a transverse wave?", "A wave in which the oscillations are perpendicular to the direction of energy transfer."],
    ["What is a longitudinal wave?", "A wave in which the oscillations are parallel to the direction of energy transfer."],
    ["Give two examples of transverse waves.", "Electromagnetic waves and water surface waves."],
    ["Give one example of a longitudinal wave.", "Sound waves."],
    ["What are compressions in a longitudinal wave?", "Regions where particles are close together."],
    ["What are rarefactions in a longitudinal wave?", "Regions where particles are spread further apart."],
    ["What is amplitude?", "The maximum displacement of a point on a wave from its rest position."],
    ["What is wavelength?", "The distance from one point on a wave to the same point on the next wave."],
    ["What is frequency?", "The number of complete waves passing a point each second."],
    ["What is the unit of frequency?", "The hertz (Hz)."],
    ["What is the period of a wave?", "The time taken for one complete wave."],
    ["Write the equation linking period and frequency.", "T = 1/f."],
    ["Write the wave speed equation.", "wave speed = frequency × wavelength; v = fλ."],
    ["What is the unit of wave speed?", "Metres per second (m/s)."],
    ["If wave speed stays constant and frequency increases, what happens to wavelength?", "Wavelength decreases."],
    ["What feature of a sound wave determines its pitch?", "Frequency."],
    ["What feature of a sound wave is linked to loudness?", "Amplitude."],
  ]);
  [[5, 2], [10, 3], [50, 0.4], [20, 1.5], [4, 6], [25, 0.8]].forEach(([frequency, wavelength]) =>
    add("Waves", "Wave calculations",
      `A wave has frequency ${frequency} Hz and wavelength ${wavelength} m. Calculate its speed.`,
      `v = fλ = ${frequency} × ${wavelength} = ${tidy(frequency * wavelength)} m/s.`));
  [[2, 0.5], [5, 0.2], [10, 0.1], [20, 0.05], [4, 0.25]].forEach(([frequency, period]) =>
    add("Waves", "Period calculations",
      `A wave has a frequency of ${frequency} Hz. Calculate its period.`,
      `T = 1/f = 1 ÷ ${frequency} = ${tidy(period)} s.`));

  addMany("Waves", "Wave behaviour", [
    ["State the law of reflection.", "Angle of incidence equals angle of reflection."],
    ["From which line are angles of incidence and reflection measured?", "The normal."],
    ["What is the normal?", "An imaginary line at 90° to the surface."],
    ["What is refraction?", "A change in direction of a wave when its speed changes as it enters a different medium."],
    ["Why does a wave refract when entering a different material?", "Its speed changes."],
    ["What usually happens to a ray of light entering glass from air?", "It slows down and bends towards the normal."],
    ["What usually happens to a ray of light leaving glass for air?", "It speeds up and bends away from the normal."],
    ["What is diffraction?", "The spreading of waves as they pass through a gap or around an obstacle."],
    ["When is diffraction greatest?", "When the gap size is similar to the wavelength."],
    ["Does reflection change the frequency of a wave?", "No."],
    ["What happens when a wave is absorbed?", "Its energy is transferred to the material, usually increasing internal energy."],
  ]);

  addMany("Waves", "Sound and seismic waves", [
    ["Why can sound not travel through a vacuum?", "Sound needs particles to pass on the vibrations."],
    ["In which state does sound usually travel fastest?", "Solids."],
    ["What is the approximate range of human hearing?", "20 Hz to 20,000 Hz."],
    ["What is ultrasound?", "Sound with a frequency above 20,000 Hz."],
    ["Give one medical use of ultrasound.", "Imaging a fetus or internal organs."],
    ["How can ultrasound measure distance?", "A pulse is sent out and the time taken for its echo to return is measured."],
    ["What are P-waves?", "Longitudinal seismic waves that travel through solids and liquids."],
    ["What are S-waves?", "Transverse seismic waves that travel through solids but not liquids."],
    ["How do seismic waves provide evidence about Earth's structure?", "Their paths and shadow zones show that Earth has layers with different properties."],
  ]);

  addMany("Waves", "Electromagnetic waves", [
    ["List the electromagnetic spectrum from longest to shortest wavelength.", "Radio, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays."],
    ["What do all electromagnetic waves have in common?", "They are transverse and travel at the same speed in a vacuum."],
    ["What is the speed of electromagnetic waves in a vacuum?", "3.0 × 10⁸ m/s."],
    ["Which electromagnetic waves have the longest wavelength?", "Radio waves."],
    ["Which electromagnetic waves have the highest frequency?", "Gamma rays."],
    ["As frequency increases across the electromagnetic spectrum, what happens to wavelength?", "It decreases."],
    ["Which electromagnetic waves are used for television and radio communication?", "Radio waves."],
    ["Which electromagnetic waves are used for satellite communication and cooking?", "Microwaves."],
    ["Which electromagnetic waves are used in heaters and thermal imaging?", "Infrared."],
    ["Which electromagnetic waves are detected by the human eye?", "Visible light."],
    ["Which electromagnetic waves can cause skin ageing and skin cancer?", "Ultraviolet."],
    ["Which electromagnetic waves are used to image bones?", "X-rays."],
    ["Which electromagnetic waves are used for sterilising equipment and treating cancer?", "Gamma rays."],
    ["Why can ultraviolet, X-rays and gamma rays be harmful?", "They can damage cells; X-rays and gamma rays are ionising."],
    ["How can the risk from ionising radiation be reduced?", "Reduce exposure time, increase distance and use suitable shielding."],
    ["Why are optical fibres useful for communication?", "They carry light signals with little loss and can transmit large amounts of information."],
    ["What is an infrared camera used to detect?", "Differences in temperature from the infrared radiation emitted."],
    ["Why are microwaves used for satellite communication?", "They can pass through Earth's atmosphere."],
  ]);

  addMany("Waves", "Required practical knowledge", [
    ["How can wave speed be measured in a ripple tank?", "Measure wavelength and frequency, then use v = fλ."],
    ["How can wavelength be measured on a ripple tank image?", "Measure across several waves and divide by the number of wavelengths."],
    ["Why measure several wavelengths rather than one?", "It reduces the percentage uncertainty."],
    ["How can the speed of sound be found using two microphones?", "Measure the microphone separation and the time delay, then use speed = distance ÷ time."],
    ["Name one variable to control when comparing infrared emission from surfaces.", "Keep the temperature, surface area or distance from the detector the same."],
  ]);

  // AQA GCSE Physics: Atomic structure and ionising radiation
  addMany("Nuclear Radiation", "Atoms and isotopes", [
    ["What is at the centre of an atom?", "A tiny nucleus containing protons and neutrons."],
    ["Which particles are found in the nucleus?", "Protons and neutrons."],
    ["Which particles move around the nucleus?", "Electrons."],
    ["What is the relative charge of a proton?", "+1."],
    ["What is the relative charge of a neutron?", "0."],
    ["What is the relative charge of an electron?", "−1."],
    ["What is the relative mass of a proton?", "1."],
    ["What is the relative mass of a neutron?", "1."],
    ["What is the relative mass of an electron?", "Very small, about 1/1836."],
    ["What is the atomic number?", "The number of protons in the nucleus."],
    ["What is the mass number?", "The total number of protons and neutrons in the nucleus."],
    ["How is neutron number calculated?", "mass number − atomic number."],
    ["What is an isotope?", "Atoms of the same element with the same number of protons but different numbers of neutrons."],
    ["Why is an atom electrically neutral?", "It has equal numbers of protons and electrons."],
    ["What happens when an atom loses an electron?", "It becomes a positive ion."],
    ["What happens when an atom gains an electron?", "It becomes a negative ion."],
    ["An atom has mass number 23 and atomic number 11. How many neutrons does it have?", "12 neutrons."],
    ["Carbon-14 has 6 protons. How many neutrons does it have?", "8 neutrons."],
  ]);

  addMany("Nuclear Radiation", "Development of the atomic model", [
    ["What did Dalton describe atoms as?", "Tiny solid spheres that could not be divided."],
    ["What was Thomson's model of the atom called?", "The plum pudding model."],
    ["What did the plum pudding model suggest?", "Negative electrons were embedded in a sphere of positive charge."],
    ["What did Rutherford's alpha-scattering experiment show?", "The atom is mostly empty space with a small, dense, positively charged nucleus."],
    ["Why did most alpha particles pass straight through the foil?", "Atoms are mostly empty space."],
    ["Why were a few alpha particles deflected through large angles?", "They passed close to the small, positively charged nucleus."],
    ["Who suggested electrons orbit the nucleus at fixed energy levels?", "Niels Bohr."],
    ["What particle did Chadwick discover?", "The neutron."],
  ]);

  addMany("Nuclear Radiation", "Types of radiation", [
    ["What is radioactive decay?", "The random decay of an unstable nucleus."],
    ["Why is radioactive decay described as random?", "It is impossible to predict when a particular nucleus will decay."],
    ["What is an alpha particle?", "A helium nucleus containing two protons and two neutrons."],
    ["What is a beta-minus particle?", "A high-speed electron emitted from the nucleus."],
    ["What is gamma radiation?", "High-energy electromagnetic radiation emitted from the nucleus."],
    ["Which radiation is the most ionising?", "Alpha."],
    ["Which radiation is the least penetrating?", "Alpha."],
    ["What stops alpha radiation?", "Paper or a few centimetres of air."],
    ["What stops beta radiation?", "A few millimetres of aluminium."],
    ["What reduces gamma radiation?", "Thick lead or concrete."],
    ["Which radiation is most penetrating?", "Gamma."],
    ["What happens to mass number in alpha decay?", "It decreases by 4."],
    ["What happens to atomic number in alpha decay?", "It decreases by 2."],
    ["What happens to mass number in beta-minus decay?", "It stays the same."],
    ["What happens to atomic number in beta-minus decay?", "It increases by 1."],
    ["What happens to the nucleus during beta-minus decay?", "A neutron changes into a proton and an electron is emitted."],
    ["What happens to mass number and atomic number during gamma emission?", "Neither changes."],
    ["Why is alpha especially dangerous inside the body?", "It is strongly ionising and damages nearby cells."],
    ["Why can gamma be dangerous outside the body?", "It can penetrate the body and reach internal organs."],
  ]);

  addMany("Nuclear Radiation", "Activity and half-life", [
    ["What is activity?", "The rate at which unstable nuclei decay."],
    ["What is the unit of activity?", "The becquerel (Bq)."],
    ["What does an activity of 1 Bq mean?", "One nuclear decay per second."],
    ["What is count rate?", "The number of counts recorded by a detector each second or minute."],
    ["What is background radiation?", "Ionising radiation that is always present in the environment."],
    ["Give two natural sources of background radiation.", "Any two from radon gas, rocks, cosmic rays, food and living things."],
    ["Give one artificial source of background radiation.", "Medical radiation, such as X-rays."],
    ["Why should background count be measured?", "So it can be subtracted from the measured count rate of a source."],
    ["What is half-life?", "The time taken for the number of undecayed nuclei, or the activity, to halve."],
    ["Can the half-life of a radioactive isotope be changed by heating it?", "No."],
    ["A sample starts at 800 Bq. What is its activity after one half-life?", "400 Bq."],
    ["A sample starts at 800 Bq. What is its activity after two half-lives?", "200 Bq."],
    ["A sample starts at 800 Bq. What is its activity after three half-lives?", "100 Bq."],
    ["A sample falls from 640 counts/min to 80 counts/min. How many half-lives have passed?", "Three half-lives."],
    ["Why does activity decrease over time?", "There are fewer unstable nuclei left to decay."],
  ]);

  addMany("Nuclear Radiation", "Risks and uses", [
    ["What is irradiation?", "Exposing an object to ionising radiation."],
    ["What is radioactive contamination?", "Unwanted radioactive material getting on or inside an object."],
    ["Does an irradiated object normally become radioactive?", "No."],
    ["Why can contamination remain dangerous after the source is removed?", "Radioactive material remains on or inside the object and continues to decay."],
    ["How can radiation damage living cells?", "It can ionise molecules and damage or kill cells."],
    ["How can ionising radiation cause cancer?", "It can cause mutations in DNA that lead to uncontrolled cell division."],
    ["Why do medical tracers usually have short half-lives?", "To reduce the patient's radiation dose while lasting long enough for the test."],
    ["Which type of radiation is suitable for a medical tracer?", "Usually gamma, because it can leave the body and be detected."],
    ["How is gamma radiation used to treat cancer?", "It is aimed at a tumour to kill cancer cells."],
    ["How is radiation used to sterilise medical equipment?", "It kills microorganisms on the equipment."],
    ["How can the thickness of paper be monitored using beta radiation?", "A detector measures how much beta passes through; the count changes if the paper thickness changes."],
    ["Why is alpha unsuitable for monitoring paper thickness?", "It would be stopped completely by the paper."],
  ]);

  addMany("Nuclear Radiation", "Fission and fusion", [
    ["What is nuclear fission?", "The splitting of a large unstable nucleus into smaller nuclei, releasing energy and neutrons."],
    ["Which isotope is commonly used as fuel in nuclear reactors?", "Uranium-235."],
    ["How is fission started in a reactor?", "A uranium nucleus absorbs a neutron."],
    ["What is a chain reaction?", "Neutrons from one fission cause further fissions."],
    ["What do control rods do in a nuclear reactor?", "Absorb neutrons to control the rate of the chain reaction."],
    ["What is nuclear fusion?", "Two small nuclei join to form a larger nucleus and release energy."],
    ["Where does fusion happen naturally?", "In stars, including the Sun."],
    ["Why does fusion require a very high temperature?", "The nuclei need enough energy to overcome their electrostatic repulsion."],
    ["Give one advantage of nuclear power.", "It releases large amounts of energy without producing carbon dioxide during operation."],
    ["Give one disadvantage of nuclear fission power.", "It produces radioactive waste that must be stored safely."],
  ]);

  // AQA GCSE Physics: Particle model of matter
  addMany("Particle Physics", "States of matter", [
    ["Describe the arrangement of particles in a solid.", "They are close together in a regular arrangement."],
    ["How do particles move in a solid?", "They vibrate about fixed positions."],
    ["Describe the arrangement of particles in a liquid.", "They are close together but arranged irregularly."],
    ["How do particles move in a liquid?", "They move around and slide past each other."],
    ["Describe particles in a gas.", "They are far apart and move rapidly in random directions."],
    ["Why does a solid keep its shape?", "Its particles are held in fixed positions by strong forces."],
    ["Why can a liquid flow?", "Its particles can move past each other."],
    ["Why can a gas be compressed?", "There are large gaps between its particles."],
    ["What is melting?", "The change of state from solid to liquid."],
    ["What is freezing?", "The change of state from liquid to solid."],
    ["What is boiling?", "The change of state from liquid to gas throughout the liquid."],
    ["What is condensation?", "The change of state from gas to liquid."],
    ["What is sublimation?", "A change directly between solid and gas."],
    ["Are changes of state physical or chemical changes?", "Physical changes, because no new substance is formed."],
    ["What happens to mass during a change of state in a closed system?", "Mass is conserved."],
  ]);

  addMany("Particle Physics", "Density", [
    ["What is density?", "Mass per unit volume."],
    ["Write the equation for density.", "density = mass ÷ volume; ρ = m/V."],
    ["What is the SI unit of density?", "kg/m³."],
    ["Why are gases usually less dense than liquids?", "Gas particles are much further apart."],
    ["How can the density of a regular solid be measured?", "Measure its mass and calculate its volume from its dimensions, then use ρ = m/V."],
    ["How can the volume of an irregular solid be measured?", "By water displacement in a measuring cylinder or displacement can."],
    ["How can the density of a liquid be measured?", "Measure a known volume and its mass, then use ρ = m/V."],
    ["Why should a balance be zeroed before measuring mass?", "To remove the mass of the container from the reading."],
  ]);
  [[200, 50], [500, 100], [270, 100], [120, 40], [780, 100], [45, 15]].forEach(([mass, volume]) =>
    add("Particle Physics", "Density calculations",
      `A sample has a mass of ${mass} g and a volume of ${volume} cm³. Calculate its density.`,
      `density = mass ÷ volume = ${mass} ÷ ${volume} = ${tidy(mass / volume)} g/cm³.`));

  addMany("Particle Physics", "Internal energy and heating", [
    ["What is internal energy?", "The total kinetic energy and potential energy of the particles in a system."],
    ["What happens to internal energy when a substance is heated?", "It increases."],
    ["What can heating do to a substance?", "Raise its temperature or change its state."],
    ["What happens to particle kinetic energy when temperature increases?", "It increases."],
    ["What happens to the average speed of particles when temperature increases?", "It increases."],
    ["What is specific heat capacity?", "The energy needed to raise the temperature of 1 kg of a substance by 1°C."],
    ["Write the specific heat capacity equation.", "change in thermal energy = mass × specific heat capacity × temperature change; ΔE = mcΔθ."],
    ["What is the unit of specific heat capacity?", "J/kg°C."],
    ["What does a high specific heat capacity mean?", "A large amount of energy is needed to raise the temperature of the substance."],
    ["For equal masses receiving equal energy, which warms more: a substance with high or low specific heat capacity?", "The substance with the lower specific heat capacity."],
    ["Why should insulation be used in a specific heat capacity experiment?", "To reduce energy transfer to the surroundings."],
    ["Why may an experimental value for specific heat capacity be too high?", "Some supplied energy heats the surroundings or apparatus instead of the sample."],
  ]);
  [[1, 500, 10], [2, 4200, 5], [0.5, 900, 20], [3, 400, 15], [0.2, 450, 25], [1.5, 800, 10]].forEach(([mass, c, delta]) =>
    add("Particle Physics", "Specific heat capacity calculations",
      `A ${mass} kg sample has specific heat capacity ${c} J/kg°C and warms by ${delta}°C. Calculate the energy transferred.`,
      `ΔE = mcΔθ = ${mass} × ${c} × ${delta} = ${tidy(mass * c * delta)} J.`));

  addMany("Particle Physics", "Changes of state and latent heat", [
    ["What happens to temperature while a pure substance is melting?", "It stays constant until melting is complete."],
    ["Why does temperature stay constant during a change of state?", "Energy changes the arrangement and potential energy of particles rather than their kinetic energy."],
    ["What does a sloping section of a heating graph show?", "The temperature is increasing within one state."],
    ["What does a flat section of a heating graph show?", "A change of state at constant temperature."],
    ["What is specific latent heat?", "The energy needed to change the state of 1 kg of a substance without changing its temperature."],
    ["Write the specific latent heat equation.", "energy for a change of state = mass × specific latent heat; E = mL."],
    ["What is the unit of specific latent heat?", "J/kg."],
    ["What is specific latent heat of fusion?", "The energy needed per kilogram to change between solid and liquid."],
    ["What is specific latent heat of vaporisation?", "The energy needed per kilogram to change between liquid and gas."],
    ["During melting, what happens to the potential energy of particles?", "It increases."],
    ["During condensation, what happens to internal energy?", "It decreases as energy is transferred to the surroundings."],
  ]);
  [[1, 200000], [2, 100000], [0.5, 334000], [0.2, 2260000], [3, 80000]].forEach(([mass, latent]) =>
    add("Particle Physics", "Latent heat calculations",
      `A ${mass} kg sample changes state. Its specific latent heat is ${latent} J/kg. Calculate the energy transferred.`,
      `E = mL = ${mass} × ${latent} = ${tidy(mass * latent)} J.`));

  addMany("Particle Physics", "Gas pressure and temperature", [
    ["What causes gas pressure on the walls of a container?", "Gas particles collide with the walls and exert forces on them."],
    ["What happens to gas pressure if a sealed gas is heated at constant volume?", "The pressure increases."],
    ["Why does heating a gas at constant volume increase its pressure?", "Particles move faster and collide with the walls more often and with greater force."],
    ["What happens to gas pressure if volume decreases at constant temperature?", "The pressure increases."],
    ["Why does decreasing gas volume increase pressure?", "Particles hit the walls more frequently because they have less space."],
    ["What is absolute zero in degrees Celsius?", "−273°C."],
    ["What is absolute zero in kelvin?", "0 K."],
    ["How is temperature in kelvin found from temperature in °C?", "kelvin temperature = Celsius temperature + 273."],
    ["Convert 27°C to kelvin.", "300 K."],
    ["Convert 300 K to degrees Celsius.", "27°C."],
    ["For a fixed mass of gas at constant temperature, what is the relationship between pressure and volume?", "pressure × volume is constant; pV = constant."],
    ["A gas is compressed to half its volume at constant temperature. What happens to its pressure?", "It doubles."],
  ]);

  // AQA GCSE working scientifically and mathematical skills
  addMany("Scientific Skills", "Variables and hypotheses", [
    ["What is the independent variable?", "The variable that is deliberately changed in an investigation."],
    ["What is the dependent variable?", "The variable that is measured in response to changing the independent variable."],
    ["What is a control variable?", "A variable kept the same so that it does not affect the results."],
    ["Why should control variables be kept constant?", "So any change in the dependent variable is more likely to be caused by the independent variable."],
    ["What is a hypothesis?", "A testable prediction about how the independent variable will affect the dependent variable."],
    ["What should a good hypothesis include?", "The independent variable, dependent variable and the predicted relationship between them."],
    ["A student changes the length of a pendulum and measures its period. What is the independent variable?", "The length of the pendulum."],
    ["A student changes the length of a pendulum and measures its period. What is the dependent variable?", "The period of the pendulum."],
    ["A student investigates how wire length affects resistance. Give one control variable.", "Any suitable answer, such as the wire material, wire thickness or wire temperature."],
    ["A student investigates how surface colour affects cooling. What is the independent variable?", "The colour or surface finish."],
    ["A student investigates how surface colour affects cooling. What is the dependent variable?", "The temperature decrease, cooling rate or temperature after a fixed time."],
    ["Write a suitable hypothesis for an investigation into wire length and resistance.", "As the length of the wire increases, its resistance will increase."],
  ]);

  addMany("Scientific Skills", "Accuracy, precision and uncertainty", [
    ["What does accurate mean?", "Close to the true or accepted value."],
    ["What does precise mean?", "Repeated measurements are close together."],
    ["Can results be precise but not accurate?", "Yes. They can be close together but all far from the true value."],
    ["What is measurement uncertainty?", "The range within which the true value is expected to lie."],
    ["For an analogue scale, what is a common estimate of reading uncertainty?", "Approximately plus or minus half the smallest scale division."],
    ["A ruler has millimetre divisions. What is a common uncertainty for one reading?", "±0.5 mm."],
    ["A digital balance reads to the nearest 0.01 g. What is its resolution?", "0.01 g."],
    ["What is resolution?", "The smallest change that a measuring instrument can detect."],
    ["How can parallax error be reduced when reading a scale?", "Read the scale at eye level and perpendicular to it."],
    ["Why should a measuring instrument be checked for zero error?", "A zero error shifts every reading away from the correct value."],
    ["Which is more precise for measuring 24.6 cm: a metre ruler marked every centimetre or one marked every millimetre?", "The ruler marked every millimetre because it has better resolution."],
    ["A thermometer always reads 2°C too high. What type of error is this?", "A systematic error."],
    ["What is a random error?", "An unpredictable variation that makes repeated readings differ."],
    ["How can random error be reduced?", "Take repeat readings and calculate a mean."],
    ["How can a systematic error be reduced?", "Identify and correct the cause, such as calibrating the instrument or accounting for zero error."],
  ]);

  addMany("Scientific Skills", "Repeats, reliability and means", [
    ["Why are repeat measurements taken?", "To identify anomalous results and calculate a mean, reducing the effect of random error."],
    ["What does repeatable mean?", "The same person using the same method and equipment obtains similar results."],
    ["What does reproducible mean?", "Different people or different equipment and methods obtain similar results."],
    ["What is an anomalous result?", "A result that does not fit the pattern of the other results."],
    ["What should be done before excluding an anomalous result from a mean?", "Repeat or check the measurement and justify why it is anomalous."],
    ["How is a mean calculated?", "Add the valid results and divide by the number of valid results."],
    ["Calculate the mean of 12, 14 and 16.", "14."],
    ["Calculate the mean time for 8.2 s, 8.4 s and 8.3 s.", "8.3 s."],
    ["The results are 20, 21, 20 and 35. Which result is probably anomalous?", "35."],
    ["Calculate the mean of 20, 21 and 20 after excluding the anomalous result of 35.", "20.3 to 1 decimal place."],
    ["A student gets 4.1, 4.2 and 4.1 N. What do these closely grouped readings suggest?", "The measurements are precise."],
    ["Does repeating a measurement automatically make it accurate?", "No. Repeats reduce random error but do not remove systematic error."],
    ["How can the reliability of a conclusion be improved?", "Use repeat measurements, a suitable range and interval, and enough data to reveal a clear pattern."],
    ["Why is using only one reading at each value of the independent variable weak?", "Anomalies cannot be identified and random variation may strongly affect the conclusion."],
  ]);

  addMany("Scientific Skills", "Tables and recording data", [
    ["Where should units be written in a results table?", "In the column headings, not beside every value."],
    ["What should each column heading in a results table contain?", "The name of the quantity and its unit."],
    ["How should repeated measurements usually be recorded?", "In separate columns, with an additional column for the mean."],
    ["Why should measurements in one column use consistent decimal places?", "They were measured with the same instrument and should show consistent precision."],
    ["Which notation is suitable for a table heading: time/s or time × s?", "time/s."],
    ["A student measures length in centimetres. Give a suitable column heading.", "Length / cm."],
    ["Should the independent or dependent variable normally be placed first in a results table?", "The independent variable."],
    ["Why should raw data be recorded before calculating a mean?", "It allows repeats, spread and anomalies to be checked."],
    ["Why should calculated values not be recorded with unjustified extra decimal places?", "The precision of the answer should reflect the precision of the measurements."],
    ["What information should accompany qualitative observations?", "A clear description of what was observed, recorded consistently for each condition."],
  ]);

  addMany("Scientific Skills", "Graphs", [
    ["Which variable is normally plotted on the x-axis?", "The independent variable."],
    ["Which variable is normally plotted on the y-axis?", "The dependent variable."],
    ["What must each graph axis include?", "The quantity and its unit."],
    ["How much of the graph grid should the chosen scale use?", "At least half of the available grid in both directions where possible."],
    ["Should a graph scale always start at zero?", "No. Use a sensible linear scale that displays the data clearly, unless zero is scientifically important."],
    ["What type of graph is normally used when both variables are continuous?", "A scatter graph or line graph with a line of best fit."],
    ["What type of graph is suitable for categories?", "A bar chart."],
    ["Should dot-to-dot lines normally be used for experimental data?", "No. Draw a line or curve of best fit unless there is a reason to join points."],
    ["What is a line of best fit?", "A straight line or smooth curve that represents the overall trend in the data."],
    ["Should a line of best fit pass through every point?", "No. It should represent the overall pattern with points reasonably balanced around it."],
    ["How can an anomaly be identified on a graph?", "It lies well away from the overall trend or line of best fit."],
    ["What does a positive correlation mean?", "As one variable increases, the other tends to increase."],
    ["What does a negative correlation mean?", "As one variable increases, the other tends to decrease."],
    ["What does no correlation mean?", "There is no clear relationship between the variables."],
    ["Does correlation by itself prove causation?", "No. Other variables or explanations may be responsible."],
    ["What does the gradient of a straight-line graph represent?", "The change in y divided by the change in x."],
    ["Write the equation used to calculate a gradient.", "gradient = change in y ÷ change in x."],
    ["Why should a large triangle be used to calculate a gradient?", "It reduces the percentage effect of reading uncertainty."],
    ["A line rises by 12 units while moving 3 units across. Calculate its gradient.", "12 ÷ 3 = 4."],
    ["A graph passes through (2, 5) and (6, 13). Calculate its gradient.", "(13 − 5) ÷ (6 − 2) = 8 ÷ 4 = 2."],
    ["What is the y-intercept?", "The y-value where the line crosses the y-axis."],
    ["What does a straight line through the origin show?", "The variables are directly proportional."],
    ["How can a curve make calculating a gradient difficult?", "The gradient changes, so a tangent is needed at the point of interest."],
    ["How is the gradient of a curve found at one point?", "Draw a tangent at that point and calculate the tangent's gradient."],
  ]);

  addMany("Scientific Skills", "Conclusions and evaluation", [
    ["What should a conclusion be based on?", "The pattern and evidence in the results."],
    ["What should be quoted when describing a relationship in the results?", "Relevant data values, including units."],
    ["What is a causal conclusion?", "A conclusion that changing one variable causes a change in another."],
    ["Why should a conclusion mention the range tested?", "The relationship may not apply beyond the measured range."],
    ["What is the difference between a result and a conclusion?", "A result is a measurement or observation; a conclusion explains the overall pattern shown by the results."],
    ["What makes an evaluation useful?", "It identifies a specific limitation, explains its effect and suggests a realistic improvement."],
    ["Why is 'human error' usually a weak evaluation?", "It is vague and does not identify the exact problem or how it affected the results."],
    ["Improve the statement 'use better equipment'.", "Name a suitable instrument with better resolution or control and explain how it improves the measurement."],
    ["Why should an improvement be linked to a limitation?", "The improvement must address a real source of uncertainty or weakness in the method."],
    ["A stopwatch is used for a very short event. Give one limitation.", "Human reaction time is large compared with the measured time."],
    ["How could the percentage effect of reaction time be reduced when timing a pendulum?", "Time many oscillations and divide by the number of oscillations."],
    ["Why should only one variable be deliberately changed at a time?", "So the effect of that variable can be identified."],
    ["What is validity in an investigation?", "Whether the method measures what it is intended to measure and supports the stated conclusion."],
    ["How can the validity of an investigation be improved?", "Control other variables and use a method that directly measures the intended quantities."],
  ]);

  addMany("Scientific Skills", "Equipment and measurement", [
    ["Which instrument is suitable for measuring a small current?", "An ammeter connected in series."],
    ["Which instrument measures potential difference?", "A voltmeter connected in parallel across a component."],
    ["Which instrument is most suitable for measuring a liquid volume accurately: a beaker or measuring cylinder?", "A measuring cylinder."],
    ["Why is a pipette more suitable than a beaker for transferring one accurate fixed volume?", "It has a smaller uncertainty and is designed to deliver a precise volume."],
    ["What should be done to a balance before adding a sample container?", "Zero or tare it, either before use or with the empty container on it."],
    ["How should the bottom of a water meniscus be read?", "At eye level, using the bottom of the meniscus."],
    ["How can the diameter of a thin wire be measured more precisely than with a ruler?", "Use a micrometer."],
    ["How can the thickness of one sheet of paper be estimated using a ruler?", "Measure the thickness of many sheets together and divide by the number of sheets."],
    ["Why should the same measuring instrument be used for all readings of one quantity?", "To keep the resolution and any systematic error consistent."],
    ["What is calibration?", "Checking or adjusting an instrument using known reference values."],
  ]);

  addMany("Scientific Skills", "Units and calculations", [
    ["What is the SI unit of length?", "The metre (m)."],
    ["What is the SI unit of time?", "The second (s)."],
    ["What is the SI unit of mass?", "The kilogram (kg)."],
    ["Convert 250 cm to metres.", "2.5 m."],
    ["Convert 45 mm to metres.", "0.045 m."],
    ["Convert 3.2 km to metres.", "3200 m."],
    ["Convert 500 g to kilograms.", "0.5 kg."],
    ["Convert 2 minutes to seconds.", "120 s."],
    ["What does the prefix milli mean?", "One thousandth, or 10⁻³."],
    ["What does the prefix kilo mean?", "One thousand, or 10³."],
    ["Write 0.00045 in standard form.", "4.5 × 10⁻⁴."],
    ["Write 620000 in standard form.", "6.2 × 10⁵."],
    ["What is percentage change?", "(change ÷ original value) × 100%."],
    ["A value increases from 20 to 25. Calculate the percentage increase.", "(5 ÷ 20) × 100% = 25%."],
    ["What is percentage uncertainty?", "(absolute uncertainty ÷ measured value) × 100%."],
    ["A length is 50.0 ± 0.5 cm. Calculate the percentage uncertainty.", "(0.5 ÷ 50.0) × 100% = 1%."],
  ]);

  addMany("Scientific Skills", "Risk and safety", [
    ["What is a hazard?", "Something with the potential to cause harm."],
    ["What is a risk?", "The likelihood and possible severity of harm from a hazard."],
    ["What is a control measure?", "An action taken to reduce the likelihood or severity of harm."],
    ["What should a risk assessment identify?", "Hazards, who or what may be harmed, the level of risk and suitable control measures."],
    ["Why is 'be careful' not a strong control measure?", "It is vague and does not state a specific action that reduces the risk."],
    ["Give a suitable control measure when heating with a Bunsen burner.", "Wear eye protection, keep flammable materials away and use a heatproof mat."],
    ["Give a suitable control measure when using radioactive sources at school.", "Minimise exposure time, maximise distance and use shielding, following local rules."],
    ["Why should electrical equipment be switched off before changing a circuit?", "To reduce the risk of electric shock, short circuits and overheating components."],
  ]);

  window.YEAR11_PHYSICS_DATA = { topicMeta, questions };
})();
