import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  AlertCircle, 
  Info,
  Calendar,
  Sparkles,
  Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import { patientGuideFaqs } from '../data/faqs';

export default function PatientGuide() {
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleSimulatedDownload = (docTitle) => {
    setDownloadNotice(`Simulated download triggered for: "${docTitle}". (Demonstration document placeholder).`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4500);
  };

  const sampleGuides = [
    {
      title: "Pre-Operative Patient Preparation Guide",
      size: "1.4 MB PDF (Demo)",
      desc: "Comprehensive checklist covering fasting protocols, medication adjustments, and day-of-surgery arrival."
    },
    {
      title: "Inpatient Admission & Visitor Policy Handbook",
      size: "2.1 MB PDF (Demo)",
      desc: "Detailed guidelines on visiting hours, companion overnight accommodations, and infection prevention."
    },
    {
      title: "NovaCare Campus Parking & Navigation Map",
      size: "3.8 MB PDF (Demo)",
      desc: "Floor-by-floor maps of Pavilion A, Pavilion B, Cancer Care Wing, and dedicated Emergency parking."
    },
    {
      title: "Patient Rights, Privacy & Financial Transparency Charter",
      size: "1.1 MB PDF (Demo)",
      desc: "Our institutional commitment to informed consent, dignified communication, and itemized billing."
    }
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <section className="py-12 md:py-16 bg-surface-light border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-mint-200/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Patient & Visitor Center</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-navy-800 tracking-tight leading-tight">
              Patient & Visitor Guide
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-text leading-relaxed">
              We want your hospital experience to be as tranquil, safe, and transparent as possible. Review our visitor hours, admission checklists, and insurance resources below.
            </p>
          </div>
        </div>
      </section>

      {/* Download Alert Toast */}
      {downloadNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-900 text-white p-4 rounded-2xl shadow-soft-xl border border-teal-500/40 flex items-center space-x-3 text-xs sm:text-sm animate-bounce">
          <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* Guide Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Preparing For Your Visit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Phase 1
              </span>
              <h2 className="font-heading font-bold text-2xl text-navy-800 mb-3">
                Preparing for Your Visit
              </h2>
              <p className="text-sm text-slate-text leading-relaxed">
                A checklist of essential documents and items to bring for both outpatient consultations and scheduled hospital stays.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Identification & Demographics", desc: "Government-issued photo identification (passport, driver's license, or national identity card)." },
                { title: "Insurance & Coverage Cards", desc: "Primary health insurance card and any supplementary prescription benefit documentation." },
                { title: "Medication Reconciliation", desc: "A current complete list of all prescriptions, over-the-counter supplements, and exact dosages." },
                { title: "Prior Clinical Records & Imaging", desc: "Pertinent recent lab results, cardiology tracings, pathology reports, and radiology CDs/disks." },
                { title: "Personal Comfort Essentials", desc: "Comfortable slip-resistant footwear, glasses or hearing aids, and chargers for mobile devices." },
                { title: "Advance Healthcare Directives", desc: "Copies of any living will or medical power-of-attorney documents you wish placed in your chart." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-surface-light border border-slate-200">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-navy-800">{item.title}</h4>
                      <p className="text-xs text-slate-text mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Inpatient Admission & Visitor Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-slate-200">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Phase 2
              </span>
              <h2 className="font-heading font-bold text-2xl text-navy-800 mb-3">
                Visiting Hours & Guidelines
              </h2>
              <p className="text-sm text-slate-text leading-relaxed">
                Loved ones play an integral role in patient recovery. We balance welcoming visitation with rest and infection prevention.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="bg-surface-light p-6 rounded-3xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-heading font-bold text-navy-800 block">General Inpatient Pavilions:</span>
                    <span className="text-xs text-slate-text">09:00 AM – 08:30 PM Daily</span>
                  </div>
                  <div>
                    <span className="font-heading font-bold text-navy-800 block">Intensive Care Units (ICU):</span>
                    <span className="text-xs text-slate-text">10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM</span>
                  </div>
                  <div>
                    <span className="font-heading font-bold text-navy-800 block">Overnight Companions:</span>
                    <span className="text-xs text-slate-text">One designated adult permitted in private rooms</span>
                  </div>
                  <div>
                    <span className="font-heading font-bold text-navy-800 block">Children & Minors:</span>
                    <span className="text-xs text-slate-text">Must be supervised by an adult companion at all times</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Billing & Insurance Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-slate-200">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Phase 3
              </span>
              <h2 className="font-heading font-bold text-2xl text-navy-800 mb-3">
                Billing & Financial Clarity
              </h2>
              <p className="text-sm text-slate-text leading-relaxed">
                Clear, transparent, and surprise-free billing. Learn how insurance coordination and cost estimates operate.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="bg-surface-light p-6 rounded-3xl border border-slate-200 space-y-4 text-sm text-slate-text">
                <p>
                  NovaCare Medical Center participates with major commercial healthcare insurance plans, Medicare, and regional health systems. Our patient financial counselors can provide pre-admission good-faith estimates for elective procedures.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-800 block">Itemized Billing</span>
                    Transparent breakdowns of all medications and tests.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-800 block">Financial Counseling</span>
                    Flexible zero-interest payment installment arrangements.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-navy-800 block">Pre-Authorization</span>
                    Our intake team coordinates directly with insurers.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Downloadable Demo Guides */}
          <div className="pt-12 border-t border-slate-200">
            <h2 className="font-heading font-bold text-2xl text-navy-800 mb-2">
              Downloadable Patient Handbooks (Demonstration)
            </h2>
            <p className="text-xs sm:text-sm text-slate-muted mb-6">
              Click any guide below to test the simulated brochure download.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleGuides.map((guide, i) => (
                <div
                  key={i}
                  className="bg-surface-light p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-4 hover:border-teal-400 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <h4 className="font-heading font-bold text-sm text-navy-800">
                        {guide.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.desc}
                    </p>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {guide.size}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSimulatedDownload(guide.title)}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-teal-50 hover:border-teal-400 text-teal-600 transition-colors flex-shrink-0"
                    aria-label={`Download ${guide.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient FAQs */}
      <section className="py-16 md:py-24 bg-surface-light border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visitor FAQs"
            title="Questions for Patients & Visitors"
            subtitle="Policies regarding electronics, overnight stays, languages, and billing."
            centered={true}
          />

          <FAQAccordion items={patientGuideFaqs} />
        </div>
      </section>
    </div>
  );
}
