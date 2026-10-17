import type { ToolKind } from '@/lib/calc/ui';

/** Bold only the first complete answer sentence, keeping subsequent context unbolded. */
export function splitAnswer(text: string): { lead: string; context: string } {
  const answer = text.trim();
  const boundary = /[.!?]\s+(?=[A-Z])/u.exec(answer);
  if (!boundary) return { lead: answer, context: '' };
  return {
    lead: answer.slice(0, boundary.index + 1),
    context: answer.slice(boundary.index + boundary[0].length).trim(),
  };
}

const checklists: Record<ToolKind, readonly string[]> = {
  asphalt: [
    'Measure each section, including tapered widths and any measured grade.',
    'Confirm finished compacted asphalt thickness and mix density with the supplier.',
    'Check the waste allowance separately from compaction already reflected in density.',
    'Confirm the plant order increment, truck capacity, access and freight charges.',
  ],
  gravel: [
    'Measure the covered area and specified finished depth.',
    'Confirm the exact aggregate product and its loose or compacted density.',
    'Check whether extra volume is needed for compaction or irregular sections.',
    'Confirm delivered tons, truck capacity, minimum loads and unloading access.',
  ],
  layers: [
    'Measure the base and surface areas, including tapers and extensions.',
    'Enter a separate finished depth for the base and the surface layer.',
    'Confirm each layer’s material density and any compaction allowance.',
    'Ask the supplier about load sizes, delivery fees and order rounding.',
  ],
  concrete: [
    'Measure the slab area and specified thickness, including tapered sections.',
    'Confirm the ready-mix specification, access, and supplier minimum order.',
    'Enter the concrete-bag yield from the actual product label for bag counts.',
    'Check any waste allowance, delivery charge and short-load fee separately.',
  ],
  sealcoat: [
    'Measure the surface to be coated, excluding areas not being sealed.',
    'Use the selected sealer’s coverage rate per gallon from its label.',
    'Confirm planned coats, container size and any primer requirements.',
    'Follow the product’s temperature, drying and reopening instructions.',
  ],
  converter: [
    'Match the source quantity to cubic yards or US short tons.',
    'Use the density for the material and its loose or compacted condition.',
    'Confirm the supplier’s purchasing unit and rounding requirement.',
  ],
  paver: [
    'Measure each paving section and enter the actual paver dimensions.',
    'Confirm that the selected product and base design suit driveway loads.',
    'Check compacted base depth, bedding sand depth and joint requirements.',
    'Confirm cutting allowance, pallet quantities and delivery arrangements.',
  ],
  cost: [
    'Verify each measured section and the priced square footage.',
    'Match the installed price to your surface and exact project scope.',
    'Check removal, base preparation and drainage work for double counting.',
    'Confirm separate delivery fees, minimum charges and quote exclusions.',
  ],
  compare: [
    'Use one measured area across all surface estimates.',
    'Compare the work included in each published installation benchmark.',
    'Keep demolition, base corrections and delivery extras separate.',
    'Use matching local quotes before comparing total project prices.',
  ],
};

export function orderChecklist(kind: ToolKind, surface?: string): readonly string[] {
  if (kind === 'cost' && surface === 'slab') {
    return [
      'Measure the slab or pad area and specified thickness.',
      'Check whether the rate includes reinforcement, finishing and formwork.',
      'Confirm removal and stone base costs without counting included work twice.',
      'Check delivery, short-load minimums and access with the concrete supplier.',
    ];
  }
  return checklists[kind];
}
