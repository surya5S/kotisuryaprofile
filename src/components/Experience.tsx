const experiences = [
  {
    company: "Innova Solutions",
    role: "Full Stack Developer",
    client: "McKesson",
    sector: "Healthcare",
    stack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Ruby on Rails",
      "PostgreSQL",
      "Kubernetes",
      "Azure",
    ],
    accent: "from-emerald-400 to-teal-500",
    logo: "https://logos.hunter.io/innovasolutions.com",
    logoBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    initials: "IS",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
    location: "Arizona, USA",
    current: true,
    points: [
      "Built end-to-end patient and provider enrollment workflows in React + TypeScript, reducing onboarding drop-off by 35% and improving form completion rates by 28%.",
      "Designed GraphQL APIs to unify fragmented healthcare data sources, eliminating over-fetching and cutting average API response time by 42%.",
      "Developed Ruby on Rails backend services for real-time eligibility verification, reducing provider wait time during enrollment by 60%.",
      "Optimized PostgreSQL schemas and query plans for large-scale patient datasets, improving data retrieval performance by 50% under peak load.",
      "Deployed enrollment services on Kubernetes (AKS/Azure), achieving 99.9% uptime and enabling zero-downtime releases for a critical healthcare platform.",
    ],
  },
  {
    company: "BNS International Inc",
    role: ".NET Full Stack Developer",
    client: null,
    sector: "Banking",
    stack: [".NET", "Azure"],
    accent: "from-red-500 to-yellow-500",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE5H975javClw/company-logo_200_200/company-logo_200_200/0/1630629186937?e=2147483647&v=beta&t=mo7Y5irqTi18SujbgFfLQn_OkrPvbgjnSAxVAubDdwY",
    logoBg: "bg-gradient-to-br from-red-600 to-yellow-500",
    initials: "BNS",
    tag: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700",
    location: "Arizona, USA",
    current: false,
    points: [
      "Delivered .NET microservices for core banking transaction flows, improving throughput by 40% and reducing end-to-end processing latency by 30%.",
      "Integrated Azure Service Bus for async event-driven workflows, increasing system resilience and reducing inter-service coupling by 55%.",
      "Built secure REST APIs with OAuth2/JWT for financial data access, cutting unauthorized access incidents by 100% across compliance audits.",
      "Automated CI/CD pipelines on Azure DevOps, reducing deployment time by 65% and enabling 3x more frequent releases.",
      "Optimized SQL Server queries and indexing strategies, reducing financial report generation time by 45% for business stakeholders.",
    ],
  },
  {
    company: "Northern Arizona University",
    role: "Graduate Teaching Assistant & Application Developer",
    client: "Internal Development Portal",
    sector: "Education",
    stack: [],
    accent: "from-blue-500 to-yellow-400",
    logo: "https://logos.hunter.io/nau.edu",
    logoBg: "bg-gradient-to-br from-blue-700 to-blue-500",
    initials: "NAU",
    tag: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
    location: "Arizona, USA",
    current: false,
    points: [
      "Developed and maintained an internal development portal, reducing administrative overhead by 40% and improving tool accessibility for 500+ faculty and students.",
      "Implemented role-based access control and authentication, securing sensitive academic data and reducing unauthorized access attempts by 90%.",
      "Collaborated with faculty to deliver iterative feature releases, increasing portal adoption across departments by 60% within two semesters.",
      "Assisted in teaching graduate-level software engineering, contributing to a 25% improvement in student assignment submission rates.",
      "Resolved critical performance bottlenecks in the portal, reducing average page load time by 50% and improving overall user satisfaction.",
    ],
  },
  {
    company: "Innova Solutions",
    role: "Associate Software Engineer",
    client: "Columbia",
    sector: "Retail",
    stack: [".NET", "Azure", "ADF", "SQL Server", "Logic Apps"],
    accent: "from-violet-400 to-purple-500",
    logo: "https://logos.hunter.io/innovasolutions.com",
    logoBg: "bg-gradient-to-br from-violet-600 to-purple-700",
    initials: "IS",
    tag: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700",
    location: "Hyderabad, India",
    current: false,
    points: [
      "Built Azure Data Factory pipelines to ingest and transform retail data from multiple sources, cutting data preparation time by 55% and improving BI accuracy.",
      "Automated order processing workflows with Azure Logic Apps, reducing manual intervention by 70% and processing time by 45%.",
      "Developed .NET APIs for Columbia's retail platform, improving third-party integration reliability from 78% to 99.5% uptime.",
      "Optimized SQL Server data models for inventory and sales reporting, reducing query execution time by 60% on high-volume datasets.",
      "Designed a scalable ETL architecture on Azure that reduced data pipeline lag by 80%, enabling near-real-time analytics for retail operations.",
    ],
  },
];

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="pt-8 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Career
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          Companies I've worked with
        </p>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.2, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/60 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-shadow transition-transform duration-300 overflow-hidden"
            >
              {/* Left rectangle — logo panel */}
              <div className="flex-shrink-0 w-full sm:w-24 flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-0 p-4 sm:p-4 border-b sm:border-b-0 border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className={`hidden w-full h-full ${exp.logoBg} items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm tracking-wide">
                      {exp.initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical divider — desktop only */}
              <div
                className={`hidden sm:block w-px self-stretch bg-gradient-to-b ${exp.accent} opacity-30`}
              />

              {/* Right — text content */}
              <div className="flex-1 min-w-0 p-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    📍 {exp.location}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {exp.role}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 italic">
                  {exp.client ? `${exp.client} · ` : ""}
                  {exp.sector}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      <span className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400">
                        ▸
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                {exp.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.stack.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-0.5 border rounded-full font-medium ${exp.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
