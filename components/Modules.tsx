import Link from 'next/link';
import { FLAGS } from '@/lib/config';
import type { ReactNode } from 'react';
export function AnswerBlock({ children }: { children: ReactNode }) {
  return <p className="answer-block">{children}</p>;
}
export function FormulaBox({ children }: { children: ReactNode }) {
  return (
    <div className="formula-box">
      <span className="eyebrow">Calculation method</span>
      <div>{children}</div>
    </div>
  );
}
export function QASection({ question, children }: { question: string; children: ReactNode }) {
  return (
    <section className="qa">
      <h2>{question}</h2>
      {children}
    </section>
  );
}
export function RelatedLink({
  href,
  anchor,
  relationshipText,
}: {
  href: string;
  anchor: string;
  relationshipText: string;
}) {
  return (
    <p className="related-link">
      <Link href={href}>
        {anchor} <span aria-hidden="true">↗</span>
      </Link>
      <span>{relationshipText}</span>
    </p>
  );
}
export function SourceNote({ children }: { children: ReactNode }) {
  return (
    <div className="source-note">
      <strong>Sources</strong>
      <p>{children}</p>
    </div>
  );
}
export function LastUpdated({ date }: { date: string }) {
  return (
    <time dateTime={date}>
      {new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      })}
    </time>
  );
}
export function AdSlot() {
  return FLAGS.ads ? (
    <div className="ad-slot" aria-label="Advertisement">
      <span>Advertisement</span>
    </div>
  ) : null;
}
export function AffiliateBox({ children }: { children: ReactNode }) {
  return <aside className="affiliate-box">{children}</aside>;
}
export function Disclosure() {
  return (
    <p className="disclosure">
      Lead and affiliate relationships are explained in the{' '}
      <Link href="/disclosure/">Disclosure</Link>.
    </p>
  );
}
export function ResultCard({ children }: { children: ReactNode }) {
  return (
    <div className="result-card" role="status" aria-live="polite" aria-atomic="true">
      {children}
    </div>
  );
}
export function CalculatorShell({ children }: { children: ReactNode }) {
  return <div className="calculator-shell">{children}</div>;
}
