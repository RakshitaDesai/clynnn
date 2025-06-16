import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = (): JSX.Element => {
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
          <div className="lg:col-span-2 animate-slide-in-left">
            <Link to="/">
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
            <Link to="/join-us">
              <Button size="lg" className="bg-gradient-to-r from-app-accent to-emerald-400 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-app-accent/25">
                Join Our Mission
              </Button>
            </Link>
          </div>
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
                    className="text-gray-300 hover:text-app-accent transition-all duration-300 hover:translate-x-2 inline-block font-['Instrument_Serif'] flex items-center gap-2 group"
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
                    className="text-gray-300 hover:text-app-accent transition-all duration-300 hover:translate-x-2 inline-block font-['Instrument_Serif'] flex items-center gap-2 group"
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
                  { name: "Instagram", icon: "📷", href: "#" },
                  { name: "Twitter", icon: "🐦", href: "#" },
                  { name: "LinkedIn", icon: "💼", href: "#" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-app-accent/10 hover:bg-gradient-to-r hover:from-app-accent hover:to-emerald-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
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