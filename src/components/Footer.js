"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:rounded-3xl sm:p-10 md:p-14">
          <p className="text-sm font-semibold text-accent">
            LET'S CONNECT
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:mt-5 sm:text-base">
            Let's discuss software development opportunities
            and collaborations.
          </p>

          <a
            href="mailto:nripendray48@gmail.com"
            className="mt-7 inline-block rounded-lg bg-accent px-7 py-3 font-semibold text-white transition-opacity hover:opacity-80"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-muted sm:flex-row sm:px-6 sm:text-sm">
          <p>
            © {year} Nripendra. All rights reserved.
          </p>

          <a href="#home" className="hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}