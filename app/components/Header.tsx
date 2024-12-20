"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kitulu PAG Church
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200">
            About Us
          </Link>
          <Link href="/services" className="hover:text-blue-200">
            Services
          </Link>
          <Link href="/sermons" className="hover:text-blue-200">
            Sermons
          </Link>
          <Link href="/events" className="hover:text-blue-200">
            Events
          </Link>
          <Link href="/contact" className="hover:text-blue-200">
            Contact
          </Link>
          <Link href="/give" className="hover:text-blue-200">
            Give
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block hover:text-blue-200">
              Home
            </Link>
            <Link href="/about" className="block hover:text-blue-200">
              About Us
            </Link>
            <Link href="/services" className="block hover:text-blue-200">
              Services
            </Link>
            <Link href="/sermons" className="block hover:text-blue-200">
              Sermons
            </Link>
            <Link href="/events" className="block hover:text-blue-200">
              Events
            </Link>
            <Link href="/contact" className="block hover:text-blue-200">
              Contact
            </Link>
            <Link href="/give" className="block hover:text-blue-200">
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
