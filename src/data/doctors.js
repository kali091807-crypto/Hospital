// Fictional demonstration data for NovaCare Medical Center
export const doctors = [
  {
    id: "dr-elena-vance",
    name: "Dr. Elena Vance, MD, FACC",
    shortName: "Dr. Elena Vance",
    specialtyId: "cardiology",
    specialty: "Cardiology",
    department: "Heart & Vascular Institute",
    role: "Chief of Interventional Cardiology",
    experienceYears: 18,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Johns Hopkins), Fellowship in Interventional Cardiology (Cleveland Clinic), FACC",
    bio: "Dr. Vance is a renowned interventional cardiologist specializing in complex coronary interventions, structural heart diseases, and preventative cardiovascular health. She leads NovaCare's multidisciplinary heart team with an emphasis on minimally invasive therapies and patient longevity.",
    education: [
      "MD with Highest Honors — Johns Hopkins School of Medicine",
      "Internal Medicine Residency — Massachusetts General Hospital",
      "Cardiovascular Fellowship — Cleveland Clinic Heart Center"
    ],
    certifications: [
      "Board Certified in Cardiovascular Disease (Demo)",
      "Certified in Adult Comprehensive Echocardiography (Demo)",
      "Fellow of the American College of Cardiology (FACC Demo)"
    ],
    procedures: [
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Coronary Angioplasty & Stenting",
      "Cardiac Computed Tomography Angiography",
      "Preventive Lipidology & Risk Stratification"
    ],
    availableDays: ["Monday", "Wednesday", "Thursday"],
    consultationSlots: ["09:00 AM", "10:30 AM", "01:30 PM", "03:15 PM"],
    officeLocation: "Pavilion A, 4th Floor, Suite 410",
    isFeatured: true
  },
  {
    id: "dr-marcus-sterling",
    name: "Dr. Marcus Sterling, MD, PhD, FAANS",
    shortName: "Dr. Marcus Sterling",
    specialtyId: "neurology",
    specialty: "Neurology & Neurosurgery",
    department: "Brain & Spine Institute",
    role: "Chair of Neurosurgical Sciences",
    experienceYears: 21,
    rating: 4.95,
    reviewsCount: 188,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD, PhD in Neurobiology (Harvard Medical School), FAANS",
    bio: "Dr. Sterling brings over two decades of clinical and neurosurgical precision to NovaCare. He specializes in cranial base surgery, complex spinal reconstruction, and robotic-assisted neurosurgery, pioneering compassionate and restorative patient recovery protocols.",
    education: [
      "MD & PhD in Neurobiology — Harvard Medical School",
      "Neurosurgical Residency — Brigham and Women's Hospital",
      "Complex Spine Fellowship — UCSF Medical Center"
    ],
    certifications: [
      "Board Certified in Neurological Surgery (Demo)",
      "Fellow of the American Association of Neurological Surgeons (FAANS Demo)",
      "Certified in Robotic Guided Spine Navigation (Demo)"
    ],
    procedures: [
      "Robotic-Guided Spinal Fusion",
      "Minimally Invasive Craniotomy",
      "Deep Brain Stimulation Evaluation",
      "Cervical Disc Arthroplasty"
    ],
    availableDays: ["Tuesday", "Thursday", "Friday"],
    consultationSlots: ["08:30 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    officeLocation: "Pavilion B, 5th Floor, Suite 502",
    isFeatured: true
  },
  {
    id: "dr-sophia-chen",
    name: "Dr. Sophia Chen, MD, FAAP",
    shortName: "Dr. Sophia Chen",
    specialtyId: "pediatrics",
    specialty: "Pediatrics & Adolescent Care",
    department: "Children's Health Pavilion",
    role: "Director of Pediatric Medicine",
    experienceYears: 14,
    rating: 4.92,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1594824813637-bf47d1b3e10f?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Stanford University School of Medicine), FAAP",
    bio: "Dr. Chen is recognized for her warm, child-centric philosophy and diagnostic acumen. Dedicated to the developmental and acute health of infants, children, and young adolescents, she partners closely with families to ensure holistic emotional and physical wellness.",
    education: [
      "MD — Stanford University School of Medicine",
      "Pediatric Residency — Lucile Packard Children's Hospital",
      "Chief Resident in Pediatrics — Stanford Health"
    ],
    certifications: [
      "Board Certified by the American Board of Pediatrics (Demo)",
      "Pediatric Advanced Life Support (PALS) Instructor (Demo)",
      "Fellow of the American Academy of Pediatrics (FAAP Demo)"
    ],
    procedures: [
      "Comprehensive Pediatric Well-Child Examinations",
      "Adolescent Growth & Endocrine Assessments",
      "Childhood Asthma & Allergy Management",
      "Developmental Milestones Monitoring"
    ],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    consultationSlots: ["09:15 AM", "11:30 AM", "02:30 PM", "04:15 PM"],
    officeLocation: "Family Pavilion, 2nd Floor, Suite 214",
    isFeatured: true
  },
  {
    id: "dr-julian-ramirez",
    name: "Dr. Julian Ramirez, MD, FAAOS",
    shortName: "Dr. Julian Ramirez",
    specialtyId: "orthopedics",
    specialty: "Orthopedics & Joint Reconstruction",
    department: "Bone & Joint Center",
    role: "Director of Joint Arthroplasty",
    experienceYears: 16,
    rating: 4.88,
    reviewsCount: 129,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Columbia University Vagelos College of Physicians and Surgeons), FAAOS",
    bio: "Specializing in athletic sports injuries and computer-navigated total joint reconstruction, Dr. Ramirez prioritizes rapid-recovery pathways that enable patients to regain active mobility with minimal postoperative discomfort.",
    education: [
      "MD — Columbia University Vagelos College of Physicians and Surgeons",
      "Orthopedic Surgery Residency — Hospital for Special Surgery (HSS)",
      "Adult Reconstruction Fellowship — Mayo Clinic"
    ],
    certifications: [
      "Board Certified in Orthopedic Surgery (Demo)",
      "Fellow of the American Academy of Orthopaedic Surgeons (FAAOS Demo)",
      "Certified Mako Robotic-Arm Assisted Surgery Specialist (Demo)"
    ],
    procedures: [
      "Robotic Total Hip & Knee Replacement",
      "Arthroscopic Rotator Cuff Repair",
      "ACL Reconstruction & Cartilage Preservation",
      "Complex Revision Joint Arthroplasty"
    ],
    availableDays: ["Monday", "Wednesday", "Friday"],
    consultationSlots: ["08:00 AM", "10:00 AM", "01:00 PM", "03:30 PM"],
    officeLocation: "Pavilion A, 3rd Floor, Suite 320",
    isFeatured: true
  },
  {
    id: "dr-aaliyah-patel",
    name: "Dr. Aaliyah Patel, MD, FACP",
    shortName: "Dr. Aaliyah Patel",
    specialtyId: "oncology",
    specialty: "Medical Oncology & Hematology",
    department: "Cancer Care Pavilion",
    role: "Head of Precision Oncology",
    experienceYears: 15,
    rating: 4.96,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Yale School of Medicine), Fellowship in Hematology/Oncology (Memorial Sloan Kettering)",
    bio: "Dr. Patel focuses on genomic tumor profiling, targeted immunotherapies, and personalized cancer regimens. Her patient-first approach pairs cutting-edge therapeutics with compassionate supportive oncology.",
    education: [
      "MD — Yale School of Medicine",
      "Internal Medicine Residency — New York-Presbyterian Hospital",
      "Medical Oncology Fellowship — Memorial Sloan Kettering Cancer Center"
    ],
    certifications: [
      "Board Certified in Medical Oncology & Hematology (Demo)",
      "Fellow of the American College of Physicians (FACP Demo)",
      "Certified Clinical Cancer Geneticist (Demo)"
    ],
    procedures: [
      "Targeted Immunotherapy Infusion Protocols",
      "Comprehensive Next-Gen Genomic Profiling",
      "Hematologic Disease Management",
      "Integrative Supportive Cancer Care"
    ],
    availableDays: ["Tuesday", "Thursday", "Friday"],
    consultationSlots: ["09:00 AM", "11:00 AM", "02:00 PM", "03:45 PM"],
    officeLocation: "Cancer Care Wing, 3rd Floor, Suite 305",
    isFeatured: false
  },
  {
    id: "dr-david-kim",
    name: "Dr. David Kim, MD, FACEP",
    shortName: "Dr. David Kim",
    specialtyId: "general-medicine",
    specialty: "General Internal Medicine & Acute Care",
    department: "Internal Medicine Center",
    role: "Senior Consultant in Internal Medicine",
    experienceYears: 19,
    rating: 4.87,
    reviewsCount: 174,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Northwestern University Feinberg School of Medicine), FACP",
    bio: "Dr. Kim oversees adult primary and preventive medicine, diagnostic dilemmas, and chronic disease management. He emphasizes holistic lifestyle optimization, diagnostic precision, and continuity of care across all life stages.",
    education: [
      "MD — Northwestern University Feinberg School of Medicine",
      "Internal Medicine Residency — Northwestern Memorial Hospital",
      "Primary Care Clinical Research Fellowship — Chicago Health"
    ],
    certifications: [
      "Board Certified in Internal Medicine (Demo)",
      "Certified Hypertension Specialist (Demo)",
      "Member of the American College of Physicians (Demo)"
    ],
    procedures: [
      "Comprehensive Health & Executive Physicals",
      "Cardiometabolic Syndrome Management",
      "Chronic Disease Multi-System Optimization",
      "Preventive Screening & Longevity Counseling"
    ],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    consultationSlots: ["08:30 AM", "10:15 AM", "01:15 PM", "03:45 PM"],
    officeLocation: "Pavilion A, 2nd Floor, Suite 201",
    isFeatured: false
  },
  {
    id: "dr-rachel-brooks",
    name: "Dr. Rachel Brooks, MD, FAAD",
    shortName: "Dr. Rachel Brooks",
    specialtyId: "dermatology",
    specialty: "Dermatology & Cutaneous Surgery",
    department: "Dermatology & Aesthetic Institute",
    role: "Lead Dermatologist",
    experienceYears: 12,
    rating: 4.91,
    reviewsCount: 138,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (University of Pennsylvania Perelman School of Medicine), FAAD",
    bio: "Dr. Brooks combines dermatologic medicine with procedural expertise in Mohs micrographic surgery and skin health preservation. She treats dermatologic conditions spanning from complex autoimmune skin disorders to early melanoma detection.",
    education: [
      "MD — University of Pennsylvania Perelman School of Medicine",
      "Dermatology Residency — Hospital of the University of Pennsylvania",
      "Micrographic Surgery Fellowship — NYU Langone"
    ],
    certifications: [
      "Board Certified in Dermatology (Demo)",
      "Fellow of the American Academy of Dermatology (FAAD Demo)",
      "American College of Mohs Surgery Associate (Demo)"
    ],
    procedures: [
      "High-Resolution Digital Dermoscopy",
      "Mohs Micrographic Surgery for Skin Cancer",
      "Phototherapy for Psoriasis & Eczema",
      "Advanced Cutaneous Laser Therapy"
    ],
    availableDays: ["Tuesday", "Wednesday", "Thursday"],
    consultationSlots: ["09:30 AM", "11:15 AM", "02:15 PM", "04:30 PM"],
    officeLocation: "Pavilion B, 3rd Floor, Suite 312",
    isFeatured: false
  },
  {
    id: "dr-thomas-wright",
    name: "Dr. Thomas Wright, MD, FACOG",
    shortName: "Dr. Thomas Wright",
    specialtyId: "obstetrics-gynecology",
    specialty: "Obstetrics & Gynecology",
    department: "Women's Health Pavilion",
    role: "Chief of Maternal-Fetal Health",
    experienceYears: 17,
    rating: 4.94,
    reviewsCount: 153,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    qualifications: "MD (Georgetown University School of Medicine), FACOG",
    bio: "Dr. Wright is committed to high-risk obstetric care, minimally invasive gynecologic surgery, and women's health throughout all stages of life. He works closely with neonatal teams to ensure supportive, family-friendly birthing experiences.",
    education: [
      "MD — Georgetown University School of Medicine",
      "Obstetrics & Gynecology Residency — MedStar Georgetown Hospital",
      "Maternal-Fetal Medicine Fellowship — Johns Hopkins Hospital"
    ],
    certifications: [
      "Board Certified in Obstetrics and Gynecology (Demo)",
      "Fellow of the American College of Obstetricians and Gynecologists (FACOG Demo)",
      "Certified in Advanced Laparoscopic Pelvic Surgery (Demo)"
    ],
    procedures: [
      "Comprehensive Prenatal & High-Risk Obstetric Care",
      "3D/4D Fetal Ultrasound & Genetic Screening",
      "Minimally Invasive Laparoscopic Myomectomy",
      "Menopause Management & Hormonal Optimization"
    ],
    availableDays: ["Monday", "Wednesday", "Thursday", "Friday"],
    consultationSlots: ["08:45 AM", "10:45 AM", "01:30 PM", "03:30 PM"],
    officeLocation: "Family Pavilion, 4th Floor, Suite 408",
    isFeatured: false
  }
];
