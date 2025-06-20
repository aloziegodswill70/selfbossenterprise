
import HeroSection from './components/HeroSection'
import FaqPreview from './components/FaqPreview'
import ProgramsSection from './components/ProgramsSection'
import GalleryCarousel from './components/GalleryCarousel'
import ContactForm from './components/ContactForm'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FaqPreview/>
      <div className="text-center px-4 mt-6">
        <p className="text-sm text-gray-600">
          SelfBoss Youth Enterprising Foundation is a duly registered non-governmental organization with the Corporate Affairs Commission (CAC) in Nigeria.
          <a href="/legality" className="text-gold underline hover:text-black ml-1">View Legal Status</a>
        </p>
      </div>
      <ProgramsSection />
      <GalleryCarousel />
      <ContactForm />
    </main>
  )
}
