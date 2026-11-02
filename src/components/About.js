
export default function About() {
  return (
    <section
      id="about"
      className="border-y border-border bg-surface/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-accent">GET TO KNOW ME</p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          About Me
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 leading-8 text-muted">
          <p>
            I'm a software developer passionate about building
            reliable backend services and user-friendly web applications.
          </p>

          <p>
            My interests include REST APIs, database design,
            scalable architectures, and React and Next.js development.
          </p>
        </div>
      </div>
    </section>
  );
}
