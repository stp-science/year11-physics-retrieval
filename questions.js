(() => {
  "use strict";

  const topicMeta = [
    { name: "Forces and Motion", icon: "↗", colour: "#7656c8" },
    { name: "Waves", icon: "〰", colour: "#168eb2" },
    { name: "Nuclear Radiation", icon: "☢", colour: "#d97925" },
    { name: "Particle Physics", icon: "●", colour: "#2c9b69" },
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

  window.YEAR11_PHYSICS_DATA = { topicMeta, questions };
})();
