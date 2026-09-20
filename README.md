# Smash Masters – Gym, Turf & Badminton Academy

Premium sports facility website built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

Designed for direct deployment on **Vercel** or Netlify with root directory set to `/`.

---

## 📁 Project Structure

```
sports-club/
├── package.json          <- Root package configuration
├── index.html            <- HTML entry point
├── vite.config.js        <- Vite build settings
├── tailwind.config.js    <- Tailwind CSS configuration
├── postcss.config.js     <- PostCSS configuration
├── vercel.json           <- Vercel SPA routing fallback
├── README.md
├── .gitignore
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/           <- Categorized image assets (gym, turf, cricket, football, badminton)
│
└── src/
    ├── main.jsx          <- React entry point
    ├── App.jsx           <- App router & layout
    ├── index.css         <- Global styles & Tailwind directives
    │
    ├── components/       <- Reusable UI, card, form, layout & section components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── FacilityCard.jsx
    │   ├── BookingForm.jsx
    │   └── WhatsAppButton.jsx
    │
    ├── pages/            <- Page views
    │   ├── Home.jsx
    │   ├── Gym.jsx
    │   ├── Turf.jsx
    │   ├── Badminton.jsx
    │   ├── About.jsx
    │   ├── Booking.jsx
    │   └── Contact.jsx
    │
    ├── data/             <- Data sources (facilities, gym, turf, badminton, home)
    │   └── facilities.js
    │
    └── config/
        └── site.js       <- Phone (7094556516), Email (rkvishal13@gmail.com), Address & NAV_LINKS
```

---

## 🚀 Local Development

Requires Node 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server (http://localhost:5173)
npm run dev

# 3. Build for production (output in /dist)
npm run build
```

---

## ⚡ Vercel Deployment Settings

Deploy directly from your GitHub repository (`sports-club`) to Vercel with the following settings:

| Setting | Value |
| --- | --- |
| **Framework Preset** | `Vite` |
| **Root Directory** | `/` (leave blank / root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

---

## 🛠️ Contact & Business Information

- **Phone / WhatsApp**: `7094556516` ([WhatsApp Link](https://wa.me/917094556516))
- **Email**: `rkvishal13@gmail.com`
- **Address**: `Smash Masters Badminton Academy, 123 Main St, Anytown, India`
