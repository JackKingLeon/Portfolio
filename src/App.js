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
            href="https://www.linkedin.com/in/jack-leon-a92b4b219"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JackKingLeon"
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
            download
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
            description="Designed and built a dual-axis solar tracker with actuators and Hall sensors. Includes Raspberry Pi, sensors, and control logic."
            tools="Arduino, Hall Sensors, CAD, MATLAB, Raspberry Pi"
            image="/images/solar-tracker.png"
            link="https://github.com/JackKingLeon/solar-tracker"
          />
          <ProjectCard
            title="Assistive Stander"
            description="Built a custom standing device for an individual with impaired motor functions. Prototyped with adjustable height and supports."
            tools="SolidWorks, Manual Machining"
            image="/images/stander.png"
            link="/projects/stander"
          />
          <ProjectCard
            title="A1 Customs Internship"
            description="Supported custom fabrication projects, created mechanical drawings, and performed revisioning using SolidWorks."
            tools="SolidWorks, Drawings"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-gray-700">
          <div>
            <span className="font-semibold">CAD:</span> SolidWorks, GD&T
          </div>
          <div>
            <span className="font-semibold">Simulation:</span> MATLAB, Simulink,
            ANSYS
          </div>
          <div>
            <span className="font-semibold">Fabrication & Testing:</span> 3D
            Printing, Laser Cutting, CNC, Soldering, Instron 4505
          </div>
          <div>
            <span className="font-semibold">Embedded:</span> Arduino, Raspberry
            Pi
          </div>
          <div>
            <span className="font-semibold">Software:</span> Python, Git, Java,
            Docker, Linux
          </div>
        </div>
      </section>

      <section className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          © 2025 Jack Leon. All rights reserved.
        </p>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, tools, image, link }) {
  return (
    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 rounded-xl object-cover max-h-48 w-full"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500 italic mb-4">Tools used: {tools}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-blue-600 font-medium hover:underline"
        >
          Learn More →
        </a>
      )}
    </div>
  );
}
