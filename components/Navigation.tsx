'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
type Group = { label: string; links: { href: string; label: string }[] };
export default function Navigation({ groups }: { groups: Group[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open === null && !mobileOpen) return;
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpen(null);
      if (open !== null)
        nav.current?.querySelector<HTMLButtonElement>(`[data-nav-trigger="${open}"]`)?.focus();
      else {
        setMobileOpen(false);
        nav.current?.querySelector<HTMLButtonElement>('.nav-mobile-toggle')?.focus();
      }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open, mobileOpen]);
  return (
    <nav
      ref={nav}
      aria-label="Main navigation"
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setOpen(null);
          setMobileOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="nav-mobile-toggle"
        aria-expanded={mobileOpen}
        aria-controls="navigation-links"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        Menu <span aria-hidden="true">{mobileOpen ? '−' : '+'}</span>
      </button>
      <div className="navigation-links" id="navigation-links" data-mobile-open={mobileOpen}>
        {groups.map((group, index) => (
          <div className="nav-group" key={group.label}>
            <button
              type="button"
              className="nav-trigger"
              data-nav-trigger={index}
              aria-expanded={open === index}
              aria-controls={`main-menu-${index}`}
              onClick={() => setOpen(open === index ? null : index)}
            >
              {group.label}
              <span aria-hidden="true">⌄</span>
            </button>
            <div className="nav-dropdown" id={`main-menu-${index}`} hidden={open !== index}>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(null);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link
          className="nav-about"
          href="/about/"
          onClick={() => {
            setOpen(null);
            setMobileOpen(false);
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
