import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Stethoscope, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Info, 
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { specialties } from '../data/specialties';
import { doctors } from '../data/doctors';

export default function AppointmentForm({ preselectedDoctorId = null }) {
  const [searchParams] = useSearchParams();
  const queryDoctorId = searchParams.get('doctor') || preselectedDoctorId;

  // Multi-step flow: 1: Details, 2: Review, 3: Confirmed
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    specialtyId: '',
    doctorId: '',
    date: '',
    timeSlot: '',
    reason: '',
    isDemoAcknowledge: true,
  });

  const [errors, setErrors] = useState({});
  const [bookingReference, setBookingReference] = useState('');

  // Handle preselected doctor on mount or URL change
  useEffect(() => {
    if (queryDoctorId) {
      const doc = doctors.find((d) => d.id === queryDoctorId);
      if (doc) {
        setFormData((prev) => ({
          ...prev,
          specialtyId: doc.specialtyId,
          doctorId: doc.id,
        }));
      }
    }
  }, [queryDoctorId]);

  // Available doctors filtered by selected specialty
  const availableDoctors = formData.specialtyId
    ? doctors.filter((d) => d.specialtyId === formData.specialtyId)
    : doctors;

  // Selected doctor object
  const selectedDoctor = doctors.find((d) => d.id === formData.doctorId);
  const selectedSpecialty = specialties.find((s) => s.id === formData.specialtyId);

  // Dynamic available time slots based on doctor or default
  const availableSlots = selectedDoctor?.consultationSlots || [
    "09:00 AM",
    "10:30 AM",
    "11:45 AM",
    "02:00 PM",
    "03:30 PM",
    "04:45 PM"
  ];

  // Calculate minimum selectable date (today formatted YYYY-MM-DD)
  const todayString = new Date().toISOString().split('T')[0];

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // When specialty changes, reset doctor if doctor doesn't belong
      if (name === 'specialtyId') {
        const docForSpec = doctors.find((d) => d.specialtyId === value);
        updated.doctorId = docForSpec ? docForSpec.id : '';
        updated.timeSlot = '';
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Field validation
  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient full name is required';
    } else if (formData.patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required for simulated confirmation';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. patient@example.com)';
    }

    const phoneRegex = /^[0-9+\s\-()]{7,18}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number (at least 7 digits)';
    }

    if (!formData.specialtyId) {
      newErrors.specialtyId = 'Please select a clinical specialty';
    }

    if (!formData.doctorId) {
      newErrors.doctorId = 'Please choose a doctor';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a preferred date';
    } else if (formData.date < todayString) {
      newErrors.date = 'Appointment date cannot be in the past';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please choose an available demo time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToReview = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleConfirmBooking = () => {
    // Generate simulated reference code
    const randomCode = `NC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingReference(randomCode);
    setStep(3);
    window.scrollTo({ top: 250, behavior: 'smooth' });

    // Trigger joyful celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#087F8C', '#10243A', '#D7B56D', '#DDF4EC'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleResetForm = () => {
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      specialtyId: '',
      doctorId: '',
      date: '',
      timeSlot: '',
      reason: '',
      isDemoAcknowledge: true,
    });
    setErrors({});
    setStep(1);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-xl overflow-hidden max-w-4xl mx-auto">
      {/* Progress Stepper Bar */}
      <div className="bg-navy-900 px-6 py-5 sm:px-8 border-b border-navy-800 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold block mb-0.5">
            Online Consultation Portal
          </span>
          <h3 className="font-heading font-bold text-xl text-white">
            {step === 1 && 'Step 1: Select Care & Appointment Details'}
            {step === 2 && 'Step 2: Review Consultation Details'}
            {step === 3 && 'Consultation Confirmed (Simulated)'}
          </h3>
        </div>

        {/* Stepper indicators */}
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-semibold text-xs transition-colors ${
                  step === s
                    ? 'bg-teal-500 text-white ring-4 ring-teal-500/20'
                    : step > s
                    ? 'bg-mint-200 text-teal-900 font-bold'
                    : 'bg-navy-800 text-slate-400'
                }`}
              >
                {step > s ? <CheckCircle2 className="w-4 h-4 text-teal-700" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-6 sm:w-10 h-0.5 mx-1 transition-colors ${
                    step > s ? 'bg-teal-500' : 'bg-navy-800'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-10">
        {/* Step 1: Appointment Form Inputs */}
        {step === 1 && (
          <form onSubmit={handleProceedToReview} noValidate className="space-y-8">
            {/* Demo Notice Banner */}
            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/70 flex items-start space-x-3 text-xs sm:text-sm text-teal-900">
              <Info className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold block text-navy-800">Demonstration Simulation Note:</span>
                This form simulates the appointment reservation experience. No real patient data is transmitted to an external server or real medical clinic.
              </div>
            </div>

            {/* Section 1: Patient Information */}
            <div>
              <h4 className="font-heading font-bold text-navy-800 text-base mb-4 flex items-center">
                <User className="w-4 h-4 text-teal-600 mr-2" />
                1. Patient Contact Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="patientName" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors ${
                      errors.patientName 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500 bg-white'
                    }`}
                  />
                  {errors.patientName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.patientName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="eleanor@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500 bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 234-5678"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors ${
                      errors.phone 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500 bg-white'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Specialty & Physician */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-heading font-bold text-navy-800 text-base mb-4 flex items-center">
                <Stethoscope className="w-4 h-4 text-teal-600 mr-2" />
                2. Select Department & Doctor
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="specialtyId" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Medical Specialty <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="specialtyId"
                    name="specialtyId"
                    value={formData.specialtyId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors bg-white ${
                      errors.specialtyId 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500'
                    }`}
                  >
                    <option value="">-- Choose a Clinical Specialty --</option>
                    {specialties.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.specialtyId && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.specialtyId}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="doctorId" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Attending Physician <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="doctorId"
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors bg-white ${
                      errors.doctorId 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500'
                    }`}
                  >
                    <option value="">-- Choose a Doctor --</option>
                    {availableDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.specialty})
                      </option>
                    ))}
                  </select>
                  {errors.doctorId && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.doctorId}
                    </p>
                  )}
                </div>
              </div>

              {/* Physician Quick Preview Banner */}
              {selectedDoctor && (
                <div className="mt-4 p-4 rounded-2xl bg-surface-light border border-slate-200/90 flex items-center space-x-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-teal-500/20"
                  />
                  <div className="text-xs">
                    <span className="font-heading font-bold text-navy-800 text-sm block">
                      {selectedDoctor.name}
                    </span>
                    <span className="text-teal-700 font-medium block">{selectedDoctor.role}</span>
                    <span className="text-slate-muted">
                      Clinic: {selectedDoctor.officeLocation} • Consultation days: {selectedDoctor.availableDays.join(', ')}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Section 3: Date & Time Slot */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-heading font-bold text-navy-800 text-base mb-4 flex items-center">
                <Calendar className="w-4 h-4 text-teal-600 mr-2" />
                3. Preferred Date & Available Time Slot
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Consultation Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={todayString}
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none transition-colors bg-white ${
                      errors.date 
                        ? 'border-red-400 focus:border-red-500 bg-red-50/30' 
                        : 'border-slate-200 focus:border-teal-500'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.date}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-muted mt-1">Past dates cannot be selected.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                    Demonstration Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, timeSlot: slot }));
                            setErrors((prev) => ({ ...prev, timeSlot: null }));
                          }}
                          className={`py-2 px-1 text-xs rounded-xl font-medium border transition-all text-center ${
                            isSelected
                              ? 'bg-teal-500 border-teal-500 text-white shadow-soft-sm font-semibold'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-teal-300 hover:bg-mint-50/40'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeSlot && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      {errors.timeSlot}
                    </p>
                  )}
                </div>
              </div>

              {/* Optional Reason */}
              <div>
                <label htmlFor="reason" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                  Reason for Consultation <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={2}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="e.g. Routine follow-up on echocardiogram report, joint stiffness review, etc. (Please avoid submitting sensitive personal details)."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 text-sm text-navy-900 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-muted hidden sm:inline">
                * All entries are temporary frontend demonstration state.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium text-sm shadow-soft-md hover:shadow-teal-glow transition-all"
              >
                <span>Review Appointment Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Review Screen */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="bg-mint-50/70 border border-teal-200/60 p-5 rounded-2xl">
              <h4 className="font-heading font-bold text-navy-800 text-lg mb-1">
                Please verify your consultation details
              </h4>
              <p className="text-xs sm:text-sm text-slate-text">
                Verify the doctor, clinical specialty, date, and contact email below before confirming this simulated booking.
              </p>
            </div>

            {/* Review Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Details */}
              <div className="bg-surface-light p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-3">
                  Patient Summary
                </span>
                <div className="space-y-2.5 text-sm">
                  <div>
                    <span className="text-xs text-slate-muted block">Full Name</span>
                    <span className="font-semibold text-navy-800">{formData.patientName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-muted block">Email Address</span>
                    <span className="text-navy-800">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-muted block">Phone</span>
                    <span className="text-navy-800">{formData.phone}</span>
                  </div>
                  {formData.reason && (
                    <div>
                      <span className="text-xs text-slate-muted block">Consultation Reason</span>
                      <span className="text-slate-600 italic">"{formData.reason}"</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Clinical Appointment Details */}
              <div className="bg-surface-light p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-3">
                  Clinical Session
                </span>
                <div className="space-y-2.5 text-sm">
                  <div>
                    <span className="text-xs text-slate-muted block">Specialty</span>
                    <span className="font-semibold text-navy-800">{selectedSpecialty?.name}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-muted block">Physician</span>
                    <span className="font-semibold text-navy-800">{selectedDoctor?.name}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-muted block">Date & Time</span>
                    <span className="font-semibold text-teal-700">
                      {formData.date} at {formData.timeSlot}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-muted block">Location / Room</span>
                    <span className="text-slate-600">{selectedDoctor?.officeLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-navy-800 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Edit Details</span>
              </button>

              <button
                type="button"
                onClick={handleConfirmBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-md hover:shadow-teal-glow transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Demonstration Appointment</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation Screen */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-6 sm:py-10 max-w-2xl mx-auto space-y-6"
          >
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-mint-100 text-teal-600 flex items-center justify-center mx-auto shadow-teal-glow">
              <CalendarCheck className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-mint-100 text-teal-800 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Simulated Reservation Successful</span>
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-800">
                Demonstration Booking Confirmed!
              </h3>
              <p className="text-slate-text text-sm sm:text-base mt-2 max-w-lg mx-auto">
                Thank you, <strong>{formData.patientName}</strong>. A simulated appointment confirmation has been generated with your appointment code.
              </p>
            </div>

            {/* Confirmation Ticket Card */}
            <div className="bg-surface-light border border-slate-200/90 rounded-3xl p-6 text-left space-y-4 shadow-soft-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-muted">
                  Booking Reference
                </span>
                <span className="font-mono font-bold text-base text-teal-700 bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {bookingReference}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-muted block text-xs">Specialist</span>
                  <span className="font-semibold text-navy-800">{selectedDoctor?.name}</span>
                </div>
                <div>
                  <span className="text-slate-muted block text-xs">Date & Time</span>
                  <span className="font-semibold text-teal-700">{formData.date} • {formData.timeSlot}</span>
                </div>
                <div>
                  <span className="text-slate-muted block text-xs">Department</span>
                  <span className="text-slate-700">{selectedSpecialty?.name}</span>
                </div>
                <div>
                  <span className="text-slate-muted block text-xs">Clinic Suite</span>
                  <span className="text-slate-700">{selectedDoctor?.officeLocation}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 text-xs text-slate-500">
                <span className="font-semibold text-navy-800 block">Demonstration Disclaimer:</span>
                This is a frontend demonstration showcase. No medical consultation has actually been scheduled.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                to="/"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-navy-800 hover:bg-navy-700 text-white font-medium text-sm transition-colors shadow-soft-sm"
              >
                Return to Homepage
              </Link>
              <button
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-navy-800 font-medium text-sm transition-colors"
              >
                Book Another Appointment (Demo)
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
