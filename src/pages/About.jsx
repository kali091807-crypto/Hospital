import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Heart, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Building, 
  ArrowRight, 
  Target, 
  Eye, 
  Activity,
  Microscope,
  Stethoscope
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-surface-light border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>About NovaCare Medical Center</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Advancing the Art & Science of Modern Healing
            </h1>
            <p className="mt-5 text-lg text-slate-text leading-relaxed">
              Founded as an integrated academic healthcare center, NovaCare Medical Center merges clinical precision with profound human empathy. We are committed to building a healthier tomorrow for every patient entrusted to our care.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Architecture */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
                Our Founding Vision
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 leading-tight">
                Healthcare Reimagined Around the Human Experience
              </h2>
              <p className="text-slate-text leading-relaxed text-sm sm:text-base">
                In modern healthcare, high technology can often feel cold and impersonal. At NovaCare, we set out to prove that state-of-the-art robotic surgery, genomics, and intensive care can exist in harmony with unhurried clinical conversations, restorative natural light, and quiet healing spaces.
              </p>
              <p className="text-slate-text leading-relaxed text-sm sm:text-base">
                Our 350-bed campus was architecturally engineered from the ground up to reduce patient stress, optimize airflow, and foster seamless multidisciplinary collaboration among surgical, medical, and nursing faculties.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-surface-light border border-slate-200">
                  <span className="font-heading font-extrabold text-2xl text-teal-600 block">350+</span>
                  <span className="text-xs text-slate-muted">Private Inpatient Suites</span>
                </div>
                <div className="p-4 rounded-2xl bg-surface-light border border-slate-200">
                  <span className="font-heading font-extrabold text-2xl text-teal-600 block">8</span>
                  <span className="text-xs text-slate-muted">Specialized Institutes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor consulting with patient in modern consultation suite"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center text-xs text-slate-muted">
                NovaCare Clinical Consultation Suites • Fictional Demo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-16 md:py-24 bg-surface-light border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="Our Mission, Vision & Values"
            subtitle="The fundamental ethical commitments that guide every decision at NovaCare Medical Center."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-soft-sm">
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-teal-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-text leading-relaxed">
                To deliver uncompromising, individualized clinical excellence through cutting-edge medical technologies, evidence-based therapies, and compassionate empathy for patients and their families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-soft-sm">
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-teal-700 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-text leading-relaxed">
                To serve as a world-renowned benchmark for modern hospital care, continually pioneering minimally invasive surgical techniques and preventative longevity medicine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-soft-sm">
              <div className="w-12 h-12 rounded-2xl bg-mint-100 text-teal-700 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">Our Values</h3>
              <p className="text-sm text-slate-text leading-relaxed">
                Integrity in practice, transparency with patients, relentless pursuit of clinical safety, and respect for every patient's dignity and cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Governance & Quality Assurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-4xl p-8 sm:p-14 text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-mint-200 font-semibold block">
                Quality & Safety Standards
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Uncompromising Clinical Governance
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Every department within NovaCare adheres to stringent quality oversight protocols, peer-reviewed surgical mortality metrics, and real-time infection prevention standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Continuous 24/7 Patient Safety Telemetry</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Multidisciplinary Weekly Tumor & Surgical Boards</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Zero-Harm Medication Robotic Dispensing Checks</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Comprehensive Infection Prevention Air Filtration</span>
                </div>
              </div>

              <div className="pt-4 text-xs text-slate-400">
                * Illustrative demonstration content representing fictional hospital quality guidelines.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-heading font-bold text-2xl text-navy-800 mb-4">
            Ready to experience NovaCare healthcare?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/doctors"
              className="px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors"
            >
              Meet Our Doctors
            </Link>
            <Link
              to="/appointment"
              className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm transition-colors shadow-soft-sm"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
