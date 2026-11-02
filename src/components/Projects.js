
const projects = [
  {
    title: "School Management System",
    description:
      "A platform for managing student records, examinations, results, and administration.",
    tech: ["Django REST Framework", "PostgreSQL", "Next.js"],
    link: "https://github.com/nripendra48",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A messaging application supporting private and group conversations.",
    tech: ["Python", "Django", "SQL"],
    link: "https://github.com/Nripendra48/ChatRoom/tree/new-main",
  },
  {
    title: "Weather API",
    description:
      "A REST API for retrieving and presenting weather information.",
    tech: ["Python", "FastAPI", "REST API"],
    link: "https://github.com/nripendra48",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-border bg-surface/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-accent">SELECTED WORK</p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                {"</>"}
              </div>

              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="mt-3 flex-1 leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-background px-2 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-semibold text-accent hover:underline"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
