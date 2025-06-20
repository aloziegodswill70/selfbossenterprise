import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'keen-slider/keen-slider.min.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: 'SelfBoss Youth Foundation',
  description: 'Empowering Nigerian youth through training, funding, and community impact.',
  openGraph: {
    title: 'SelfBoss Youth Foundation',
    description: 'Join our mission to empower Nigerian youth.',
    url: 'https://selfbossfoundation.vercel.app',
    siteName: 'SelfBoss Foundation',
    images: [
      {
        url: '/images/gallery16.jpeg',
        width: 1200,
        height: 630,
        alt: 'SelfBoss Youth Foundation Logo',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
