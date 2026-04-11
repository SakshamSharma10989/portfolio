import Image from "next/image";
import Section from "./Section";

const projects = [
  {
    title: "ATS Resume Analyzer",
    description:
      "An ATS-focused platform that analyzes resumes, scores matches, and gives structured feedback for stronger applications.",
    stack: ["React", "Node.js", "MongoDB", "NLP"],
    image: "/projects/ats.png",
    liveUrl: "https://cvision-ats.vercel.app/",
    codeUrl: "https://github.com/SakshamSharma10989/cvision",
  },
  {
    title: "ChatApp",
    description:
      "A real-time chat platform with group conversations, media sharing, and responsive socket-powered messaging.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/projects/chatapp.png",
    liveUrl: "",
    codeUrl: "https://github.com/SakshamSharma10989/Chatverse",
  },
  {
    title: "AI Course Generator",
    description:
      "An AI learning platform that generates personalized course paths, quizzes, and guided study plans.",
    stack: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "/projects/coursegen.png",
    liveUrl: "https://ai-course-gen-peach.vercel.app/",
    codeUrl: "https://github.com/SakshamSharma10989/ai_course_gen",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-[color:rgba(255,255,255,0.02)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[color:var(--accent)] sm:text-[0.72rem] sm:tracking-[0.45em]">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Projects with strong backend logic and clear user flows.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[color:var(--muted)] sm:leading-7">
          These projects show how I approach engineering: practical product
          thinking, dependable systems, and implementation choices grounded in
          actual user needs.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--panel)] transition duration-300 hover:-translate-y-1 hover:border-white/20 lg:rounded-[2rem]"
          >
            <div className="relative h-44 overflow-hidden sm:h-48 lg:h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)] sm:mt-4 sm:leading-7">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-white"
                  >
                    Live Preview
                  </a>
                ) : null}
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[color:var(--muted)] transition hover:border-[color:var(--warm)] hover:text-white"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

