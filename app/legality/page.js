export default function LegalityPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gold mb-6">Legal Recognition</h1>

      <p className="mb-6 text-gray-800 leading-relaxed">
        SelfBoss Youth Enterprising Foundation (SYEF) is officially registered with the
        Corporate Affairs Commission (CAC) in Nigeria as a non-governmental, non-profit
        youth empowerment organization.
      </p>

      <p className="mb-6 text-gray-800">
        This registration affirms our commitment to transparency, credibility, and legal
        operation under Nigerian laws governing charitable and developmental foundations.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gold">CAC Certificate</h2>
        <img
          src="/images/gallerycac.jpeg"
          alt="CAC Registration Certificate"
          className="border shadow-md rounded w-full max-w-lg mx-auto"
        />
      </div>

      <p className="text-sm text-gray-500 text-center mt-8">
        Registered with CAC under Part C of CAMA.
      </p>
    </main>
  )
}
