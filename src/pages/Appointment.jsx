import React from 'react';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle2, 
  Info,
  Sparkles
} from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Outpatient Scheduling Portal</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Book a Specialist Consultation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              Schedule your appointment with NovaCare’s expert clinical faculty. Select your medical department, doctor, and convenient time slot below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Appointment Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Emergency Warning Strip */}
          <div className="mb-10 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start space-x-3 text-xs sm:text-sm text-red-900">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-red-950 block">Notice for Medical Emergencies:</span>
              Online appointment scheduling is intended for non-urgent outpatient visits. If you are experiencing acute chest pain, stroke symptoms, shortness of breath, or serious trauma, call your local emergency service (911 / 112) immediately.
            </div>
          </div>

          {/* Form */}
          <AppointmentForm />

          {/* Reassurance Grid */}
          <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-text">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-mint-100 text-teal-700 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 mb-1">
                  Prompt Consultations
                </h4>
                <p>Most outpatient specialty appointments are accommodated within 48 to 72 hours.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-mint-100 text-teal-700 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 mb-1">
                  Privacy Protected
                </h4>
                <p>This demonstration portal does not store or share sensitive personal medical records.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-mint-100 text-teal-700 flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy-800 mb-1">
                  Telephone Assistance
                </h4>
                <p>Prefer to schedule by phone? Speak with our intake desk at (555) 019-8300 (demo line).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
