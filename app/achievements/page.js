export default function AchievementsPage() {
  const achievements = [
    {
      title: 'Youth Empowerment Bootcamp – July 2024',
      description:
        'We trained over 120 young people in entrepreneurship, tech skills, and leadership in Abia State. Many participants launched their businesses right after!',
      image: '/images/gallery8.jpeg',
    },
    {
      title: 'Free Enterpreneural Mentorship',
      description:
        'In collaboration with some Philantropies, we offered free enterpreneural mentorship and coaching.',
      image: '/images/gallery11.jpeg',
    },
    {
      title: 'Grant Distribution to Young Founders – 2024',
      description:
        'We awarded seed funding and tools to 8 youth-led startups across Abia State and other states, helping them scale their impact and reach.',
      image: '/images/gallery10.jpeg',
    },
    {
      title: 'Skills Acquisition Program – Abia South',
      description:
        'Over 50 youths were trained in practical skills including tailoring, digital marketing, and hairstyling — with mentorship and startup support.',
      image: '/images/gallery9.jpeg',
    },
    {
      title: 'Market Outreach – 2024',
      description:
        'We educated over 50 apprentices in 6 markets on the benefits of entrepreneurship from a young age.',
      image: '/images/gallery7.jpeg',
    },
    {
      title: 'Volunteer Appreciation Party',
      description:
        'We hosted our volunteers to a relaxing end-of-year party to thank them for their selfless service in building a better future.',
      image: '/images/gallery8.jpeg',
    },
  ]

  return (
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gold mb-8 text-center">Our Achievements</h1>

      <div className="space-y-12">
        {achievements.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-lg shadow"
            />
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold text-black mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a
                href="/join"
                className="inline-block text-sm text-gold font-semibold underline hover:text-black"
              >
                Join the Movement →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
