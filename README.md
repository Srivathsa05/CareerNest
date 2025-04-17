# CareerNest – Skill-Based Job Matching Platform 🧠💼

CareerNest is a modern web application designed to bridge the gap between job seekers and recruiters through skill-based assessments and intelligent job matching. Built with a focus on performance, real-time data handling, and user-centric design.

---

## 🚀 Features

- 🔐 **Role-Based Authentication** using Supabase (Recruiter & Candidate roles)
- 📝 **Skill Assessment Engine** with dynamic questions and real-time scoring
- 🎯 **Job Matching Algorithm** based on assessment performance and skill tags
- 🧑‍💼 **Recruiter Dashboard** for job posting, filtering, and candidate scoring
- 👨‍🎓 **Candidate Dashboard** to track assessments, job matches, and progress
- ✨ **Animated UI** with Framer Motion and responsive design using Tailwind CSS
- 📈 **Real-Time Data Syncing** with Supabase and optimized performance via Vite

---

## 🛠️ Tech Stack

| Category         | Tech Used                          |
|------------------|------------------------------------|
| Frontend         | React 18.3, TypeScript 5.5         |
| Styling          | Tailwind CSS 3.4, Lucide React     |
| Animations       | Framer Motion 11.0, React Confetti |
| Routing          | React Router 6.22                  |
| State Management | React Hooks                        |
| Backend          | Supabase (DB, Auth, Realtime)      |
---

---

## 📂 Folder Structure (Simplified)
/src /components // Reusable UI components /pages // Role-specific pages (Recruiter, Candidate) /hooks // Custom React hooks /services // Supabase interaction logic /utils // Utility functions (scoring, filtering, etc.) /assets // Static files


---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/careernest.git

# Navigate into the project folder
cd careernest

# Install dependencies
npm install

# Start the dev server
npm run dev
```

 🔑 You’ll need to create a .env file with your Supabase project credentials.

```📄 Environment Variables Example
env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
🧠 Future Enhancements
✅ Resume upload and parsing

✅ Advanced analytics for recruiters

⏳ AI-based job recommendation engine

⏳ Gamified learning module



