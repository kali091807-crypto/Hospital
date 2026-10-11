import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  AlertCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import EmergencyModal from './EmergencyModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar style transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Patient Guide', path: '/patient-guide' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* Top Announcement Bar */}
        <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 border-b border-navy-700/60 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1.5 text-mint-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Demo Health Portal</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300 font-normal">Fictional demonstration showcase</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>24/7 Acute Care & Emergency Support</span>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <button
                type="button"
                onClick={() => setEmergencyModalOpen(true)}
                className="flex items-center space-x-1.5 text-red-300 hover:text-red-200 transition-colors font-semibold"
                aria-label="Open emergency guidance"
              >
                <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                <span>Emergency Advisory</span>
              </button>
              <div className="text-slate-400">|</div>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>(555) 019-8300 <span className="text-slate-400 text-[10px]">(Demo)</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-soft-md py-3.5 border-b border-slate-200/80' 
              : 'bg-warm-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
          }`}
          aria-label="Main Navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Brand Logo */}
              <Link 
                to="/" 
                className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl p-1"
                aria-label="NovaCare Medical Center - Home"
              >
                <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-white shadow-soft-sm group-hover:shadow-teal-glow transition-all duration-300 border border-teal-500/30">
                  {/* Medical Cross & Care Spark Icon */}
                  <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <circle cx="12" cy="12" r="3" fill="#DDF4EC" stroke="#10243A" strokeWidth="1.5" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-DEFAULT ring-2 ring-white"></span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-heading font-extrabold text-xl tracking-tight text-navy-800 group-hover:text-teal-600 transition-colors">
                      NOVACARE
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-teal-600 bg-mint-100 px-1.5 py-0.5 rounded">
                      Hospital
                    </span>
                  </div>
                  <span className="text-[10px] tracking-wider text-slate-muted font-medium uppercase">
                    Medical Center
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-teal-600 bg-mint-50/80 font-semibold shadow-soft-sm'
                          : 'text-slate-text hover:text-navy-800 hover:bg-slate-100/70'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Actions & Book Appointment CTA */}
              <div className="hidden md:flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setEmergencyModalOpen(true)}
                  className="px-3 py-2 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors sm:hidden lg:inline-flex items-center gap-1.5 border border-red-200"
                  aria-label="Emergency guidance modal"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Emergency</span>
                </button>

                <Link
                  to="/appointment"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium text-sm shadow-soft-md hover:shadow-teal-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <Calendar className="w-4 h-4 text-mint-100" />
                  <span>Book Appointment</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-2 lg:hidden">
                <Link
                  to="/appointment"
                  className="p-2 rounded-xl bg-teal-50 text-teal-600 sm:hidden"
                  aria-label="Book Appointment"
                >
                  <Calendar className="w-5 h-5" />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-xl text-navy-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-soft-xl flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="p-5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-navy-800 flex items-center justify-center text-teal-400">
                      <span className="font-heading font-bold text-sm">NC</span>
                    </div>
                    <div>
                      <span className="font-heading font-bold text-navy-800 block text-sm">NOVACARE</span>
                      <span className="text-[10px] text-slate-muted block -mt-0.5">Medical Center</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-muted hover:text-navy-800 hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="p-4 space-y-1">
                  {navLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-mint-100 text-teal-800 font-semibold'
                            : 'text-navy-800 hover:bg-slate-50'
                        }`
                      }
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Bottom Section */}
              <div className="p-5 border-t border-slate-100 space-y-3 bg-surface-light">
                <Link
                  to="/appointment"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setEmergencyModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-medium text-xs transition-colors border border-red-200"
                >
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span>Emergency Advisory</span>
                </button>

                <div className="text-center pt-2 text-[11px] text-slate-muted">
                  Demo Hospital Portal • Fictional Content
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Emergency Guidance Modal */}
      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
      />
    </>
  );
}
