
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
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-semibold text-accent">WHAT I WORK WITH</p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        My Skills
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="text-lg font-bold">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border px-3 py-2 text-sm text-muted"
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
