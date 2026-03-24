const links = [
  { label: "GitHub", href: "#", icon: "⌥" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Instagram", href: "#", icon: "ig" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 dark:from-rose-950 dark:via-pink-950 dark:to-fuchsia-950">
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 text-center mb-1">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-8">
          Have a project in mind? Let's talk.
        </p>

        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white dark:border-pink-900 rounded-3xl shadow-2xl ring-1 ring-pink-200 dark:ring-pink-800 p-8 text-center">
          <a
            href="mailto:your@email.com"
            className="inline-block w-full py-3 mb-5 bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
          >
            your@email.com
          </a>

          <div className="flex justify-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-5 py-2 bg-white dark:bg-gray-800 border border-pink-200 dark:border-pink-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-all font-medium shadow-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
