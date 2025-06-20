export default function AboutPage() {
  return (
    <main className="bg-white text-black p-6 md:p-12 max-w-5xl mx-auto space-y-10">
      <section>
        <h1 className="text-4xl font-bold text-gold mb-4">About Us</h1>
        <p className="text-lg">
          <strong>Selfboss Enterprising Youth Foundation (SEYF)</strong> is a non-profit organization dedicated to empowering young entrepreneurs across Nigeria. We provide essential business equipment and training to support hardworking SME owners and youth innovators, helping them achieve sustainable economic growth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Our Mission</h2>
        <p className="text-lg">
          Empowering Nigeria's enterprising youth with the necessary business equipment and training to foster innovation, entrepreneurship, and sustainable economic growth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Our Vision</h2>
        <p className="text-lg">
          To create a thriving community of young entrepreneurs who drive economic development and social change in Nigeria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Our Goals</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Resource Provision:</strong> Equip young entrepreneurs with the tools and resources to grow their businesses.</li>
          <li><strong>Training and Development:</strong> Offer practical and theoretical training to build business and leadership skills.</li>
          <li><strong>Mentorship and Networking:</strong> Connect youth with experienced mentors and business professionals.</li>
          <li><strong>Community Building:</strong> Foster innovation, collaboration, and shared growth among entrepreneurs.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Our Key Programs</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Business Equipment Grants:</strong> For laptops, manufacturing tools, and essential hardware.</li>
          <li><strong>Entrepreneurship Training Workshops:</strong> Covering business planning, finance, marketing, and digital literacy.</li>
          <li><strong>Mentorship Program:</strong> One-on-one guidance with experienced business leaders.</li>
          <li><strong>Networking Events:</strong> Connecting youth with investors, professionals, and industry experts.</li>
          <li><strong>Incubation & Acceleration:</strong> Workspace, support services, and funding access for startups.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Our Impact</h2>
        <p className="text-lg">
          Since inception, SEYF has supported hundreds of young entrepreneurs in Abia State and beyond—helping them transform ideas into businesses, create jobs, and inspire a generation of enterprising youth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gold mb-2">Get Involved</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Donate:</strong> Help us reach more youth with tools and training.</li>
          <li><strong>Volunteer:</strong> Join as a mentor, trainer, or organizer.</li>
          <li><strong>Partner:</strong> Collaborate to expand our impact across Nigeria.</li>
        </ul>
      </section>
    </main>
  );
}
