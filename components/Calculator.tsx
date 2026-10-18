'use client';
import { useEffect, useId, useState, useRef, type FormEvent } from 'react';
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
import { computeArea } from '@/lib/calc';
import { initialToolState, priceBook, hasPrice, sealcoatPresets, defaultBook } from '@/lib/data';
const human = (text: string) => text.replace(/-/g, ' ').replace(/^./, (x) => x.toUpperCase());
type Props = { kind: ToolKind; slug: string; surface?: string; material?: string };
export default function Calculator({
  kind,
  slug,
  surface = 'asphalt',
  material = 'material',
}: Props) {
  const [state, setState] = useState<ToolState>(() => initialToolState(kind, material));
  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [expandedInputs, setExpandedInputs] = useState(false);
  const id = useId();
  const outputRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<HTMLDivElement>(null);
  function editMeasurements() {
    const fields = fieldsRef.current;
    if (!fields) return;
    fields.scrollTop = 0;
    fields.querySelector<HTMLInputElement>('input[type="number"]')?.focus({ preventScroll: true });
    fields.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }
  const currentPrice = priceBook[surface];
  const pricingAvailable = hasPrice(surface);
  const densityKey =
    material === 'pea gravel'
      ? 'peaGravelDensity'
      : material === 'rock'
        ? 'rockDensity'
        : material === 'crusher run'
          ? 'crusherRunDensity'
          : material === 'road base'
            ? 'roadBaseDensity'
            : material === 'asphalt'
              ? 'asphaltDensity'
              : null;
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const raw = params.get('inputs');
    if (raw)
      try {
        const shared = restoreState(raw);
        setState(shared);
        setResult(evaluateTool(kind, shared, surface));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Invalid shared inputs.');
      }
    else if (params.has('length') && params.has('width') && kind !== 'converter') {
      try {
        const length = params.get('length')!,
          width = params.get('width')!;
        computeArea([
          {
            length: Number(length),
            startWidth: Number(width),
            endWidth: Number(width),
            grade: 0,
            measured: 'flat',
          },
        ]);
        setState((current) => ({
          ...current,
          sections: [{ ...current.sections[0], length, width }],
        }));
        // Only measurements transfer. Material inputs and scope still need checking.
      } catch {
        setError('The transferred measurements are invalid. Enter your dimensions below.');
      }
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
  function calculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = form.querySelector<HTMLInputElement | HTMLSelectElement>(':invalid');
    if (invalid) {
      let parent = invalid.parentElement;
      while (parent && parent !== form) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        parent = parent.parentElement;
      }
      invalid.scrollIntoView({ block: 'nearest' });
      form.reportValidity();
      return;
    }
    try {
      const r = evaluateTool(kind, state, surface);
      setResult(r);
      setError('');
      track('calculator_used', slug);
      track('result_viewed', slug);
      requestAnimationFrame(() => {
        outputRef.current?.focus({ preventScroll: true });
        if (matchMedia('(max-width: 940px)').matches)
          outputRef.current?.scrollIntoView({
            behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start',
          });
      });
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
        onChange={(e) => {
          if (e.target.checked && (key === 'removal' || key === 'base')) {
            const low = currentPrice?.[key + 'Low'],
              high = currentPrice?.[key + 'High'];
            change({
              ...state,
              fields: {
                ...state.fields,
                [key]: 'true',
                [key + 'Low']: low?.verified && low.value !== null ? String(low.value) : '',
                [key + 'High']: high?.verified && high.value !== null ? String(high.value) : '',
              },
            });
          } else field(key, String(e.target.checked));
        }}
      />
      {label}
    </label>
  );
  const cost = kind === 'cost' || kind === 'compare';
  const selectedRow =
    result?.rows?.find((row) => row.name === state.selectedSurface) ?? result?.rows?.[0];
  const primaryMetric =
    kind === 'compare' && selectedRow
      ? {
          label: `${human(selectedRow.name)} installed estimate`,
          value: `${money(selectedRow.low)}–${money(selectedRow.high)}`,
          unit: 'USD',
        }
      : kind === 'converter' && state.fields.direction !== 'tons-to-yards'
        ? result?.metrics.find((metric) => metric.label === 'Weight')
        : result?.metrics[0];
  const secondaryMetrics = result?.metrics.filter((metric) => metric !== primaryMetric) ?? [];

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
    <div className="calculator-shell" id="calculator" data-compact-workspace="true">
      <form
        className="calculator-inputs"
        onSubmit={calculate}
        noValidate
        aria-label="Calculator inputs"
      >
        <div
          ref={fieldsRef}
          id={id + '-fields'}
          className={'calculator-fields' + (expandedInputs ? ' inputs-expanded' : '')}
          role="group"
          tabIndex={0}
          aria-label="Measurements and assumptions; scroll for more inputs"
        >
          <div className="panel-heading">
            <span className="eyebrow">
              01 /{' '}
              {surface === 'repair'
                ? 'Patch area'
                : surface === 'concrete-repair'
                  ? 'Resurfacing area'
                  : 'Your measurements'}
            </span>
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
                  <details className="geometry-options optional-inputs">
                    <summary>
                      Taper or slope <span>Optional</span>
                    </summary>
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
                  </details>
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
            <details
              className="optional-inputs cost-settings"
              open={kind === 'compare' ? true : undefined}
            >
              <summary>
                Rates and additional work <span>Editable</span>
              </summary>
              <p className="benchmark-note" data-price-basis>
                <strong>Price basis: </strong>
                {kind !== 'compare' && state.fields.customRates === 'true'
                  ? 'Your quoted unit rates'
                  : kind === 'compare'
                    ? 'Published benchmark for each surface'
                    : 'Published benchmark'}
                . No regional adjustment.{' '}
                <a href="/methodology/#section-how-are-regional-prices-handled">Methodology</a>{' '}
                explains regional pricing.
              </p>
              {kind !== 'compare' && (
                <>
                  <p className="benchmark-note">
                    {pricingAvailable ? (
                      <>
                        Reference: {currentPrice.installedLow.source}. $
                        {currentPrice.installedLow.value}–${currentPrice.installedHigh.value}/ft².
                        Retrieved {currentPrice.installedLow.retrievedOn}.
                      </>
                    ) : (
                      'Published pricing is unavailable for this scope. Measure area or enter an itemized quote.'
                    )}
                  </p>
                  {checkbox('customRates', 'Use my quoted unit rates')}
                  {state.fields.customRates === 'true' && (
                    <div className="field-grid">
                      {input('unitLow', 'Quoted low rate', 'USD/ft²')}
                      {input('unitHigh', 'Quoted high rate', 'USD/ft²')}
                    </div>
                  )}
                </>
              )}
              <details className="optional-inputs">
                <summary>
                  Additional quoted work <span>Optional</span>
                </summary>
                <p className="input-hint">
                  Add only work excluded from the installed range. Removal and ordinary base work
                  already included in a quote stay excluded here.
                </p>
                {checkbox('removal', 'Add separate removal and disposal')}
                {state.fields.removal === 'true' && (
                  <div className="field-grid">
                    {input('removalLow', 'Removal low rate', 'USD/ft²', true)}
                    {input('removalHigh', 'Removal high rate', 'USD/ft²', true)}
                  </div>
                )}
                {checkbox('base', 'Add separate base preparation')}
                {state.fields.base === 'true' && (
                  <div className="field-grid">
                    {input('baseLow', 'Additional base low rate', 'USD/ft²', true)}
                    {input('baseHigh', 'Additional base high rate', 'USD/ft²', true)}
                  </div>
                )}
                {checkbox('delivery', 'Add separately quoted delivery')}
                {state.fields.delivery === 'true' && (
                  <div className="field-grid">
                    {input('loads', 'Truckload count', 'loads')}
                    {input('deliveryFee', 'Quoted delivery fee', 'USD/load')}
                  </div>
                )}
                {(surface === 'concrete' || surface === 'slab') && (
                  <>
                    <div className="field-grid">
                      {input('depth', 'Slab thickness', 'in', false)}
                      {input('waste', 'Concrete contingency', '%', false)}
                    </div>
                    {checkbox('shortLoad', 'Check quoted concrete short-load fee')}
                    {state.fields.shortLoad === 'true' && (
                      <div className="field-grid">
                        {input('minimumOrder', 'Supplier minimum', 'yd³')}
                        {input('shortLoadFee', 'Quoted short-load fee', 'USD')}
                      </div>
                    )}
                  </>
                )}
              </details>
              {kind !== 'compare' &&
                ['asphalt', 'overlay', 'asphalt-replacement'].includes(surface) && (
                  <details className="optional-inputs">
                    <summary>
                      Asphalt material quantity <span>Optional</span>
                    </summary>
                    <div className="field-grid">
                      {input('depth', 'Planned asphalt thickness', 'in', false)}
                      {input('density', 'Producer mix density', 'lb/ft³', false)}
                      {input('waste', 'Quantity allowance', '%', false)}
                    </div>
                    <p className="input-hint">
                      Enter thickness and producer density together. These calculate tonnage
                      separately; they do not invent a price adjustment.
                    </p>
                  </details>
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
              <p className="input-hint">
                Estimate only. Installed work and material-only prices cover different scopes.
              </p>
            </details>
          ) : kind === 'sealcoat' ? (
            <>
              <label className="field">
                <span>Product coverage reference</span>
                <select
                  value={state.fields.product ?? 'custom'}
                  onChange={(e) => {
                    const p = sealcoatPresets.find((p) => p.id === e.target.value);
                    change({
                      ...state,
                      fields: {
                        ...state.fields,
                        product: e.target.value,
                        coverage: p?.selectedCoverageSqFtPerGallon
                          ? String(p.selectedCoverageSqFtPerGallon)
                          : '',
                        coats: p?.coats ? String(p.coats) : '',
                        containerSize: p?.containerGallons ? String(p.containerGallons) : '',
                      },
                    });
                  }}
                >
                  <option value="custom">Enter my product label values</option>
                  {sealcoatPresets.map((p) => (
                    <option value={p.id} key={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <small>
                  Coverage is per coat. Named references differ by surface condition and product.
                  Check your current container label; lower published coverage is used for planning.
                </small>
              </label>
              <div className="field-grid">
                {input('coats', 'Number of coats', 'coats')}
                {input('coverage', 'Label coverage', 'ft²/gal')}
                {input('containerSize', 'Container size', 'gal')}
              </div>
            </>
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
              {densityKey && defaultBook[densityKey]?.verified && (
                <p className="input-hint">
                  Reference: {defaultBook[densityKey].source}. {defaultBook[densityKey].scope} Every
                  value stays editable.
                </p>
              )}
              {(material === 'gravel' || kind === 'layers') && (
                <button
                  className="text-button"
                  type="button"
                  onClick={() => field('density', String(defaultBook.crushedStoneDensity.value))}
                >
                  Use Two Rivers 5/8-inch crushed-stone reference: 1.4 short tons/yd³
                </button>
              )}
              {material === 'asphalt millings' && (
                <p className="input-hint">
                  Enter a supplier density matching the measured material condition. Stockpile
                  density and compacted thickness describe different volumes.
                </p>
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
                  <button
                    type="button"
                    className="text-button"
                    onClick={() =>
                      change({
                        ...state,
                        fields: {
                          ...state.fields,
                          bagSize: '80',
                          bagYield: String(defaultBook.bagYield.value),
                        },
                      })
                    }
                  >
                    Use QUIKRETE Concrete Mix 1101 · 80 lb bag reference
                  </button>
                  <div className="field-grid">
                    {input(
                      'bagSize',
                      'Bag weight',
                      'lb',
                      false,
                      'Weight alone does not set yield. Enter the matching bag-label yield.',
                    )}
                    {input('bagYield', 'Label yield per bag', 'ft³/bag', false)}
                  </div>
                  <p className="input-hint">
                    The yield printed on the bag determines the bag count.
                  </p>
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
        </div>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <div className="input-scroll-note">
          <span>{expandedInputs ? 'All inputs visible' : 'More inputs and settings ↕'}</span>
          <button
            type="button"
            aria-expanded={expandedInputs}
            aria-controls={id + '-fields'}
            onClick={() => setExpandedInputs(!expandedInputs)}
          >
            {expandedInputs ? 'Compact view' : 'Show all inputs'}
          </button>
        </div>
        <div className="form-actions" aria-label="Calculation actions">
          <button className="button primary" type="submit">
            {cost
              ? pricingAvailable || state.fields.customRates === 'true' || kind === 'compare'
                ? 'Calculate estimate'
                : 'Calculate area'
              : 'Calculate quantity'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              change(initialToolState(kind, material));
              history.replaceState(null, '', location.pathname);
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <div
        className="calculator-output"
        ref={outputRef}
        tabIndex={-1}
        role="region"
        aria-label="Calculation result"
      >
        <div className="panel-heading">
          <span className="eyebrow">03 / Your result</span>
          <span className="status-dot">
            {result
              ? result.missing?.length
                ? 'Pricing incomplete'
                : cost
                  ? 'Estimate calculated'
                  : 'Quantity calculated'
              : 'Ready for inputs'}
          </span>
        </div>
        <ul className="workspace-attributes" aria-label="Calculator features">
          <li>US units</li>
          <li>{cost ? 'Editable rates' : 'Editable inputs'}</li>
          <li>Visible formula</li>
        </ul>
        <ResultCard>
          {result ? (
            <>
              <dl className="metrics primary-metric">
                {(primaryMetric ? [primaryMetric] : []).map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>
                      {m.value}
                      <small>{m.unit}</small>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="result-measurements">
                {result.area !== undefined ? (
                  <span>
                    {state.sections.length === 1 &&
                    !state.sections[0].tapered &&
                    !state.sections[0].sloped
                      ? `${state.sections[0].length} × ${state.sections[0].width} ft · `
                      : `${state.sections.length} measured section${state.sections.length === 1 ? '' : 's'} · `}
                    {number(result.area)} ft²
                  </span>
                ) : (
                  <span>Conversion from your entered quantity and density</span>
                )}
                <button type="button" onClick={editMeasurements}>
                  Edit {kind === 'converter' ? 'inputs' : 'measurements'}
                </button>
              </div>
              <div className="result-actions result-actions-primary">
                <button onClick={() => void copy(result.summary)}>Copy result</button>
                <button onClick={() => window.print()}>Print</button>
                <button onClick={share}>Share link</button>
              </div>
              {message && (
                <p className="input-hint" role="status">
                  {message}
                </p>
              )}
              {!!result.missing?.length && (
                <div className="data-note">
                  <strong>Price data not loaded</strong>
                  <p>
                    {result.missing.map(human).join(', ')}. The available measurements remain
                    visible; missing price components are excluded from estimates.
                  </p>
                </div>
              )}
              {cost && (
                <p className="estimate-note">
                  Estimate only. This result is not a contractor quote.
                </p>
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
                  ? pricingAvailable || kind === 'compare'
                    ? 'Estimated installed cost'
                    : 'Your measured area'
                  : kind === 'converter'
                    ? 'Your converted quantity'
                    : 'Your material quantity'}
              </h3>
              <p>
                {kind === 'converter'
                  ? 'Enter a quantity and material density, then calculate.'
                  : cost
                    ? pricingAvailable || kind === 'compare'
                      ? 'Enter your dimensions to estimate installed cost using named published ranges.'
                      : 'Enter your dimensions to calculate area. Pricing is unavailable for this scope.'
                    : 'Enter your dimensions and material inputs, then calculate.'}
              </p>
              <span className="empty-rule">No sign-up · US units</span>
            </div>
          )}
        </ResultCard>
        {!result && (
          <div className="output-note">
            <span aria-hidden="true">↳</span>
            <p>
              Every result shows its formula.
              <br />
              {cost
                ? 'The range includes the displayed scope and selected extras.'
                : 'Bags, containers, and delivery loads round up.'}
            </p>
          </div>
        )}
      </div>
      {result && (
        <section className="calculator-details" aria-label="Result details">
          {secondaryMetrics.length > 0 && (
            <details className="result-explanation secondary-metrics">
              <summary>{cost ? 'Area and cost breakdown' : 'Area and quantity breakdown'}</summary>
              <dl className="metrics">
                {secondaryMetrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>
                      {m.value}
                      <small>{m.unit}</small>
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
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
                      <th>
                        {r.name === 'stamped-concrete' ? 'Basic stamped concrete' : human(r.name)}
                      </th>
                      <td>
                        {money(r.low)}–{money(r.high)}
                      </td>
                      <td>
                        {r.lifespan
                          ? `${number(r.lifespan.low)}–${number(r.lifespan.high)} years`
                          : 'Not available'}
                      </td>
                      <td>
                        {r.annual
                          ? `${money(r.annual.low)}–${money(r.annual.high)}`
                          : 'Not available'}
                      </td>
                      <td>{r.upkeep.length ? r.upkeep.join('; ') : 'Not available'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Cost per year divides the upfront range by the lifespan range; upkeep is separate.
              </p>
            </div>
          )}
          {cost && (
            <details className="result-assumptions result-explanation">
              <summary>Price basis and included work</summary>
              <p>
                Price basis:{' '}
                {kind !== 'compare' && state.fields.customRates === 'true'
                  ? 'your quoted rates'
                  : 'published benchmark'}
                . No regional adjustment. Removal:{' '}
                {state.fields.removal === 'true' ? 'included' : 'excluded'}. Base work:{' '}
                {state.fields.base === 'true' ? 'included' : 'excluded'}. Delivery:{' '}
                {state.fields.delivery === 'true' ? 'included' : 'excluded'}.
              </p>
              {result.assumptions?.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </details>
          )}
          <details className="result-explanation">
            <summary>Formula and calculation steps</summary>
            <h3 className="worked-inputs">Worked example from your inputs</h3>
            <FormulaBox>
              <code>{result.formula}</code>
              {result.steps.map((step) => (
                <p key={step}>{step}</p>
              ))}
            </FormulaBox>
          </details>
          <QuoteCTA
            area={result.area}
            surface={kind === 'compare' ? state.selectedSurface : surface}
            slug={slug}
          />
        </section>
      )}
    </div>
  );
}
