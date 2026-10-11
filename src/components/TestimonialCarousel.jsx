import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Info } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-lg relative overflow-hidden">
        {/* Decorative Quote Icon Background */}
        <div className="absolute top-6 right-8 text-mint-200/50 pointer-events-none">
          <Quote className="w-24 h-24 stroke-[1]" />
        </div>

        {/* Carousel Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 flex flex-col justify-between"
          >
            {/* Stars & Specialty Tag */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex text-gold">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                {current.treatment}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl font-heading font-medium text-navy-800 leading-snug sm:leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center space-x-3.5">
                <img
                  src={current.image}
                  alt={current.patientName}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/30"
                />
                <div>
                  <h4 className="font-heading font-bold text-navy-800 text-sm sm:text-base">
                    {current.patientName}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-slate-muted">
                    <span>{current.specialty} Care</span>
                    <span>•</span>
                    <span className="text-teal-600 font-medium">{current.context}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-slate-200 hover:border-teal-500 hover:bg-teal-50 text-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-teal-500' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Demo Disclaimer */}
      <div className="mt-3 text-center">
        <span className="inline-flex items-center space-x-1.5 text-xs text-slate-muted">
          <Info className="w-3.5 h-3.5 text-teal-600" />
          <span>All patient testimonials are illustrative demonstration simulations.</span>
        </span>
      </div>
    </div>
  );
}
