"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/stockanalysis", label: "Stock Analysis" },
    { href: "/trendingstocks", label: "Trending Stocks" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#6C584C] text-[#FFFFFF] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-inconsolata text-2xl font-bold px-4 h-16 flex items-center">
            SentiStock
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex font-inconsolata h-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-36 px-4 flex items-center justify-center transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.href) 
                    ? "bg-[#A98467]" 
                    : "hover:bg-[#A98467]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4 h-16 flex items-center hover:bg-[#A98467] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full px-4 h-12 flex items-center transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.href) 
                    ? "bg-[#A98467]" 
                    : "hover:bg-[#A98467]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
