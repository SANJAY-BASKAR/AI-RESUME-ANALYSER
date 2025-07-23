# 🚀 Resumind – AI-Powered Resume Analyzer

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.3-646CFF?logo=vite)](https://vitejs.dev/)

> **Resumind** is a modern, full-stack web application that leverages AI to analyze your resume, provide ATS (Applicant Tracking System) scores, and deliver actionable feedback to help you land your dream job.

---

## ✨ Features

- **🔒 Secure Authentication** – Sign in to manage your resume submissions.
- **📤 Effortless Resume Upload** – Upload your PDF resume and job description in seconds.
- **🧠 AI-Powered Feedback** – Get instant, detailed feedback on your resume’s content, structure, tone, and skills.
- **📊 ATS Score** – See how your resume performs against automated screening systems.
- **🎯 Track Submissions** – Review all your past uploads and feedback in a beautiful dashboard.
- **🌈 Gorgeous UI** – Responsive, modern design with TailwindCSS and custom gradients.
- **🖼️ PDF to Image Conversion** – Visualize your resume as an image preview.
- **🗑️ Data Wipe** – Easily clear all your uploaded data.

---

## 🖥️ Demo

![Resumind Demo](public/images/resume-scan.gif)

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** TailwindCSS 4, tw-animate-css
- **State Management:** Zustand
- **File Handling & AI:** [Puter.js](https://puter.com/) (for file storage, AI feedback, and key-value storage)
- **PDF Processing:** pdfjs-dist
- **Routing:** React Router 7

---

## 🚦 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/ai-analyser.git
cd ai-analyser
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 🐳 Docker Deployment

Build and run the app in a Docker container:

```bash
docker build -t resumind .
docker run -p 3000:3000 resumind
```

---

## 📚 Usage Guide

### 1. **Sign In**
- Click **Log In** to authenticate and access your dashboard.

### 2. **Upload Resume**
- Go to **Upload Resume**.
- Fill in the **Company Name**, **Job Title**, and **Job Description**.
- Upload your PDF resume.

### 3. **Get Feedback**
- The app analyzes your resume and provides:
  - **ATS Score**
  - **Detailed feedback** on tone, content, structure, and skills
  - **Suggestions for improvement**

### 4. **Track & Review**
- All your submissions are saved and can be reviewed anytime from the homepage.

---

## 🖌️ UI Highlights

- **Gradient backgrounds** and **animated transitions** for a delightful user experience.
- **Responsive design** for desktop and mobile.
- **Score badges** and **visual gauges** to make feedback actionable and easy to understand.

---

## 🧩 Folder Structure

```
ai-analyser/
  ├── app/
  │   ├── components/      # Reusable UI components
  │   ├── lib/             # Utility libraries (AI, PDF, storage)
  │   ├── routes/          # App routes (home, upload, resume, auth)
  │   ├── app.css          # Global and component styles
  │   └── root.tsx         # App root and layout
  ├── public/              # Static assets (images, icons, pdf worker)
  ├── constants/           # Sample data and constants
  ├── types/               # TypeScript type definitions
  ├── package.json         # Project metadata and scripts
  └── README.md            # This file
```

---

## 📝 Contributing

Contributions are welcome! Please open issues and pull requests for new features, bug fixes, or suggestions.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Puter.js](https://puter.com/)
- [pdfjs-dist](https://github.com/mozilla/pdf.js)
- [Vite](https://vitejs.dev/)

---

> Built with ❤️ by [Your Name] and the Resumind team.
