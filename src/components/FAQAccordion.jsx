import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items = [], allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  if (!items.length) return null;

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={item.id || index}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen 
                ? 'bg-white border-teal-200 shadow-soft-sm' 
                : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className={`font-heading font-semibold text-base sm:text-lg transition-colors pr-4 ${
                isOpen ? 'text-teal-700' : 'text-navy-800'
              }`}>
                {item.question}
              </span>
              <div className={`p-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                isOpen ? 'bg-mint-100 text-teal-700 rotate-180' : 'bg-slate-100 text-slate-500'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-text leading-relaxed border-t border-slate-100/80">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
