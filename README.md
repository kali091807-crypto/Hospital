# NOVACARE MEDICAL CENTER
> **"Advanced Care. A Healthier Tomorrow."**

A world-class, frontend-only healthcare website designed with agency-grade editorial UI/UX, responsive layouts, subtle micro-animations, and interactive clinical workflows.

---

## 🏥 Brand Identity & Design System

- **Brand Personality**: Trustworthy, compassionate, innovative, patient-centered, modern, and sophisticated.
- **Custom Logo Emblem**: Contemporary medical cross intertwining clinical science with holistic wellness care.
- **Color Palette**:
  - **Deep Navy** (`#10243A`): Authority, clinical governance, and prestige
  - **Medical Teal** (`#087F8C`): Healthcare identity, innovation, and vitality
  - **Soft Mint** (`#DDF4EC`): Calm, restorative atmosphere
  - **Warm White** (`#FCFDFB`): Soft, high-readability background
  - **Light Background** (`#F3F7F8`): Subtle contrast surfaces
  - **Slate Text** (`#536273`): Clear, fatigue-free editorial typography
  - **Accent Gold** (`#D7B56D`): Excellence and board recognition
- **Typography**:
  - Headings: **Manrope** (Google Fonts)
  - Body & UI: **Inter** (Google Fonts)

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom tokens, bespoke shadows, and CSS utilities
- **Motion & Transitions**: [Framer Motion](https://www.framer.com/motion/) for hero choreography, drawer animations, and accordions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (multi-page client-side routing with automatic `ScrollToTop`)
- **Celebrations**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) for simulated booking confirmation

---

## 🌐 Website Pages & Feature Matrix

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home Page** | Hero with asymmetric doctor photography & floating badges, Hospital Highlights, 8 Medical Specialties, Meet Our Doctors, Editorial storytelling ("Healthcare With Humanity at Its Heart"), Centers of Excellence, 4-step Patient Journey timeline, Facilities showcase, Patient Stories testimonial carousel, Navy/Teal full-width Appointment CTA, interactive FAQs accordion, and comprehensive Footer. |
| `/about` | **About Us** | Hospital founding story, clinical governance, mission/vision/values, patient-centered principles, campus architecture overview. |
| `/specialties` | **Specialties Directory** | Search by keyword/condition, category filter pills, responsive specialty cards, in-depth clinical spotlight, related specialist physicians, FAQs. |
| `/doctors` | **Doctor Directory** | Search by physician name or procedure, filter by clinical department, sort by experience or rating, doctor cards with credentials and booking triggers. |
| `/doctors/:id` | **Doctor Profile** | Dedicated individual doctor route with portrait, demonstration qualifications, fellowships, certifications, consultation slots, and direct appointment trigger. |
| `/facilities` | **Facilities & Technology** | Diagnostic Imaging (3.0T MRI, Spectral CT), Robotic Hybrid OTs, Automated Molecular Labs, Inpatient Private Suites, 24/7 Trauma Bay, Smart Pharmacy. |
| `/patient-guide` | **Patient Guide** | Pre-visit checklist, visitor hours, inpatient accommodation policies, billing and financial transparency overview, downloadable simulated PDF guides with visual feedback. |
| `/appointment` | **Appointment Booking** | Multi-step interactive booking form with field validation (name, email, phone, specialty, doctor, date prevention of past dates, dynamic time slots, optional reason), review step, and confetti confirmation ticket with booking code. |
| `/contact` | **Contact & Directions** | Location cards, campus directions & parking guidance, interactive campus map placeholder, contact feedback form with client-side validation. |
| `*` | **404 Not Found** | Clean error page with home navigation. |

---

## 🚨 Emergency Safety Guidance

Easily discoverable across all pages via the top announcement bar, footer advisory, and navigation drawer:
- Explicit instructions reminding users that life-threatening medical emergencies require immediate contact with regional emergency services (**911** / **112**).
- Clear clinical triage distinction between emergency trauma symptoms and routine outpatient consultations.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended, verified on Node v24)
- npm (v9.0.0 or higher)

### 1. Installation
Clone or navigate to the project directory:
```bash
cd d:/hospital
npm install
```

### 2. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the port indicated in your console, e.g. `http://localhost:5174/`).

### 3. Production Build
To create an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 🔒 Demonstration Disclaimer

NovaCare Medical Center is a fictional healthcare brand created exclusively for frontend web design and development demonstration purposes.
- All physician profiles, credentials, facilities, and testimonials are mock illustrative demo data.
- The appointment booking and contact forms execute entirely in the browser using temporary UI state.
- No real patient data is transmitted to an external server or stored in a database.
