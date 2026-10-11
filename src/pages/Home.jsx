import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Stethoscope, 
  HeartPulse, 
  Microscope, 
  Building2, 
  FileText, 
  PhoneCall,
  Star
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import SpecialtyCard from '../components/SpecialtyCard';
import DoctorCard from '../components/DoctorCard';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialCarousel from '../components/TestimonialCarousel';

import { specialties } from '../data/specialties';
import { doctors } from '../data/doctors';
import { facilities } from '../data/facilities';
import { centersOfExcellence } from '../data/centersOfExcellence';
import { homeFaqs } from '../data/faqs';

export default function Home() {
  const featuredDoctors = doctors.filter((doc) => doc.isFeatured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================================
          SECTION A: HERO EXPERIENCE (Editorial Asymmetric Layout)
      ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-surface-light via-warm-white to-surface-light">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mint-200/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-7"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200/80 text-teal-800 text-xs font-semibold tracking-wider uppercase shadow-soft-sm">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span>Your Health, Our Priority</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-navy-800 leading-[1.08] tracking-tight">
                Better Care. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">
                  Brighter Lives.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-text leading-relaxed max-w-2xl font-normal">
                At NovaCare Medical Center, advanced clinical sciences harmonize with genuine human compassion. Our multidisciplinary specialists and robotic surgical institutes deliver transformative healthcare tailored to you.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-base shadow-soft-md hover:shadow-teal-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5 text-mint-100" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  to="/specialties"
                  className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full border border-slate-300 hover:border-teal-500 hover:bg-white text-navy-800 font-semibold text-base transition-all duration-200 bg-white/70 backdrop-blur-sm"
                >
                  <span>Explore Our Specialties</span>
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </Link>
              </div>

              {/* Three compact trust indicators (demo labeled) */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800 tracking-tight">
                    99.4%
                  </div>
                  <div className="text-xs text-slate-muted font-medium mt-0.5">
                    Clinical Efficacy Rate <span className="block text-[10px] text-teal-600 font-semibold">(Demo Index)</span>
                  </div>
                </div>

                <div>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800 tracking-tight">
                    24/7
                  </div>
                  <div className="text-xs text-slate-muted font-medium mt-0.5">
                    Critical Care Readiness <span className="block text-[10px] text-teal-600 font-semibold">(Emergency Demo)</span>
                  </div>
                </div>

                <div>
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800 tracking-tight">
                    45+
                  </div>
                  <div className="text-xs text-slate-muted font-medium mt-0.5">
                    Specialist Physicians <span className="block text-[10px] text-teal-600 font-semibold">(Demonstration)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Asymmetric Depth Photography & Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Doctor Photograph */}
                <div className="relative z-10 rounded-4xl overflow-hidden shadow-soft-xl border-4 border-white bg-slate-100 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                    alt="Senior doctor in modern hospital facility"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold block mb-1">
                      NovaCare Chief of Clinical Excellence
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white">
                      Dr. Marcus Sterling, MD, PhD
                    </h3>
                  </div>
                </div>

                {/* Overlapping Secondary Visual: Clinical Environment */}
                <div className="hidden sm:block absolute -bottom-10 -left-12 z-20 w-52 h-44 rounded-3xl overflow-hidden border-4 border-white shadow-soft-xl bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                    alt="Modern patient healing suite"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-950/30 backdrop-blur-[1px]" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-mint-200">
                      Healing Environment
                    </span>
                    <span className="text-xs font-semibold block drop-shadow-sm">
                      Private Inpatient Suites
                    </span>
                  </div>
                </div>

                {/* Floating Card: Appointment Availability */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -top-6 -right-6 sm:-right-8 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-teal-100 shadow-soft-lg max-w-[210px]"
                >
                  <div className="flex items-center space-x-2 text-teal-600 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">Now Available</span>
                  </div>
                  <p className="text-xs font-heading font-bold text-navy-800">
                    Same-Week Specialist Consultations
                  </p>
                  <span className="text-[10px] text-slate-muted block mt-1">
                    Simulated availability demo
                  </span>
                </motion.div>

                {/* Floating Card: Patient Satisfaction */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="hidden sm:flex absolute top-1/2 -right-8 z-20 bg-navy-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-navy-700/80 shadow-soft-lg text-white items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                    <Star className="w-5 h-5 fill-gold" />
                  </div>
                  <div className="text-xs">
                    <span className="font-heading font-bold text-white block">4.9 / 5.0 Rating</span>
                    <span className="text-slate-300 text-[10px]">Over 1,200 Demo Reviews</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION B: HOSPITAL HIGHLIGHTS (Horizontal Restrained Bar)
      ============================================================ */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 flex-shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 text-sm sm:text-base">
                  Multispecialty Care
                </h4>
                <p className="text-xs text-slate-text mt-1">
                  8 accredited clinical institutes under one continuum.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 flex-shrink-0">
                <Microscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 text-sm sm:text-base">
                  Modern Diagnostics
                </h4>
                <p className="text-xs text-slate-text mt-1">
                  3.0T MRI, low-dose spectral CT, and molecular lab.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 text-sm sm:text-base">
                  Experienced Faculty
                </h4>
                <p className="text-xs text-slate-text mt-1">
                  Physicians from premier academic medical centers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 flex-shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 text-sm sm:text-base">
                  Patient-Centered Focus
                </h4>
                <p className="text-xs text-slate-text mt-1">
                  Acoustic private suites & dedicated recovery navigators.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-400 font-mono">
            * All medical statistics and faculty data are illustrative sample demonstration content.
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION C: MEDICAL SPECIALTIES (Refined Grid with Emphasis)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Clinical Excellence"
            title="Comprehensive Medical Specialties"
            subtitle="Explore our specialized clinical institutes designed to diagnose, treat, and heal across every life stage."
            actionSlot={
              <Link
                to="/specialties"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
              >
                <span>View All 8 Specialties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 text-center">
            <Link
              to="/specialties"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors shadow-soft-sm"
            >
              <span>Explore All Specialties & Clinical Teams</span>
              <ArrowRight className="w-4 h-4 text-mint-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION D: MEET OUR DOCTORS (Featured Faculty)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Medical Faculty"
            title="Distinguished Clinical Leadership"
            subtitle="Meet the compassionate clinicians, researchers, and surgeons leading NovaCare's specialized institutes."
            actionSlot={
              <Link
                to="/doctors"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
              >
                <span>View Full Doctor Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-slate-muted">
            All doctors, qualifications, availability, and experience details are fictional demo data.
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION E: ABOUT THE HOSPITAL (Editorial Storytelling)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image: Large Hospital Interior Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-4xl overflow-hidden shadow-soft-xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
                  alt="NovaCare Medical Center Main Concourse and Patient Pavilion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-teal-300 block mb-0.5">
                    Architectural Excellence
                  </span>
                  <span className="text-lg font-heading font-bold">
                    Light-Filled Healing Atrium & Pavilions
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-soft-lg border border-slate-200/90 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-mint-100 text-teal-700">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-xl text-navy-800 block">
                      350+ Beds
                    </span>
                    <span className="text-xs text-slate-muted">
                      Private acoustic suites (Demo specification)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Storytelling */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase">
                <span>Hospital Mission & Values</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-navy-800 leading-tight">
                Healthcare With Humanity at Its Heart
              </h2>

              <p className="text-base sm:text-lg text-slate-text leading-relaxed">
                NovaCare Medical Center was founded on the fundamental principle that exceptional medicine requires both technical supremacy and deep emotional empathy. We treat patients as partners in their healing journey, never as case numbers.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-full bg-teal-500 text-white mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-800 text-base">
                      Patient-Centered Autonomy & Dignity
                    </h4>
                    <p className="text-sm text-slate-text mt-0.5">
                      Every diagnostic pathway is co-created with the patient, ensuring transparent decisions and shared treatment goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-full bg-teal-500 text-white mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-800 text-base">
                      Integrated Multidisciplinary Care
                    </h4>
                    <p className="text-sm text-slate-text mt-0.5">
                      Cardiologists, oncologists, surgeons, and nutritionists collaborate synchronously, eliminating clinical silos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-full bg-teal-500 text-white mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy-800 text-base">
                      Safe, Restorative Environments
                    </h4>
                    <p className="text-sm text-slate-text mt-0.5">
                      Circadian lighting, acoustic engineering, and HEPA air filtration facilitate faster biological recovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors shadow-soft-sm"
                >
                  <span>Discover Our Hospital Story</span>
                  <ArrowRight className="w-4 h-4 text-mint-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION F: CENTERS OF EXCELLENCE (Flagship Institutes)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized Institutes"
            title="Centers of Excellence"
            subtitle="Four dedicated institutes delivering pioneering therapies, robotic accuracy, and sub-specialty research."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centersOfExcellence.map((center) => (
              <div
                key={center.id}
                className="bg-surface-light rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between card-hover-lift"
              >
                <div>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 relative">
                    <img
                      src={center.image}
                      alt={center.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs font-semibold text-mint-200 block">Lead: {center.leadDoctor}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-navy-800 mb-2">
                    {center.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
                    {center.tagline}
                  </p>
                  <p className="text-sm text-slate-text leading-relaxed mb-6">
                    {center.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200">
                    {center.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={`/specialties?id=${center.specialtyId}`}
                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    <span>View Institute Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>

                  <Link
                    to={`/appointment`}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-teal-400 text-xs font-semibold text-navy-800 transition-colors"
                  >
                    Consult Team
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION G: PATIENT JOURNEY (Horizontal/Vertical Timeline)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-cross-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Care Pathway"
            title="Your Reassuring Patient Journey"
            subtitle="From scheduling your initial visit to post-treatment recovery, our coordinated team is by your side every step."
            centered={true}
            light={true}
          />

          {/* Desktop Timeline (Horizontal) & Mobile (Vertical) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-teal-500 via-mint-200 to-teal-500 opacity-30 z-0" />

            {[
              {
                step: "01",
                title: "Book Your Appointment",
                desc: "Choose your specialty, select your preferred physician, and book an available consultation slot via phone or online portal.",
                icon: Calendar
              },
              {
                step: "02",
                title: "Meet Your Doctor",
                desc: "Engage in an in-depth clinical consultation with unhurried dialogue, lifestyle review, and preliminary physical assessment.",
                icon: Stethoscope
              },
              {
                step: "03",
                title: "Diagnostic Assessment",
                desc: "Complete recommended low-dose imaging or automated laboratory tests with same-day digital report turnaround.",
                icon: Microscope
              },
              {
                step: "04",
                title: "Personalized Care Plan",
                desc: "Receive an individualized treatment regimen, surgical schedule if required, and ongoing recovery coordination.",
                icon: FileText
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-navy-800 border-2 border-teal-500/40 text-mint-200 flex items-center justify-center mb-6 shadow-soft-lg group hover:border-teal-400 transition-colors">
                    <Icon className="w-8 h-8 text-teal-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block mb-2">
                    Step {item.step}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/appointment"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-md hover:shadow-teal-glow transition-all"
            >
              <span>Begin Your Journey Today</span>
              <ArrowRight className="w-4 h-4 text-mint-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION H: ADVANCED FACILITIES (Editorial Preview)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hospital Infrastructure"
            title="State-of-the-Art Facilities"
            subtitle="Engineered for surgical precision, low radiation exposure, and restorative patient comfort."
            actionSlot={
              <Link
                to="/facilities"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
              >
                <span>View All Hospital Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.slice(0, 3).map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between card-hover-lift"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider bg-navy-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full">
                        {facility.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-navy-800 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-text leading-relaxed line-clamp-3 mb-4">
                      {facility.description}
                    </p>
                    <div className="text-[11px] text-teal-700 font-medium">
                      Location: {facility.location}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/facilities"
                    className="inline-flex items-center text-xs font-semibold text-teal-600 hover:text-teal-700"
                  >
                    <span>Read Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">Demo Infrastructure</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-muted">
            All equipment models, configurations, and certifications are illustrative sample demonstration specifications.
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION I: PATIENT STORIES (Testimonials Carousel)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patient Voices"
            title="Stories of Healing & Hope"
            subtitle="Read experiences from patients and families cared for across our clinical departments."
            centered={true}
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* ============================================================
          SECTION J: APPOINTMENT CTA (Full-Width Navy & Medical Teal)
      ============================================================ */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-mint-200 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Accessible, World-Class Care</span>
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Your Health Deserves Thoughtful Care.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with our care team to explore your next steps. Whether you need a second opinion, routine screening, or specialized surgery, we are here for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base shadow-soft-lg hover:shadow-teal-glow transition-all"
            >
              <Calendar className="w-5 h-5 text-mint-100" />
              <span>Book an Appointment</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold text-base transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-mint-200" />
              <span>Contact Our Team</span>
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Simulated demonstration appointment scheduling portal • Fictional healthcare facility
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION K: FAQS (Interactive Accordion)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Find rapid answers to the most common inquiries regarding appointments, visits, and clinical services."
            centered={true}
          />

          <FAQAccordion items={homeFaqs} />

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-text mb-4">
              Have another question not answered here?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-600 hover:text-teal-700 underline"
            >
              <span>Reach out to our patient information desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
