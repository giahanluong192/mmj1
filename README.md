# MMJ1 — Next.js Application

A high-performance modern web application built with **Next.js 16**, **React 19**, **TypeScript 5**, and **Vanilla CSS**.

Repository: [https://github.com/v06012005/mmj1](https://github.com/v06012005/mmj1)

---

## ⚡ Key Highlights

- **Next.js 16 App Router**: Server Components, streaming, and modern layout conventions.
- **Turbopack Powered**: Sub-second Hot Module Replacement (HMR) and optimized build times.
- **React 19**: Modern actions, hooks, and React Compiler ready.
- **Strict TypeScript**: Type-safe end-to-end architecture.
- **Rich Aesthetic Design**: Custom dark theme, glassmorphism, responsive UI with zero runtime CSS overhead.
- **ESLint Configured**: Enforcing clean code standards.

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/v06012005/mmj1.git
cd mmj1
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Available Scripts

- `npm run dev`: Starts the local dev server using Turbopack.
- `npm run build`: Compiles and produces an optimized production build.
- `npm run start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint checks.

---

## 📁 Project Structure

```text
├── AGENTS.md           # Instructions for AI coding agents
├── eslint.config.mjs   # ESLint 9 configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies & scripts
├── public/             # Static assets (favicons, svg icons)
├── src/
│   └── app/
│       ├── globals.css         # Design tokens & global stylesheet
│       ├── layout.tsx          # Root layout & SEO metadata
│       ├── page.tsx            # Main landing page
│       ├── page.module.css     # CSS modules for home page
│       └── InteractiveDemo.tsx # Dynamic client component
└── tsconfig.json       # TypeScript configuration
```
