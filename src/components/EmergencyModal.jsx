import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, PhoneCall, MapPin, Clock, X, ShieldAlert } from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="emergency-modal-title"
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-soft-xl border border-red-200 overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <AlertTriangle className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-red-100">Immediate Clinical Advisory</span>
                <h2 id="emergency-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Emergency Medical Guidance
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close emergency advisory"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Primary Life Threat Notice */}
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl">
              <div className="flex items-start">
                <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-red-900 space-y-1">
                  <p className="font-semibold text-red-950">
                    If you or someone near you is experiencing a life-threatening medical emergency:
                  </p>
                  <p>
                    Please call your local emergency services (e.g., <strong>911</strong> in North America, <strong>112</strong> in Europe) or proceed immediately to the nearest hospital emergency room.
                  </p>
                  <p className="text-xs text-red-700 font-medium pt-1">
                    Do not wait for an online appointment request or web message response during an emergency.
                  </p>
                </div>
              </div>
            </div>

            {/* When to seek Emergency vs Routine Care */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                  Emergency Department Symptoms:
                </h4>
                <ul className="space-y-1.5 text-slate-600 text-xs list-disc list-inside">
                  <li>Sudden chest pain, pressure, or shortness of breath</li>
                  <li>Sudden numbness, facial droop, or speech slurring (stroke)</li>
                  <li>Uncontrolled bleeding or severe major trauma</li>
                  <li>Sudden loss of consciousness or intense seizure</li>
                  <li>Severe allergic anaphylaxis (throat swelling)</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  Routine Outpatient Appointments:
                </h4>
                <ul className="space-y-1.5 text-slate-600 text-xs list-disc list-inside">
                  <li>Chronic symptom evaluations & consultations</li>
                  <li>Scheduled follow-ups and diagnostic reviews</li>
                  <li>Preventative health exams & wellness screening</li>
                  <li>Elective surgical assessments</li>
                  <li>Prescription refills & lifestyle optimization</li>
                </ul>
              </div>
            </div>

            {/* NovaCare Emergency Facility Info (Demo) */}
            <div className="bg-surface-light p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <h4 className="font-heading font-semibold text-navy-800 text-sm uppercase tracking-wider">
                NovaCare Emergency Trauma Centre (Demo Details)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-text">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-navy-800 block">Location:</span>
                    1200 Horizon Boulevard, Pavilion C Entrance
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-navy-800 block">Hours:</span>
                    Open 24 Hours / 365 Days
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <PhoneCall className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-navy-800 block">Hospital Demo Triage:</span>
                    (555) 019-8999 (Sample Only)
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors shadow-soft-sm"
              >
                I Understand, Close Advisory
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
