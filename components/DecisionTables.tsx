import Link from 'next/link';
import prices from '@/data/prices.json';
import productPresets from '@/data/product-presets.json';
import research from '@/data/research/register.json';
import sources from '@/data/sources.json';
import { computeCost } from '@/lib/calc';
import { money, rateMoney } from '@/lib/format';

function sourceLink(id: string) {
  const source = sources.find((item) => item.id === id);
  return source ? (
    <a href={source.url} rel="noopener noreferrer" target="_blank">
      {source.name}
    </a>
  ) : (
    'Source unavailable'
  );
}

export function PaverMaterialDecision() {
  const variants = [
    { name: 'Concrete pavers', item: 'paversConcreteInstalled' },
    { name: 'Brick pavers', item: 'paversBrickInstalled' },
    { name: 'Natural stone pavers', item: 'paversStoneInstalled' },
  ];
  const generic = prices.pavers;
  return (
    <section className="reference-panel">
      <h2>How do installed paver costs differ by material?</h2>
      <p>
        <strong>Compare named material ranges before treating all pavers as one product.</strong>{' '}
        Angi gives separate installed driveway benchmarks; the site's general paver cost estimator
        instead uses HomeGuide's generic {rateMoney(generic.installedLow.value!)}–
        {rateMoney(generic.installedHigh.value!)} per square foot. They are different source bases.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Angi material-specific installed driveway benchmarks; 400 ft² illustration</caption>
          <thead>
            <tr>
              <th>Paver material</th>
              <th>Installed / ft²</th>
              <th>20 × 20 ft example</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => {
              const observation = research.observations.find(
                (o) => o.item === variant.item && o.sourceId === 'surfaces-angi-pavers',
              );
              if (!observation || observation.low === null || observation.high === null)
                return (
                  <tr key={variant.item}>
                    <th>{variant.name}</th>
                    <td colSpan={2}>Material-specific rate not verified</td>
                  </tr>
                );
              const example = computeCost({
                area: 400,
                unit: { low: observation.low, high: observation.high },
                tier: 1,
                extras: [],
              });
              return (
                <tr key={variant.item}>
                  <th>{variant.name}</th>
                  <td>{rateMoney(observation.low)}–{rateMoney(observation.high)}</td>
                  <td>{example ? `${money(example.low)}–${money(example.high)}` : 'Unavailable'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>
        Select the product and driveway-rated installation specification before requesting a
        matching bid. The broader HomeGuide benchmark above does not automatically change when a
        specific material is chosen. <Link href="/paver-calculator/">Calculate paver and base quantities</Link> separately.
      </p>
      <p className="source-caption">Material-specific ranges: {sourceLink('surfaces-angi-pavers')}. General installed benchmark: {sourceLink('surfaces-homeguide-pavers')}.</p>
    </section>
  );
}

export function SealerProductDecision() {
  const ids = ['latex-ultra-smooth', 'latex-ultra-rough', 'henry200', 'master-ultra'];
  const captions: Record<string, string> = {
    'latex-ultra-smooth': 'Previously sealed or smoother asphalt',
    'latex-ultra-rough': 'Rough, porous or never-sealed asphalt',
    henry200: 'Henry linked technical-sheet basis; verify current pail',
    'master-ultra': 'Ready-mixed product; container size must be supplied',
  };
  const productNames: Record<string, string> = {
    'latex-ultra-smooth': 'Latex-ite Ultra Shield · smooth',
    'latex-ultra-rough': 'Latex-ite Ultra Shield · rough',
    henry200: 'Henry 200 E-Z Stir',
    'master-ultra': 'SealMaster MasterSeal Ultra',
  };
  return (
    <section className="reference-panel">
      <h2>Which named sealer label matches the surface and coat plan?</h2>
      <p>
        <strong>Choose a compatible named product first, then calculate its gallons.</strong>{' '}
        Coverage differs by substrate and by coat count; the table is not a performance ranking.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Named asphalt sealer label references, per coat</caption>
          <thead><tr><th>Product / surface</th><th>Stated coverage per coat</th><th>Coats</th><th>Decision check</th></tr></thead>
          <tbody>
            {productPresets.filter((item) => ids.includes(item.id)).map((item) => {
              const gallons = item.containerGallons;
              const low = gallons ? item.coverageLowSqFtPerContainer : item.coverageLowSqFtPerGallon;
              const high = gallons ? item.coverageHighSqFtPerContainer : item.coverageHighSqFtPerGallon;
              return (
                <tr key={item.id}>
                  <th>{productNames[item.id]}</th>
                  <td>{low !== null && high !== null ? `${Math.round(low)}–${Math.round(high)} ft²/${gallons ? `${gallons}-gal pail` : 'gal'}` : 'Verify current label'}</td>
                  <td>{item.coats ?? 'Check label'}</td>
                  <td>{captions[item.id]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>
        Henry's linked technical sheet reports 250–400 ft² per 5-gallon pail for 1 coat, while
        its product page uses a different upper bound. Verify the actual pail instructions.
        Product-label coverage is not the same as an annual cost or a warranty.
        {' '}<Link href="/sealcoat-calculator/">Calculate gallons and containers</Link>.
      </p>
      <p className="source-caption">Manufacturer references: {sourceLink('defaults-latex-ultra')}; {sourceLink('defaults-henry-he200')}; {sourceLink('defaults-master-ultra')}.</p>
    </section>
  );
}

export function CrackFillerDecision() {
  const coverage = research.observations.find(
    (o) => o.item === 'crackFillCoverageMasterAcrylic' && o.sourceId === 'defaults-master-crack',
  );
  const patch = research.observations.find(
    (o) => o.item === 'crackFillCoverageRustPatch' && o.sourceId === 'defaults-rust-crack',
  );
  return (
    <section className="reference-panel">
      <h2>Which filler fits the crack rather than the product name?</h2>
      <p><strong>Measure the crack and check the surface first.</strong> These manufacturer
        references describe different repair forms; the coverage units are not interchangeable.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Product-specific selection facts, not a tested best-product ranking</caption>
          <thead><tr><th>Named product</th><th>Verified label constraint / coverage</th><th>When to investigate it</th></tr></thead>
          <tbody>
            <tr><th>Latex-ite 2X Premium Blacktop Crack Filler</th><td>Asphalt cracks up to ½ inch wide; no verified linear-foot yield in the reviewed record</td><td>Measured narrow asphalt cracks; inspect label weather and preparation limits</td></tr>
            <tr><th>SealMaster Acrylic Crack Filler</th><td>{coverage && coverage.low !== null && coverage.high !== null ? `${coverage.low}–${coverage.high} linear ft/US gal; cross-section unspecified` : 'Named coverage unavailable'}</td><td>Confirm compatible surface, width and depth before treating the range as an order quantity</td></tr>
            <tr><th>Rust-Oleum EpoxyShield Blacktop Patch &amp; Crack Filler</th><td>{patch && patch.low !== null ? `${patch.low} ft² at ½-inch depth per 10-lb tub; product TDS includes material loss` : 'Named patch yield unavailable'}</td><td>Compare patch-volume needs; do not convert this into linear-foot filler coverage</td></tr>
          </tbody>
        </table>
      </div>
      <p>Interconnected cracking, sinking or recurrent damage requires assessment beyond a filler purchase. Sources: {sourceLink('defaults-dalton-2x')}; {sourceLink('defaults-master-crack')}; {sourceLink('defaults-rust-crack')}.</p>
    </section>
  );
}

export function ColdPatchDecision() {
  return (
    <section className="reference-panel">
      <h2>How do the two documented cold-patch limits compare?</h2>
      <p><strong>Follow the chosen bag's size and compacted lift limits.</strong> These are
        manufacturer-specific application examples, not interchangeable instructions.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Selected manufacturer instructions; verify the purchased product label</caption>
          <thead><tr><th>Product</th><th>Repair-size example</th><th>Compaction and package basis</th></tr></thead>
          <tbody>
            <tr><th>QUIKRETE Permanent Blacktop Repair</th><td>About 3 × 3 ft maximum repair area; 1–3 in stated application thickness</td><td>Compacted 1-in lifts; about 0.5 ft³ per 50-lb bag or 0.6 ft³ per 60-lb bag</td></tr>
            <tr><th>Sakrete Blacktop Patch</th><td>Up to 2 × 2 ft and 4 in deep in the linked sheet</td><td>Its sheet describes 2-in loose layers compacted to 1 in; no comparable yield retained in this evidence</td></tr>
          </tbody>
        </table>
      </div>
      <p>Do not combine one product's repair-size limit with another's layer thickness or infer a universal lifespan. Sources: {sourceLink('defaults-quikrete-patch')}; {sourceLink('defaults-sakrete-patch')}.</p>
    </section>
  );
}
