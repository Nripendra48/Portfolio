
"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-14">
          <p className="font-semibold text-accent">LET'S CONNECT</p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            Let's discuss software development opportunities
            and collaborations.
          </p>

          <a
            href="mailto:nripendray48@gmail.com"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-6 text-sm text-muted sm:flex-row">
          <p>
            © {year ?? "2026"} Nripendra. All rights reserved.
          </p>

          <a href="#home" className="hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
