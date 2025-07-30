export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-2">Jack Leon</h1>
        <p className="text-lg text-gray-600">
          Mechanical Engineer | CAD | Prototyping | Embedded Systems
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Resume
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Projects</h2>
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
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-gray-700">
          <div>
            <span className="font-semibold">CAD:</span> SolidWorks, Fusion 360
          </div>
          <div>
            <span className="font-semibold">Simulation:</span> MATLAB, Simulink,
            ANSYS
          </div>
          <div>
            <span className="font-semibold">Fabrication:</span> 3D Printing,
            Laser Cutting, CNC
          </div>
          <div>
            <span className="font-semibold">Embedded:</span> Arduino, Raspberry
            Pi
          </div>
          <div>
            <span className="font-semibold">Software:</span> Python, Git, Linux,
            Docker
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Jack Leon. All rights reserved.
        </p>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, tools }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500 italic">Tools used: {tools}</p>
    </div>
  );
}
