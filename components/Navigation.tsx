'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
type Group = { label: string; links: { href: string; label: string }[] };
export default function Navigation({ groups }: { groups: Group[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open === null) return;
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpen(null);
      nav.current?.querySelector<HTMLButtonElement>(`[data-nav-trigger="${open}"]`)?.focus();
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  return (
    <nav
      ref={nav}
      aria-label="Main navigation"
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        )
          setOpen(null);
      }}
    >
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
              <Link key={link.href} href={link.href} onClick={() => setOpen(null)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <Link className="nav-about" href="/about/" onClick={() => setOpen(null)}>
        About
      </Link>
    </nav>
  );
}
