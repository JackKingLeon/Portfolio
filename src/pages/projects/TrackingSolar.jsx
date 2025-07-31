// src/pages/projects/StanderProject.jsx
export default function StanderProject() {
  return (
    <main className="min-h-screen p-8 bg-white font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-4">
        Solar Panel Tracking System Capstone
      </h1>

      <p className="mb-4">
        My senior year capstone project's goal was to improve LMU's solar arrays
        in a cost effective and novel way. My group chose to create a prototype
        for a tracking solar panel that could be scaled to power at least one of
        the buildings on campus. My job was to handle the electrical section of
        the project including designing the circuit, picking out and coding the
        actuators, and coding any and all control systems and chips neccessary
        to track the sun.
      </p>

      <div className="flex justify-center">
        <img
          src="/images/physicalSystem.jpg"
          alt="High Level system Overview"
          className="mb-6"
        />
      </div>

      <p className="mb-4">
        I designed the system to be easily scaleable with identacle code bases
        in each arduino, a central control system (the raspberry pi in the
        prototype), and a display that would give important
        data/notifications/information at a glance
      </p>

      <div className="flex justify-center">
        <img
          src="/images/systemOverview.png"
          alt="High Level system Overview"
          className="mb-6"
        />
      </div>

      <p className="mb-4">
        The code for the capstone can be found on my github
        <a
          href="https://github.com/JackKingLeon/solarPanelCapstone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          (here)
        </a>
        and the circuit is shown at the bottom of this page and can be
        downloaded
        <a
          href="/circuit.png"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here.
        </a>
        The full circuit consisted of current and voltage sensors to collect
        data, a handful of step downs for voltage management, a raspberry pi, an
        arduino, a couple relays so the raspberry pi can freely cut power to
        systems that do not need it, components to facilitate communication
        between the pi and sensors and the arduino and the pi, motor shields for
        the actuators to plug into the arduino, and the actuators themselves.
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Custom CAD design using SolidWorks</li>
        <li>Fabricated with manual machining</li>
        <li>Tailored ergonomics and adjustability</li>
      </ul>

      <div className="flex justify-center">
        <img
          src="/images/circuitShematic.png"
          alt="Tracking Solar Panel Circuit"
          className="mb-6"
        />
      </div>
    </main>
  );
}
