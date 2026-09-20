# Smash Masters – Gym, Turf & Badminton Academy

Premium sports facility website. React + Tailwind frontend and a Node/Express API, fully separated.

```
sports-website/
├── frontend/                 React 18 + Vite + Tailwind + React Router
│   ├── public/images/        <- put your photos here (see images/README.md)
│   └── src/
│       ├── components/       layout/ ui/ cards/ forms/ sections/
│       ├── pages/            Home Gym Turf Badminton About Gallery Contact NotFound
│       ├── data/             all page content (programs, facilities, gallery list)
│       ├── config/site.js    phone, email, address, nav links
│       ├── lib/              api client, validation, WhatsApp + enquiry link helpers
│       ├── hooks/  assets/  App.jsx  main.jsx  index.css
└── backend/                  Node + Express REST API
    ├── server.js  config/  routes/  controllers/  models/
    ├── validators/  middleware/  services/  utils/  data/  storage/
    └── .env.example
```

## Run it

Two terminals. Requires Node 18+.

```bash
# Terminal 1 – backend (http://localhost:5000)
cd backend
npm install
node server.js          # or: npm run dev  (auto-restart)

# Terminal 2 – frontend (http://localhost:5173)
cd frontend
npm install
npm run dev
```

In development Vite proxies `/api/*` to the backend, so no CORS or URL setup is needed.
The frontend also runs on its own; only the two forms need the backend.

Production build: `cd frontend && npm run build` (output in `frontend/dist`, preview with `npm run preview`).

## Environment variables

`backend/.env` (copy from `.env.example`; a dev-safe `.env` is included, no secrets):

| Variable | Purpose |
| --- | --- |
| PORT | API port (default 5000) |
| CLIENT_ORIGIN | Allowed frontend origin(s), comma-separated (CORS) |
| SMTP_HOST / PORT / SECURE / USER / PASS | Optional. Enables email notification of new enquiries |
| MAIL_FROM / MAIL_TO | Sender and recipient (MAIL_TO defaults to rkvishal13@gmail.com) |

`frontend/.env` (optional): `VITE_API_URL`, `VITE_SITE_URL`, `VITE_MAPS_EMBED_URL` (Google Maps embed URL; empty shows the placeholder).

## API

| Method | Route | Notes |
| --- | --- | --- |
| POST | /api/enquiry | name, phone, email, sport (Gym / Cricket Turf / Football Turf / Badminton), preferredDate?, preferredTime?, message? |
| POST | /api/contact | name, email, phone?, message |
| GET | /api/programs | optional `?sport=gym\|badminton` |
| GET | /api/facilities | optional `?sport=gym\|turf\|badminton` |
| GET | /api/health | status check |

Validation errors return `422 { success:false, message, errors:[{field,message}] }`, which the forms show next to each field.
Submissions are saved to `backend/storage/*.json` and emailed if SMTP is configured. Includes helmet, CORS whitelist, rate limiting and a honeypot field.

## Images

See `frontend/public/images/README.md` for exact filenames. Extensions are auto-detected. Missing photos show a placeholder.

## Deployment

**Backend (Render / Railway)**: root directory `backend`, build `npm install`, start `node server.js`. Set `CLIENT_ORIGIN` to your frontend URL and, ideally, the SMTP variables.
Note: free hosts wipe local files on restart, so the JSON store is not durable there. Use SMTP email, or replace `models/Enquiry.js` and `models/Contact.js` with MongoDB/PostgreSQL (controllers only call `Model.create`).

**Frontend (Vercel / Netlify)**: root directory `frontend`, build `npm run build`, output `dist`. Set `VITE_API_URL=https://your-backend.example.com/api` and `VITE_SITE_URL`. `vercel.json` and `public/_redirects` already handle SPA routing.

## Content notes

- Only details you supplied are used. No reviews, names, awards or statistics were invented.
- John Doe / Jane Smith and "123 Main St, Anytown" are the placeholder details from your brief. Replace them in `src/data/badminton.js` and `src/config/site.js`.
- Gym program durations are "Flexible" because none were provided. Turf timing and pricing say "Contact us".
- WhatsApp uses `917094556516` (India country code 91 assumed). Change it in `src/config/site.js`.
- SEO tags are set per page in the browser. For crawlers that don't run JavaScript, add prerendering later.
