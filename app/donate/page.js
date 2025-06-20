export default function DonatePage() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto">

      {/* ✅ Donation Image */}
      <img
        src="/images/gallery15.jpeg"
        alt="SEYF Donation Impact"
        className="rounded-lg shadow mb-8"
      />

      <h1 className="text-3xl font-bold text-gold mb-6">Support Our Mission</h1>

      <p className="mb-6 text-gray-800">
        SelfBoss Enterprising Youth Foundation (SEYF) is dedicated to empowering young Nigerians through
        entrepreneurship training, mentorship, and funding opportunities. Your donations help us reach more lives,
        expand our programs, and make a lasting impact.
      </p>

      <div className="bg-white border border-gold rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gold mb-4">Bank Transfer</h2>
        <p className="text-gray-700 mb-1"><strong>Account Name:</strong> SelfBoss Enterprising Youth Foundation</p>
        <p className="text-gray-700 mb-1"><strong>Bank:</strong> Zenith Bank</p>
        <p className="text-gray-700 mb-1"><strong>Account Number:</strong> 1229096504</p>
        <p className="text-gray-600 text-sm mt-2">
          Please include your name or purpose in the transfer description if possible.
        </p>
      </div>

      <div className="bg-white border border-gold rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gold mb-4">Online Donation (Paystack)</h2>
        <p className="text-gray-700 mb-4">
          You can also donate securely via Paystack using card, bank, or USSD:
        </p>
        <a
          href="https://paystack.com/pay/selfboss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-black px-5 py-3 rounded font-semibold hover:bg-black hover:text-gold transition"
        >
          Donate via Paystack
        </a>
      </div>

      <p className="text-sm text-gray-500 text-center mt-8">
        Every donation counts. Thank you for supporting youth empowerment in Nigeria!
      </p>
    </main>
  )
}
