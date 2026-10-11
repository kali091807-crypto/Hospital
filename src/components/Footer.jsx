import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import EmergencyModal from './EmergencyModal';

export default function Footer() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-700/70">
            {/* Col 1: Brand & Identity */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-soft-sm">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <circle cx="12" cy="12" r="3" fill="#DDF4EC" stroke="#10243A" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white block">
                    NOVACARE
                  </span>
                  <span className="text-xs uppercase tracking-widest text-mint-200 font-semibold block -mt-1">
                    Medical Center
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Advanced Care. A Healthier Tomorrow. NovaCare Medical Center combines academic clinical excellence, robotic surgical innovation, and compassionate patient-centered healthcare.
              </p>

              {/* Emergency Advisory Pill */}
              <div className="p-3.5 rounded-2xl bg-navy-800/90 border border-red-500/30 flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Life-Threatening Emergencies:</span>
                  <span className="text-slate-300">Call local 911 / 112 immediately or visit our 24/7 Trauma Bay.</span>
                  <button 
                    onClick={() => setEmergencyModalOpen(true)}
                    className="block text-red-300 hover:text-red-200 font-medium underline mt-1"
                  >
                    View Emergency Protocols &rarr;
                  </button>
                </div>
              </div>

              {/* Fictional demo badge */}
              <div className="inline-flex items-center space-x-2 text-xs text-mint-200/90 bg-teal-900/40 border border-teal-500/20 px-3 py-1.5 rounded-lg">
                <Info className="w-3.5 h-3.5 text-teal-400" />
                <span>Demonstration Website • Fictional Healthcare Brand</span>
              </div>
            </div>

            {/* Col 2: Navigation Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
                Explore Hospital
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About NovaCare', path: '/about' },
                  { name: 'Our Medical Specialists', path: '/doctors' },
                  { name: 'Hospital Facilities', path: '/facilities' },
                  { name: 'Patient & Visitor Guide', path: '/patient-guide' },
                  { name: 'Schedule Appointment', path: '/appointment' },
                  { name: 'Contact & Directions', path: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-mint-200 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-teal-500 mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Medical Specialties */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
                Specialties
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { name: 'Cardiology & Heart Care', path: '/specialties?id=cardiology' },
                  { name: 'Neurology & Spine', path: '/specialties?id=neurology' },
                  { name: 'Orthopedics & Joint Care', path: '/specialties?id=orthopedics' },
                  { name: 'Pediatrics & Neonatal', path: '/specialties?id=pediatrics' },
                  { name: 'Oncology & Cancer Care', path: '/specialties?id=oncology' },
                  { name: 'Dermatology & Skin', path: '/specialties?id=dermatology' },
                  { name: 'Obstetrics & Women’s Health', path: '/specialties?id=obstetrics-gynecology' },
                  { name: 'Internal & General Medicine', path: '/specialties?id=general-medicine' },
                ].map((spec) => (
                  <li key={spec.name}>
                    <Link
                      to={spec.path}
                      className="text-slate-300 hover:text-mint-200 transition-colors flex items-center group text-xs sm:text-sm"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-teal-500 mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{spec.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Clinical Hours */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
                Contact & Hours
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">
                    1200 Horizon Boulevard, Metropolitan Health Campus, MC 98201
                  </span>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-slate-300 font-medium">(555) 019-8300 (Main Demo Desk)</span>
                    <span className="block text-slate-400 text-xs">Emergency Bay: (555) 019-8999 (Demo)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">care@novacare-demo.org</span>
                </div>

                <div className="pt-2 border-t border-navy-800">
                  <div className="flex items-start space-x-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium block">Outpatient Clinics:</span>
                      <span>Mon – Sat: 08:00 AM – 08:00 PM</span>
                      <span className="block text-teal-300 font-medium mt-0.5">Emergency & Inpatient: Open 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Demonstration Notice */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              <p>
                &copy; {new Date().getFullYear()} NovaCare Medical Center. All rights reserved. 
                <span className="text-slate-500 block sm:inline sm:ml-2">
                  Demonstration Frontend by Senior Architect.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setDisclaimerOpen(true)}
                className="hover:text-white transition-colors underline cursor-pointer"
              >
                Demonstration Disclaimer
              </button>
              <button
                type="button"
                onClick={() => setDisclaimerOpen(true)}
                className="hover:text-white transition-colors"
              >
                Privacy Notice (Demo)
              </button>
              <button
                type="button"
                onClick={() => setDisclaimerOpen(true)}
                className="hover:text-white transition-colors"
              >
                Patient Rights (Demo)
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
      />

      {/* Demonstration Notice Modal */}
      {disclaimerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-soft-xl border border-slate-200">
            <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">
              Fictional Demonstration Disclaimer
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              NovaCare Medical Center is a fictional healthcare brand created exclusively for frontend web demonstration purposes. 
              No medical services, real appointments, actual doctors, or medical records are hosted or stored.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              In the event of an actual emergency, please contact your local medical emergency telephone service immediately.
            </p>
            <button
              onClick={() => setDisclaimerOpen(false)}
              className="w-full py-2.5 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}
    </>
  );
}
