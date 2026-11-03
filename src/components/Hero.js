export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12"
    >
      <div>
        <p className="mb-4 text-sm font-medium text-accent sm:text-base">
          Hello, I'm a Software Developer
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Building digital experiences that{" "}
          <span className="text-accent">make an impact.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
          I build scalable backend systems, modern web interfaces,
          and applications that solve real-world problems.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80 sm:px-6 sm:text-base"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:text-accent sm:px-6 sm:text-base"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted sm:mt-10 sm:gap-3 sm:text-sm">
          {["Python", "Django", "React", "Next.js"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-2 sm:px-4"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Code Card */}
      <div className="min-w-0 rounded-2xl border border-border bg-surface p-5 shadow-xl sm:rounded-3xl sm:p-8">
        <div className="mb-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <pre className="overflow-x-auto text-xs leading-7 sm:text-sm sm:leading-8">
          <code>{`const developer = {
  name: "Nripendra",
  role: "Software Engineer",
  skills: ["Python","Next.js","AWS"],
  passion: [
    "Building",
    "Problem Solving"
  ]
};`}</code>
        </pre>

        <p className="mt-5 border-t border-border pt-4 text-xs text-muted sm:text-sm">
          {"// Turning ideas into working software."}
        </p>
      </div>
    </section>
  );
}