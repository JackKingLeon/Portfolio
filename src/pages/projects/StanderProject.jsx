// src/pages/projects/StanderProject.jsx
export default function StanderProject() {
  return (
    <main className="min-h-screen p-8 bg-white font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Assistive Stander Project</h1>
      <img
        src="/images/stander.png"
        alt="Assistive Stander"
        className="rounded-xl mb-6 w-full max-w-2xl"
      />
      <p className="mb-4">
        Built a custom standing device for an individual with impaired motor
        functions. Included adjustable supports and ergonomic considerations.
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Custom CAD design using SolidWorks</li>
        <li>Fabricated with manual machining</li>
        <li>Tailored ergonomics and adjustability</li>
      </ul>
    </main>
  );
}
