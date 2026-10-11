export default function ShapeDiagram({ tapered = false }: { tapered?: boolean }) {
  return (
    <svg
      className="shape-diagram"
      viewBox="0 0 380 260"
      role="img"
      aria-labelledby="shape-title shape-desc"
    >
      <title id="shape-title">
        {tapered ? 'Measure a tapered driveway' : 'Measure a rectangular driveway'}
      </title>
      <desc id="shape-desc">
        {tapered ? 'Measure the length and both end widths.' : 'Measure the length and width.'}{' '}
        Divide an irregular driveway into separate sections.
      </desc>
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="380" height="260" fill="url(#grid)" />
      <path
        d={tapered ? 'M115 50 L250 50 L295 210 L75 210 Z' : 'M75 50 H295 V210 H75 Z'}
        fill="currentColor"
        fillOpacity=".04"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M180 50 V210" stroke="currentColor" strokeDasharray="5 5" opacity=".25" />
      <path
        d={
          tapered
            ? 'M115 28H250 M115 22V34 M250 22V34 M75 234H295 M75 228V240 M295 228V240 M325 50V210 M319 50H331 M319 210H331'
            : 'M75 28H295 M75 22V34 M295 22V34 M325 50V210 M319 50H331 M319 210H331'
        }
        stroke="currentColor"
      />
      <text x="180" y="19" textAnchor="middle">
        {tapered ? 'START WIDTH' : 'WIDTH'}
      </text>
      {tapered && (
        <text x="185" y="255" textAnchor="middle">
          END WIDTH
        </text>
      )}
      <text x="342" y="139" transform="rotate(90 342 139)" textAnchor="middle">
        LENGTH
      </text>
      <text x="185" y="132" textAnchor="middle" className="diagram-label">
        YOUR DRIVEWAY
      </text>
    </svg>
  );
}
