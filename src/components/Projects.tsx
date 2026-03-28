import { motion } from "framer-motion";

const projects = [
  {
    title: "Federated Patient Data Exchange Platform",
    domain: "Healthcare",
    company: "McKesson / Innova Solutions",
    desc: "FHIR-compliant interoperability hub enabling real-time patient record sharing across hospital networks and EHR systems, reducing duplicate lab orders by 35% and accelerating clinical decision-making through instant cross-facility patient history access.",
    stack: ["ASP.NET Core", "React", "TypeScript", "GraphQL", "Azure CosmosDB", "OAuth2/JWT"],
    accent: "from-emerald-400 to-teal-500",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
    domainTag: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  },
  {
    title: "Event-Driven Payment Orchestration Engine",
    domain: "Cloud / Fintech",
    company: "Wells Fargo",
    desc: "High-throughput microservices payment processor handling 1,000+ transactions/second with sub-100ms latency and 99.999% uptime, featuring automatic fraud scoring and cross-channel settlement reconciliation via Azure Service Bus.",
    stack: [".NET 8", "Kafka", "Azure Service Bus", "AKS", "CosmosDB", "Redis"],
    accent: "from-violet-400 to-indigo-500",
    tag: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700",
    domainTag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  },
  {
    title: "Zero-Trust Identity & Access Governance",
    domain: "Security",
    company: "Wells Fargo",
    desc: "Enterprise IAM platform enforcing adaptive, context-aware access policies with RBAC, conditional MFA, and real-time risk scoring — cutting unauthorized access incidents by 78% across compliance audits through continuous identity verification.",
    stack: ["ASP.NET Core", "React", "Azure Entra ID", "OAuth2/JWT", "SQL Server", "Docker"],
    accent: "from-rose-400 to-pink-500",
    tag: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-700",
    domainTag: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  },
  {
    title: "Omnichannel Real-Time Inventory Platform",
    domain: "Retail",
    company: "Columbia / Innova Solutions",
    desc: "Unified inventory intelligence system syncing stock across stores, warehouses, and e-commerce in near-real-time via Azure Data Factory and Logic Apps — improving fulfillment rates by 30% and cutting stockouts by 50% across 200+ SKUs.",
    stack: ["ASP.NET Core", "ADF", "Azure Logic Apps", "RabbitMQ", "PostgreSQL", "React"],
    accent: "from-amber-400 to-orange-500",
    tag: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700",
    domainTag: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-4 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Portfolio
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          Enterprise-grade systems across healthcare, cloud, security, and AI
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Colored top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                    {p.title}
                  </h3>
                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${p.domainTag}`}>
                    {p.domain}
                  </span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 italic mb-3">
                  {p.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 border rounded-full font-medium ${p.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
