import Link from 'next/link';
import { FormulaBox, QASection } from './Modules';
import type { ToolKind } from '@/lib/calc/ui';

export default function DraftGuidance({
  kind,
  costGuide,
  currentUrl,
}: {
  kind: ToolKind | null;
  costGuide: boolean;
  currentUrl: string;
}) {
  if (kind === 'cost' || kind === 'compare' || costGuide) {
    return (
      <QASection question="How do you prepare a cost estimate?">
        <p>
          <strong>Start with measured area and an itemized supplier or contractor quote.</strong>{' '}
          Match each rate to the unit on that quote.
        </p>
        <div className="table-scroll">
          <table>
            <caption>Information to collect for a driveway quote</caption>
            <thead>
              <tr>
                <th>Input</th>
                <th>Record</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Project size</th>
                <td>Length and width in feet; measure separate sections individually.</td>
              </tr>
              <tr>
                <th>Surface work</th>
                <td>Quoted rate and its unit, such as dollars per square foot.</td>
              </tr>
              <tr>
                <th>Preparation</th>
                <td>Separate removal, base work, grading, and repair charges.</td>
              </tr>
              <tr>
                <th>Delivery and minimums</th>
                <td>Delivery fees and any minimum order or project charge.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For material-only quotes, use the supplier’s weight or volume unit. Installed-work rates
          and material-only rates cover different work.
        </p>
        <p>
          Published price ranges are awaiting verified source data.{' '}
          {currentUrl === '/driveway-cost-calculator/' ? (
            'The calculator above calculates measured area while that pricing is unavailable.'
          ) : (
            <>
              The <Link href="/driveway-cost-calculator/">Driveway Cost Calculator</Link> calculates
              measured area while that pricing is unavailable.
            </>
          )}
        </p>
      </QASection>
    );
  }
  if (!kind) return null;
  const rows: [string, string, string][] =
    kind === 'converter'
      ? [
          ['Quantity', 'yd³ or short tons', 'Choose the conversion direction.'],
          ['Material density', 'short tons/yd³', 'Use the value supplied for your material.'],
        ]
      : [
          ['Length and width', 'ft', 'Measure each section. For a taper, enter both end widths.'],
          ...(kind === 'sealcoat'
            ? ([
                ['Coverage', 'ft²/gal', 'Use the coverage rate printed on the product label.'],
                ['Coats', 'count', 'Enter the number of coats in your plan.'],
                [
                  'Container size',
                  'gal',
                  'Enter the amount in one container to calculate container count.',
                ],
              ] as [string, string, string][])
            : kind === 'paver'
              ? ([
                  ['Paver dimensions', 'in', 'Enter the length and width of one paver.'],
                  [
                    'Base and bedding',
                    'in; short tons/yd³',
                    'Use your planned depths and supplier densities.',
                  ],
                ] as [string, string, string][])
              : ([
                  ['Depth', 'in', 'Enter your planned material thickness.'],
                  ...(kind === 'concrete'
                    ? []
                    : [
                        [
                          'Density',
                          kind === 'asphalt' ? 'lb/ft³' : 'short tons/yd³',
                          'Get the density for this material from your supplier.',
                        ],
                      ]),
                ] as [string, string, string][])),
          ...(kind === 'sealcoat'
            ? []
            : ([['Allowances', '%', 'Enter your project allowance; enter 0 to exclude it.']] as [
                string,
                string,
                string,
              ][])),
          ...(kind === 'concrete'
            ? ([
                [
                  'Bag yield (optional)',
                  'ft³/bag',
                  'Use the yield on the bag to calculate bag count.',
                ],
              ] as [string, string, string][])
            : []),
        ];
  return (
    <QASection question="Which inputs does this calculator use?">
      <p>
        <strong>Your measurements and supplier values determine the result.</strong> Material values
        start blank. Enter the density, yield, or coverage for the product you are ordering.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Input units and where to find each value</caption>
          <thead>
            <tr>
              <th>Input</th>
              <th>Unit</th>
              <th>How to enter it</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, unit, note]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{unit}</td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {kind !== 'converter' && kind !== 'sealcoat' && kind !== 'paver' && (
        <FormulaBox>
          Volume in cubic yards = area in square feet × (depth in inches ÷ 12) ÷ 27. Waste and
          compaction allowances apply only when entered.
        </FormulaBox>
      )}
    </QASection>
  );
}
