'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Secret admin route access
  const timerRef = useState(null)

  const handleDoubleClick = () => router.push('/admin/login')
  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      router.push('/admin/register')
    }, 1200)
  }
  const handleMouseUp = () => clearTimeout(timerRef.current)

  return (
    <nav className="bg-black text-gold py-4 px-6 shadow-md relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1
          onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="text-2xl font-bold cursor-pointer"
        >
          SELFBOSS
        </h1>

        {/* Mobile toggle button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><a href="/" className="hover:text-white">Home</a></li>
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="#programs" className="hover:text-white">Programs</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
          <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          <li><a href="/donate" className="hover:text-white">Donate</a></li>
          <li><a href="/achievements" className="hover:text-white">Achievements</a></li>
          <li><a href="/legality" className="hover:text-white">Legal Status</a></li>
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-sm">
          <li><a href="/" className="block hover:text-white">Home</a></li>
          <li><a href="/about" className="block hover:text-white">About</a></li>
          <li><a href="#programs" className="block hover:text-white">Programs</a></li>
          <li><a href="#contact" className="block hover:text-white">Contact</a></li>
          <li><a href="/faq" className="block hover:text-white">FAQ</a></li>
          <li><a href="/donate" className="block hover:text-white">Donate</a></li>
          <li><a href="/achievements" className="block hover:text-white">Achievements</a></li>
          <li><a href="/legality" className="block hover:text-white">Legal Status</a></li>
        </ul>
      )}
    </nav>
  )
}
