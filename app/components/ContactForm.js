'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      const data = await res.json()
      alert('Error: ' + (data?.error || 'Something went wrong.'))
    }
  } catch (error) {
    alert('Network error. Please try again later.')
  }
}


  return (
    <section id="contact" className="bg-gray-100 px-6 py-12 md:px-12 max-w-4xl mx-auto rounded shadow-md">
      <h2 className="text-3xl font-bold text-gold text-center mb-8">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-black font-medium">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
            placeholder="Your Full Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-black font-medium">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 text-black font-medium">Subject</label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
            placeholder="Message subject"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-black font-medium">Message</label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-white transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
