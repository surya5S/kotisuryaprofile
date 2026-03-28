import { motion } from "framer-motion";

const education = [
  {
    school: "Northern Arizona University",
    degree: "Master of Science in Computer Science",
    gpa: "GPA 3.83",
    location: "Flagstaff, AZ, USA",
    period: "Aug 2023 – May 2025",
    logo: "https://logos.hunter.io/nau.edu",
    initials: "NAU",
    logoBg: "bg-gradient-to-br from-blue-700 to-blue-500",
    accent: "from-blue-400 to-indigo-500",
    tag: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
  },
  {
    school: "Vignan's Lara Institute of Technology and Science",
    degree: "Bachelor of Science in Computer Science & Engineering",
    gpa: "GPA 7.8",
    location: "Kakinada, AP, India",
    period: "Jul 2016 – Sep 2020",
    logo: "https://logos.hunter.io/vignan.ac.in",
    initials: "VLITS",
    logoBg: "bg-gradient-to-br from-orange-500 to-red-600",
    accent: "from-orange-400 to-red-500",
    tag: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
  },
];

export default function Education() {
  return (
    <section id="education" className="pt-4 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Academic Background
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Education
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          Foundations that power my engineering
        </p>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.15, ease: "easeOut" }}
              className="flex bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/60 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Left — logo */}
              <div className="flex-shrink-0 w-20 flex items-center justify-center p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className={`hidden w-full h-full ${edu.logoBg} items-center justify-center`}>
                    <span className="text-white font-bold text-xs tracking-wide">
                      {edu.initials}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className={`w-px self-stretch bg-gradient-to-b ${edu.accent} opacity-30`} />

              {/* Right — text */}
              <div className="flex-1 min-w-0 p-5 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
                    {edu.school}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {edu.degree}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`text-xs px-2.5 py-0.5 border rounded-full font-semibold ${edu.tag}`}>
                    {edu.gpa}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    📍 {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
