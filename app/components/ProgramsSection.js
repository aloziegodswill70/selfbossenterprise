export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-white text-black px-6 py-12 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center">
        Our Key Programs
      </h2>

      {/* ✅ Top Image */}
      <img
        src="/images/gallery17.jpeg"
        alt="Youth Programs"
        className="w-full rounded-lg shadow mb-8"
      />

      <div className="space-y-8">
        <ProgramItem
          title="Business Equipment Grants"
          description="We provide essential business tools like laptops, manufacturing kits, and hardware to help youth launch or grow their businesses."
        />
        <ProgramItem
          title="Entrepreneurship Training Workshops"
          description="Practical sessions on business planning, financial literacy, marketing strategies, and digital tools to build strong foundations."
        />
        <ProgramItem
          title="Mentorship Program"
          description="We pair young entrepreneurs with seasoned mentors for personalized guidance, motivation, and accountability."
        />

        {/* ✅ Mid-section Image */}
        <img
          src="/images/gallery15.jpeg"
          alt="Training Workshop"
          className="w-full rounded-lg shadow my-8"
        />

        <ProgramItem
          title="Networking Events"
          description="Opportunities to connect with industry experts, investors, and fellow entrepreneurs for collaboration and growth."
        />
        <ProgramItem
          title="Incubation and Acceleration"
          description="We provide workspace, business services, and access to funding to help startups thrive from idea to execution."
        />
      </div>
    </section>
  );
}

// ✅ Define ProgramItem here
function ProgramItem({ title, description }) {
  return (
    <div className="p-6 border-l-4 border-gold bg-gray-50 shadow-sm rounded">
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
