# Scidyllics — Developer Portfolio 🚀

Welcome to **Scidyllics**, a futuristic 3D-powered developer portfolio designed to showcase creative coding, AI, and full-stack development work. Built with **Next.js + TypeScript + Three.js + Framer Motion**, it blends interactive visuals with clean design.

---

## 🔮 Features

- 🎨 Hero section with animated **Torus Knot** using Three.js
- 📆 Modular components with clean styling
- ⚡ Scroll-triggered animations (Framer Motion)
- 💌 Contact form with honeypot spam protection
- 📩 Email handling via NodeMailer + Gmail SMTP
- 💡 Featured Projects section
- ✨ Fully responsive

---

## 📁 Folder Structure (Relevant Parts)

```
├── public/
│   └── ...static assets
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   └── FeaturedProject.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.ts
│   │   └── index.tsx
│   └── styles/
│       ├── globals.css
│       ├── Hero.module.css
│       ├── Contact.module.css
│       ├── FeaturedProject.module.css
│       ├── Header.module.css
│       └── Footer.module.css
└── .env.local
```

---

## 🔧 Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/your-username/scidyllics-portfolio.git
cd scidyllics-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
NEXT_PUBLIC_SHEET_BEST_URL=https://sheet.best/api/sheets/your-sheet-id
```

> ✅ **Note:** Use a Gmail app password (not your actual Gmail password).

### 4. Run the project

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### 5. Featured Projects (Google Sheets CMS)

The featured project is powered by a Google Sheet and [Sheet.best](https://sheet.best):

#### ✅ How to set it up:

1. **Create a Google Sheet** with these columns:

   ```
   Title | Description | LiveURL | GitHubURL | ImageURL
   ```

2. **Go to [sheet.best](https://sheet.best)** and connect the sheet

3. Copy your Sheet.best API URL and add it to `.env.local` as:

   ```env
   NEXT_PUBLIC_SHEET_BEST_URL=https://sheet.best/api/sheets/your-sheet-id
   ```

4. Restart the dev server:

   ```bash
   npm run dev
   ```

Your portfolio now pulls featured project data from the first row of your Google Sheet. Just update the sheet to update your site — no code needed!

---

## 🌐 Live Demo

Deploy your portfolio on [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

## 📢 Contact

If you'd like to connect or collaborate:

- Email: `your@email.com`
- [LinkedIn](https://www.linkedin.com/in/your-profile)

---

## 🧠 Inspiration

Inspired by futuristic interfaces and the intersection of AI, design, and engineering.

---

## 📜 License

MIT — feel free to fork and customize.

---

_Designed & developed by Mary Ann Dizon a.k.a. [Scidyllics](https://github.com/mctrinity)_ ✨
