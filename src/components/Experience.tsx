const experiences = [
  {
    company: "Innova Solutions",
    role: "FullStack Developer",
    client: "McKesson",
    sector: "Healthcare",
    period: "Mar 2026 – Present",
    stack: [
      "React",
      "TypeScript",
      "GraphQL",
      ".NET 8",
      "PostgreSQL",
      "AKS",
      "Azure",
      "OpenAI API",
    ],
    accent: "from-emerald-400 to-teal-500",
    logo: "https://logos.hunter.io/innovasolutions.com",
    logoBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    initials: "IS",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
    location: "Phoenix, AZ",
    current: true,
    points: [
      "Architected end-to-end patient and provider enrollment workflows using React + TypeScript and .NET 8 APIs, reducing onboarding drop-off by 35% and improving form completion by 28% for 100K+ monthly users.",
      "Designed GraphQL APIs consolidating McKesson's healthcare data across 10+ source systems, eliminating over-fetching and cutting average API response time by 42%, directly accelerating clinician workflows.",
      "Optimized PostgreSQL schemas and query execution plans for large-scale patient datasets, improving retrieval by 50%; deployed on AKS with zero-downtime rolling updates maintaining 99.9% uptime SLA.",
      "Enforced HIPAA-compliant access using Azure Key Vault, OAuth2/JWT, and row-level security; integrated OpenAI API to automate test generation, cutting dev cycle time by 25% with zero compliance incidents.",
    ],
  },
  {
    company: "BNS International Inc",
    role: ".NET Full Stack Developer",
    client: "Wells Fargo",
    sector: "Banking",
    period: "Jun 2025 – Feb 2026",
    stack: [
      ".NET 8",
      "Azure Service Bus",
      "Azure DevOps",
      "OAuth2/JWT",
      "REST APIs",
      "Microservices",
    ],
    accent: "from-red-500 to-yellow-500",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE5H975javClw/company-logo_200_200/company-logo_200_200/0/1630629186937?e=2147483647&v=beta&t=mo7Y5irqTi18SujbgFfLQn_OkrPvbgjnSAxVAubDdwY",
    logoBg: "bg-gradient-to-br from-red-600 to-yellow-500",
    initials: "BNS",
    tag: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700",
    location: "Arizona, USA",
    current: false,
    points: [
      "Delivered 6 .NET 8 microservices powering core banking transaction flows, increasing throughput by 40% and reducing end-to-end processing latency by 30% across 2M+ daily transactions.",
      "Integrated Azure Service Bus for async event-driven workflows across payment, notification, and audit services, increasing resilience and reducing inter-service coupling by 55%.",
      "Automated blue-green CI/CD pipelines in Azure DevOps with OAuth2/JWT-secured REST APIs, reducing release time by 65%, enabling 3× more frequent deployments, and achieving 100% compliance audit pass rate.",
    ],
  },
  {
    company: "Northern Arizona University",
    role: "Graduate Teaching Assistant / App Developer",
    client: null,
    sector: "Education",
    period: "Aug 2024 – May 2025",
    stack: ["ASP.NET Core", "React", "OAuth2", "RBAC"],
    accent: "from-blue-500 to-yellow-400",
    logo: "https://logos.hunter.io/nau.edu",
    logoBg: "bg-gradient-to-br from-blue-700 to-blue-500",
    initials: "NAU",
    tag: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
    location: "Flagstaff, AZ",
    current: false,
    points: [
      "Designed and built a full-stack portal (ASP.NET Core + React) for 500+ faculty and students, reducing admin overhead by 40% and eliminating all paper-based workflows.",
      "Implemented RBAC and OAuth2 authentication, reducing unauthorized access attempts by 90%; resolved N+1 query bottlenecks cutting page load time by 50% and driving 60% higher portal adoption.",
      "Co-taught graduate software engineering to 40+ students on clean architecture and TDD, contributing to a 25% improvement in assignment quality scores.",
    ],
  },
  {
    company: "Innova Solutions",
    role: "Associate Software Engineer",
    client: "Columbia Sportswear",
    sector: "Retail",
    period: "Mar 2021 – Jul 2023",
    stack: [
      ".NET Core",
      "Azure",
      "ADF",
      "CosmosDB",
      "Blob Storage",
      "SQL Server",
    ],
    accent: "from-violet-400 to-purple-500",
    logo: "https://logos.hunter.io/innovasolutions.com",
    logoBg: "bg-gradient-to-br from-violet-600 to-purple-700",
    initials: "IS",
    tag: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700",
    location: "Hyderabad, India",
    current: false,
    points: [
      "Designed 12 Azure Data Factory pipelines ingesting data from 8+ source systems into the analytics warehouse, cutting data preparation time by 55% and enabling near-real-time inventory analytics across 300+ retail locations.",
      "Designed a reconciliation system using Azure Blob Storage, Cosmos DB, and .NET Core with retry logic, scaling batch processing from 100K to 500K records and improving message delivery success by 35%.",
      "Developed .NET Core REST APIs improving third-party integration reliability from 78% to 99.5% uptime; automated CI/CD pipelines in Azure DevOps cutting deployment effort by 50%.",
    ],
  },
  {
    company: "Swiftsoft Infotech Services",
    role: "Software Engineer Intern",
    client: null,
    sector: "Technology",
    period: "Jun 2020 – Feb 2021",
    stack: [
      "ASP.NET Core",
      "Azure Functions",
      "CosmosDB",
      "Blob Storage",
      "Azure Service Bus",
      "SQL Server",
    ],
    accent: "from-fuchsia-400 to-pink-500",
    logo: "https://logos.hunter.io/swiftsoft.com",
    logoBg: "bg-gradient-to-br from-fuchsia-600 to-pink-600",
    initials: "SS",
    tag: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-700",
    location: "Hyderabad, India",
    current: false,
    points: [
      "Built data transformation pipelines using Microsoft Dynamics 365, SQL Server, and Liquid templates dispatched via Azure Service Bus, reducing processing errors by 40% and improving cross-system data accuracy.",
      "Engineered ASP.NET Core and Azure Functions backend services integrated with CosmosDB and Blob Storage, enabling real-time data operations and improving query performance via indexing and partitioning strategies.",
      "Delivered real-time KQL analytics dashboards for business stakeholders; enforced security via Azure Key Vault and maintained zero compliance violations through MS Test unit and integration testing.",
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
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {exp.period}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      📍 {exp.location}
                    </span>
                  </div>
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
