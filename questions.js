(() => {
  "use strict";

  const topicMeta = [
    { name: "Mechanics", icon: "↗", colour: "#7656c8" },
    { name: "Particle Physics", icon: "⚛", colour: "#e29a22" },
    { name: "Waves", icon: "〰", colour: "#168eb2" },
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

  const addMany = (topic, subtopic, pairs) => {
    pairs.forEach(([question, answer]) => add(topic, subtopic, question, answer));
  };

  const tidy = (value, decimals = 3) => {
    if (Number.isInteger(value)) return String(value);
    return Number(value.toFixed(decimals)).toString();
  };

  const sci = (value, sigFigs = 3) => {
    if (value === 0) return "0";
    const exponent = Math.floor(Math.log10(Math.abs(value)));
    const coefficient = value / 10 ** exponent;
    if (exponent >= 4 || exponent <= -3) {
      return `${Number(coefficient.toPrecision(sigFigs))} × 10^${exponent}`;
    }
    return Number(value.toPrecision(sigFigs)).toString();
  };

  // ---------------------------------------------------------------------------
  // Mechanics
  // ---------------------------------------------------------------------------

  addMany("Mechanics", "Position, distance and displacement", [
    ["What does the position of an object describe?", "Its location relative to a chosen reference point or origin."],
    ["What is displacement?", "The change in position of an object, including direction."],
    ["Write the equation linking displacement, final position and initial position.", "Δd = d_final − d_initial."],
    ["Is displacement a scalar or a vector quantity?", "A vector quantity because it has both magnitude and direction."],
    ["Is distance a scalar or a vector quantity?", "A scalar quantity because it has magnitude but no direction."],
    ["A runner completes one full lap and finishes at the start. What is the runner's displacement?", "Zero, because the final and initial positions are the same."],
    ["A runner completes one full lap. Is the distance travelled also zero?", "No. Distance is the total path length travelled."],
    ["Can the magnitude of displacement be greater than distance travelled?", "No. It can be equal to or less than the distance travelled."],
    ["When are distance travelled and the magnitude of displacement equal?", "When motion is in a straight line without changing direction."],
    ["What sign convention can be used for one-dimensional motion?", "Choose one direction as positive; motion in the opposite direction is negative."],
    ["An object's displacement is −8 m. What does the negative sign mean?", "It moved 8 m in the direction defined as negative."],
    ["Why must a reference direction be stated when giving displacement?", "Because the sign and direction only have meaning relative to the chosen positive direction."],
  ]);

  addMany("Mechanics", "Velocity and acceleration", [
    ["Define average velocity.", "Displacement divided by the time taken."],
    ["Write the equation for average velocity.", "v = Δd ÷ Δt."],
    ["State the SI unit of velocity.", "Metres per second (m/s or m s⁻¹)."],
    ["How is velocity different from speed?", "Velocity includes direction; speed does not."],
    ["Define acceleration.", "The rate of change of velocity."],
    ["Write the equation for average acceleration.", "a = Δv ÷ Δt = (v_f − v_i) ÷ Δt."],
    ["State the SI unit of acceleration.", "Metres per second squared (m/s² or m s⁻²)."],
    ["Can an object accelerate while moving at constant speed?", "Yes. A change in direction changes velocity, so the object accelerates."],
    ["What does a negative acceleration mean?", "Acceleration acts in the chosen negative direction; it does not always mean slowing down."],
    ["When does negative acceleration make an object slow down?", "When the object has positive velocity, so acceleration acts opposite to its motion."],
    ["When does negative acceleration make an object speed up?", "When the object also has negative velocity, so acceleration and velocity point in the same direction."],
    ["What is deceleration?", "Acceleration opposite to the direction of motion, causing speed to decrease."],
    ["An object has zero velocity at one instant. Must its acceleration also be zero?", "No. For example, a thrown ball has zero vertical velocity at its highest point but still accelerates downward."],
    ["What is meant by constant acceleration?", "Velocity changes by equal amounts in equal time intervals."],
    ["What does an acceleration of 3 m/s² mean?", "The velocity changes by 3 m/s every second in the positive direction."],
  ]);

  [
    [18, 3],
    [24, 6],
    [45, 9],
    [72, 8],
    [15, 2.5],
    [84, 12],
    [32, 4],
    [105, 15],
    [12, 0.5],
    [250, 20],
    [-36, 6],
    [54, 4.5],
  ].forEach(([displacement, time]) => {
    add(
      "Mechanics",
      "Velocity calculations",
      `An object has a displacement of ${displacement} m in ${time} s. Calculate its average velocity.`,
      `v = Δd/Δt = ${displacement}/${time} = ${tidy(displacement / time)} m/s.`,
    );
  });

  [
    [2, 14, 4],
    [20, 8, 3],
    [0, 18, 6],
    [-4, 8, 2],
    [12, 12, 5],
    [25, 5, 4],
    [6, 21, 3],
    [-10, -2, 4],
    [15, 0, 5],
    [3, 9, 0.5],
    [8, 32, 6],
    [30, 42, 2],
  ].forEach(([initial, final, time]) => {
    add(
      "Mechanics",
      "Acceleration calculations",
      `Velocity changes from ${initial} m/s to ${final} m/s in ${time} s. Calculate the average acceleration.`,
      `a = (v_f − v_i)/Δt = (${final} − ${initial})/${time} = ${tidy((final - initial) / time)} m/s².`,
    );
  });

  addMany("Mechanics", "Motion graphs", [
    ["What does the gradient of a distance–time graph represent?", "Speed."],
    ["What does a horizontal section on a distance–time graph show?", "The object is stationary because its distance is not changing."],
    ["What does a steeper gradient on a distance–time graph show?", "A greater speed."],
    ["Can a distance–time graph slope downward?", "No. Total distance travelled cannot decrease. A position–time graph can slope downward."],
    ["What does a straight sloping line on a distance–time graph show?", "Constant speed."],
    ["What does a curve that becomes progressively steeper on a distance–time graph show?", "The object is speeding up."],
    ["How is speed calculated from a distance–time graph?", "Choose two points on the line and calculate change in distance ÷ change in time."],
    ["What does the gradient of a position–time graph represent?", "Velocity."],
    ["What does a negative gradient on a position–time graph show?", "Negative velocity: motion in the chosen negative direction."],
    ["What does the gradient of a velocity–time graph represent?", "Acceleration."],
    ["What does a horizontal line above zero on a velocity–time graph show?", "Constant positive velocity and zero acceleration."],
    ["What does a horizontal line at zero on a velocity–time graph show?", "The object is stationary."],
    ["What does a straight upward slope on a velocity–time graph show?", "Constant positive acceleration."],
    ["What does a straight downward slope on a velocity–time graph show?", "Constant negative acceleration."],
    ["What does the signed area between a velocity–time graph and the time axis represent?", "Displacement."],
    ["How can total distance be found from a velocity–time graph that crosses below zero?", "Add the magnitudes of all areas; treat areas below the axis as positive for distance."],
    ["Why is an area below the time axis negative when finding displacement?", "The velocity is negative, so that part of the motion contributes negative displacement."],
    ["What is the area formula for a rectangular section under a velocity–time graph?", "Area = base × height = time × velocity."],
    ["What is the area formula for a triangular section under a velocity–time graph?", "Area = ½ × base × perpendicular height."],
    ["A velocity–time graph crosses the time axis. What happens at the crossing?", "Velocity is zero and the object may change direction."],
    ["How can acceleration be calculated from a velocity–time graph?", "Change in velocity divided by change in time."],
    ["Why should a large triangle be used when calculating a graph gradient?", "It reduces the percentage effect of reading uncertainty and gives a more reliable gradient."],
  ]);

  [
    [120, 15],
    [75, 5],
    [210, 14],
    [36, 9],
    [96, 12],
    [300, 25],
    [42, 3.5],
    [160, 20],
  ].forEach(([distance, time]) => {
    add(
      "Mechanics",
      "Distance–time graphs",
      `A straight section of a distance–time graph rises by ${distance} m over ${time} s. Calculate the speed.`,
      `speed = gradient = ${distance}/${time} = ${tidy(distance / time)} m/s.`,
    );
  });

  [
    [6, 8],
    [12, 5],
    [20, 4],
    [7.5, 12],
    [3, 18],
    [15, 10],
  ].forEach(([velocity, time]) => {
    add(
      "Mechanics",
      "Velocity–time graphs",
      `A velocity–time graph is horizontal at ${velocity} m/s for ${time} s. Calculate the displacement.`,
      `Displacement = rectangular area = ${velocity} × ${time} = ${tidy(velocity * time)} m.`,
    );
  });

  [
    [12, 5],
    [20, 8],
    [9, 6],
    [16, 3],
    [25, 10],
    [7, 4],
  ].forEach(([finalVelocity, time]) => {
    add(
      "Mechanics",
      "Velocity–time graphs",
      `Velocity increases uniformly from 0 to ${finalVelocity} m/s in ${time} s. Use the velocity–time graph area to find the displacement.`,
      `Displacement = triangular area = ½ × ${time} × ${finalVelocity} = ${tidy(0.5 * time * finalVelocity)} m.`,
    );
  });

  addMany("Mechanics", "Forces and Newton's laws", [
    ["What is inertia?", "The tendency of an object to resist a change in its velocity."],
    ["Which property determines an object's inertia?", "Its mass. Greater mass means greater inertia."],
    ["State Newton's first law.", "An object remains at rest or moves at constant velocity unless acted on by a non-zero net external force."],
    ["What is the net force on an object moving at constant velocity in a straight line?", "Zero."],
    ["Can forces act on an object when its net force is zero?", "Yes. The forces may be balanced and cancel each other."],
    ["State Newton's second law in words.", "The acceleration of an object is proportional to net force and inversely proportional to mass."],
    ["Write Newton's second-law equation.", "F_net = ma."],
    ["What force must be used in F = ma?", "The net or resultant external force, not an individual force unless it is the only one."],
    ["State the SI unit of force.", "The newton (N)."],
    ["Define one newton.", "The net force that gives a 1 kg mass an acceleration of 1 m/s²."],
    ["If net force doubles while mass stays constant, what happens to acceleration?", "It doubles."],
    ["If mass doubles while net force stays constant, what happens to acceleration?", "It halves."],
    ["What does a zero net force tell you about acceleration?", "Acceleration is zero."],
    ["Does zero acceleration necessarily mean the object is stationary?", "No. It may be moving at constant velocity."],
    ["What is a free-body diagram?", "A diagram showing all external forces acting on one chosen object."],
    ["Where should force arrows begin on a simple free-body diagram?", "At the dot or box representing the object."],
    ["What does the direction of a force arrow show?", "The direction in which the force acts on the object."],
    ["What should the length of a force arrow represent?", "The magnitude of the force, drawn proportionally when possible."],
    ["Should action–reaction force pairs appear on the same free-body diagram?", "No. They act on different objects."],
    ["What is a normal or support force?", "A contact force exerted by a surface perpendicular to that surface."],
    ["Is the normal force always equal to weight?", "No. It is equal only in particular situations, such as no vertical acceleration on a horizontal surface with no other vertical forces."],
    ["What is tension?", "A pulling force transmitted through a stretched string, rope or cable."],
    ["Can an ideal rope push an object by tension?", "No. Tension pulls along the rope."],
    ["What is friction?", "A contact force that opposes relative motion or the tendency for relative motion between surfaces."],
    ["What is static friction?", "Friction between surfaces that are not sliding relative to each other."],
    ["What is kinetic or dynamic friction?", "Friction acting when surfaces slide relative to each other."],
    ["Does static friction always have its maximum possible value?", "No. It adjusts up to a maximum value needed to prevent sliding."],
    ["Give an example of static friction.", "The friction that prevents a shoe from slipping backward while walking."],
    ["Give an example of kinetic friction.", "Friction on a box sliding across a floor."],
    ["What is a field?", "A region where an object can experience a non-contact force."],
    ["Name three non-contact forces.", "Gravitational, electric and magnetic forces."],
    ["What is weight?", "The gravitational force acting on a mass."],
    ["Write the equation for weight near Earth's surface.", "F_g = mg."],
    ["State the approximate gravitational field strength near Earth's surface.", "g ≈ 9.8 N/kg, often rounded to 10 N/kg."],
    ["How are mass and weight different?", "Mass is the amount of matter/inertia in kilograms; weight is a gravitational force in newtons."],
    ["Would an astronaut's mass change on the Moon?", "No. Mass stays the same."],
    ["Would an astronaut's weight change on the Moon?", "Yes. It is smaller because the Moon's gravitational field strength is smaller."],
    ["State Newton's third law.", "When object A exerts a force on object B, B exerts an equal-magnitude, opposite-direction force on A."],
    ["Why do Newton's third-law force pairs not cancel?", "They act on different objects."],
    ["A book rests on a table. Identify one Newton's third-law pair.", "The table pushes up on the book, and the book pushes down on the table with an equal force."],
  ]);

  [
    [2, 6],
    [5, 4],
    [8, 2.5],
    [12, 3],
    [0.75, 8],
    [15, 1.2],
    [25, 0.4],
    [60, 0.5],
    [120, 0.25],
    [3.5, 7],
    [18, 2],
    [45, 1.5],
  ].forEach(([mass, acceleration]) => {
    add(
      "Mechanics",
      "Newton's second law calculations",
      `A ${mass} kg object accelerates at ${acceleration} m/s². Calculate the net force.`,
      `F_net = ma = ${mass} × ${acceleration} = ${tidy(mass * acceleration)} N.`,
    );
  });

  [
    [48, 12],
    [150, 25],
    [72, 9],
    [20, 0.5],
    [360, 45],
    [84, 7],
    [500, 125],
    [42, 3.5],
  ].forEach(([force, mass]) => {
    add(
      "Mechanics",
      "Newton's second law calculations",
      `A net force of ${force} N acts on a ${mass} kg object. Calculate its acceleration.`,
      `a = F_net/m = ${force}/${mass} = ${tidy(force / mass)} m/s².`,
    );
  });

  [
    [45, 18],
    [120, 75],
    [64, 64],
    [35, 50],
    [210, 135],
    [18, 42],
    [90, 30],
    [250, 310],
  ].forEach(([right, left]) => {
    const net = right - left;
    add(
      "Mechanics",
      "Net force calculations",
      `Horizontal forces of ${right} N right and ${left} N left act on an object. Calculate the net force.`,
      net === 0 ? "0 N; the forces are balanced." : `${Math.abs(net)} N ${net > 0 ? "right" : "left"}.`,
    );
  });

  [0.2, 0.5, 1.5, 3, 8, 12, 25, 60, 75, 120].forEach((mass) => {
    add(
      "Mechanics",
      "Weight calculations",
      `Calculate the weight of a ${mass} kg mass on Earth using g = 9.8 N/kg.`,
      `F_g = mg = ${mass} × 9.8 = ${tidy(mass * 9.8)} N downward.`,
    );
  });

  addMany("Mechanics", "Work, energy and power", [
    ["What is work in physics?", "Energy transferred when a force causes displacement in the direction of the force."],
    ["Write the equation for work when force and displacement are parallel.", "W = Fd."],
    ["State the SI unit of work.", "The joule (J)."],
    ["Define one joule.", "The work done when a force of 1 N moves an object 1 m in the force direction."],
    ["If a force acts but the object does not move, how much mechanical work does that force do?", "Zero, because displacement is zero."],
    ["If force is perpendicular to displacement, how much work does that force do?", "Zero."],
    ["What is kinetic energy?", "Energy associated with an object's motion."],
    ["Write the kinetic-energy equation.", "E_k = ½mv²."],
    ["What happens to kinetic energy if speed doubles?", "It becomes four times as large because kinetic energy depends on v²."],
    ["What happens to kinetic energy if mass doubles at the same speed?", "It doubles."],
    ["What is gravitational potential energy?", "Energy associated with position in a gravitational field."],
    ["Write the change-in-gravitational-potential-energy equation near Earth's surface.", "ΔE_p = mgΔh."],
    ["What height must be used in ΔE_p = mgΔh?", "The vertical change in height, not the distance travelled along a slope."],
    ["What is mechanical energy?", "The total kinetic energy plus potential energy of a system."],
    ["State the conservation of energy principle.", "Energy cannot be created or destroyed; it is transferred or transformed."],
    ["When is mechanical energy conserved?", "When no energy is transferred out of the mechanical energy stores, such as by friction or drag."],
    ["What happens to mechanical energy when friction acts?", "Some mechanical energy is transferred to internal (thermal) energy and often sound."],
    ["Does friction destroy energy?", "No. It transfers energy to less useful forms such as internal energy."],
    ["As an object falls without air resistance, what energy change occurs?", "Gravitational potential energy decreases while kinetic energy increases by the same amount."],
    ["At the highest point of a vertical throw, is all energy zero?", "No. Kinetic energy may be zero momentarily, but gravitational potential energy is greatest."],
    ["What is power?", "The rate of energy transfer or the rate of doing work."],
    ["Write the power equation.", "P = E/t or P = W/t."],
    ["State the SI unit of power.", "The watt (W), equal to one joule per second."],
    ["A more powerful motor does the same work in what way?", "In less time."],
    ["Two people gain the same gravitational potential energy. Who has greater power?", "The person who gains it in less time."],
    ["Why can a ramp reduce the force needed to raise an object?", "It spreads the same ideal energy transfer over a longer distance."],
    ["Ignoring friction, does a ramp reduce the work needed to reach the same height?", "No. The decrease in force is balanced by an increase in distance."],
    ["Why is real input work on a ramp greater than the gain in gravitational potential energy?", "Friction transfers some energy to internal energy."],
  ]);

  [
    [25, 4],
    [60, 3.5],
    [120, 0.8],
    [18, 12],
    [75, 6],
    [250, 2],
    [42, 15],
    [8, 25],
    [340, 1.5],
    [95, 7],
  ].forEach(([force, distance]) => {
    add(
      "Mechanics",
      "Work calculations",
      `A constant force of ${force} N moves an object ${distance} m in the force direction. Calculate the work done.`,
      `W = Fd = ${force} × ${distance} = ${tidy(force * distance)} J.`,
    );
  });

  [
    [2, 6],
    [5, 4],
    [0.5, 12],
    [8, 3],
    [15, 2],
    [1.2, 10],
    [25, 1.5],
    [60, 0.8],
    [3.5, 7],
    [120, 0.5],
  ].forEach(([mass, speed]) => {
    add(
      "Mechanics",
      "Kinetic-energy calculations",
      `Calculate the kinetic energy of a ${mass} kg object moving at ${speed} m/s.`,
      `E_k = ½mv² = ½ × ${mass} × ${speed}² = ${tidy(0.5 * mass * speed ** 2)} J.`,
    );
  });

  [
    [2, 5],
    [0.5, 12],
    [8, 3.5],
    [15, 2],
    [60, 0.8],
    [1.2, 18],
    [25, 4],
    [75, 1.5],
    [3.5, 9],
    [120, 0.6],
  ].forEach(([mass, height]) => {
    add(
      "Mechanics",
      "Gravitational-energy calculations",
      `A ${mass} kg object is lifted vertically by ${height} m. Calculate its gain in gravitational potential energy using g = 9.8 N/kg.`,
      `ΔE_p = mgΔh = ${mass} × 9.8 × ${height} = ${tidy(mass * 9.8 * height)} J.`,
    );
  });

  [
    [600, 5],
    [1500, 12],
    [240, 3],
    [3600, 20],
    [75, 0.5],
    [8400, 60],
    [1250, 2.5],
    [480, 8],
    [9800, 14],
    [45, 1.5],
  ].forEach(([energy, time]) => {
    add(
      "Mechanics",
      "Power calculations",
      `A device transfers ${energy} J of energy in ${time} s. Calculate its average power.`,
      `P = E/t = ${energy}/${time} = ${tidy(energy / time)} W.`,
    );
  });

  [
    [2, 5],
    [5, 8],
    [0.5, 20],
    [10, 3],
    [25, 2],
    [1.5, 12],
  ].forEach(([height, speed]) => {
    const mass = 4;
    const initialGpe = mass * 9.8 * height;
    const finalKe = 0.5 * mass * speed ** 2;
    add(
      "Mechanics",
      "Conservation of energy",
      `A ${mass} kg object starts with ${tidy(initialGpe)} J of gravitational potential energy and later moves at ${speed} m/s with no change in other potential energy. Calculate its kinetic energy and state whether the data show mechanical energy conservation.`,
      `E_k = ½ × ${mass} × ${speed}² = ${tidy(finalKe)} J. Mechanical energy is ${Math.abs(finalKe - initialGpe) < 0.01 ? "conserved because the energies are equal" : `not fully conserved in the stated data; the difference is ${tidy(Math.abs(initialGpe - finalKe))} J`}.`,
    );
  });

  // ---------------------------------------------------------------------------
  // Waves
  // ---------------------------------------------------------------------------

  addMany("Waves", "Wave types and properties", [
    ["What is a wave?", "A travelling disturbance that transfers energy without a net transfer of matter."],
    ["What does a mechanical wave require in order to travel?", "A material medium."],
    ["Can an electromagnetic wave travel through a vacuum?", "Yes."],
    ["Give two examples of mechanical waves.", "Sound waves and water waves; seismic waves are another example."],
    ["Give two examples of electromagnetic waves.", "For example, radio waves and visible light."],
    ["What is a transverse wave?", "A wave in which oscillations are perpendicular to the direction of energy transfer."],
    ["What is a longitudinal wave?", "A wave in which oscillations are parallel to the direction of energy transfer."],
    ["Give an example of a transverse mechanical wave.", "A wave on a stretched string or an S-wave in an earthquake."],
    ["Give an example of a longitudinal mechanical wave.", "A sound wave in air or a seismic P-wave."],
    ["Are all transverse waves electromagnetic?", "No. Waves on strings and seismic S-waves are transverse mechanical waves."],
    ["Are sound waves in air transverse or longitudinal?", "Longitudinal."],
    ["What are compressions in a longitudinal wave?", "Regions where particles are closer together and pressure/density is higher."],
    ["What are rarefactions in a longitudinal wave?", "Regions where particles are further apart and pressure/density is lower."],
    ["In a sound wave, do air particles travel from the source to the listener?", "No. They oscillate about equilibrium while energy travels through the air."],
    ["What is a wavefront?", "A line or surface joining points that are at the same phase."],
    ["How are rays drawn relative to wavefronts?", "Perpendicular to the wavefronts, in the direction of wave travel."],
    ["Why do circular wavefronts spread out from a point source?", "Energy radiates outward in many directions from the source."],
    ["What happens to intensity as a wave spreads over a larger area?", "Intensity generally decreases because the energy is distributed over a larger area."],
    ["What is meant by the equilibrium position?", "The undisturbed or central position about which particles oscillate."],
    ["Does a wave transfer energy?", "Yes. Energy is transferred from one place to another."],
  ]);

  addMany("Waves", "Wave anatomy", [
    ["Define amplitude.", "The maximum displacement from the equilibrium position."],
    ["State the SI unit of amplitude.", "Metres (m), although other length units may be used when appropriate."],
    ["Define wavelength.", "The shortest distance between two points in the same phase, such as crest to crest."],
    ["State the symbol and SI unit for wavelength.", "λ, measured in metres (m)."],
    ["Define frequency.", "The number of complete oscillations or waves passing a point per second."],
    ["State the symbol and SI unit for frequency.", "f, measured in hertz (Hz)."],
    ["Define period.", "The time taken for one complete oscillation or wave cycle."],
    ["State the symbol and SI unit for period.", "T, measured in seconds (s)."],
    ["How is wavelength measured on a transverse-wave diagram?", "Between equivalent adjacent points, such as crest to crest or trough to trough."],
    ["How is wavelength measured on a longitudinal-wave diagram?", "Between the centres of adjacent compressions or adjacent rarefactions."],
    ["How is amplitude shown on a displacement graph?", "From the equilibrium line to a crest or trough, not from crest to trough."],
    ["A crest-to-trough height is 12 cm. What is the amplitude?", "6 cm."],
    ["How does sound frequency affect pitch?", "Higher frequency gives higher pitch; lower frequency gives lower pitch."],
    ["How does sound-wave amplitude affect loudness?", "Greater amplitude generally gives greater intensity and a louder sound."],
    ["What unit is commonly used for sound level?", "Decibels (dB)."],
    ["How does light-wave amplitude relate to intensity?", "Greater amplitude corresponds to greater intensity or brightness."],
    ["Does changing amplitude change wave speed in the usual linear model?", "No. Speed is set by the medium and wave type, not amplitude."],
    ["If wave speed stays constant and frequency increases, what happens to wavelength?", "Wavelength decreases."],
    ["If wave speed stays constant and wavelength doubles, what happens to frequency?", "Frequency halves."],
    ["What does 'in phase' mean?", "Points have the same displacement and are moving in the same direction within the cycle."],
    ["What is the phase difference between adjacent crests?", "One full cycle: 360° or 2π radians."],
    ["What is the phase difference between a crest and the adjacent trough?", "Half a cycle: 180° or π radians."],
  ]);

  addMany("Waves", "Wave equations and graphs", [
    ["Write the wave-speed equation.", "v = fλ."],
    ["State the SI unit of wave speed.", "Metres per second (m/s)."],
    ["Rearrange v = fλ to make frequency the subject.", "f = v/λ."],
    ["Rearrange v = fλ to make wavelength the subject.", "λ = v/f."],
    ["Write the relationship between frequency and period.", "f = 1/T and T = 1/f."],
    ["What does a displacement–distance graph show?", "The displacement of different points along a wave at one instant."],
    ["What can be found directly from a displacement–distance graph?", "Amplitude and wavelength."],
    ["What does a displacement–time graph show?", "How one point's displacement changes with time."],
    ["What can be found directly from a displacement–time graph?", "Amplitude and period; frequency can then be calculated."],
    ["Why can wavelength not normally be read from a displacement–time graph alone?", "The horizontal axis is time, not position or distance."],
    ["Why can period not normally be read from a displacement–distance graph alone?", "The horizontal axis is position, not time."],
    ["On a displacement–distance graph, two adjacent crests are 0.8 m apart. What is λ?", "0.8 m."],
    ["On a displacement–time graph, two adjacent crests are 0.25 s apart. What is T?", "0.25 s."],
    ["A source completes 40 cycles in 10 s. What is its frequency?", "f = cycles/time = 40/10 = 4 Hz."],
    ["A source has a period of 0.02 s. What is its frequency?", "f = 1/T = 1/0.02 = 50 Hz."],
  ]);

  [
    [4, 2.5],
    [12, 0.75],
    [340, 0.5],
    [3e8, 600e-9],
    [24, 1.5],
    [1500, 3],
    [8, 0.25],
    [45, 2],
    [72, 0.4],
    [6, 4.5],
    [330, 1.1],
    [2.4, 0.8],
    [18, 3.5],
    [120, 0.6],
    [5, 12],
  ].forEach(([frequency, wavelength]) => {
    add(
      "Waves",
      "Wave-speed calculations",
      `A wave has frequency ${sci(frequency)} Hz and wavelength ${sci(wavelength)} m. Calculate its speed.`,
      `v = fλ = ${sci(frequency)} × ${sci(wavelength)} = ${sci(frequency * wavelength)} m/s.`,
    );
  });

  [
    [2, 0.5],
    [4, 0.25],
    [5, 0.2],
    [10, 0.1],
    [20, 0.05],
    [25, 0.04],
    [40, 0.025],
    [50, 0.02],
    [100, 0.01],
    [200, 0.005],
    [500, 0.002],
    [1000, 0.001],
  ].forEach(([frequency, period]) => {
    add(
      "Waves",
      "Frequency and period calculations",
      `A wave has a period of ${period} s. Calculate its frequency.`,
      `f = 1/T = 1/${period} = ${frequency} Hz.`,
    );
  });

  addMany("Waves", "Wave boundaries and diffraction", [
    ["Name four things that may happen when a wave reaches a boundary.", "It may be reflected, transmitted, refracted or absorbed; several can occur at once."],
    ["What is diffraction?", "The spreading of waves around an obstacle or through a gap."],
    ["When is diffraction through a gap most noticeable?", "When the gap width is similar to or smaller than the wavelength."],
    ["For the same gap, which diffracts more: a longer or shorter wavelength?", "The longer wavelength diffracts more."],
    ["What happens when a gap is much wider than the wavelength?", "There is little spreading; wavefronts remain mostly straight except near the edges."],
    ["What wavefront shape is produced when a narrow gap is comparable to the wavelength?", "Approximately semicircular wavefronts spread out from the gap."],
    ["Does diffraction change wave frequency?", "No. Frequency is set by the source."],
    ["Why can sound often be heard around a doorway?", "Sound wavelengths are often comparable to doorway dimensions, so sound diffracts noticeably."],
    ["Why is visible light diffraction around a doorway difficult to notice?", "Visible wavelengths are tiny compared with the doorway, so spreading is very small."],
    ["Why do long ocean waves bend around an island more than short waves?", "Their wavelength is larger relative to the island or gap dimensions, causing more diffraction."],
    ["What happens when waves meet an obstacle much smaller than their wavelength?", "They can diffract strongly around it."],
    ["How should diffracted wavefronts be spaced if speed and frequency remain constant?", "They should keep the same spacing because wavelength is unchanged."],
    ["What does Huygens' principle say?", "Every point on a wavefront can be treated as a source of secondary wavelets."],
  ]);

  addMany("Waves", "Reflection and mirrors", [
    ["State the law of reflection.", "The angle of incidence equals the angle of reflection."],
    ["From which line are angles of incidence and reflection measured?", "The normal, a line perpendicular to the surface."],
    ["What is the normal?", "An imaginary line drawn perpendicular to a surface at the point of incidence."],
    ["If a ray strikes along the normal, what is its angle of incidence?", "0°."],
    ["What path does a ray take when it strikes a mirror along the normal?", "It reflects straight back along the same path."],
    ["What type of reflection occurs from a smooth plane mirror?", "Specular reflection, with parallel incident rays remaining orderly after reflection."],
    ["What is diffuse reflection?", "Reflection from a rough surface in many directions because surface normals vary."],
    ["Does diffuse reflection obey the law of reflection?", "Yes. Each ray obeys the law at its local surface normal."],
    ["How is a virtual image in a plane mirror located using a ray diagram?", "Extend reflected rays backward behind the mirror until their extensions meet."],
    ["Why is a plane-mirror image called virtual?", "The light rays do not actually meet at the image position, so it cannot be projected onto a screen."],
    ["State four properties of a plane-mirror image.", "It is virtual, upright, laterally inverted, the same size as the object and the same distance behind the mirror as the object is in front."],
    ["What does lateral inversion mean?", "Left and right appear reversed in the mirror image."],
    ["An object is 2 m in front of a plane mirror. How far behind the mirror is its image?", "2 m."],
    ["An object is 2 m in front of a plane mirror. What is the object–image separation?", "4 m."],
    ["Why can you see an object in a mirror?", "Light from the object reflects from the mirror into your eyes; the brain traces the rays back to a virtual image."],
  ]);

  [12, 18, 25, 32, 41, 48, 57, 66].forEach((angle) => {
    add(
      "Waves",
      "Reflection calculations",
      `A light ray strikes a plane mirror at an angle of incidence of ${angle}°. Calculate the angle of reflection.`,
      `${angle}°, because angle of reflection equals angle of incidence.`,
    );
  });

  addMany("Waves", "Refraction, dispersion and apparent depth", [
    ["What is refraction?", "A change in wave direction caused by a change in speed as the wave enters a different medium at an angle."],
    ["Does refraction occur when a wave enters a new medium along the normal?", "Its speed and wavelength may change, but it does not change direction."],
    ["What happens to light speed when it enters a more optically dense medium?", "It decreases."],
    ["How does a ray bend when entering a more optically dense medium?", "Toward the normal."],
    ["How does a ray bend when entering a less optically dense medium?", "Away from the normal."],
    ["Does light frequency change at a boundary?", "No. Frequency remains fixed by the source."],
    ["If speed decreases but frequency stays constant, what happens to wavelength?", "Wavelength decreases."],
    ["What does refractive index describe?", "How much light slows in a medium compared with its speed in a vacuum."],
    ["Write the definition equation for refractive index.", "n = c/v, where c is light speed in vacuum and v is light speed in the medium."],
    ["Does a larger refractive index mean light is faster or slower in the medium?", "Slower."],
    ["What is dispersion?", "The separation of white light into colours because different wavelengths refract by different amounts."],
    ["What does dispersion show about white light?", "White light is a mixture of colours with different wavelengths/frequencies."],
    ["In ordinary glass, which visible colour usually refracts most?", "Violet."],
    ["In ordinary glass, which visible colour usually refracts least?", "Red."],
    ["Why does a rectangular glass block produce a ray parallel to the original incident ray?", "Refraction at the second parallel boundary reverses the angular change, although the ray is laterally displaced."],
    ["What is apparent depth?", "The depth at which an underwater object appears to be because refracted rays seem to come from a shallower point."],
    ["Why does a pool appear shallower than it really is?", "Light bends away from the normal as it leaves water; the eye traces rays back in straight lines to a shallower virtual position."],
    ["Why can a submerged object appear shifted or magnified?", "Refraction changes the directions of rays reaching the observer."],
    ["When drawing refraction, what must be drawn at the boundary?", "A normal perpendicular to the boundary."],
    ["A ray enters glass from air and bends toward the normal. Which medium is more optically dense?", "Glass."],
  ]);

  addMany("Waves", "Total internal reflection", [
    ["What is total internal reflection?", "Complete reflection back into the original medium with no transmitted refracted ray."],
    ["State the first condition for total internal reflection.", "The wave must travel from a more optically dense medium to a less optically dense medium."],
    ["State the second condition for total internal reflection.", "The angle of incidence must be greater than the critical angle."],
    ["What is the critical angle?", "The angle of incidence in the denser medium that produces a refracted ray at 90° to the normal."],
    ["What happens when the angle of incidence is less than the critical angle?", "Some light refracts out and some may reflect."],
    ["What happens when the angle of incidence equals the critical angle?", "The refracted ray travels along the boundary at 90° to the normal."],
    ["What happens when the angle of incidence is greater than the critical angle?", "Total internal reflection occurs."],
    ["Can total internal reflection occur when light travels from air into glass?", "No. It must travel from the more optically dense medium toward the less dense medium."],
    ["How do optical fibres use total internal reflection?", "Light repeatedly reflects inside the high-index core, guiding signals along the fibre."],
    ["Give a medical use of optical fibres.", "Endoscopes use fibres to carry light and images inside the body."],
    ["Why are prisms often used instead of mirrors in optical instruments?", "Total internal reflection can reflect nearly all the light without a reflective coating."],
    ["How can total internal reflection contribute to a mirage?", "Light bends through layers of air and may undergo total internal reflection, making sky light appear to come from the ground."],
    ["If the incident angle is 50° and the critical angle is 42°, what happens in the correct direction of travel?", "Total internal reflection occurs because 50° > 42°."],
    ["If the incident angle is 35° and the critical angle is 42°, does total internal reflection occur?", "No. The incident angle is below the critical angle."],
  ]);

  addMany("Waves", "Superposition and interference", [
    ["State the principle of superposition.", "When waves overlap, the resultant displacement is the algebraic sum of their individual displacements."],
    ["What is constructive interference?", "Waves overlap in phase and produce a larger resultant amplitude."],
    ["What is destructive interference?", "Waves overlap out of phase and produce a smaller resultant amplitude."],
    ["What happens when equal crests overlap?", "Their positive displacements add to make a crest with twice the amplitude."],
    ["What happens when an equal crest and trough overlap exactly?", "They cancel momentarily, giving zero resultant displacement."],
    ["Are waves permanently changed after passing through each other in a linear medium?", "No. They continue with their original shapes after overlapping."],
    ["Does destructive interference destroy energy?", "No. Energy is redistributed within the interference pattern."],
    ["Two pulses of +3 cm and +2 cm overlap. What is the resultant displacement?", "+5 cm."],
    ["Two pulses of +4 cm and −6 cm overlap. What is the resultant displacement?", "−2 cm."],
    ["Two pulses of −3 cm and −5 cm overlap. What is the resultant displacement?", "−8 cm."],
    ["What phase difference gives maximum constructive interference for identical waves?", "0° or any whole multiple of 360°."],
    ["What phase difference gives maximum destructive interference for identical waves?", "180° or an odd multiple of 180°."],
  ]);

  // ---------------------------------------------------------------------------
  // Particle Physics
  // ---------------------------------------------------------------------------

  addMany("Particle Physics", "Development of the atomic model", [
    ["What did Democritus propose about matter?", "Matter could be divided until tiny indivisible particles, atoms, remained."],
    ["What was a limitation of Democritus' atomic idea?", "It was philosophical and not supported by experimental evidence."],
    ["State a key feature of Dalton's atomic model.", "Matter is made of tiny solid atoms, and atoms of each element have characteristic properties."],
    ["What evidence led scientists to replace Dalton's indivisible-atom model?", "Experiments revealed smaller charged particles inside atoms."],
    ["What did J. J. Thomson discover?", "The electron."],
    ["What model did Thomson propose?", "The plum-pudding model: negative electrons embedded in diffuse positive charge."],
    ["What did Goldstein's canal-ray work provide evidence for?", "Positive particles or positive charge within atoms."],
    ["What observation in Rutherford scattering challenged the plum-pudding model?", "A very small fraction of alpha particles were deflected through large angles or bounced back."],
    ["What did most alpha particles passing straight through gold foil show?", "Atoms are mostly empty space."],
    ["What did rare large-angle alpha deflections show?", "Most mass and positive charge are concentrated in a tiny dense nucleus."],
    ["What did Rutherford identify in the nucleus?", "Positive charge, later associated with protons."],
    ["What did Bohr add to the nuclear model?", "Electrons occupy discrete energy levels or shells."],
    ["What evidence supports discrete electron energy levels?", "Atoms emit or absorb specific spectral lines rather than a continuous range."],
    ["What did Chadwick discover?", "The neutron."],
    ["Why was the neutron needed in the atomic model?", "It explained additional nuclear mass and isotopes without adding charge."],
    ["How does the quantum or electron-cloud model differ from fixed Bohr orbits?", "It describes probability regions (orbitals), not electrons travelling on fixed circular paths."],
    ["State one limitation of the simple Bohr–Rutherford model.", "It does not accurately describe electron probability distributions or spectra of complex atoms."],
    ["Why do protons remain bound in a nucleus despite electric repulsion?", "The strong nuclear force is attractive at very short nuclear distances."],
    ["What is the Standard Model?", "A theory describing fundamental particles and three non-gravitational interactions."],
    ["What smaller particles make up protons and neutrons?", "Quarks."],
    ["Which quarks make up a proton?", "Two up quarks and one down quark."],
    ["Which quarks make up a neutron?", "One up quark and two down quarks."],
    ["Why do scientific models change over time?", "New evidence may show limitations, leading to revised models with greater explanatory power."],
  ]);

  addMany("Particle Physics", "Atomic structure and notation", [
    ["Where are protons found?", "In the nucleus."],
    ["Where are neutrons found?", "In the nucleus."],
    ["Where are electrons found?", "In probability regions or shells around the nucleus."],
    ["State the relative charge of a proton.", "+1."],
    ["State the relative charge of a neutron.", "0."],
    ["State the relative charge of an electron.", "−1."],
    ["State the approximate mass of a proton.", "1.67 × 10⁻²⁷ kg."],
    ["State the approximate mass of a neutron.", "1.67 × 10⁻²⁷ kg, slightly greater than a proton's mass."],
    ["State the approximate mass of an electron.", "9.11 × 10⁻³¹ kg."],
    ["What is the atomic number Z?", "The number of protons in the nucleus."],
    ["Why does atomic number define an element?", "All atoms of one element have the same number of protons."],
    ["What is the mass number A?", "The total number of protons and neutrons (nucleons) in the nucleus."],
    ["How is neutron number calculated?", "Number of neutrons = A − Z."],
    ["What is a nucleon?", "A proton or neutron."],
    ["What is an isotope?", "An atom of an element with the same number of protons but a different number of neutrons."],
    ["Do isotopes of an element have the same atomic number?", "Yes, because they have the same number of protons."],
    ["Why do isotopes have similar chemical properties?", "Neutral atoms have the same electron arrangement, which controls chemical behaviour."],
    ["Why can isotopes have different nuclear properties?", "Their nuclei contain different numbers of neutrons and may differ in stability."],
    ["What makes an atom electrically neutral?", "It has equal numbers of protons and electrons."],
    ["How is a positive ion formed?", "An atom loses one or more electrons."],
    ["How is a negative ion formed?", "An atom gains one or more electrons."],
    ["Does forming an ordinary ion change the nucleus?", "No. It changes only the number of electrons."],
    ["What is the maximum number of electrons in the first shell in the simple model?", "2."],
    ["What is the maximum number used for the second shell at this level?", "8."],
    ["Write the simple shell arrangement for a neutral sodium atom, Z = 11.", "2, 8, 1."],
    ["Write the simple shell arrangement for Na⁺.", "2, 8, because sodium has lost one electron."],
    ["Write the simple shell arrangement for a neutral chlorine atom, Z = 17.", "2, 8, 7."],
    ["Write the simple shell arrangement for Cl⁻.", "2, 8, 8, because chlorine has gained one electron."],
    ["In nuclide notation, where is mass number A written?", "At the upper left of the element symbol."],
    ["In nuclide notation, where is atomic number Z written?", "At the lower left of the element symbol."],
  ]);

  [
    ["carbon-12", 6, 12],
    ["carbon-14", 6, 14],
    ["oxygen-16", 8, 16],
    ["sodium-23", 11, 23],
    ["magnesium-24", 12, 24],
    ["chlorine-35", 17, 35],
    ["potassium-39", 19, 39],
    ["calcium-40", 20, 40],
    ["iron-56", 26, 56],
    ["cobalt-60", 27, 60],
    ["iodine-131", 53, 131],
    ["uranium-235", 92, 235],
  ].forEach(([name, z, a]) => {
    add(
      "Particle Physics",
      "Atomic-number calculations",
      `A neutral atom of ${name} has atomic number ${z} and mass number ${a}. State its numbers of protons, neutrons and electrons.`,
      `${z} protons, ${a - z} neutrons and ${z} electrons.`,
    );
  });

  addMany("Particle Physics", "Kinetic model and states of matter", [
    ["State the central idea of the kinetic model of matter.", "Matter is made of particles in constant random motion."],
    ["What happens to average particle kinetic energy when temperature increases?", "It increases."],
    ["What does temperature measure at the particle level?", "The average kinetic energy of the particles."],
    ["Do all particles in a sample have exactly the same kinetic energy?", "No. They have a distribution of energies; temperature relates to the average."],
    ["What lies between particles in the kinetic model?", "Mostly empty space."],
    ["What happens to average particle separation from solid to liquid to gas?", "It generally increases, especially from liquid to gas."],
    ["What causes particles to remain together in liquids and solids?", "Attractive forces between particles."],
    ["Describe particle arrangement in a solid.", "Particles are closely packed in an ordered or fixed arrangement."],
    ["Describe particle motion in a solid.", "Particles vibrate about fixed equilibrium positions."],
    ["Why does a solid have a fixed shape?", "Strong interactions keep particles near fixed positions."],
    ["Describe particle arrangement in a liquid.", "Particles are close together but disordered and able to move past one another."],
    ["Why can a liquid flow?", "Its particles can move past one another while remaining close together."],
    ["Does a liquid have a fixed volume?", "Approximately yes, because its particles remain close together."],
    ["Describe particles in a gas.", "They are widely separated and move rapidly in random directions."],
    ["Why is a gas compressible?", "There is a large amount of empty space between its particles."],
    ["Why are liquids difficult to compress?", "Their particles are already close together."],
    ["How does a gas produce pressure?", "Particles collide with container walls and change momentum, exerting forces on the walls."],
    ["What happens to gas pressure in a fixed volume when temperature rises?", "Pressure rises because particles collide more often and with greater momentum changes."],
    ["What is internal energy?", "The total microscopic kinetic energy plus potential energy of the particles in a system."],
    ["Write the qualitative internal-energy relationship.", "U = total microscopic E_k + total microscopic E_p."],
    ["During temperature rise within one phase, which part of internal energy mainly increases?", "Particle kinetic energy."],
    ["During a phase change at constant temperature, which part of internal energy mainly increases?", "Particle potential energy as attractions are overcome."],
    ["Name the change from solid to liquid.", "Melting or fusion."],
    ["Name the change from liquid to solid.", "Freezing or solidification."],
    ["Name the change from liquid to gas throughout the liquid.", "Boiling or vaporisation."],
    ["How is evaporation different from boiling?", "Evaporation occurs at the surface over a range of temperatures; boiling occurs throughout at the boiling point."],
    ["Name the change from gas to liquid.", "Condensation."],
    ["Name the change directly from solid to gas.", "Sublimation."],
    ["Name the change directly from gas to solid.", "Deposition."],
    ["What is plasma?", "An ionised gas containing free charged particles."],
    ["Why can plasma conduct electricity?", "It contains mobile ions and electrons."],
    ["What is a Bose–Einstein condensate?", "A very low-temperature state in which many particles occupy the same quantum state."],
  ]);

  addMany("Particle Physics", "Temperature", [
    ["What does a measurement scale require?", "Reference points and agreed, regular gradations."],
    ["What are the fixed points of the Celsius scale at standard pressure?", "Water freezes at 0 °C and boils at 100 °C."],
    ["What is absolute zero in kelvin?", "0 K."],
    ["What is absolute zero in degrees Celsius?", "−273.15 °C, often approximated as −273 °C."],
    ["Write the approximate Celsius-to-kelvin conversion.", "T(K) = θ(°C) + 273.15."],
    ["Write the approximate kelvin-to-Celsius conversion.", "θ(°C) = T(K) − 273.15."],
    ["Does a temperature interval of 1 K have the same size as 1 °C?", "Yes."],
    ["Should the degree symbol be used with kelvin?", "No. Write K, not °K."],
    ["Why is the kelvin scale called an absolute scale?", "Its zero is absolute zero, the minimum thermodynamic temperature."],
    ["Write the Celsius-to-Fahrenheit equation.", "θ_F = (9/5)θ_C + 32."],
    ["What Celsius temperature is equal to 32 °F?", "0 °C."],
    ["What Celsius temperature is equal to 212 °F?", "100 °C."],
    ["What happens to average kinetic energy as kelvin temperature increases?", "It increases in proportion to absolute temperature for an ideal gas."],
    ["Can a thermodynamic temperature be below 0 K?", "No."],
  ]);

  [-40, -20, 0, 20, 25, 37, 50, 80, 100, 120].forEach((celsius) => {
    add(
      "Particle Physics",
      "Temperature calculations",
      `Convert ${celsius} °C to kelvin using T = θ + 273.15.`,
      `${celsius} + 273.15 = ${tidy(celsius + 273.15, 2)} K.`,
    );
  });

  [233.15, 253.15, 273.15, 293.15, 298.15, 310.15, 323.15, 353.15, 373.15, 393.15].forEach((kelvin) => {
    add(
      "Particle Physics",
      "Temperature calculations",
      `Convert ${kelvin} K to degrees Celsius.`,
      `${kelvin} − 273.15 = ${tidy(kelvin - 273.15, 2)} °C.`,
    );
  });

  [-20, 0, 10, 20, 30, 37, 50, 80, 100].forEach((celsius) => {
    add(
      "Particle Physics",
      "Temperature calculations",
      `Convert ${celsius} °C to degrees Fahrenheit.`,
      `θ_F = (9/5 × ${celsius}) + 32 = ${tidy((9 / 5) * celsius + 32)} °F.`,
    );
  });

  addMany("Particle Physics", "Heat and thermodynamics", [
    ["What is heat?", "Thermal energy transferred between systems because of a temperature difference."],
    ["Is heat a substance stored inside an object?", "No. Heat is energy in transfer; internal energy is stored in the system."],
    ["In which direction does heat transfer spontaneously?", "From higher temperature to lower temperature."],
    ["What is thermal equilibrium?", "A state in which systems have the same temperature and there is no net heat transfer."],
    ["State the zeroth law of thermodynamics.", "If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other."],
    ["Why is the zeroth law important for thermometers?", "A thermometer at equilibrium has the same temperature as the object being measured."],
    ["State the first law of thermodynamics in simple terms.", "Energy is conserved; internal energy changes through heating and work."],
    ["State the second law in terms of heat flow.", "Spontaneous heat transfer is from hot to cold, and total entropy tends to increase."],
    ["Can a cold object transfer energy to a hotter object without external work?", "Not as a spontaneous net transfer; devices such as refrigerators require work."],
    ["What is conduction?", "Thermal energy transfer through particle interactions without bulk movement of matter."],
    ["How does conduction occur in a non-metal solid?", "Vibrating particles transfer energy to neighbours through interactions."],
    ["Why are metals usually good thermal conductors?", "Mobile electrons rapidly carry energy, alongside lattice vibrations."],
    ["What is convection?", "Thermal energy transfer by bulk movement of a fluid."],
    ["Why does heated fluid often rise?", "It expands, becomes less dense than surrounding fluid and experiences an upward buoyant force."],
    ["Why can convection not occur through a solid?", "Solid particles cannot move in bulk to form convection currents."],
    ["What is thermal radiation?", "Energy transfer by electromagnetic waves, mainly infrared at everyday temperatures."],
    ["Does thermal radiation require a medium?", "No. It can travel through a vacuum."],
    ["Why can energy from the Sun reach Earth through space?", "It is transferred by electromagnetic radiation."],
    ["What surfaces are good absorbers and emitters of infrared?", "Dark, matte surfaces."],
    ["What surfaces are poor absorbers and emitters of infrared?", "Light-coloured, shiny surfaces."],
    ["Why does a vacuum flask use a vacuum between its walls?", "To greatly reduce conduction and prevent convection."],
    ["Why are the flask walls shiny?", "To reduce absorption and emission of infrared radiation."],
    ["Why is the stopper made from an insulating material?", "To reduce conduction through the neck."],
    ["Why is the stopper fitted tightly?", "To reduce movement of air and therefore convection and evaporation."],
    ["What happens when two objects at different temperatures touch?", "Energy transfers from the hotter to the colder until thermal equilibrium is approached."],
  ]);

  addMany("Particle Physics", "Specific heat capacity", [
    ["Define specific heat capacity.", "The energy required to raise the temperature of 1 kg of a substance by 1 K (or 1 °C)."],
    ["State the symbol commonly used for specific heat capacity.", "c."],
    ["State the SI unit of specific heat capacity.", "J kg⁻¹ K⁻¹, numerically equivalent to J kg⁻¹ °C⁻¹ for temperature changes."],
    ["Write the specific-heat-capacity equation.", "Q = mcΔT."],
    ["In Q = mcΔT, what does Q represent?", "Thermal energy transferred, in joules."],
    ["In Q = mcΔT, what does m represent?", "Mass in kilograms."],
    ["In Q = mcΔT, what does ΔT represent?", "Temperature change, T_f − T_i."],
    ["A substance has a high specific heat capacity. What does this mean?", "A large amount of energy is needed per kilogram for each degree of temperature rise."],
    ["For equal masses receiving equal energy, which changes temperature more: high-c or low-c material?", "The low-specific-heat-capacity material."],
    ["Why does water moderate coastal temperatures?", "Its high specific heat capacity lets it absorb or release much energy with a relatively small temperature change."],
    ["Why must mass be converted from grams to kilograms in Q = mcΔT when c is in J kg⁻¹ K⁻¹?", "The units must be consistent."],
    ["How is c found from Q = mcΔT?", "c = Q/(mΔT)."],
    ["How is mass found from Q = mcΔT?", "m = Q/(cΔT)."],
    ["How is temperature change found from Q = mcΔT?", "ΔT = Q/(mc)."],
    ["How is final temperature found when energy is added without a phase change?", "T_f = T_i + Q/(mc)."],
    ["How is final temperature found when energy is removed?", "T_f = T_i + Q/(mc), using negative Q, or subtract the magnitude Q/(mc)."],
    ["For a graph of temperature T against energy Q, what is the gradient?", "ΔT/ΔQ = 1/(mc)."],
    ["For a graph of energy Q against temperature change ΔT, what is the gradient?", "mc."],
    ["In an ideal mixing problem, what energy relationship is used?", "Q_gained + Q_lost = 0."],
    ["Why may an experimental value of c differ from a published value?", "Energy may escape to surroundings or heat the apparatus, and measurements have uncertainty."],
    ["How can heat loss be reduced in a calorimetry experiment?", "Use insulation and a lid, minimise transfer time and account for the container's heat capacity."],
  ]);

  [
    [0.5, 4200, 10],
    [0.2, 900, 25],
    [1.5, 450, 30],
    [0.75, 3900, 8],
    [2, 500, 12],
    [0.1, 130, 50],
    [3, 840, 6],
    [0.4, 2400, 15],
    [1.2, 1000, 20],
    [0.25, 450, 80],
    [5, 4200, 2],
    [0.6, 900, 35],
  ].forEach(([mass, capacity, delta]) => {
    add(
      "Particle Physics",
      "Specific-heat calculations",
      `A ${mass} kg sample with specific heat capacity ${capacity} J kg⁻¹ K⁻¹ changes temperature by ${delta} K. Calculate the thermal energy transferred.`,
      `Q = mcΔT = ${mass} × ${capacity} × ${delta} = ${sci(mass * capacity * delta)} J.`,
    );
  });

  [
    [8400, 0.5, 4],
    [18000, 2, 5],
    [27000, 1.5, 10],
    [9360, 0.4, 6],
    [50400, 3, 4],
    [11700, 0.3, 30],
    [36000, 2.5, 8],
    [12600, 0.7, 20],
  ].forEach(([energy, mass, delta]) => {
    add(
      "Particle Physics",
      "Specific-heat calculations",
      `A ${mass} kg sample receives ${energy} J and warms by ${delta} K. Calculate its specific heat capacity.`,
      `c = Q/(mΔT) = ${energy}/(${mass} × ${delta}) = ${tidy(energy / (mass * delta))} J kg⁻¹ K⁻¹.`,
    );
  });

  [
    [42000, 2, 4200],
    [9000, 0.5, 900],
    [13500, 1.5, 450],
    [46800, 3, 1300],
    [10000, 2, 500],
    [50400, 1.5, 840],
    [14400, 0.4, 2400],
    [24000, 1.2, 1000],
  ].forEach(([energy, mass, capacity]) => {
    add(
      "Particle Physics",
      "Specific-heat calculations",
      `A ${mass} kg sample with c = ${capacity} J kg⁻¹ K⁻¹ receives ${energy} J. Calculate its temperature increase.`,
      `ΔT = Q/(mc) = ${energy}/(${mass} × ${capacity}) = ${tidy(energy / (mass * capacity))} K.`,
    );
  });

  addMany("Particle Physics", "Heating curves and latent heat", [
    ["What happens to temperature during an ideal phase change?", "It remains constant until the phase change is complete."],
    ["Why does temperature remain constant during a phase change?", "Transferred energy changes particle potential energy rather than average kinetic energy."],
    ["What does a sloping section of a heating curve show?", "Temperature and average kinetic energy are increasing within one phase."],
    ["What does a flat section of a heating curve show?", "A phase change at constant temperature."],
    ["What energy change occurs while ice melts at 0 °C?", "Particle potential energy and internal energy increase while average kinetic energy stays constant."],
    ["What energy change occurs while steam condenses?", "Particle potential energy and internal energy decrease as energy is transferred out."],
    ["Define specific latent heat.", "The energy required to change the state of 1 kg of a substance without changing its temperature."],
    ["Write the latent-heat equation.", "Q = mL."],
    ["State the SI unit of specific latent heat.", "J kg⁻¹."],
    ["What is specific latent heat of fusion?", "Energy per kilogram needed to change between solid and liquid at constant temperature."],
    ["What is specific latent heat of vaporisation?", "Energy per kilogram needed to change between liquid and gas at constant temperature."],
    ["Why is latent heat of vaporisation usually greater than latent heat of fusion for the same substance?", "Vaporisation requires particles to separate much more and overcome most intermolecular attraction."],
    ["How is L found from Q = mL?", "L = Q/m."],
    ["How is mass found from Q = mL?", "m = Q/L."],
    ["Why must Q = mcΔT not be used across a phase-change plateau?", "Temperature does not change; phase-change energy must be calculated using Q = mL."],
    ["How is total energy found when ice below 0 °C becomes water above 0 °C?", "Add energy to warm the ice, melt it using mL_f, then warm the liquid water."],
    ["On a heating curve with constant power, what does a longer plateau indicate?", "More energy is required for that phase change."],
    ["Why does evaporation cool the remaining liquid?", "Higher-energy particles escape, reducing the average kinetic energy of those left."],
  ]);

  [
    [0.5, 334000],
    [0.2, 2260000],
    [1.5, 334000],
    [0.1, 2260000],
    [2, 80000],
    [0.75, 200000],
    [3, 334000],
    [0.4, 2260000],
    [0.25, 108000],
    [1.2, 850000],
  ].forEach(([mass, latent]) => {
    add(
      "Particle Physics",
      "Latent-heat calculations",
      `A ${mass} kg sample changes state at constant temperature. Its specific latent heat is ${sci(latent)} J/kg. Calculate the energy transferred.`,
      `Q = mL = ${mass} × ${sci(latent)} = ${sci(mass * latent)} J.`,
    );
  });

  [
    [167000, 0.5],
    [452000, 0.2],
    [501000, 1.5],
    [226000, 0.1],
    [160000, 2],
    [150000, 0.75],
    [1002000, 3],
    [904000, 0.4],
  ].forEach(([energy, mass]) => {
    add(
      "Particle Physics",
      "Latent-heat calculations",
      `A ${mass} kg sample changes state using ${sci(energy)} J. Calculate its specific latent heat.`,
      `L = Q/m = ${sci(energy)}/${mass} = ${sci(energy / mass)} J/kg.`,
    );
  });

  addMany("Particle Physics", "Nuclear structure and stability", [
    ["What is mass defect?", "The difference between the total mass of separated nucleons and the actual mass of the bound nucleus."],
    ["Why does a bound nucleus have less mass than its separated nucleons?", "Energy is released when the nucleus forms; the lost mass corresponds to binding energy."],
    ["Write Einstein's mass–energy equation.", "E = mc²."],
    ["What does nuclear binding energy represent?", "The energy required to separate a nucleus completely into individual nucleons."],
    ["What is binding energy per nucleon?", "Total binding energy divided by the number of nucleons."],
    ["What does a high binding energy per nucleon indicate?", "A relatively stable, tightly bound nucleus."],
    ["Why can both fission of heavy nuclei and fusion of light nuclei release energy?", "Their products have greater binding energy per nucleon, so mass is converted to released energy."],
    ["What is the band or line of stability?", "The region on a neutron-number versus proton-number graph containing stable nuclei."],
    ["Why do heavy stable nuclei contain more neutrons than protons?", "Extra neutrons add strong-force attraction without adding electric repulsion."],
    ["What is radioactivity?", "Spontaneous, random decay of unstable nuclei with emission of particles or radiation."],
    ["Is radioactive decay affected significantly by temperature or chemical state?", "No. It is a nuclear process."],
    ["Why is radioactive decay described as random?", "The decay time of an individual unstable nucleus cannot be predicted."],
    ["What is a parent nucleus?", "The original unstable nucleus before decay."],
    ["What is a daughter nucleus?", "The nucleus produced by a radioactive decay."],
    ["What must be conserved in a balanced nuclear equation?", "Nucleon number, charge, energy and momentum."],
  ]);

  [
    [1e-12, 9e16],
    [2e-9, 9e16],
    [5e-6, 9e16],
    [0.001, 9e16],
    [3e-8, 9e16],
    [7.5e-11, 9e16],
    [2.5e-4, 9e16],
    [6e-7, 9e16],
  ].forEach(([mass, cSquared]) => {
    add(
      "Particle Physics",
      "Mass–energy calculations",
      `A nuclear process converts ${sci(mass)} kg of mass to energy. Calculate the energy released using c² = 9.0 × 10^16 m²/s².`,
      `E = mc² = ${sci(mass)} × 9.0 × 10^16 = ${sci(mass * cSquared)} J.`,
    );
  });

  addMany("Particle Physics", "Radioactive decay", [
    ["What is an alpha particle?", "A helium-4 nucleus containing two protons and two neutrons, with charge +2e."],
    ["How do mass number and atomic number change in alpha decay?", "Mass number decreases by 4 and atomic number decreases by 2."],
    ["Why does alpha decay occur mainly in very heavy nuclei?", "It reduces size and proton–proton repulsion, moving the nucleus toward greater stability."],
    ["What is the daughter of uranium-238 after alpha decay?", "Thorium-234."],
    ["What is a beta-minus particle?", "A high-speed electron created in the nucleus during decay; it is not an orbital electron."],
    ["What happens inside the nucleus during beta-minus decay?", "A neutron changes into a proton, emitting an electron and an antineutrino."],
    ["How do mass number and atomic number change in beta-minus decay?", "Mass number stays the same and atomic number increases by 1."],
    ["Why is an antineutrino emitted in beta-minus decay?", "It carries energy, momentum and lepton number so conservation laws are satisfied."],
    ["What is a neutrino?", "A very low-mass, electrically neutral fundamental particle that interacts very weakly."],
    ["What is gamma radiation?", "High-frequency electromagnetic radiation emitted by an excited nucleus."],
    ["How do mass number and atomic number change in gamma emission?", "Neither changes; the nucleus loses energy."],
    ["Compare the ionising ability of alpha, beta and gamma.", "Alpha is strongest, beta intermediate and gamma weakest per interaction."],
    ["Compare penetration of alpha, beta and gamma.", "Alpha is stopped by paper/skin, beta by thin aluminium, and gamma requires thick lead or concrete for substantial reduction."],
    ["Why is alpha dangerous inside the body?", "Its strong ionisation deposits energy over a short distance in tissue."],
    ["Why can gamma be hazardous outside the body?", "It is highly penetrating and can reach internal tissue."],
    ["What happens to decay energy in alpha decay?", "It mainly becomes kinetic energy of the alpha particle and recoiling daughter nucleus."],
  ]);

  addMany("Particle Physics", "Fission, fusion and applications", [
    ["What is nuclear fission?", "A heavy nucleus splits into two or more smaller nuclei, usually releasing neutrons and energy."],
    ["How can fission of uranium-235 be initiated?", "The nucleus absorbs a neutron and becomes unstable."],
    ["What is a fission chain reaction?", "Neutrons from one fission cause further fissions, which release more neutrons."],
    ["What is critical mass?", "The minimum amount/arrangement of fissile material needed to sustain a chain reaction."],
    ["What does a moderator do in a thermal nuclear reactor?", "It slows neutrons so they are more likely to cause further fission in the fuel."],
    ["What do control rods do?", "They absorb neutrons to regulate or stop the chain reaction."],
    ["What does coolant do in a nuclear reactor?", "It transfers thermal energy from the reactor core."],
    ["List the main energy transformations in a nuclear power station.", "Nuclear → internal/thermal → kinetic (steam/turbine) → electrical."],
    ["Does a nuclear reactor directly convert nuclear energy to electrical energy?", "No. Heat produces steam, which turns a turbine connected to a generator."],
    ["Give one advantage of nuclear fission power.", "Large energy output with low operational greenhouse-gas emissions."],
    ["Give one disadvantage of nuclear fission power.", "Long-lived radioactive waste, accident risk, high cost or proliferation concerns."],
    ["What is nuclear fusion?", "Two light nuclei combine to form a heavier nucleus and release energy."],
    ["What fusion process powers the Sun?", "Hydrogen nuclei ultimately fuse to form helium, releasing energy."],
    ["Why are extremely high temperatures needed for fusion?", "Nuclei need enough kinetic energy to approach closely despite electric repulsion."],
    ["Why is fusion difficult to sustain on Earth?", "The very hot plasma must be confined long enough at sufficient density for net energy gain."],
    ["Give one potential advantage of fusion power.", "Abundant fuel and no runaway fission chain reaction, with less long-lived waste."],
    ["Give one current limitation of fusion power.", "Maintaining stable, energy-producing plasma confinement is technically difficult."],
    ["How are radioactive tracers used in medicine?", "A detectable isotope follows a substance or organ process inside the body."],
    ["Why should a medical tracer often have a short half-life?", "It lasts long enough for imaging but reduces the patient's total radiation dose."],
    ["How can radiation be used to treat cancer?", "Focused radiation damages DNA in tumour cells, limiting their ability to divide."],
    ["Why must radiation therapy be carefully targeted?", "To maximise tumour dose while limiting damage to healthy tissue."],
    ["How is gamma radiation used in sterilisation?", "It kills microorganisms on medical equipment or food without requiring high temperatures."],
    ["What is a military risk associated with nuclear technology?", "Nuclear weapons proliferation and the destructive use of fission or fusion reactions."],
    ["What is one environmental concern about uranium mining?", "Habitat disturbance, contaminated waste or exposure to radioactive materials."],
  ]);

  window.YEAR11_PHYSICS_DATA = {
    topicMeta,
    questions,
  };
})();
