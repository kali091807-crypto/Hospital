import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Navigation, 
  ShieldAlert,
  Building
} from 'lucide-react';
import EmergencyModal from '../components/EmergencyModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const departments = [
    'General Inquiries',
    'Outpatient Appointment Scheduling',
    'Patient Financial Services & Billing',
    'Medical Records Department',
    'Patient Experience & Feedback',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: 'General Inquiries',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Patient Communications & Campus Access</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Contact NovaCare Medical Center
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              We welcome your questions and feedback. Reach out to our patient concierge team, request directions, or explore campus access points.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Cards, Form & Interactive Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-3xl bg-surface-light border border-slate-200">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 w-fit mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-base mb-1">
                Hospital Address
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                1200 Horizon Boulevard, Metropolitan Health Campus, MC 98201
              </p>
              <span className="text-[11px] text-teal-600 font-medium block mt-2">
                Main Pavilion Concierge
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-surface-light border border-slate-200">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 w-fit mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-base mb-1">
                Phone Contact (Demo)
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                General: (555) 019-8300<br />
                Appointments: (555) 019-8310
              </p>
              <span className="text-[11px] text-teal-600 font-medium block mt-2">
                Mon – Sat: 08:00 – 20:00
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-surface-light border border-slate-200">
              <div className="p-3 rounded-2xl bg-mint-100 text-teal-700 w-fit mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-base mb-1">
                Email Inquiries
              </h3>
              <p className="text-xs text-slate-text leading-relaxed">
                care@novacare-demo.org<br />
                records@novacare-demo.org
              </p>
              <span className="text-[11px] text-teal-600 font-medium block mt-2">
                Simulated demonstration inbox
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-red-50 border border-red-200 text-red-950">
              <div className="p-3 rounded-2xl bg-red-100 text-red-600 w-fit mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-red-900 text-base mb-1">
                Emergency Trauma Bay
              </h3>
              <p className="text-xs text-red-800 leading-relaxed">
                Call 911 / 112 for urgent emergency rescue.
              </p>
              <button
                type="button"
                onClick={() => setEmergencyModalOpen(true)}
                className="text-[11px] font-bold text-red-700 underline block mt-2"
              >
                View Emergency Advisory &rarr;
              </button>
            </div>
          </div>

          {/* Form & Map Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-surface-light p-8 sm:p-10 rounded-4xl border border-slate-200">
              <h2 className="font-heading font-bold text-2xl text-navy-800 mb-2">
                Send a Message to Our Patient Concierge
              </h2>
              <p className="text-xs sm:text-sm text-slate-text mb-6">
                Please complete this frontend demonstration inquiry form. Responses are simulated.
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center bg-white rounded-3xl border border-teal-200 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-mint-100 text-teal-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy-800">
                    Demonstration Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-text max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. In an actual hospital, our concierge team would contact you at <strong>{formData.email}</strong> within 1 business day.
                  </p>
                  <div className="p-3 bg-surface-light rounded-xl text-xs text-slate-500 max-w-sm mx-auto">
                    Note: This is a frontend demo and no real email was transmitted.
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full bg-teal-500 text-white font-medium text-xs hover:bg-teal-600"
                  >
                    Send Another Message (Demo)
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Samuel Green"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none bg-white ${
                          errors.name ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-teal-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactEmail" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="samuel@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none bg-white ${
                          errors.email ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-teal-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-slate-400 lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 focus:outline-none focus:border-teal-500 bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactDept" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                        Department
                      </label>
                      <select
                        id="contactDept"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy-900 focus:outline-none focus:border-teal-500 bg-white"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please type your question or feedback here..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-900 focus:outline-none bg-white ${
                        errors.message ? 'border-red-400 bg-red-50/40' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400">
                      Do not include confidential health data.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm shadow-soft-sm transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Demonstration Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Directions Section */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface-light rounded-4xl border border-slate-200 overflow-hidden shadow-soft-sm">
                {/* Visual Map Representation */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
                  
                  {/* Stylized Pin Marker */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 text-teal-400 flex items-center justify-center shadow-soft-lg border-2 border-teal-500 animate-bounce">
                      <Building className="w-7 h-7" />
                    </div>
                    <div className="mt-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft-sm border border-slate-200">
                      <span className="font-heading font-bold text-navy-800 text-xs block">
                        NOVACARE MEDICAL CAMPUS
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        Pavilions A, B & Family Center
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-3 right-3 text-[10px] text-slate-400 font-mono">
                    Interactive Campus Map Placeholder
                  </span>
                </div>

                {/* Campus Transport & Directions info */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-lg text-navy-800">
                    Campus Directions & Parking
                  </h3>
                  <div className="space-y-2 text-xs text-slate-text">
                    <p>
                      <strong>Visitor Parking Garage:</strong> Enter via Gate 2 off Horizon Boulevard. Complimentary parking validation is provided at all clinic desks.
                    </p>
                    <p>
                      <strong>Public Transit:</strong> Metropolitan Metro Red Line, Horizon Medical Station (direct covered walkway to Pavilion A).
                    </p>
                    <p>
                      <strong>Valet Assistance:</strong> Available at Main Entrance from 07:00 AM to 07:00 PM weekdays.
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-teal-600 hover:text-teal-700 underline pt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in External Maps Application (Demo Link)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Guidance Modal */}
      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
      />
    </div>
  );
}
