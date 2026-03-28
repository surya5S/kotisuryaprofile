import { motion } from "framer-motion";

const categories = [
  {
    label: "IDEs & Editors",
    accent: "from-blue-400 to-indigo-500",
    tag: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
    icon: "💻",
    tools: [
      { name: "Visual Studio 2022", logo: "https://logos.hunter.io/visualstudio.com" },
      { name: "VS Code", logo: "https://logos.hunter.io/code.visualstudio.com" },
      { name: "IntelliJ IDEA", logo: "https://logos.hunter.io/jetbrains.com" },
      { name: "PyCharm", logo: "https://logos.hunter.io/jetbrains.com" },
      { name: "Rider", logo: "https://logos.hunter.io/jetbrains.com" },
    ],
  },
  {
    label: "Version Control & DevOps",
    accent: "from-orange-400 to-rose-500",
    tag: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
    icon: "🔀",
    tools: [
      { name: "Git", logo: "https://logos.hunter.io/git-scm.com" },
      { name: "GitHub", logo: "https://logos.hunter.io/github.com" },
      { name: "Azure DevOps", logo: "https://logos.hunter.io/azure.microsoft.com" },
      { name: "Jenkins", logo: "https://logos.hunter.io/jenkins.io" },
      { name: "GitHub Actions", logo: "https://logos.hunter.io/github.com" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    accent: "from-cyan-400 to-teal-500",
    tag: "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700",
    icon: "☁️",
    tools: [
      { name: "Microsoft Azure", logo: "https://logos.hunter.io/azure.microsoft.com" },
      { name: "AWS", logo: "https://logos.hunter.io/aws.amazon.com" },
      { name: "Docker", logo: "https://logos.hunter.io/docker.com" },
      { name: "Kubernetes", logo: "https://logos.hunter.io/kubernetes.io" },
      { name: "Terraform", logo: "https://logos.hunter.io/terraform.io" },
    ],
  },
  {
    label: "API & Testing",
    accent: "from-violet-400 to-purple-500",
    tag: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700",
    icon: "🧪",
    tools: [
      { name: "Postman", logo: "https://logos.hunter.io/postman.com" },
      { name: "Swagger / OpenAPI", logo: "https://logos.hunter.io/swagger.io" },
      { name: "xUnit", logo: "https://logos.hunter.io/xunit.net" },
      { name: "Moq", logo: "https://logos.hunter.io/github.com" },
      { name: "SoapUI", logo: "https://logos.hunter.io/soapui.org" },
    ],
  },
  {
    label: "Databases & Monitoring",
    accent: "from-emerald-400 to-green-500",
    tag: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700",
    icon: "🗄️",
    tools: [
      { name: "SQL Server Management Studio", logo: "https://logos.hunter.io/microsoft.com" },
      { name: "Azure Data Studio", logo: "https://logos.hunter.io/azure.microsoft.com" },
      { name: "MongoDB Compass", logo: "https://logos.hunter.io/mongodb.com" },
      { name: "Redis Insight", logo: "https://logos.hunter.io/redis.io" },
      { name: "Datadog", logo: "https://logos.hunter.io/datadoghq.com" },
    ],
  },
  {
    label: "Collaboration & Project Management",
    accent: "from-amber-400 to-yellow-500",
    tag: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700",
    icon: "🤝",
    tools: [
      { name: "Jira", logo: "https://logos.hunter.io/atlassian.com" },
      { name: "Confluence", logo: "https://logos.hunter.io/atlassian.com" },
      { name: "Slack", logo: "https://logos.hunter.io/slack.com" },
      { name: "Microsoft Teams", logo: "https://logos.hunter.io/microsoft.com" },
      { name: "Figma", logo: "https://logos.hunter.io/figma.com" },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="pt-4 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Toolbox
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Tools & IDEs
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          The tools I use day-to-day to build, ship, and monitor software
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Colored top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cat.accent}`} />

              <div className="p-5">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                    {cat.label}
                  </h3>
                </div>

                {/* Tool list */}
                <div className="flex flex-col gap-2">
                  {cat.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.style.display = "none";
                            const fallback = img.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div className="hidden w-full h-full bg-gray-200 dark:bg-gray-700 items-center justify-center">
                          <span className="text-gray-500 dark:text-gray-400 text-xs font-bold">
                            {tool.name[0]}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 border rounded-full font-medium ${cat.tag}`}>
                        {tool.name}
                      </span>
                    </div>
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
