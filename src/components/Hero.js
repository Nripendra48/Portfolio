
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <p className="mb-4 font-medium text-accent">
          Hello, I'm a Software Developer
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          Building digital experiences that{" "}
          <span className="text-accent">make an impact.</span>
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-muted">
          I build scalable backend systems, modern web interfaces,
          and applications that solve real-world problems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-semibold text-white"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 font-semibold hover:text-accent"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
          {["Python", "Django", "React", "Next.js"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-10">
        <div className="mb-6 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <pre className="overflow-x-auto text-sm leading-8 sm:text-base">
          <code>
            <span className="text-accent">const</span> developer = {"{\n"}
            {"  "}name: "Nripnedra",{"\n"}
            {"  "}role: "Software Engineer",{"\n"}
            {"  "}skills: ["Python", "React","Nextjs","AWS","Lambda","Docker","MySQL"],{"\n"}
            {"  "}passion: "Building","Problem Solving"{"\n"}
            {"};"}
          </code>
        </pre>

        <p className="mt-6 border-t border-border pt-5 text-sm text-muted">
          {"// Turning ideas into working software."}
        </p>
      </div>
    </section>
  );
}
