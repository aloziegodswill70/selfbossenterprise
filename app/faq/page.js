'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is SEYF?',
    answer:
      'SelfBoss Youth Enterprising Foundation (SEYF) is a registered Nigerian NGO focused on youth empowerment through training, mentorship, and enterprise support.',
  },
  {
    question: 'Who can participate in SEYF programs?',
    answer:
      'Our programs are open to young Nigerians between the ages of 15 and 35 who are passionate about entrepreneurship, innovation, or social impact.',
  },
  {
    question: 'Are your programs free?',
    answer:
      'Most of our programs are free or heavily subsidized, thanks to support from partners, donors, and well-meaning individuals.',
  },
  {
    question: 'How can I apply for SEYF programs?',
    answer:
      'You can apply through our website whenever applications are open. Follow our Instagram and Facebook pages for announcements.',
  },
  {
    question: 'How can I volunteer or support SEYF?',
    answer:
      'Visit our upcoming "Join Us" or "Donate" page to see ways you can contribute — financially or by sharing your skills/time.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left font-semibold text-black flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Contact CTA */}
      <div className="mt-12 text-center border-t pt-6">
        <p className="text-gray-700 mb-2">Didn't find your question?</p>
        <a
          href="/contact"
          className="inline-block bg-gold text-black px-5 py-2 rounded font-semibold hover:bg-black hover:text-gold transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  )
}
