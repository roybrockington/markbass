'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search, User, ShoppingBag, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);
  const [mobileProductsSubmenuOpen, setMobileProductsSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsSubmenuOpen(false);
  };

  const toggleMobileProductsSubmenu = () => {
    setMobileProductsSubmenuOpen(!mobileProductsSubmenuOpen);
  };

  const navLinks = [
    {
      href: '/products',
      label: 'Products',
      submenu: [
        { href: '/products/markbass', label: 'Markbass' },
        { href: '/products/dv-mark', label: 'DV Mark' },
      ]
    },
    { href: '/about', label: 'About Us' },
    { href: '/artists', label: 'Artists' },
    { href: '/dealers', label: 'Dealers' },
    { href: '/contact', label: 'Contact' },
  ];

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

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative flex items-center"
                onMouseEnter={() => link.submenu && setProductsSubmenuOpen(true)}
                onMouseLeave={() => link.submenu && setProductsSubmenuOpen(false)}
              >
                {link.submenu ? (
                  <>
                    <button
                      className="flex items-center text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {/* Dropdown submenu */}
                    <div
                      className={`absolute left-0 top-full mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        productsSubmenuOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-1">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right section with icons */}
          <div className="flex items-center space-x-4">
            {/* Icon buttons - hidden on mobile, shown on desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/account"
                className="p-2 text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                href="/basket"
                className="p-2 text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label="Shopping basket"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>

            {/* Mobile: Icons and menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                href="/basket"
                className="p-2 text-gray-700 hover:text-yellow-500 transition-colors"
                aria-label="Shopping basket"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 transition-colors"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">
                  {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {/* Hamburger icon */}
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                {/* Close icon */}
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.submenu ? (
                <>
                  <button
                    onClick={toggleMobileProductsSubmenu}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileProductsSubmenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {/* Mobile submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      mobileProductsSubmenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
