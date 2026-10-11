// Fictional demonstration specialties data for NovaCare Medical Center
export const specialties = [
  {
    id: "cardiology",
    name: "Cardiology & Vascular Medicine",
    shortName: "Cardiology",
    category: "Critical & Surgical",
    iconName: "HeartPulse",
    headline: "Pioneering comprehensive cardiovascular health and interventional precision.",
    description: "From preventative cardiology and lipidology to minimally invasive catheterizations and structural valve repairs, our cardiac team delivers comprehensive care.",
    detailedOverview: "NovaCare's Heart & Vascular Institute brings together world-class cardiologists, cardiac surgeons, and electrophysiology specialists. Equipped with dedicated digital catheterization suites and advanced cardiac MRI, we provide rapid diagnostics, round-the-clock ST-elevation acute coronary intervention, and long-term cardiac rehabilitation.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Coronary Angioplasty & Drug-Eluting Stents",
      "Electrophysiology Study & Arrhythmia Ablation",
      "Cardiac Resynchronization & Pacemaker Therapy",
      "3D Echocardiography & Cardiac MRI"
    ],
    commonConditions: [
      "Coronary Artery Disease",
      "Atrial Fibrillation & Heart Arrhythmias",
      "Valvular Heart Disease",
      "Congestive Heart Failure",
      "Hypertension & Arterial Disease"
    ],
    primaryDoctorId: "dr-elena-vance",
    stats: {
      successRate: "99.4%",
      proceduresPerYear: "3,200+",
      subspecialties: 6
    }
  },
  {
    id: "neurology",
    name: "Neurology & Neurosurgery",
    shortName: "Neurology",
    category: "Critical & Surgical",
    iconName: "Brain",
    headline: "Advanced neuroscience for complex brain, spine, and nervous system disorders.",
    description: "Integrating robotic-assisted cranial surgery, dedicated stroke intervention pathways, and comprehensive spine reconstructive therapies.",
    detailedOverview: "Our Brain & Spine Institute combines compassionate neurological rehabilitation with state-of-the-art operative neuro-navigation. A certified comprehensive stroke response unit operates 24/7, providing hyperacute thrombolysis and mechanical thrombectomy within minutes of arrival.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Robotic-Guided Minimally Invasive Spine Surgery",
      "Awake Craniotomy & Intraoperative Functional Mapping",
      "Acute Endovascular Stroke Thrombectomy",
      "Deep Brain Stimulation (DBS) for Movement Disorders",
      "High-Density Video-EEG Monitoring"
    ],
    commonConditions: [
      "Acute Ischemic & Hemorrhagic Stroke",
      "Brain Tumors & Vascular Malformations",
      "Herniated Discs & Spinal Stenosis",
      "Epilepsy & Intractable Seizures",
      "Parkinson's Disease & Tremors"
    ],
    primaryDoctorId: "dr-marcus-sterling",
    stats: {
      successRate: "98.9%",
      proceduresPerYear: "1,850+",
      subspecialties: 5
    }
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Reconstruction",
    shortName: "Orthopedics",
    category: "Critical & Surgical",
    iconName: "Activity",
    headline: "Restoring movement, strength, and active life with robotic precision.",
    description: "Specialized arthroplasty, sports medicine arthroscopy, complex spinal alignment, and comprehensive physical rehabilitation.",
    detailedOverview: "The Bone & Joint Center at NovaCare utilizes CT-free robotic arm-assisted arthroplasty, enabling microscopic sub-millimeter precision for hip and knee replacements. Our rapid-recovery orthopedic protocol minimizes muscle trauma, allowing many joint patients to walk on the day of surgery.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Mako Robotic-Arm Total Hip & Knee Arthroplasty",
      "Arthroscopic Rotator Cuff & Shoulder Stabilization",
      "Anterior Cruciate Ligament (ACL) Reconstruction",
      "Minimally Invasive Foot & Ankle Reconstruction",
      "Post-Surgical Hydrotherapy & Physical Rehab"
    ],
    commonConditions: [
      "Severe Osteoarthritis of Hip and Knee",
      "Sports Ligament & Meniscal Tears",
      "Rotator Cuff Tears & Shoulder Impingement",
      "Trauma Fractures & Non-Unions",
      "Carpal Tunnel & Hand Tendinopathies"
    ],
    primaryDoctorId: "dr-julian-ramirez",
    stats: {
      successRate: "99.1%",
      proceduresPerYear: "2,600+",
      subspecialties: 4
    }
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Adolescent Medicine",
    shortName: "Pediatrics",
    category: "Family & Wellness",
    iconName: "Baby",
    headline: "Compassionate, family-centered medical care for growing minds and bodies.",
    description: "From newborn nursery care and routine childhood vaccinations to adolescent developmental medicine and acute pediatric emergencies.",
    detailedOverview: "Designed with cheerful, soothing spaces that put children and parents at ease, our Children's Pavilion features pediatric subspecialists, Level III neonatal intensive care capabilities, and a dedicated 24/7 pediatric emergency triage area.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Well-Child Exams & Immunization Schedules",
      "Pediatric Asthma & Allergy Management",
      "Neonatal Intensive Care (NICU Level III Demo)",
      "Pediatric Infectious Disease Care",
      "Developmental & Behavioral Screenings"
    ],
    commonConditions: [
      "Childhood Respiratory Illnesses & RSV",
      "Eczema & Pediatric Allergies",
      "Growth Hormone & Endocrine Conditions",
      "ADHD & Behavioral Development Needs",
      "Acute Pediatric Infections & Fevers"
    ],
    primaryDoctorId: "dr-sophia-chen",
    stats: {
      successRate: "99.8%",
      proceduresPerYear: "5,400+",
      subspecialties: 7
    }
  },
  {
    id: "oncology",
    name: "Comprehensive Oncology & Hematology",
    shortName: "Oncology",
    category: "Precision Medicine",
    iconName: "Dna",
    headline: "Targeted genetic profiling, immunotherapy, and compassionate cancer care.",
    description: "Multidisciplinary tumor boards, daylight infusion suites, next-generation sequencing, and integrated supportive oncology.",
    detailedOverview: "NovaCare's Cancer Center provides precision cancer therapeutics. Every patient case is reviewed by a multidisciplinary tumor board including medical oncologists, surgical oncologists, radiation therapists, and genetic counselors, ensuring an individualized treatment plan.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Next-Gen Genomic DNA Tumor Sequencing",
      "Targeted Monoclonal Antibody Immunotherapy",
      "State-of-the-art Outpatient Chemotherapy Suites",
      "Stereotactic Body Radiotherapy (SBRT)",
      "Palliative & Supportive Symptom Management"
    ],
    commonConditions: [
      "Breast, Lung, and Gastrointestinal Cancers",
      "Lymphoma & Multiple Myeloma",
      "Leukemia & Blood Disorders",
      "Melanoma & Soft Tissue Sarcomas",
      "High-Risk Hereditary Cancer Syndromes"
    ],
    primaryDoctorId: "dr-aaliyah-patel",
    stats: {
      successRate: "97.8%",
      proceduresPerYear: "2,100+",
      subspecialties: 6
    }
  },
  {
    id: "dermatology",
    name: "Dermatology & Cutaneous Surgery",
    shortName: "Dermatology",
    category: "Outpatient & Specialty",
    iconName: "Sparkles",
    headline: "Comprehensive clinical dermatology, skin cancer surgery, and cutaneous wellness.",
    description: "Expert dermoscopic evaluations, micrographic Mohs surgery for skin malignancies, and customized therapeutic regimens for chronic conditions.",
    detailedOverview: "Our dermatologists diagnose and treat medical disorders of the skin, hair, and nails with gentle clinical precision. Combining high-resolution digital mole mapping with targeted phototherapy and dermatopathologic expertise, we protect and heal.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Digital Full-Body Dermoscopy & Mole Mapping",
      "Mohs Micrographic Surgery for Skin Cancer",
      "Narrowband UVB Phototherapy",
      "Biologic Therapy for Severe Psoriasis",
      "Scar Revision & Laser Vascular Treatment"
    ],
    commonConditions: [
      "Melanoma, Basal & Squamous Cell Carcinomas",
      "Psoriasis & Chronic Plaque Disease",
      "Severe Atopic Dermatitis & Eczema",
      "Alopecia Areata & Hair Loss Disorders",
      "Autoimmune Bullous Skin Conditions"
    ],
    primaryDoctorId: "dr-rachel-brooks",
    stats: {
      successRate: "99.5%",
      proceduresPerYear: "4,100+",
      subspecialties: 3
    }
  },
  {
    id: "obstetrics-gynecology",
    name: "Obstetrics & Women's Health",
    shortName: "Obstetrics & Gynecology",
    category: "Family & Wellness",
    iconName: "ShieldHeart",
    headline: "Exceptional clinical care honoring women throughout every phase of life.",
    description: "Holistic prenatal and high-risk maternal-fetal medicine, private birthing suites, and minimally invasive laparoscopic gynecologic surgery.",
    detailedOverview: "The Women's Health Pavilion offers personalized care from adolescent gynecology through family planning, pregnancy, childbirth, and menopause. Our private delivery suites are equipped with wireless fetal telemetry and immediate access to Level III neonatal support.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Comprehensive Prenatal & Maternal-Fetal Care",
      "HD 3D/4D Obstetric Fetal Sonography",
      "Minimally Invasive Laparoscopic Hysterectomy",
      "Pelvic Floor Reconstruction & Urogynecology",
      "Menopause Symptom & Hormonal Optimization"
    ],
    commonConditions: [
      "High-Risk Pregnancies & Gestational Health",
      "Endometriosis & Chronic Pelvic Pain",
      "Uterine Fibroids & Abnormal Bleeding",
      "Polycystic Ovary Syndrome (PCOS)",
      "Cervical Dysplasia & Preventative Health"
    ],
    primaryDoctorId: "dr-thomas-wright",
    stats: {
      successRate: "99.6%",
      proceduresPerYear: "3,800+",
      subspecialties: 5
    }
  },
  {
    id: "general-medicine",
    name: "General Internal Medicine & Preventive Health",
    shortName: "General Medicine",
    category: "Family & Wellness",
    iconName: "Stethoscope",
    headline: "Foundational, diagnostic, and preventative healthcare for lifelong vitality.",
    description: "Comprehensive adult checkups, chronic multisystem disease management, diagnostic consultations, and individualized wellness coaching.",
    detailedOverview: "Our Internal Medicine Department serves as the anchor of patient health at NovaCare. We believe medicine should not simply treat illnesses when they manifest, but proactively protect health through early biomarker detection, balanced nutrition guidance, and continuous clinical oversight.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
    keyTreatments: [
      "Executive Comprehensive Annual Health Audits",
      "Multi-Drug Chronic Condition Management",
      "Cardiometabolic Risk Screening",
      "Adult Immunizations & Travel Health Consultations",
      "Diagnostic Workups for Complex Undifferentiated Symptoms"
    ],
    commonConditions: [
      "Type 2 Diabetes & Insulin Resistance",
      "Essential Hypertension & High Cholesterol",
      "Chronic Kidney Disease & Metabolic Syndrome",
      "Thyroid & Endocrine Imbalances",
      "Unexplained Fatigue & Weight Changes"
    ],
    primaryDoctorId: "dr-david-kim",
    stats: {
      successRate: "99.2%",
      proceduresPerYear: "8,900+",
      subspecialties: 4
    }
  }
];
