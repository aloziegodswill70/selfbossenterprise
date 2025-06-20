'use client'

import { useState } from 'react'

const previewFaqs = [
  {
    question: 'What is SEYF?',
    answer:
      'SelfBoss Youth Enterprising Foundation (SEYF) is a registered NGO focused on empowering youth through training and entrepreneurship.',
  },
  {
    question: 'Who can participate in SEYF programs?',
    answer:
      'Our programs are open to young Nigerians aged 15 to 35 who are eager to grow and lead.',
  },
  {
    question: 'Are your programs free?',
    answer:
      'Yes, most of our programs are free or subsidized with support from our partners and donors.',
  },
]

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gold mb-6 text-center">FAQs</h2>

      <div className="space-y-4">
        {previewFaqs.map((faq, index) => (
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

      <div className="text-center mt-6">
        <a
          href="/faq"
          className="text-sm text-gold underline hover:text-black"
        >
          View All FAQs
        </a>
      </div>
    </section>
  )
}
