'use client';
import { useEffect, useId, useState, type FormEvent } from 'react';
import {
  emptyState,
  evaluateTool,
  restoreState,
  surfaces,
  type ToolKind,
  type ToolState,
  type ToolResult,
} from '@/lib/calc/ui';
import { number, money } from '@/lib/format';
import { track } from '@/lib/analytics';
import { FormulaBox, ResultCard } from './Modules';
import ShapeDiagram from './ShapeDiagram';
import QuoteCTA from './QuoteCTA';
const human = (text: string) => text.replace(/-/g, ' ').replace(/^./, (x) => x.toUpperCase());
type Props = { kind: ToolKind; slug: string; surface?: string; material?: string };
export default function Calculator({
  kind,
  slug,
  surface = 'asphalt',
  material = 'material',
}: Props) {
  const [state, setState] = useState<ToolState>(emptyState);
  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const id = useId();
  useEffect(() => {
    const raw = new URLSearchParams(location.search).get('inputs');
    if (raw)
      try {
        const shared = restoreState(raw);
        setState(shared);
        setResult(evaluateTool(kind, shared, surface));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Invalid shared inputs.');
      }
  }, [kind, surface]);
  function change(next: ToolState) {
    setState(next);
    setResult(null);
    setError('');
    setMessage('');
  }
  function field(key: string, val: string) {
    change({ ...state, fields: { ...state.fields, [key]: val } });
  }
  function calculate(event: FormEvent) {
    event.preventDefault();
    try {
      const r = evaluateTool(kind, state, surface);
      setResult(r);
      setError('');
      track('calculator_used', slug);
      track('result_viewed', slug);
    } catch (e) {
      setResult(null);
      setError(e instanceof Error ? e.message : 'Check the inputs.');
    }
  }
  const input = (key: string, label: string, unit: string, required = true, help?: string) => (
    <label className="field" key={key}>
      <span>
        {label}
        {!required && <small> Optional</small>}
      </span>
      <div className="input-wrap">
        <input
          name={key}
          type="number"
          step="any"
          min={['waste', 'compaction'].includes(key) ? '0' : undefined}
          value={state.fields[key] ?? ''}
          onChange={(e) => field(key, e.target.value)}
          required={required}
          aria-describedby={help ? `${id}-${key}-help` : undefined}
        />
        <span>{unit}</span>
      </div>
      {help && <small id={`${id}-${key}-help`}>{help}</small>}
    </label>
  );
  const checkbox = (key: string, label: string) => (
    <label className="check">
      <input
        type="checkbox"
        checked={state.fields[key] === 'true'}
        onChange={(e) => field(key, String(e.target.checked))}
      />
      {label}
    </label>
  );
  const cost = kind === 'cost' || kind === 'compare';
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied to clipboard.');
    } catch {
      setMessage('Copy is unavailable in this browser.');
    }
  }
  const share = () => {
    const url = new URL(location.href);
    url.search = '';
    url.searchParams.set('inputs', JSON.stringify(state));
    history.replaceState(null, '', url);
    void copy(url.toString());
  };
  return (
    <div className="calculator-shell" id="calculator">
      <form className="calculator-inputs" onSubmit={calculate}>
        <div className="panel-heading">
          <span className="eyebrow">01 / Your measurements</span>
          <span className="unit-badge">US units</span>
        </div>
        {kind === 'converter' ? (
          <>
            <label className="field">
              <span>Conversion direction</span>
              <select
                value={state.fields.direction ?? 'yards-to-tons'}
                onChange={(e) => field('direction', e.target.value)}
              >
                <option value="yards-to-tons">Cubic yards to short tons</option>
                <option value="tons-to-yards">Short tons to cubic yards</option>
              </select>
            </label>
            {input(
              'amount',
              'Quantity',
              state.fields.direction === 'tons-to-yards' ? 'short tons' : 'yd³',
            )}
            {input(
              'density',
              `${human(material)} density`,
              'short tons/yd³',
              true,
              'Enter the density from your supplier.',
            )}
          </>
        ) : (
          <>
            {state.sections.map((section, index) => (
              <fieldset className="measurement-section" key={index}>
                <legend>Section {index + 1}</legend>
                <div className="field-grid">
                  {(['length', 'width'] as const).map((key) => (
                    <label className="field" key={key}>
                      <span>
                        {key === 'length' ? 'Length' : section.tapered ? 'Start width' : 'Width'}
                      </span>
                      <div className="input-wrap">
                        <input
                          name={`section-${index}-${key}`}
                          type="number"
                          step="any"
                          required
                          value={section[key]}
                          onChange={(e) =>
                            change({
                              ...state,
                              sections: state.sections.map((s, i) =>
                                i === index ? { ...s, [key]: e.target.value } : s,
                              ),
                            })
                          }
                        />
                        <span>ft</span>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="section-options">
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={section.tapered}
                      onChange={(e) =>
                        change({
                          ...state,
                          sections: state.sections.map((s, i) =>
                            i === index ? { ...s, tapered: e.target.checked } : s,
                          ),
                        })
                      }
                    />
                    Tapered width
                  </label>
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={section.sloped}
                      onChange={(e) =>
                        change({
                          ...state,
                          sections: state.sections.map((s, i) =>
                            i === index ? { ...s, sloped: e.target.checked } : s,
                          ),
                        })
                      }
                    />
                    Add slope
                  </label>
                </div>
                {section.tapered && (
                  <label className="field">
                    <span>End width</span>
                    <div className="input-wrap">
                      <input
                        type="number"
                        step="any"
                        required
                        value={section.endWidth}
                        onChange={(e) =>
                          change({
                            ...state,
                            sections: state.sections.map((s, i) =>
                              i === index ? { ...s, endWidth: e.target.value } : s,
                            ),
                          })
                        }
                      />
                      <span>ft</span>
                    </div>
                  </label>
                )}
                {section.sloped && (
                  <div className="field-grid">
                    <label className="field">
                      <span>Grade</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          step="any"
                          required
                          value={section.grade}
                          onChange={(e) =>
                            change({
                              ...state,
                              sections: state.sections.map((s, i) =>
                                i === index ? { ...s, grade: e.target.value } : s,
                              ),
                            })
                          }
                        />
                        <span>%</span>
                      </div>
                    </label>
                    <label className="field">
                      <span>Length measured</span>
                      <select
                        value={section.measured}
                        onChange={(e) =>
                          change({
                            ...state,
                            sections: state.sections.map((s, i) =>
                              i === index
                                ? { ...s, measured: e.target.value as 'flat' | 'slope' }
                                : s,
                            ),
                          })
                        }
                      >
                        <option value="flat">Along flat ground</option>
                        <option value="slope">Along the slope</option>
                      </select>
                    </label>
                  </div>
                )}
                {state.sections.length > 1 && (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() =>
                      change({ ...state, sections: state.sections.filter((_, i) => i !== index) })
                    }
                  >
                    Remove section {index + 1}
                  </button>
                )}
              </fieldset>
            ))}
            <button
              type="button"
              className="add-section"
              disabled={state.sections.length >= 100}
              onClick={() =>
                change({ ...state, sections: [...state.sections, emptyState().sections[0]] })
              }
            >
              ＋ Add another area
            </button>
            <p className="input-hint">
              Divide an irregular driveway into measured sections. Each section adds to the total
              area.
            </p>
          </>
        )}
        {kind !== 'converter' && (
          <div className="panel-heading subheading">
            <span className="eyebrow">02 / {cost ? 'Cost assumptions' : 'Material inputs'}</span>
          </div>
        )}
        {cost ? (
          <>
            <label className="field">
              <span>Cost area tier</span>
              <select
                value={state.fields.tier ?? 'average'}
                onChange={(e) => field('tier', e.target.value)}
              >
                <option value="low">Low cost area</option>
                <option value="average">Average cost area</option>
                <option value="high">High cost area</option>
              </select>
              <small>Regional multipliers require approved source data.</small>
            </label>
            <div className="checks">
              {checkbox('removal', 'Include removal and disposal')}
              {checkbox('base', 'Include base preparation')}
              {checkbox('delivery', 'Include delivery')}
            </div>
            {state.fields.delivery === 'true' && input('loads', 'Truckload count', 'loads')}
            {(surface === 'concrete' || surface === 'slab') && (
              <>
                <div className="field-grid">
                  {input('depth', 'Slab thickness', 'in', false)}
                  {input('waste', 'Waste allowance', '%', false)}
                </div>
                {checkbox('shortLoad', 'Check concrete short-load fee')}
              </>
            )}
            {kind === 'compare' && (
              <fieldset>
                <legend>Surfaces to compare</legend>
                <div className="surface-choices">
                  {surfaces.map((s) => (
                    <label className="check" key={s}>
                      <input
                        type="checkbox"
                        checked={state.surfaces.includes(s)}
                        onChange={(e) =>
                          change({
                            ...state,
                            surfaces: e.target.checked
                              ? [...state.surfaces, s]
                              : state.surfaces.filter((x) => x !== s),
                            selectedSurface:
                              !e.target.checked && state.selectedSurface === s
                                ? (state.surfaces.find((x) => x !== s) ?? s)
                                : state.selectedSurface,
                          })
                        }
                      />
                      {human(s)}
                    </label>
                  ))}
                </div>
                <fieldset>
                  <legend>Surface of interest</legend>
                  <div className="surface-choices">
                    {surfaces
                      .filter((s) => state.surfaces.includes(s))
                      .map((s) => (
                        <label key={s} className="check">
                          <input
                            type="radio"
                            name="surface-of-interest"
                            value={s}
                            checked={state.selectedSurface === s}
                            onChange={() => change({ ...state, selectedSurface: s })}
                          />
                          {human(s)}
                        </label>
                      ))}
                  </div>
                </fieldset>
                <label className="field">
                  <span>Sort results by</span>
                  <select
                    value={state.sort}
                    onChange={(e) =>
                      change({ ...state, sort: e.target.value as 'upfront' | 'annual' })
                    }
                  >
                    <option value="upfront">Lowest upfront cost</option>
                    <option value="annual">Lowest cost per year of life</option>
                  </select>
                </label>
              </fieldset>
            )}
            <p className="data-note">
              Price data not loaded. Cost ranges stay hidden until source data is approved.
            </p>
          </>
        ) : kind === 'sealcoat' ? (
          <div className="field-grid">
            {input('coats', 'Number of coats', 'coats')}
            {input('coverage', 'Label coverage', 'ft²/gal')}
            {input('containerSize', 'Container size', 'gal')}
          </div>
        ) : kind === 'paver' ? (
          <div className="field-grid">
            {input('paverLength', 'Paver length', 'in')}
            {input('paverWidth', 'Paver width', 'in')}
            {input('waste', 'Waste allowance', '%')}
            {input('baseDepth', 'Base depth', 'in')}
            {input('sandDepth', 'Bedding sand depth', 'in')}
            {input('baseDensity', 'Base density', 'short tons/yd³')}
            {input('sandDensity', 'Sand density', 'short tons/yd³')}
            {input('compaction', 'Base compaction allowance', '%')}
          </div>
        ) : kind !== 'converter' ? (
          <>
            <div className="field-grid">
              {input(
                'depth',
                kind === 'layers' ? 'Surface layer depth' : 'Thickness / depth',
                'in',
              )}
              {input('waste', 'Waste allowance', '%', true, 'Enter 0 to exclude waste.')}
            </div>
            {kind === 'layers' && (
              <div className="field-grid">
                {input('baseDepth', 'Base layer depth', 'in')}
                {input('baseDensity', 'Base density', 'short tons/yd³')}
              </div>
            )}
            {kind !== 'concrete' &&
              input(
                'density',
                kind === 'layers' ? 'Surface density' : `${human(material)} density`,
                kind === 'asphalt' ? 'lb/ft³' : 'short tons/yd³',
                true,
                'Use the density provided by your supplier.',
              )}
            {(kind === 'gravel' || kind === 'layers') &&
              input(
                'compaction',
                'Compaction allowance',
                '%',
                true,
                'Enter 0 to exclude compaction allowance.',
              )}
            {kind === 'concrete' && (
              <details className="optional-inputs">
                <summary>
                  Bag quantities <span>Optional</span>
                </summary>
                <div className="field-grid">
                  {input('bagSize', 'Bag weight', 'lb', false)}
                  {input('bagYield', 'Label yield per bag', 'ft³/bag', false)}
                </div>
                <p className="input-hint">The yield printed on the bag determines the bag count.</p>
              </details>
            )}
            <details className="optional-inputs">
              <summary>
                Delivery loads <span>Optional</span>
              </summary>
              {input(
                'capacity',
                'Truck capacity',
                kind === 'concrete' ? 'yd³/load' : 'short tons/load',
                false,
              )}
              <p className="input-hint">
                Enter usable capacity per truckload to calculate the number of loads.
              </p>
            </details>
          </>
        ) : null}
        {!cost && kind !== 'converter' && (
          <p className="input-hint">Use your supplier or product label for material values.</p>
        )}
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <div className="form-actions">
          <button className="button primary" type="submit">
            {cost ? 'Calculate estimate' : 'Calculate quantity'} <span aria-hidden="true">↗</span>
          </button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              change(emptyState());
              history.replaceState(null, '', location.pathname);
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="calculator-output">
        <div className="panel-heading">
          <span className="eyebrow">03 / Your result</span>
          <span className="status-dot">{result ? 'Calculated' : 'Ready for inputs'}</span>
        </div>
        <ResultCard>
          {result ? (
            <>
              <dl className="metrics">
                {result.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>
                      {m.value}
                      <small>{m.unit}</small>
                    </dd>
                  </div>
                ))}
              </dl>
              {!!result.missing?.length && (
                <div className="data-note">
                  <strong>Price data not loaded</strong>
                  <p>
                    {result.missing.map(human).join(', ')}. Verified price ranges and multipliers
                    are required.
                  </p>
                </div>
              )}
              {!!result.rows?.length && (
                <div className="table-scroll">
                  <table>
                    <caption>Estimated surface costs, using the selected assumptions.</caption>
                    <thead>
                      <tr>
                        <th>Surface</th>
                        <th>Estimate</th>
                        <th>Lifespan</th>
                        <th>Cost / year</th>
                        <th>Annual upkeep</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.rows.map((r) => (
                        <tr key={r.name}>
                          <th>{human(r.name)}</th>
                          <td>
                            {money(r.low)}–{money(r.high)}
                          </td>
                          <td>
                            {r.lifespan
                              ? `${number(r.lifespan.low)}–${number(r.lifespan.high)} years`
                              : 'Not loaded'}
                          </td>
                          <td>
                            {r.annual
                              ? `${money(r.annual.low)}–${money(r.annual.high)}`
                              : 'Not loaded'}
                          </td>
                          <td>{r.upkeep.length ? r.upkeep.join('; ') : 'Not loaded'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    Cost per year divides the upfront range by the lifespan range; upkeep is
                    separate.
                  </p>
                </div>
              )}
              {cost && (
                <>
                  <p className="estimate-note">
                    Estimate only. This result is not a contractor quote.
                  </p>
                  <div className="result-assumptions">
                    <strong>Assumptions</strong>
                    <p>
                      Cost tier: {state.fields.tier ?? 'average'}. Removal:{' '}
                      {state.fields.removal === 'true' ? 'included' : 'excluded'}. Base work:{' '}
                      {state.fields.base === 'true' ? 'included' : 'excluded'}. Delivery:{' '}
                      {state.fields.delivery === 'true' ? 'included' : 'excluded'}.
                    </p>
                    {result.assumptions?.map((a) => (
                      <p key={a}>{a}</p>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="empty-result">
              {kind === 'converter' ? (
                <div className="conversion-diagram">Volume × density = weight</div>
              ) : (
                <ShapeDiagram tapered={state.sections.some((section) => section.tapered)} />
              )}
              <h3>
                {cost
                  ? 'Your measured area'
                  : kind === 'converter'
                    ? 'Your converted quantity'
                    : 'Your material quantity'}
              </h3>
              <p>
                {kind === 'converter'
                  ? 'Enter a quantity and material density, then calculate.'
                  : cost
                    ? 'Enter your dimensions to calculate area. Price ranges require verified source data.'
                    : 'Enter your dimensions and material inputs, then calculate.'}
              </p>
              <span className="empty-rule">No sign-up · US units</span>
            </div>
          )}
        </ResultCard>
        {result && (
          <>
            <h3 className="worked-inputs">Worked example from your inputs</h3>
            <FormulaBox>
              <code>{result.formula}</code>
              {result.steps.map((step) => (
                <p key={step}>{step}</p>
              ))}
            </FormulaBox>
            <div className="result-actions">
              <button onClick={() => void copy(result.summary)}>Copy result</button>
              <button onClick={() => window.print()}>Print</button>
              <button onClick={share}>Share link</button>
            </div>
            <p className="input-hint" role="status">
              {message}
            </p>
            <QuoteCTA
              area={result.area}
              surface={kind === 'compare' ? state.selectedSurface : surface}
              slug={slug}
            />
          </>
        )}
        {!result && (
          <div className="output-note">
            <span aria-hidden="true">↳</span>
            <p>
              Every result shows its formula.
              <br />
              Bags, containers, and delivery loads round up.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
