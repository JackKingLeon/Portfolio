// src/pages/projects/StanderProject.jsx
export default function StanderProject() {
  return (
    <main className="min-h-screen p-8 bg-white font-sans text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Assistive Stander Project</h1>

      <h3 className="text-4xl font-bold mb-4">Version 1 (2021-2022) </h3>

      <p className="mb-4">
        Designed and built the first prototype of a custom standing device for
        an individual with impaired motor functions. Designed to achieve the
        following goals: ability to shift body to face different direcitons,
        free standing, easy to load into car, easy to set up and tear down,
        re-use old prototype.
      </p>
      <img
        src="/images/standerV1.png"
        alt="Assistive Stander"
        width={250}
        height={250}
        className="mb-6"
      />

      <h3 className="text-4xl font-bold mb-4">Version 2 (2022-2023) </h3>

      <p className="mb-4">
        Redesigned standing device to achieve the following goals: ergonomic,
        adjustabile, portable, light-weight, transport via backpack/luggage,
        stable on both hardwood and carpet. Included adjustable hip supports,
        multiple feet to spread out weight distribution and for redundancy in
        case of uneven ground, and collapsability.
      </p>
      <img
        src="/images/standerV2.1.png"
        alt="Assistive Stander"
        width={250}
        height={500}
        className="mb-6"
      />
      <img
        src="/images/standerV2.2.png"
        alt="Assistive Stander"
        width={250}
        height={250}
        className="mb-6"
      />
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Custom CAD design using SolidWorks</li>
        <li>Fabricated with manual machining</li>
        <li>Tailored ergonomics and adjustability</li>
      </ul>
    </main>
  );
}
