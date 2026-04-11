'use client';

import { useState } from "react";
import Container from "./Container";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(7,17,31,0.72)] backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#top" className="group flex flex-col">
            <span className="text-[0.68rem] uppercase tracking-[0.45em] text-[color:var(--accent)]">
              Portfolio
            </span>
            <span className="text-lg font-semibold text-[color:var(--text)] transition group-hover:text-white">
              Saksham Sharma
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-[color:var(--muted)] transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--text)] transition hover:border-[color:var(--accent)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="text-lg">{open ? "X" : "="}</span>
          </button>
        </div>

        {open && (
          <div className="border-t border-[color:var(--line)] pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted)] transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

