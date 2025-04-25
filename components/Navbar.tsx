"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FiInstagram, FiFacebook, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white uppercase px-6 py-4 md:px-12 md:py-6 rounded-b-2xl shadow-lg relative">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="nav-link text-purple hover:text-green transition text-2xl tracking-widest drop-shadow-lg">
            Il Portico
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/menu" className="text-green hover:text-purple transition font-semibold">Menu</Link>
          <Link href="/contact" className="text-purple hover:text-green transition font-semibold">Contact</Link>
          <Link href="https://www.instagram.com" className="hover:text-purple transition text-xl">
            <FiInstagram />
          </Link>
          <Link href="https://www.facebook.com" className="hover:text-green transition text-xl">
            <FiFacebook />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden bg-black/90 rounded-xl p-4 shadow-lg">
          <Link href="/menu" className="text-green hover:text-purple transition font-semibold" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link href="/contact" className="text-purple hover:text-green transition font-semibold" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com" className="hover:text-purple transition text-xl" onClick={() => setMenuOpen(false)}>
              <FiInstagram />
            </Link>
            <Link href="https://www.facebook.com" className="hover:text-green transition text-xl" onClick={() => setMenuOpen(false)}>
              <FiFacebook />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

