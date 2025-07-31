// src/pages/projects/TrackingSolar.jsx
export default function TrackingSolar() {
  return (
    <main className="min-h-screen p-8 bg-white font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-4">
        Solar Panel Tracking System Capstone
      </h1>

      <p className="mb-4">
        As part of my senior capstone project at Loyola Marymount University, my
        team set out to improve campus energy efficiency by enhancing the
        existing solar array infrastructure. We developed a scalable solar panel
        tracking prototype designed to optimize energy capture throughout the
        day. The long-term vision was to implement the design at scale to power
        one or more buildings on campus.
      </p>

      <p className="mb-4">
        My primary responsibility was leading the electrical and software
        systems. This included:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Designing the power and control circuit</li>
        <li>Selecting and programming the actuators</li>
        <li>Developing all embedded software for sun-tracking control logic</li>
        <li>
          Integrating microcontrollers and communication between components
        </li>
      </ul>

      <div className="flex justify-center">
        <img
          src="/images/physicalSystem.jpg"
          alt="Prototype Solar Tracking System"
          className="mb-6 rounded shadow-md"
        />
      </div>

      <p className="mb-4">
        I designed the system architecture with scalability in mind: each solar
        panel operates independently using identical Arduino-based firmware. A
        central Raspberry Pi serves as the communication and data processing
        hub. The system also includes an onboard display to provide real-time
        metrics, diagnostics, and alert information.
      </p>

      <div className="flex justify-center">
        <img
          src="/images/systemOverview.png"
          alt="System Architecture Diagram"
          className="mb-6 rounded shadow-md"
        />
      </div>

      <p className="mb-4">The complete electrical system includes:</p>

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Current and voltage sensors for energy monitoring</li>
        <li>Step-down voltage converters for regulated power distribution</li>
        <li>Raspberry Pi for central control and Wi-Fi connectivity</li>
        <li>Arduino for direct actuator control and sensor interfacing</li>
        <li>
          Motor drivers and relays to manage actuator power and logic-level
          isolation
        </li>
        <li>Serial and GPIO communication between subsystems</li>
      </ul>

      <p className="mb-4">
        You can explore the full project repository on GitHub&nbsp;
        <a
          href="https://github.com/JackKingLeon/solarPanelCapstone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here
        </a>
        , and download the full-resolution circuit schematic&nbsp;
        <a
          href="/circuit.png"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here
        </a>
        .
      </p>

      <div className="flex justify-center">
        <img
          src="/images/circuitShematic.png"
          alt="Solar Panel Tracking Circuit Diagram"
          className="mb-6 rounded shadow-md"
        />
      </div>
    </main>
  );
}
