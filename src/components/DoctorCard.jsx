import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Calendar, ArrowRight, Award, Clock } from 'lucide-react';

export default function DoctorCard({ doctor, onQuickBook }) {
  if (!doctor) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden group card-hover-lift"
    >
      {/* Doctor Image Container with subtle overlay and badges */}
      <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-slate-100">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />

        {/* Experience Pill */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-navy-800 shadow-soft-sm">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>{doctor.experienceYears} Years Exp. (Demo)</span>
          </span>
        </div>

        {/* Rating Pill */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-navy-900/80 backdrop-blur-md text-white border border-white/20">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span>{doctor.rating}</span>
          </span>
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-xs uppercase font-semibold tracking-wider text-mint-200 block mb-1">
            {doctor.specialty}
          </span>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight drop-shadow-sm">
            {doctor.shortName}
          </h3>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="text-xs text-teal-700 font-medium flex items-center gap-1.5">
            <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span className="line-clamp-1">{doctor.role}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-text line-clamp-2 leading-relaxed">
            {doctor.bio}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-muted">
            <span>Office: {doctor.officeLocation}</span>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
              Fictional Demo
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
          <Link
            to={`/doctors/${doctor.id}`}
            className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-navy-800 font-semibold text-xs transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 text-teal-600" />
          </Link>

          <Link
            to={`/appointment?doctor=${doctor.id}`}
            className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium text-xs shadow-soft-sm transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 mr-1" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
