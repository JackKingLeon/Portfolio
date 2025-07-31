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
      <img
        src="/images/circuitShematic.png"
        alt="Assistive Stander"
        className="mb-6"
        style={{ alignSelf: "center" }}
      />

      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Custom CAD design using SolidWorks</li>
        <li>Fabricated with manual machining</li>
        <li>Tailored ergonomics and adjustability</li>
      </ul>
    </main>
  );
}
