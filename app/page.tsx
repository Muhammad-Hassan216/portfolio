import Link from "next/link";
import CertificateViewer from "./components/CertificateViewer";

export default function Home() {
  const projects = [
    {
      name: "VisionMate",
      description:
        "Flutter-based assistive mobile system with on-device obstacle detection, offline face recognition, turn-by-turn voice navigation, and guardian safety sync. Currently preparing for deployment; competed in the Harvard HSIL Hackathon and awarded 2nd Runner-Up.",
      technologies: ["Flutter", "Edge AI", "TensorFlow Lite", "Accessibility"],
      github: "https://github.com/Muhammad-Hassan216/VisionMate",
      demo: "#",
    },
    {
      name: "AI Voice Receptionist",
      description:
        "Work-in-progress: Generative AI receptionist prototype. Partial reservation and order capture implemented; continuing development to complete full call handling flows.",
      technologies: ["Python", "Flask", "Twilio", "WhatsApp", "NLP"],
      github: "https://github.com/Muhammad-Hassan216/AI-Voice-Receptionist-",
      demo: "#",
    },
    {
      name: "The Body Fragrances",
      description:
        "Fragrance business platform built as an Android Studio Java app with order booking and transaction flows, backed by a PHP admin panel, plus a separate HTML/CSS/JS front-end website.",
      technologies: ["Java", "Android Studio", "PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammad-Hassan216/The-Body-Fragrances",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-8rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-24 right-[-7rem] h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Muhammad Hassan</div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">AI Portfolio</p>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="#about" className="transition hover:text-white">
              About
            </Link>
            <Link href="#projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Available for full-time roles, freelance projects, and contract work
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Building practical AI systems for web, mobile, and real-world workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              I design and build intelligent products from idea to deployment, including Edge-AI mobile experiences,
              restaurant automation, and full-stack applications with strong user focus. 2nd Runner-Up at Harvard Health Systems Hackathon 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Education", value: "UMT - CS, July 2026" },
                { label: "Recognition", value: "Harvard HSIL Hackathon — 2nd Runner-Up" },
                { label: "Current Build", value: "VisionMate" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white/90">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-indigo-500/15 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
              <div className="rounded-3xl border border-white/10 bg-[#091022] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Now highlighted</p>
                    <div className="flex items-center gap-4">
                      <h2 className="mt-3 text-3xl font-semibold">VisionMate</h2>
                      <span className="ml-2 rounded-full bg-white/6 px-2 py-1 text-xs font-medium text-white/75">Harvard HSIL — 2nd Runner‑Up</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      VisionMate is a Flutter-based assistive mobile system providing on-device obstacle perception, offline face recognition,
                      turn-by-turn voice navigation, and guardian safety synchronization. It uses optimized edge models (YOLOv8n-int8, MobileFaceNet TFLite),
                      a dual-zone safety model for walkability awareness, TTS feedback, and automatic SOS escalation. Preparing for deployment.
                    </p>

                    <div className="mt-6 grid gap-3">
                      {[
                        "On-device obstacle detection (YOLOv8n-int8)",
                        "Offline face recognition (MobileFaceNet TFLite)",
                        "Dual-zone safety model (frontal + path)",
                        "TTS navigation + SOS escalation",
                        "Accessibility-first interaction and hardware triggers",
                      ].map((line) => (
                        <div key={line} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80">
                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">I build products that feel practical, not just impressive.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                My focus is on shipping polished systems that combine AI, automation, and strong UX. I care about edge inference,
                deployment simplicity, and workflows people can actually use in production.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Edge-AI",
                "Flutter Mobile Apps",
                "GenAI / LLMs",
                "System Design",
                "Computer Vision",
                "Automation Workflows",
                "Privacy-first AI",
                "Full-Stack Development",
              ].map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/86 backdrop-blur">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Projects</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Selected work</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              The current portfolio emphasizes two main systems: a cross-platform assistive mobile app and a restaurant receptionist
              automation flow. Both are designed around practical deployment and strong user value.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">Project {idx + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    Featured
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-200 transition hover:text-white">
                    GitHub →
                  </a>
                  <a href={project.demo} className="text-white/70 transition hover:text-white">
                    Demo →
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Awards & Media */}
          <div className="mt-12 rounded-2xl border border-white/8 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Awards & Recognition</h3>
            <p className="mt-2 text-sm text-white/70">
              VisionMate — Harvard HSIL Hackathon, 2nd Runner-Up (April 2026).
            </p>

            <div className="mt-6">
              <CertificateViewer thumb="/visionmate_certificate_preview.svg" />
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Open to opportunities and collaborations.</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                If you want to discuss AI systems, mobile experiences, or product engineering work, I am happy to connect.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:codewithmhassan786@gmail.com" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Email Me
              </a>
              <a href="https://linkedin.com/in/muhammad-hassan-598547331" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                LinkedIn
              </a>
              <a href="https://github.com/Muhammad-Hassan216" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/45">
          <p>© 2026 Muhammad Hassan. Built with Next.js, Tailwind CSS, and a focus on practical AI products.</p>
        </footer>
      </main>
    </div>
  );
}
