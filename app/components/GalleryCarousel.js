'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'

const images = [
  {
    src: '/images/gallery1.jpeg',
    title: 'Youth Business Pitch Day',
    description: 'Young entrepreneurs presenting innovative business ideas.',
  },
  {
    src: '/images/gallery2.jpeg',
    title: 'Entrepreneurship Training Workshop',
    description: 'Hands-on business skills training for future leaders.',
  },
  {
    src: '/images/gallery3.jpeg',
    title: 'Equipment Grant Presentation',
    description: 'Presentation of essential business tools to SMEs.',
  },
  {
    src: '/images/gallery4.jpeg',
    title: 'Networking Forum',
    description: 'Connecting youth with mentors, investors, and professionals.',
  },
  {
    src: '/images/gallery5.jpeg',
    title: 'Team Planning Session',
    description: 'Volunteers preparing for community impact events.',
  },
  {
    src: '/images/gallery6.jpeg',
    title: 'SEYF Community Outreach',
    description: 'Reaching young people across local communities.',
  },
]

export default function GalleryCarousel() {
  const [ref] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
  })

  const [currentIndex, setCurrentIndex] = useState(null)

  const openModal = (index) => setCurrentIndex(index)
  const closeModal = () => setCurrentIndex(null)

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const modalImage = currentIndex !== null ? images[currentIndex] : null

  return (
    <section id="gallery" className="px-6 py-12 md:px-12 max-w-6xl mx-auto bg-white">
      <h2 className="text-3xl font-bold text-gold text-center mb-8">Gallery</h2>

      <div ref={ref} className="keen-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover hover:scale-105 transition duration-200"
            />
          </div>
        ))}
      </div>

      {/* Full-screen Modal with navigation */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gold"
            >
              &#8592;
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gold"
            >
              &#8594;
            </button>

            {/* Image */}
            <img
              src={modalImage.src}
              alt={modalImage.title}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded"
            />

            {/* Text Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold">{modalImage.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{modalImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
