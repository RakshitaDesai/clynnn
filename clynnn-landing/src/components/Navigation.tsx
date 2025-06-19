import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export const Navigation = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { text: "home", href: "/" },
    { text: "about us", href: "/about-us" },
    { text: "join us", href: "/join-us" },
    { text: "contact us", href: "/contact-us" },
    { text: "journal", href: "/journal" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname === href) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-bg/95 sm:bg-bg/80 backdrop-blur-lg border-b border-app-accent-100 z-50 sticky top-0 animate-fade-in-down">
      <nav className="container flex items-center justify-between py-4 px-4 sm:py-6">
        <div className="flex items-center gap-2 animate-slide-in-left">
          <Link to="/" onClick={closeMobileMenu}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-app-accent to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-wei tracking-wide font-['Chronicle_Display-Semibold'] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Clynnn
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-1 xl:gap-2 2xl:gap-4">
          {navLinks.map((link, index) => (
            <li key={link.text} className="animate-fade-in-down" style={{animationDelay: `${index * 100}ms`}}>
              <Link 
                to={link.href} 
                className={`relative px-3 xl:px-4 py-2 rounded-full text-sm xl:text-base 2xl:text-lg font-['Chronicle_Display-Semibold'] transition-all duration-300 hover:scale-105 group ${
                  isActive(link.href) 
                    ? "text-black bg-gradient-to-r from-app-accent to-emerald-400 shadow-lg" 
                    : "text-wei hover:text-app-accent hover:bg-app-accent-100"
                }`}
              >
                {link.text}
                {!isActive(link.href) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-app-accent/0 to-emerald-400/0 group-hover:from-app-accent/20 group-hover:to-emerald-400/20 transition-all duration-300"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4 animate-slide-in-right">
          {/* Desktop Account & Cart */}
          <div className="hidden sm:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-app-accent text-app-accent hover:bg-app-accent hover:text-black font-['Instrument_Serif'] font-semibold rounded-full px-4 transition-all duration-300"
            >
              Account
            </Button>
            <div className="relative group">
              <div className="p-2 rounded-full bg-app-accent/10 hover:bg-app-accent-200 transition-all duration-300 cursor-pointer">
                <img 
                  src="/icons-general---cart.svg" 
                  alt="Cart" 
                  className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-app-accent to-emerald-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-wei transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-wei transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-wei transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 max-w-[85vw] bg-gradient-to-b from-bg to-slate-900 backdrop-blur-lg border-l border-app-accent-200 z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-app-accent-200">
            <Link to="/" onClick={closeMobileMenu}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-app-accent to-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-wei tracking-wide font-['Chronicle_Display-Semibold']">
                  Clynnn
                </span>
              </div>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="w-10 h-10 flex items-center justify-center text-wei hover:text-app-accent bg-app-accent/10 hover:bg-app-accent-200 rounded-full transition-all duration-300"
              aria-label="Close mobile menu"
            >
              ✕
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col py-6 px-4 space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.text}>
                <Link 
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-lg font-['Instrument_Serif'] transition-all duration-300 rounded-xl ${
                    isActive(link.href) 
                      ? "text-black bg-gradient-to-r from-app-accent to-emerald-400 shadow-lg font-semibold" 
                      : "text-wei hover:text-app-accent hover:bg-app-accent-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="capitalize">{link.text}</span>
                    <span className="text-sm opacity-60">→</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div className="mt-auto p-6 border-t border-app-accent-200">
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full border-app-accent text-app-accent hover:bg-app-accent hover:text-black rounded-xl py-3"
              >
                Account
              </Button>
              <div className="flex items-center justify-between p-3 bg-app-accent/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <img 
                    src="/icons-general---cart.svg" 
                    alt="Cart" 
                    className="w-5 h-5" 
                  />
                  <span className="text-wei font-['Instrument_Serif']">Cart</span>
                </div>
                <span className="w-6 h-6 bg-gradient-to-r from-app-accent to-emerald-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};