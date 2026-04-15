const links = [
  {
    label: "GitHub",
    href: "https://github.com/surya5S?tab=repositories",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suryaprakash123/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/surya.k.prakash/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const services = [
  {
    icon: "🏗️",
    title: "Full Stack Development",
    desc: "End-to-end web applications using React, TypeScript, and .NET Core — from UI to API to database.",
    accent: "from-violet-400 to-indigo-500",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    icon: "☁️",
    title: "Cloud Architecture",
    desc: "Scalable, resilient cloud-native systems on Azure & AWS using microservices, Kubernetes, and Terraform.",
    accent: "from-cyan-400 to-teal-500",
    tag: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  },
  {
    icon: "🔗",
    title: "API Design & Integration",
    desc: "RESTful and GraphQL APIs with OAuth2/JWT security, built for performance and third-party interoperability.",
    accent: "from-emerald-400 to-green-500",
    tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
  {
    icon: "📊",
    title: "Data Engineering",
    desc: "Real-time ETL pipelines with ADF, Kafka, and Databricks — turning raw data into actionable business insights.",
    accent: "from-amber-400 to-orange-500",
    tag: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  {
    icon: "🤖",
    title: "AI / LLM Integration",
    desc: "Production-grade AI workflows using OpenAI and LangChain — automating documents, decisions, and processes.",
    accent: "from-fuchsia-400 to-purple-500",
    tag: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  },
  {
    icon: "⚙️",
    title: "DevOps & CI/CD",
    desc: "Automated pipelines, blue-green deployments, and infrastructure-as-code for zero-downtime releases.",
    accent: "from-rose-400 to-pink-500",
    tag: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-4 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 text-center mb-1">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          Have a project in mind? Let's talk.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* ── Left — Services ── */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${s.accent}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.icon}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.tag}`}>
                      {s.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right — Email + Social ── */}
          <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
            <a
              href="mailto:surya.kotikanneti@gmail.com"
              className="block text-center py-2.5 bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 text-white font-semibold text-sm rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            >
              ✉ Email Me
            </a>

            <div className="flex justify-center gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-gray-900/70 border border-pink-200 dark:border-pink-800 text-gray-600 dark:text-gray-300 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-all shadow-sm backdrop-blur-sm hover:scale-110"
                >
                  {l.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
