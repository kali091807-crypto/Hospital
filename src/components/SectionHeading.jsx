import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  actionSlot = null,
  className = ""
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 ${
          light 
            ? 'bg-white/10 text-mint-200 border border-white/15' 
            : 'bg-mint-200/60 text-teal-700 border border-teal-200/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      
      <div className={`${!centered && actionSlot ? 'md:flex md:items-end md:justify-between md:gap-8' : ''}`}>
        <div>
          <h2 className={`font-heading font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl ${
            light ? 'text-white' : 'text-navy-800'
          } leading-[1.15]`}>
            {title}
          </h2>
          
          {subtitle && (
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
              light ? 'text-slate-200' : 'text-slate-text'
            }`}>
              {subtitle}
            </p>
          )}
        </div>

        {actionSlot && !centered && (
          <div className="mt-6 md:mt-0 flex-shrink-0">
            {actionSlot}
          </div>
        )}
      </div>
    </div>
  );
}
