// src/pages/projects/StanderProject.jsx
export default function StanderProject() {
  return (
    <main className="min-h-screen p-8 bg-white font-sans text-gray-900">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Assistive Stander Project
      </h1>

      {/* Version 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Version 1 (2021–2022)</h2>
        <p className="mb-4 leading-relaxed text-lg text-gray-800">
          The initial prototype was developed to support an individual with
          impaired motor function, enabling safe assisted standing. Design goals
          included: directional adjustability, a self-supporting structure,
          portability for transport in a standard vehicle, and ease of
          assembly/disassembly. Additionally, we aimed to reuse components from
          an earlier prototype to reduce material cost and waste.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/images/standerV1.png"
            alt="Assistive Stander Version 1"
            className="rounded-xl shadow-md max-w-xs"
          />
        </div>
      </section>

      {/* Version 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Version 2 (2022–2023)</h2>
        <p className="mb-4 leading-relaxed text-lg text-gray-800">
          Building on lessons learned from the first iteration, Version 2
          focused on improving ergonomics, weight, and portability. This
          revision introduced collapsible features for compact transport (e.g.,
          via backpack or luggage), and improved weight distribution with
          multiple ground contact points. The design also included adjustable
          hip supports, greater stability on uneven surfaces like carpet or
          hardwood, and overall weight reduction for easier handling.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <img
            src="/images/standerV2.1.png"
            alt="Assistive Stander Version 2 - Side View"
            className="rounded-xl shadow-md max-w-xs"
          />
          <img
            src="/images/standerV2.2.png"
            alt="Assistive Stander Version 2 - Folded"
            className="rounded-xl shadow-md max-w-xs"
          />
        </div>
      </section>

      {/* Tools/Skills */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Key Tools & Skills</h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Custom CAD development using SolidWorks</li>
          <li>Precision fabrication with manual machining tools</li>
          <li>Design for ergonomics, modularity, and adjustability</li>
          <li>Human-centered design principles for assistive technologies</li>
        </ul>
      </section>
    </main>
  );
}
