import Section from "./Section";

const achievements = [
  "Built a real-time dashboard for multi-account trading workflows with role-based access.",
  "Handled 1000+ live updates per second across WebSocket-driven interfaces.",
  "Used event-driven concurrency patterns with MPSC and broadcast channels.",
  "Designed state synchronization flows that kept UI updates consistent and low-latency.",
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--warm)] sm:text-[0.95rem]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Work shaped by performance-sensitive systems.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
            I&apos;ve been most energized by backend-heavy work where throughput,
            access control, and state consistency all matter at once.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:p-6 lg:rounded-[2rem] lg:p-7">
          <div className="flex flex-col gap-3 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--accent)] sm:text-sm">
                Featured Build
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.75rem]">
                Real-Time Trading Dashboard
              </h3>
            </div>
            <p className="text-xs text-[color:var(--muted)] sm:text-sm">
              Rust • WebSockets • Event-Driven Architecture
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/6 bg-[color:var(--panel-strong)] p-4 sm:rounded-3xl sm:p-5"
              >
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

