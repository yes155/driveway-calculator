import Link from 'next/link';
import MaterialGraphic from './MaterialGraphic';
const cards = [
  {
    material: 'asphalt' as const,
    title: 'Asphalt Calculator',
    unit: 'SHORT TONS',
    href: '/asphalt-calculator/',
  },
  {
    material: 'concrete' as const,
    title: 'Concrete Calculator',
    unit: 'CUBIC YARDS',
    href: '/concrete-calculator/',
  },
  {
    material: 'gravel' as const,
    title: 'Gravel Calculator',
    unit: 'YARDS + TONS',
    href: '/gravel-calculator/',
  },
  {
    material: 'paver' as const,
    title: 'Paver Calculator',
    unit: 'PAVERS + BASE',
    href: '/paver-calculator/',
  },
];
export default function HeroCollage() {
  return (
    <div className="hero-collage" aria-label="Choose a material calculator">
      {cards.map((card, index) => (
        <Link
          href={card.href}
          className={`orbit-card orbit-${index + 1}`}
          key={card.material}
          aria-label={card.title}
        >
          <div className="mockup-toolbar" aria-hidden="true">
            <span className="mockup-dots" aria-hidden="true">
              ● ● ●
            </span>
            <span>Driveway Calculators</span>
          </div>
          <MaterialGraphic material={card.material} />
          <div className="mockup-title">
            {card.title}
            <span aria-hidden="true">↗</span>
          </div>
          <span className="mockup-unit">{card.unit}</span>
        </Link>
      ))}
    </div>
  );
}
