const projects = [
  {
    title: "AKS Microservices Platform",
    company: "Voya Financial",
    desc: "Architected .NET 7 microservices on AKS with a unified GraphQL API, boosting performance by 95% and scalability by 38%.",
    stack: [".NET 7", "AKS", "GraphQL", "Redis", "Azure DevOps"],
    accent: "from-violet-400 to-indigo-500",
    tag: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700",
  },
  {
    title: "Real-Time Financial Dashboard",
    company: "Fifth Third Bancorp",
    desc: "Built React dashboards integrating multiple APIs with secure ASP.NET Core backend, Azure AD & JWT auth, reducing setup time by 60% via Terraform.",
    stack: ["React", "ASP.NET Core", "Terraform", "Azure AD", "JWT"],
    accent: "from-emerald-400 to-teal-500",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
  },
  {
    title: "Microservices Migration & Event Streaming",
    company: "Innova Solutions",
    desc: "Refactored legacy monoliths into .NET Core microservices with Kafka & RabbitMQ, improving response times by 45% and cutting maintenance costs by 20%.",
    stack: [".NET Core", "Kafka", "RabbitMQ", "CosmosDB", "Angular"],
    accent: "from-sky-400 to-cyan-500",
    tag: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700",
  },
  {
    title: "Legacy Modernization — Insurance Platform",
    company: "Max Life Insurance",
    desc: "Migrated VB.NET apps to ASP.NET Core & Angular, cut SQL execution time by 50%, and reduced claim handling time 25% with RabbitMQ async queues.",
    stack: ["ASP.NET Core", "Angular", "RabbitMQ", "SQL Server", "T-SQL"],
    accent: "from-amber-400 to-orange-500",
    tag: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Portfolio
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          A selection of things I've built
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Colored top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">
                    {p.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 italic">
                    {p.company}
                  </span>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
