'use client'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gold py-6 px-4 text-center">
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
           href="https://www.facebook.com/share/16T6pboYx4/?mibextid=wwXlfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-2xl"
        >
          <FaFacebook />
        </a>
        <a
           href="https://www.instagram.com/selfbossfoundation?igsh=azZ4dTljeXFjOWMx&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Creator Credit */}
      <p className="text-sm mb-2">
        Website created by <span className="font-semibold">Dr. Godswill Alozie</span>
      </p>

      {/* Copyright */}
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} SelfBoss Youth Enterprising Foundation. All rights reserved.
      </p>
    </footer>
  )
}
