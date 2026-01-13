"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-white text-xl font-bold">
          CreativeNexus
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* DESKTOP CTA */}
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
          Get Started
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 text-gray-300">
          <a href="#services" className="block hover:text-white">Services</a>
          <a href="#work" className="block hover:text-white">Work</a>
          <a href="#contact" className="block hover:text-white">Contact</a>

          <button className="w-full bg-white text-black py-2 rounded-md font-semibold">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

