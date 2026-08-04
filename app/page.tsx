import Link from "next/link";
import CertificateViewer from "./components/CertificateViewer";

export default function Home() {
  const projects: Array<{
    name: string;
    description: string;
    impact: string;
    technologies: string[];
    github: string;
    demo?: string;
  }> = [
    {
      name: "VisionMate",
      description:
        "Flutter-based assistive mobile system with on-device obstacle detection, offline face recognition, turn-by-turn voice navigation, and guardian safety sync. Currently preparing for deployment; competed in the Harvard HSIL Hackathon and awarded 2nd Runner-Up.",
      impact:
        "Selected as 2nd Runner-Up at Harvard HSIL and positioned for deployment as an accessibility-first assistive AI product.",
      technologies: ["Flutter", "Edge AI", "TensorFlow Lite", "Accessibility"],
      github: "https://github.com/Muhammad-Hassan216/VisionMate",
    },
    {
      name: "AI Voice Receptionist",
      description:
        "Work-in-progress: Generative AI receptionist prototype. Partial reservation and order capture implemented; continuing development to complete full call handling flows.",
      impact:
        "Established a reusable voice automation foundation for reservation and order capture workflows with a clear path to full call handling.",
      technologies: ["Python", "Flask", "Twilio", "WhatsApp", "NLP"],
      github: "https://github.com/Muhammad-Hassan216/AI-Voice-Receptionist-",
    },
    {
      name: "The Body Fragrances",
      description:
        "Fragrance business platform built as an Android Studio Java app with order booking and transaction flows, backed by a PHP admin panel, plus a separate HTML/CSS/JS front-end website.",
      impact:
        "Delivered a complete customer ordering and business admin flow that supports both sales and operational management.",
      technologies: ["Java", "Android Studio", "PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Muhammad-Hassan216/The-Body-Fragrances",
    },
    {
      name: "AI Content Forensics System",
      description:
        "Explainable AI-generated text detector with a live Streamlit UI, CLI demo, and batch REST API. Classifies text as AI-generated vs. human-written and surfaces token-level feature contributions instead of a black-box label. Ships with a trained sklearn model plus a pure-Python offline fallback, and includes production deploy configs (Render/Streamlit Cloud).",
      impact:
        "Brings transparent AI text verification to real-world review workflows with deployment-ready demo and API packaging.",
      technologies: ["Python", "scikit-learn", "Streamlit", "Flask", "Explainable AI"],
      github: "https://github.com/Muhammad-Hassan216/AI-Content-Forensics-System",
    },
    {
      name: "UMT Campus Support Chatbot",
      description:
        "Led development of a handbook-verified RAG chatbot for campus support queries within a 4-person team, engineered to eliminate hallucinated answers by sourcing strictly from the official UMT handbook and verified contacts. Audited and pruned the corpus to 35 verified chunks, and built a 24-question risk-tiered benchmark with mandatory crisis-escalation safety logic.",
      impact:
        "Reduced hallucination risk through handbook-grounded retrieval and a safety-first benchmark that protects high-risk campus support scenarios.",
      technologies: ["Python", "RAG", "LLM Integration", "Safety Design"],
      github: "https://github.com/Muhammad-Hassan216/Umt-Chatbot",
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
            <Link href="#services" className="transition hover:text-white">
              Services
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
              Transform your vision into intelligent products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              I build production-ready AI systems, mobile applications, and automation workflows. From on-device edge AI to GenAI integrations,
              I deliver full-stack solutions with strong UX and deployment expertise. Proven through award-winning projects and real-world deployments.
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
                { label: "Delivery Model", value: "Full-Stack & Deployment" },
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

        <section id="services" className="border-t border-white/10 py-20">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Services & Deliverables</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">What I can build for you</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "AI & Automation Products",
                deliverables: [
                  "Edge AI systems (on-device inference, computer vision)",
                  "GenAI integrations (LLM-powered workflows, chatbots, voice systems)",
                  "Intelligent automation (process optimization, workflow management)",
                  "Privacy-first AI solutions (on-device processing, federated learning)"
                ]
              },
              {
                title: "Mobile & Web Applications",
                deliverables: [
                  "Cross-platform mobile apps (Flutter)",
                  "Native Android apps (Android Studio, Java, Kotlin)",
                  "Website development (HTML, CSS, JavaScript)",
                  "Responsive, accessible, and production-ready UX"
                ]
              },
              {
                title: "Backend & System Design",
                deliverables: [
                  "Backend development (PHP, Python, Node.js)",
                  "Database design & optimization (SQL, NoSQL)",
                  "API development & integration (REST, webhooks)",
                  "Admin panels, dashboards, and management systems"
                ]
              },
              {
                title: "Domain Expertise",
                deliverables: [
                  "Assistive technology & accessibility-first design",
                  "Restaurant & hospitality automation",
                  "E-commerce & order management systems",
                  "Proof-of-concept to production pipeline"
                ]
              }
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:border-cyan-300/30 transition">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Engineering with purpose, shipping with impact.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                I focus on delivering production-ready systems that solve real problems. Every project combines cutting-edge AI/automation with practical UX,
                thoughtful design, and deployment expertise. From concept through scaling, I build products people actually want to use.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Edge-AI & Computer Vision",
                "Flutter (Cross-platform Mobile)",
                "Android Studio (Native Apps)",
                "PHP Backend Development",
                "HTML, CSS, JavaScript",
                "Full-Stack Development",
                "E-commerce & Order Systems",
                "Automation Workflows",
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
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Portfolio</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Featured Projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              Award-winning products spanning assistive AI, automation workflows, and full-stack e-commerce. Each demonstrates end-to-end delivery,
              from research and prototyping to production deployment and user validation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/7"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-sky-400/8 to-indigo-500/20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,232,249,0.3),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.25),_transparent_45%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-xs uppercase tracking-[0.36em] text-cyan-100 backdrop-blur-sm">
                      {project.name}
                    </div>
                  </div>
                </div>

                <div className="p-6">
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
                  <p className="mt-3 text-sm leading-6 text-cyan-100/90">
                    <span className="font-semibold text-white">Result / Impact:</span> {project.impact}
                  </p>

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
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-white">
                        Demo →
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Awards & Media */}
          <div className="mt-12 rounded-2xl border border-white/8 bg-white/5 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">Awards & Recognition</h3>
                <p className="mt-2 text-sm text-white/70">
                  VisionMate — Harvard HSIL Hackathon, 2nd Runner-Up (April 2026). Recognized for innovation in assistive AI and accessibility-first engineering.
                </p>
              </div>
              <span className="ml-4 inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200 whitespace-nowrap">
                ✓ Award Winner
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-white/60">
                No certificate file has been added to the site yet, so the certificate action is temporarily hidden until a real asset is provided.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Let's Build Together</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Ready to turn your idea into reality.</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Whether you need a full-stack AI product, mobile application, automation system, or technical consultation,
                I'm ready to discuss your vision and deliver results. Let's explore what we can build together.
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
