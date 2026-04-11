import Section from "./Section";

const highlights = [
  {
    title: "System Thinking",
    description:
      "I like products where the frontend stays simple because the architecture beneath it has been thought through properly.",
  },
  {
    title: "Real-Time Products",
    description:
      "From dashboards to chat systems, I enjoy interfaces that respond instantly and still remain understandable to the user.",
  },
  {
    title: "Execution Speed",
    description:
      "I move comfortably from implementation to iteration, with a focus on shipping clean work rather than piling on complexity.",
  },
];

export default function Highlights() {
  return (
    <Section>
      <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6">
        <div className="max-w-xl">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[color:var(--accent)] sm:text-[0.72rem] sm:tracking-[0.45em]">
            What I Bring
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl lg:text-[2.6rem]">
            Product polish backed by engineering discipline.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 sm:rounded-[1.75rem] sm:p-6"
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)] sm:mt-4 sm:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

