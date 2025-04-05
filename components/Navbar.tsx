"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FiInstagram, FiFacebook, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white uppercase p-4 md:p-6 relative">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="nav-link hover:text-gray-300 transition">
            Il Portico
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/menu" className="hover:text-gray-300 transition">Menu</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link href="https://www.instagram.com" className="hover:text-gray-300 transition">
            <FiInstagram />
          </Link>
          <Link href="https://www.facebook.com" className="hover:text-gray-300 transition">
            <FiFacebook />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link href="/menu" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
              <FiInstagram />
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>
              <FiFacebook />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

