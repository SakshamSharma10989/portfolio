import Section from "./Section";

const links = [
  {
    label: "Email",
    value: "sakshamsharma9737@gmail.com",
    href: "mailto:sakshamsharma9737@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "View Profile",
    href: "https://www.linkedin.com/in/saksham-sharma-bb8a3a2a8/",
  },
  {
    label: "GitHub",
    value: "View Profile",
    href: "https://github.com/SakshamSharma10989",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="bg-[color:rgba(255,255,255,0.025)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:gap-8">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[color:var(--accent)] sm:text-[0.72rem] sm:tracking-[0.45em]">
            Let&apos;s Connect
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.55rem]">
            Open to software engineering opportunities and thoughtful collaboration.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
            If you&apos;re hiring for a software engineering role or building a
            product that needs strong backend execution, I&apos;d be glad to
            connect and talk through how I can help.
          </p>
        </div>

        <div className="rounded-[1.65rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 sm:rounded-[2rem] sm:p-6">
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/6 bg-[color:var(--panel-strong)] px-4 py-3 transition hover:border-[color:var(--accent)] sm:rounded-[1.5rem] sm:px-5 sm:py-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--warm)]">
                    {link.label}
                  </p>
                  <p className="mt-1.5 text-sm text-white sm:mt-2 sm:text-base">{link.value}</p>
                </div>
                <span className="text-sm text-[color:var(--muted)]">Open</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

