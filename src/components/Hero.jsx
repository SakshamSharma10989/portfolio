import Container from "./Container";

const stats = [
  { value: "3+", label: "Production-ready products shipped" },
  { value: "750+", label: "DSA problems solved with consistency" },
  { value: "HFT", label: "Internship exposure to low-latency systems" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color:var(--line)]"
    >
      <Container>
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 py-6 sm:py-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.4em] text-[color:var(--accent)] sm:text-[0.72rem] sm:tracking-[0.5em]">
              Software Engineer • Backend Focus • Systems Mindset
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.96] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Building calm, fast interfaces for products with real-time complexity.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              I&apos;m Saksham Sharma, and I build backend-heavy products with
              real-time flows, clean user experience, and systems that stay
              reliable when the load gets serious.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--warm)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-[#f2b45a] sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Explore Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[color:var(--warm)] hover:bg-white/8 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[color:rgba(141,243,207,0.12)] blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--warm)]">
                    Current Role
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    SWE Intern at Teesta Investment
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-200">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/6 bg-[color:var(--panel-strong)] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)] sm:text-sm sm:tracking-normal">
                    Focus Areas
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white sm:text-base sm:leading-7">
                    Distributed systems, event-driven dashboards, and backend
                    workflows designed for clarity, speed, and reliability.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.25rem] border border-white/6 bg-white/4 p-3 sm:p-4"
                    >
                      <p className="text-xl font-semibold text-white sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[0.7rem] leading-4 text-[color:var(--muted)] sm:mt-2 sm:text-xs sm:leading-5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

