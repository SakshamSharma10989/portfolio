import Section from "./Section";

const skillGroups = [
  { title: "Languages", skills: ["C++", "JavaScript", "Rust"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
  { title: "Tooling", skills: ["Git", "Vercel", "WebSockets"] },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-7">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[color:var(--warm)] sm:text-[0.72rem] sm:tracking-[0.45em]">
            Capability Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl lg:text-[2.5rem]">
            The tools I reach for when products need to move fast.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[color:var(--muted)] sm:mt-5 sm:text-base sm:leading-7">
            My comfort zone sits at the intersection of backend systems, modern
            web apps, and the glue that keeps both predictable in production.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {skillGroups.map((group) => (
            <SkillBlock key={group.title} title={group.title} skills={group.skills} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillBlock({ title, skills }) {
  return (
    <div className="rounded-[1.35rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-4 sm:rounded-[1.55rem] sm:p-5">
      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>

      <ul className="mt-3.5 space-y-2 text-sm leading-5 text-[color:var(--muted)] sm:mt-4 sm:space-y-2.5 sm:leading-6">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-[0.95rem] border border-white/6 bg-[color:var(--panel-strong)] px-3 py-2 sm:rounded-[1.05rem] sm:px-3.5 sm:py-2.5"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

