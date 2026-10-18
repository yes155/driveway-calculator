'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { computeArea } from '@/lib/calc';
import { number } from '@/lib/format';

const nextTools = [
  { key: 'asphalt', label: 'Asphalt tons', href: '/asphalt-calculator/' },
  { key: 'concrete', label: 'Concrete volume', href: '/concrete-calculator/' },
  { key: 'gravel', label: 'Gravel quantity', href: '/gravel-driveway-calculator/' },
  { key: 'paver', label: 'Paver count', href: '/paver-calculator/' },
  { key: 'cost', label: 'Installed driveway cost', href: '/driveway-cost-calculator/' },
];

/** A real rectangular-area check, not a cost or material-order estimate. */
export default function HeroAreaCheck() {
  const [length, setLength] = useState('20');
  const [width, setWidth] = useState('20');
  const id = useId();
  const [nextTool, setNextTool] = useState('asphalt');
  const next = nextTools.find((tool) => tool.key === nextTool)!;
  let area: number | null = null;

  try {
    area = computeArea([
      {
        length: Number(length),
        startWidth: Number(width),
        endWidth: Number(width),
        grade: 0,
        measured: 'flat',
      },
    ]);
  } catch {
    // Empty, non-positive and out-of-bounds inputs have no displayed result.
  }

  return (
    <section className="hero-area-check" aria-labelledby={id + '-heading'}>
      <div className="hero-area-heading">
        <span className="eyebrow">Quick area check</span>
        <span className="hero-area-unit">ft → ft²</span>
      </div>
      <h2 id={id + '-heading'}>Rectangular driveway area</h2>
      <p>Enter length and width in feet.</p>
      <div className="hero-area-fields">
        <label htmlFor={id + '-length'}>
          Length <span>(ft)</span>
          <input
            id={id + '-length'}
            type="number"
            inputMode="decimal"
            min="0.01"
            max="10000"
            step="any"
            aria-invalid={area === null || undefined}
            aria-describedby={area === null ? id + '-error' : undefined}
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
        </label>
        <label htmlFor={id + '-width'}>
          Width <span>(ft)</span>
          <input
            id={id + '-width'}
            type="number"
            inputMode="decimal"
            min="0.01"
            max="10000"
            step="any"
            aria-invalid={area === null || undefined}
            aria-describedby={area === null ? id + '-error' : undefined}
            value={width}
            onChange={(event) => setWidth(event.target.value)}
          />
        </label>
      </div>
      <div className="hero-area-result" aria-live="polite" aria-atomic="true">
        {area !== null ? (
          <>
            <span className="eyebrow">Calculated surface area</span>
            <div className="hero-area-number">
              <strong>{number(area)}</strong> <span>ft²</span>
            </div>
            <span className="hero-area-formula">
              {number(Number(length))} ft × {number(Number(width))} ft
            </span>
          </>
        ) : (
          <p id={id + '-error'} role="status">
            Enter positive dimensions up to 10,000 ft each.
          </p>
        )}
      </div>
      <div className="hero-area-next">
        <label className="hero-next-choice" htmlFor={id + '-next'}>
          Next calculation
          <select
            id={id + '-next'}
            value={nextTool}
            onChange={(event) => setNextTool(event.target.value)}
          >
            {nextTools.map((tool) => (
              <option value={tool.key} key={tool.key}>
                {tool.label}
              </option>
            ))}
          </select>
        </label>
        {area !== null ? (
          <Link href={`${next.href}?${new URLSearchParams({ length, width })}`}>
            Continue with these measurements <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <span className="hero-next-disabled">Enter valid measurements to continue</span>
        )}
        <p>Area only. Check depth, material values and price scope in the full tool.</p>
      </div>
    </section>
  );
}
