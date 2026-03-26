import { useState } from "react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Azure Developer Associate",
    code: "AZ-204",
    issuer: "Microsoft",
    logo: "https://logos.hunter.io/microsoft.com",
    initials: "MS",
    logoBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    accent: "from-blue-400 to-cyan-500",
    tag: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
    pdf: "/certs/az-204.pdf",
  },
  {
    title: "AWS Certified Developer – Associate",
    code: "DVA-C02",
    issuer: "Amazon Web Services",
    logo: "https://logos.hunter.io/aws.amazon.com",
    initials: "AWS",
    logoBg: "bg-gradient-to-br from-orange-400 to-yellow-500",
    accent: "from-orange-400 to-yellow-500",
    tag: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
    pdf: "/certs/dva-c02.pdf",
  },
  {
    title: "Microsoft Certified: Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    logo: "https://logos.hunter.io/microsoft.com",
    initials: "MS",
    logoBg: "bg-gradient-to-br from-indigo-500 to-violet-600",
    accent: "from-indigo-400 to-violet-500",
    tag: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700",
    pdf: "/certs/dp-900.pdf",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    logo: "https://logos.hunter.io/microsoft.com",
    initials: "MS",
    logoBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    accent: "from-sky-400 to-blue-500",
    tag: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700",
    pdf: "/certs/az-900.pdf",
  },
];

export default function Certifications() {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  return (
    <section id="certifications" className="pt-4 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Credentials
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Certifications
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          Industry-recognized certifications
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="flex bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/60 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-shadow transition-transform duration-300 overflow-hidden"
            >
              {/* Left — logo panel */}
              <div className="flex-shrink-0 w-20 flex items-center justify-center p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className={`hidden w-full h-full ${cert.logoBg} items-center justify-center`}>
                    <span className="text-white font-bold text-xs tracking-wide">
                      {cert.initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className={`w-px self-stretch bg-gradient-to-b ${cert.accent} opacity-30`} />

              {/* Right — text */}
              <div className="flex-1 min-w-0 p-4 flex flex-col justify-center relative">
                <button
                  onClick={() => { setActivePdf(cert.pdf); setActiveTitle(cert.title); }}
                  className="absolute top-3 right-3 text-xs px-2.5 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 hover:brightness-110 text-white font-semibold rounded-full shadow transition-all hover:scale-105 active:scale-95"
                >
                  View
                </button>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug pr-16">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer}</p>
                <span className={`mt-2 self-start text-xs px-2.5 py-0.5 border rounded-full font-semibold ${cert.tag}`}>
                  {cert.code}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setActivePdf(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-800 dark:text-white truncate pr-4">
                {activeTitle}
              </span>
              <button
                onClick={() => setActivePdf(null)}
                className="shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/50 transition-colors"
              >
                ✕ Cancel
              </button>
            </div>

            {/* PDF iframe */}
            <iframe
              src={activePdf}
              className="flex-1 w-full"
              title={activeTitle}
            />
          </div>
        </div>
      )}
    </section>
  );
}
