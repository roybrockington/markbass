'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Markbass Logo"
                width={120}
                height={60}
                className="h-auto w-auto max-h-16"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/artists"
              className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Artists
            </Link>
            <Link
              href="/dealers"
              className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Dealers
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
