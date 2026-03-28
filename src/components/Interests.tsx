import { motion } from "framer-motion";

const interests = [
  {
    icon: "💻",
    title: "Competitive Problem Solving",
    desc: "Regular practice on LeetCode and HackerRank — sharpening algorithmic thinking through data structures, dynamic programming, and system design challenges.",
    tag: "LeetCode · HackerRank",
    accent: "from-violet-400 to-indigo-500",
    bg: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    icon: "🍳",
    title: "Food & Cooking",
    desc: "Passionate about experimenting in the kitchen — exploring diverse cuisines and recreating restaurant-quality dishes from scratch.",
    tag: "Food Lover · Home Chef",
    accent: "from-amber-400 to-orange-500",
    bg: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  {
    icon: "✈️",
    title: "Travel",
    desc: "Exploring new places, cultures, and perspectives — every trip adds a new dimension to how I think and create.",
    tag: "Explorer · Adventurer",
    accent: "from-sky-400 to-cyan-500",
    bg: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  {
    icon: "🏃",
    title: "Marathon Running",
    desc: "Pushing endurance limits one mile at a time — currently in training, building the stamina and discipline to cross that finish line.",
    tag: "In Progress 🚧",
    accent: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="pt-4 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 text-center mb-1">
          Beyond the Code
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Interests
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-10">
          What keeps me curious and energized outside of work
        </p>

        <div className="flex flex-col gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-start gap-5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/60 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 p-5 overflow-hidden"
            >
              {/* Icon */}
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${item.accent} shadow-md`}>
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${item.bg}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
