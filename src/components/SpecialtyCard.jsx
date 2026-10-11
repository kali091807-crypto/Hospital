import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Brain, 
  Activity, 
  Baby, 
  Dna, 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck,
  Stethoscope, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Dna,
  Sparkles,
  ShieldHeart: ShieldCheck,
  Stethoscope
};

export default function SpecialtyCard({ specialty, index = 0 }) {
  if (!specialty) return null;

  const IconComponent = iconMap[specialty.iconName] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.08 }}
      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group card-hover-lift relative overflow-hidden"
    >
      {/* Subtle top color bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Header: Icon & Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 p-3.5 rounded-2xl bg-mint-100 text-teal-700 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-soft-sm flex items-center justify-center">
            <IconComponent className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
            {specialty.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading font-bold text-xl text-navy-800 group-hover:text-teal-600 transition-colors mb-2.5">
          {specialty.name}
        </h3>
        
        <p className="text-slate-text text-sm leading-relaxed mb-5 line-clamp-2">
          {specialty.description}
        </p>

        {/* Treatments snippet */}
        <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-muted block mb-1">
            Common Procedures:
          </span>
          {specialty.keyTreatments.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-center text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mr-2 flex-shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/specialties?id=${specialty.id}`}
          className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 group-hover:translate-x-1 transition-all"
        >
          <span>Explore Specialty</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-[10px] text-slate-400 font-mono">Demo Dept</span>
      </div>
    </motion.div>
  );
}
