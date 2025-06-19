import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    blog: [
      { text: "About Us", href: "/about-us" },
      { text: "Contributors & Writers", href: "/journal" },
      { text: "Write For Us", href: "/contact-us" },
      { text: "Contact Us", href: "/contact-us" },
      { text: "Privacy Policy", href: "#" },
    ],
    company: [
      { text: "The Team", href: "/about-us" },
      { text: "Jobs", href: "/join-us" },
      { text: "Press", href: "/contact-us" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900/50 to-bg border-t border-app-accent-200 py-12 sm:py-16 mt-auto animate-fade-in-up overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--app-accent)_0%,transparent_50%)] opacity-5" />
      
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-slide-in-left">
            <Link to="/" onClick={scrollToTop}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-app-accent to-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">C</span>
                </div>
                <div className="text-3xl font-bold text-wei font-['Chronicle_Display-Semibold'] hover:text-app-accent transition-colors duration-300 cursor-pointer">
                  Clynnn
                </div>
              </div>
            </Link>
            <p className="text-lg text-gray-300 mb-6 max-w-md leading-relaxed font-['Instrument_Serif'] hover:text-white transition-colors duration-300">
              India's first smart waste management platform, combining cutting-edge technology with community engagement to create cleaner, healthier cities.
            </p>
            <Link to="/join-us" onClick={scrollToTop}>
              <Button size="lg" className="bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-app-accent/25">
                Join Our Mission
              </Button>
            </Link>
          </div>
          <div></div>
          
          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{animationDelay: '100ms'}}>
            <h3 className="text-xl font-bold text-app-accent mb-6 font-['Chronicle_Display-Semibold'] hover:text-emerald-400 transition-colors duration-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.text}>
                  <Link 
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-app-accent transition-all duration-300 hover:translate-x-2 font-['Instrument_Serif'] flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-app-accent rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-slide-in-right" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-bold text-app-accent mb-6 font-['Chronicle_Display-Semibold'] hover:text-emerald-400 transition-colors duration-300">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.text}>
                  <Link 
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-app-accent transition-all duration-300 hover:translate-x-2 font-['Instrument_Serif'] flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-app-accent rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-wei mb-4 font-['Chronicle_Display-Semibold']">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/company/clynnn/",
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  },
                  { 
                    name: "X", 
                    href: "https://x.com/Clynnn2025",
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  },
                  { 
                    name: "Instagram", 
                    href: "https://instagram.com/clynnn_official",
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-app-accent/10 hover:bg-gradient-to-r hover:from-app-accent hover:to-emerald-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group text-gray-300 hover:text-black"
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">{social.svg}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-app-accent-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm font-['Instrument_Serif']">
              © 2025 Clynnn, Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-app-accent transition-colors duration-300 font-['Instrument_Serif']">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-app-accent transition-colors duration-300 font-['Instrument_Serif']">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-app-accent transition-colors duration-300 font-['Instrument_Serif']">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};