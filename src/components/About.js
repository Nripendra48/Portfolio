export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-border bg-surface/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold text-accent">
          GET TO KNOW ME
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          About Me
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
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