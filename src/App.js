export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Jack Leon</h1>
        <p className="text-lg text-gray-600">
          Mechanical Engineer | CAD | Prototyping | Embedded Systems
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a href="/resume.pdf" className="text-blue-600 hover:underline">
            Resume
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Solar Panel Tracking System"
            description="Designed and built a dual-axis solar tracker with actuators and Hall sensors."
            tools="Arduino, Hall Sensors, CAD, SolarCalc"
          />
          <ProjectCard
            title="Temperature-Controlled Fan"
            description="Built a fan with PID control and LCD interface to regulate ambient temperature."
            tools="Arduino, PID, LCD, Thermistor"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>CAD:</strong> SolidWorks, Fusion 360
          </li>
          <li>
            <strong>Simulation:</strong> MATLAB, Simulink, ANSYS
          </li>
          <li>
            <strong>Fabrication:</strong> 3D Printing, Laser Cutting, CNC
          </li>
          <li>
            <strong>Embedded:</strong> Arduino, Raspberry Pi
          </li>
          <li>
            <strong>Software:</strong> Python, Git, Linux, Docker
          </li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-gray-500">© 2025 Jack Leon. All rights reserved.</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, tools }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500">Tools used: {tools}</p>
    </div>
  );
}
