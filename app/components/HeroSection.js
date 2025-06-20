'use client'

export default function HeroSection() {
  return (
    <section className="bg-black text-gold min-h-[80vh] flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Empowering & Supporting Enterprising Youths
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Welcome to SelfBoss Youth Enterprising Foundation – building the future through innovation and empowerment.
      </p>
      <a href="/about" className="bg-gold text-black px-6 py-3 font-semibold rounded-full hover:bg-white transition">
        Learn More
      </a>
    </section>
  )
}
