type Material = 'asphalt' | 'concrete' | 'gravel' | 'paver';
export default function MaterialGraphic({ material }: { material: Material }) {
  const surface = { asphalt: '#30312d', concrete: '#d2d1c7', gravel: '#bcb99c', paver: '#b49376' }[
    material
  ];
  return (
    <svg viewBox="0 0 240 170" className="material-graphic" aria-hidden="true">
      <rect width="240" height="170" rx="8" fill="#eae9e0" />
      <path d="M0 138H240V170H0Z" fill="#cfcec3" />
      <path d="M0 151H240" stroke="#f9f9f3" strokeWidth="2" strokeDasharray="18 12" />
      <path d="M21 0H218V133H21Z" fill="#d4d9be" />
      <path d="M68 52H174L191 138H50Z" fill={surface} stroke="#37382f" />
      {material === 'concrete' && <path d="M63 82H180M57 110H185M121 52V138" stroke="#a4a499" />}
      {material === 'gravel' && (
        <g fill="#e4dec1">
          {Array.from({ length: 42 }, (_, i) => (
            <circle
              key={i}
              cx={74 + (i % 7) * 15 + (i % 2) * 3}
              cy={66 + Math.floor(i / 7) * 12}
              r={i % 3 === 0 ? 3 : 2}
            />
          ))}
        </g>
      )}
      {material === 'paver' && (
        <g stroke="#dac7af">
          {Array.from({ length: 5 }, (_, i) => (
            <path
              key={i}
              d={`M${65 - i * 3} ${66 + i * 15}H${177 + i * 3} M${85 + (i % 2) * 10} ${52 + i * 15}v15 M${116 + (i % 2) * 10} ${52 + i * 15}v15 M${147 + (i % 2) * 10} ${52 + i * 15}v15`}
            />
          ))}
        </g>
      )}
      <rect x="62" y="21" width="117" height="36" rx="2" fill="#f6f5ee" stroke="#33342d" />
      <path d="M55 23L119 5L187 23" fill="#55574a" stroke="#33342d" />
      <rect x="76" y="31" width="38" height="26" fill="#afb5a7" stroke="#33342d" />
      <rect x="124" y="31" width="38" height="26" fill="#afb5a7" stroke="#33342d" />
      <path d="M80 38H110M80 46H110M128 38H158M128 46H158" stroke="#e4e6da" />
      <circle cx="34" cy="85" r="19" fill="#697252" />
      <circle cx="32" cy="81" r="14" fill="#879264" />
      <circle cx="209" cy="104" r="17" fill="#697252" />
      <circle cx="206" cy="100" r="12" fill="#879264" />
      <path d="M50 140H191" stroke="#33342d" strokeWidth="2" />
    </svg>
  );
}
