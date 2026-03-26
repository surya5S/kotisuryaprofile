import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import TicTacToe from "./TicTacToe";

const NAV_LINKS = [
  { label: "Home",       id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects" },
  { label: "Contact",    id: "contact" },
];

const SKILLS = [
  { label: "C# / .NET Core",        color: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700" },
  { label: "ASP.NET Core",          color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700" },
  { label: "Entity Framework",      color: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700" },
  { label: "Node.js",               color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700" },
  { label: "Python",                color: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700" },
  { label: "Java",                  color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700" },
  { label: "React.js",              color: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700" },
  { label: "Angular",               color: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-700" },
  { label: "TypeScript",            color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700" },
  { label: "JavaScript (ES6+)",     color: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700" },
  { label: "HTML5 / CSS3",          color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700" },
  { label: "Bootstrap / SCSS",      color: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700" },
  { label: "RESTful APIs",          color: "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700" },
  { label: "GraphQL",               color: "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700" },
  { label: "OAuth2 / JWT",          color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700" },
  { label: "SQL Server / PostgreSQL",color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700" },
  { label: "CosmosDB / DynamoDB",   color: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700" },
  { label: "MongoDB",               color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700" },
  { label: "Azure",                 color: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700" },
  { label: "AWS",                   color: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700" },
  { label: "Terraform",             color: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700" },
  { label: "ADF / Databricks",      color: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700" },
  { label: "Docker / K8s",          color: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700" },
  { label: "CI/CD",                 color: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700" },
  { label: "Jenkins",               color: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700" },
  { label: "Git / GitHub",          color: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600" },
  { label: "Kafka / RabbitMQ",      color: "bg-lime-100 text-lime-700 border-lime-200 dark:bg-lime-900/30 dark:text-lime-300 dark:border-lime-700" },
  { label: "Azure Service Bus",     color: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700" },
  { label: "Redis Cache",           color: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700" },
  { label: "Microservices",         color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-700" },
  { label: "XUnit / NUnit / Moq",   color: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-600" },
  { label: "SOLID Principles",      color: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700" },
  { label: "Agile / Scrum",         color: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700" },
];

const ABOUT_POINTS = [
  { text: "Architected and delivered cloud-native microservices platforms handling millions of daily transactions, reducing system latency by over 40% through strategic caching, async pipelines, and query optimization", highlight: "Cloud-Native Architecture" },
  { text: "Integrated large language models and AI-powered automation into production workflows, cutting manual processing costs by 60%+ and enabling intelligent decision-making at scale", highlight: "AI / LLM Integration" },
  { text: "Designed and operated end-to-end data engineering pipelines ingesting tens of millions of records daily, compressing business reporting lag from 24 hours to under 5 minutes", highlight: "Data Engineering" },
  { text: "Drove zero-downtime release culture via blue-green deployments, infrastructure-as-code, and fully automated CI/CD pipelines — reducing production failures by 50% and accelerating release cadence", highlight: "DevOps & Reliability" },
  { text: "Championed security-first engineering by enforcing OAuth2/JWT auth, secrets management, and compliance-aligned data handling across regulated enterprise environments", highlight: "Security & Compliance" },
  { text: "Mentored and upskilled cross-functional engineering teams on clean architecture, TDD, and agile practices — improving sprint delivery rates and reducing code-review cycle times by 35%", highlight: "Tech Leadership" },
];

export default function Hero() {
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);

  useEffect(() => {
    ABOUT_POINTS.forEach((_, i) => {
      setTimeout(() => setVisiblePoints((prev) => [...prev, i]), 300 + i * 350);
    });
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col items-center px-6 pt-4 pb-8"
    >
      {/* ── Vertical nav — left side ── */}
      <nav className="absolute left-4 top-14 z-20 flex flex-col gap-2">
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={(e) => { e.stopPropagation(); scrollTo(id); }}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-gray-900 dark:text-white bg-transparent hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/40 dark:border-white/20 hover:border-white/80 dark:hover:border-violet-400/60 backdrop-blur-sm shadow-[0_2px_12px_rgba(139,92,246,0.15)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:scale-105 tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-400 to-violet-500 group-hover:from-violet-400 group-hover:to-teal-400 transition-all shadow-sm shrink-0" />
            {label}
          </button>
        ))}
      </nav>

      {/* ── Theme toggle — top right ── */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* ── Card ── */}
      <div className="relative z-10 mt-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white dark:border-violet-900 rounded-3xl shadow-2xl p-8 max-w-3xl w-full flex gap-8 items-start ring-1 ring-violet-200 dark:ring-violet-800">

        {/* Left — photo + identity */}
        <div className="flex flex-col items-center text-center shrink-0 w-36">
          <div className="p-0.5 rounded-2xl bg-gradient-to-br from-rose-400 via-violet-500 to-teal-400 shadow-lg mb-3">
            <img
              src="/photo.png"
              alt="Surya Prakash"
              className="w-28 h-28 rounded-2xl border-2 border-white dark:border-gray-900 object-cover"
            />
          </div>
          <h1 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
            Koti Surya Prakash Kanneti
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-teal-500 text-xs font-semibold uppercase tracking-widest mt-1">
            Full Stack Developer
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
            📍 Arizona, USA
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1SbbTennXmXoG3b4I-40riLfLOIA2HGjS"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 px-4 py-1.5 bg-gradient-to-r from-rose-500 via-violet-600 to-teal-500 hover:brightness-110 text-white text-xs font-semibold rounded-full shadow transition-all hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
          <div className="mt-4 w-full">
            <TicTacToe />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch bg-gradient-to-b from-transparent via-violet-300 dark:via-violet-700 to-transparent" />

        {/* Right — about + skills */}
        <div className="flex-1 space-y-4 min-w-0">
          {/* About */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-800 dark:text-white mb-2">
              About
            </h2>
            <ul className="space-y-1.5">
              {ABOUT_POINTS.map(({ text, highlight }, i) => (
                <li
                  key={highlight}
                  className={`flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 transition-all duration-500 ${
                    visiblePoints.includes(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  <span className="text-fuchsia-500 mt-0.5 shrink-0">▸</span>
                  <span>
                    <span className="font-semibold text-violet-600 dark:text-violet-400">{highlight} — </span>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-gray-800 dark:text-white mb-2">
              Core Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.map(({ label, color }) => (
                <span
                  key={label}
                  className={`text-xs px-2.5 py-0.5 border rounded-full font-medium ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
