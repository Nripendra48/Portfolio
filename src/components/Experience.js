"use client";

const experiences = [
  {
    company: "Shastriya Education Services",
    role: "Associate Software Engineer",
    location: "Ghaziabad, India",
    duration: "July 2024 – November 2025",
    type: "Full-time",
    description:
      "Worked on developing and maintaining education, learning, and examination platforms using Django REST Framework and Next.js.",
    responsibilities: [
      "Developed RESTful APIs using Django REST Framework and PostgreSQL for education, learning, and examination workflows.",
      "Integrated Razorpay payment APIs and webhook-based status tracking to support secure online fee transactions.",
      "Implemented token-based authentication, role-based permissions, and API throttling to improve application security.",
      "Automated email notifications, result processing, and scheduled background tasks using Celery and Redis.",
      "Developed learning and examination platform features using Django REST Framework and Next.js, integrating frontend workflows with backend APIs.",
      "Containerized application components using Docker and supported deployment, API troubleshooting, and database debugging.",
    ],
    technologies: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Next.js",
      "Razorpay",
      "Celery",
      "Redis",
      "Docker",
    ],
  },
  {
    company: "Shastriya Education Services",
    role: "Python Intern",
    location: "Ghaziabad, India",
    duration: "January 2024 – July 2024",
    type: "Internship",
    description:
      "Contributed to backend development and supported the development of learning platform features.",
    responsibilities: [
      "Contributed to backend API development using Django REST Framework and PostgreSQL for learning platform features.",
      "Assisted in implementing Celery-based asynchronous workflows for email notifications and background tasks.",
      "Participated in code reviews, debugging, API testing, and backend performance optimization.",
    ],
    technologies: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
    ],
  },
];

export default function Experience() {
  return (
    <section
    id="experience"
    className="min-h-screen scroll-mt-20 bg-background px-4 py-16 text-foreground sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Career Journey
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Work Experience
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            My professional journey, the products I've worked on,
            and the technologies I've used to build scalable applications.
          </p>
        </div>

        <div className="relative border-l border-accent/30 pl-8 md:pl-12">
          {experiences.map((experience, index) => (
            <article key={index} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent md:-left-[55px]" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg transition hover:border-accent/50 md:p-8">
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {experience.role}
                    </h2>
                    <p className="mt-2 text-lg font-semibold text-accent">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {experience.location} · {experience.type}
                    </p>
                  </div>

                  <span className="h-fit whitespace-nowrap rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                    {experience.duration}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-muted-foreground">
                  {experience.description}
                </p>

                <h3 className="mb-4 mt-7 font-semibold">
                  Key Responsibilities
                </h3>

                <ul className="space-y-3">
                  {experience.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-7 text-muted-foreground"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}