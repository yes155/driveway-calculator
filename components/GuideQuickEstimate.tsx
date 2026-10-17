'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { computeGuideEstimate } from '@/lib/calc/guide';
import { money, number } from '@/lib/format';

type Props = {
  surfaceLabel: string;
  installedLow: number;
  installedHigh: number;
  source: string;
  retrievedOn: string;
  estimatorHref: string;
};

export default function GuideQuickEstimate({
  surfaceLabel,
  installedLow,
  installedHigh,
  source,
  retrievedOn,
  estimatorHref,
}: Props) {
  const [length, setLength] = useState('20');
  const [width, setWidth] = useState('20');
  const id = useId();
  let result: ReturnType<typeof computeGuideEstimate> | null = null;

  try {
    result = computeGuideEstimate(Number(length), Number(width), installedLow, installedHigh);
  } catch {
    // Do not expose an estimate for zero, negative or out-of-range measurements.
  }

  return (
    <section id="quick-estimate" className="guide-quick-estimate" aria-labelledby={id + '-heading'}>
      <div className="guide-quick-intro">
        <div>
          <span className="eyebrow">Quick budget / 01</span>
          <h2 id={id + '-heading'}>Estimate {surfaceLabel} from your dimensions</h2>
          <p>
            Rectangular area only. The published installed range is {money(installedLow)}–
            {money(installedHigh)} per square foot.
          </p>
        </div>
        <span className="unit-badge">US units</span>
      </div>
      <div className="guide-quick-grid">
        <div className="guide-quick-fields">
          <div className="field-grid">
            <label className="field" htmlFor={id + '-length'}>
              <span>Length</span>
              <div className="input-wrap">
                <input
                  id={id + '-length'}
                  type="number"
                  step="any"
                  min="0.01"
                  max="10000"
                  aria-invalid={result === null || undefined}
                  aria-describedby={result === null ? id + '-error' : undefined}
                  value={length}
                  onChange={(event) => setLength(event.target.value)}
                />
                <span>ft</span>
              </div>
            </label>
            <label className="field" htmlFor={id + '-width'}>
              <span>Width</span>
              <div className="input-wrap">
                <input
                  id={id + '-width'}
                  type="number"
                  step="any"
                  min="0.01"
                  max="10000"
                  aria-invalid={result === null || undefined}
                  aria-describedby={result === null ? id + '-error' : undefined}
                  value={width}
                  onChange={(event) => setWidth(event.target.value)}
                />
                <span>ft</span>
              </div>
            </label>
          </div>
          <p className="guide-quick-caveat">
            No demolition, additional base work, delivery, regional adjustment or product-specific
            quantity is added. Check what the installed rate already includes.
          </p>
        </div>
        <div className="guide-quick-result" aria-live="polite" aria-atomic="true">
          {result ? (
            <>
              <span className="eyebrow">Illustrative installed range</span>
              <strong>
                {money(result.low)}–{money(result.high)}
              </strong>
              <span>{number(result.area)} ft² · base rate only</span>
            </>
          ) : (
            <p id={id + '-error'}>
              Enter positive length and width measurements (up to 10,000 ft each).
            </p>
          )}
        </div>
      </div>
      <div className="guide-quick-footer">
        <p>
          Source: {source} · retrieved {retrievedOn}. This is not a local contractor quote.
        </p>
        <Link href={estimatorHref}>Open the detailed {surfaceLabel} estimator →</Link>
      </div>
    </section>
  );
}
