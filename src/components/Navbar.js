import Link from "next/link";

export default function Navbar() {
  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="relative z-50 border-b border-border bg-background/85">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link href="/#home" className="shrink-0 text-lg font-bold sm:text-xl">
          <span className="text-accent">{"<"}</span>
          NYPortfolio
          <span className="text-accent">{" />"}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact */}
        <Link
          href="/#contact"
          className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80 lg:block"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu */}
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-border hover:bg-surface [&::-webkit-details-marker]:hidden"
          >
            <span className="h-0.5 w-5 rounded bg-foreground" />
            <span className="h-0.5 w-5 rounded bg-foreground" />
            <span className="h-0.5 w-5 rounded bg-foreground" />
          </summary>

          <div className="absolute right-0 top-14 z-50 w-64 rounded-xl border border-border bg-background p-3 shadow-xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}