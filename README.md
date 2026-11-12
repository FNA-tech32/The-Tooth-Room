# The Tooth Room - Modern Dental Clinic Website 🦷✨

A modern, high-performance, multilingual dental clinic website built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. Designed for **The Tooth Room**, this platform delivers a patient-first experience with seamless English/Arabic internationalization, appointment scheduling, and multiple direct and alternative contact channels.

---

## 🌟 Key Highlights & Features

- **🌐 Full Bilingual Internationalization (i18n):**
  - Native support for **English (LTR)** and **Arabic (RTL)** with automatic direction and typography adaptation using `next-intl` and Google Font `Cairo`.
  - Instant language toggling directly from the navigation bar.

- **📞 Direct & Alternative Contact Integration:**
  - **Primary Contact Line:** Direct clinic phone line for everyday inquiries and appointments.
  - **Alternative Contact Line:** Secondary and 24/7 emergency contact line for urgent dental care.
  - **Instant WhatsApp Messaging:** One-click WhatsApp chat integration.
  - **Centralized Contact Configuration:** Single source of truth in `src/config/contact.js` for effortless updates.

- **📅 Online Appointment Booking:**
  - Interactive booking form capturing patient name, primary phone, **alternative contact detail**, preferred appointment date, service type, and treatment notes.
  - Automated integration with Google Sheets backend for seamless clinic administration.
  - Real-time user feedback with `react-hot-toast` notifications.

- **🦷 Clinical Services Showcase:**
  - General Dentistry, Cosmetic Dentistry, Orthodontics, and Teeth Whitening with tailored descriptions in both languages.

- **📸 Interactive Clinic Gallery & Testimonials:**
  - Rich photographic gallery showcasing clinic facilities and treatments.
  - Verified patient reviews and ratings for social proof.

- **📱 Responsive & Accessible UI:**
  - Fluid mobile navigation drawer with smooth animations.
  - Clean brand identity with custom vector logos for light and dark themes.

---

## 📞 Clinic Contact & Alternative Details

| Detail | Primary | Alternative / Emergency |
|---|---|---|
| **Phone** | `+1 (555) 382-7666` | `+1 (555) 382-7667` (24/7 Emergency Line) |
| **WhatsApp** | `+1 (555) 382-7667` | Instant One-Click Chat |
| **Email** | `info@thetoothroom.com` | `appointments@thetoothroom.com` |
| **Address** | 450 Medical Heights Plaza, Suite 300, New York, NY 10001 | ٤٥٠ ميديكال هايتس بلازا، جناح ٣٠٠، نيويورك |
| **Working Hours** | Mon - Fri: 8:00 AM - 8:00 PM<br>Saturday: 9:00 AM - 6:00 PM | Sunday: On-Call Emergency Service |

> *To update contact details across the website, edit `src/config/contact.js` and the corresponding strings in `messages/en.json` and `messages/ar.json`.*

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.3](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization (i18n):** [next-intl 4](https://next-intl.dev/)
- **Notifications:** [react-hot-toast](https://react-hot-toast.com/)
- **Fonts:** [Cairo](https://fonts.google.com/specimen/Cairo) via `next/font/google`
- **Linting:** ESLint 9

---

## 📁 Project Structure

```text
The-Tooth-Room/
├── messages/                     # Localization / translation dictionaries
│   ├── ar.json                   # Arabic translations
│   └── en.json                   # English translations
├── public/                       # Static public assets
│   ├── gallery/                  # Clinic gallery imagery
│   ├── logo.svg                  # The Tooth Room vector logo (dark for navbar)
│   ├── logo-white.svg            # The Tooth Room vector logo (white for footer)
│   ├── calender.svg              # Calendar icon
│   ├── whatsapp.svg              # WhatsApp icon
│   └── ...                       # Other UI icons and patient imagery
├── src/
│   ├── app/
│   │   ├── [locale]/             # Localized App Router routes
│   │   │   ├── layout.js         # Root layout (Metadata, Cairo font, i18n provider)
│   │   │   └── page.js           # Main landing page
│   │   ├── favicon.ico           # Website favicon
│   │   ├── globals.css           # Global stylesheet and Tailwind directives
│   │   └── opengraph-image.png   # Social sharing card
│   ├── components/               # Modular React UI components
│   │   ├── About.jsx             # Clinic story, team, and vision
│   │   ├── Contact.jsx           # Contact cards & Appointment booking form
│   │   ├── Footer.jsx            # Footer with contact details & legal links
│   │   ├── Gallery.jsx           # Clinic photo gallery
│   │   ├── Hero.jsx              # Hero section with primary CTA & quick contact
│   │   ├── Navbar.jsx            # Sticky navigation with mobile menu & language switcher
│   │   ├── Services.jsx          # Dental services grid
│   │   └── Testimonials.jsx      # Patient reviews & rating cards
│   ├── config/
│   │   └── contact.js            # Centralized contact & brand configuration
│   ├── i18n/                     # next-intl configuration & routing
│   │   ├── navigation.js         # Localized navigation helpers
│   │   ├── request.js            # Server-side request translation loader
│   │   └── routing.js            # Supported locales configuration (en, ar)
│   └── middleware.js             # Internationalization routing middleware
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.18.0 or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/The-Tooth-Room.git
   cd The-Tooth-Room
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically redirect to your preferred locale (e.g. `/en` or `/ar`).

---

## ⚙️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the Next.js dev server with Turbopack |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to verify code quality |

---

## 🌍 Internationalization (i18n)

The website supports **English (`en`)** and **Arabic (`ar`)** out of the box:
- English is displayed in **LTR** (Left to Right).
- Arabic is displayed in **RTL** (Right to Left) with appropriate typography and flex/grid ordering.
- Translations are managed in `messages/en.json` and `messages/ar.json`.
- Routing is handled automatically by `src/middleware.js` and `src/i18n/routing.js`.

To add a new language string:
1. Add the key and value to `messages/en.json`.
2. Add the corresponding translation to `messages/ar.json`.
3. Access it in components using `const t = useTranslations();` and `t('your_key')`.

---

## 📝 Appointment Form & Google Sheets Integration

The booking form in `src/components/Contact.jsx` submits patient requests directly to a Google Apps Script web app endpoint:
- **Form Fields:**
  - `name`: Full Name
  - `phone`: Primary Phone Number (formatted with zero-width space `\u200B` to preserve leading zeroes)
  - `alt_phone`: Alternative Phone / Emergency Contact
  - `date`: Preferred Date of Appointment
  - `type`: Service Type (General, Cosmetic, Orthodontics, Whitening)
  - `notes`: Additional notes or medical history

To point the form to your clinic's Google Sheet:
1. Set up a Google Sheet and attach an Apps Script web app with a `doPost(e)` trigger.
2. Update `scriptURL` in `src/components/Contact.jsx`.

---

## 📄 License

This project is licensed for **The Tooth Room Dental Clinic**. All rights reserved.
