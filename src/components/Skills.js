
const skillGroups = [
  {
    title: "Backend Development",
    skills: ["Python", "Django REST Framework", "FastAPI", "REST APIs"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Database & Infrastructure",
    skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Git"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
    >
      <p className="text-sm font-semibold text-accent">
        WHAT I WORK WITH
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        My Skills
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 sm:rounded-2xl sm:p-6"
          >
            <h3 className="text-lg font-bold">
              {group.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border px-3 py-2 text-xs text-muted sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}