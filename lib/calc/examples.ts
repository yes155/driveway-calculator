import { evaluateTool, emptyState, type ToolKind } from './ui';
import defaults from '@/data/defaults.json';
import presets from '@/data/product-presets.json';
export function toolExample(kind: ToolKind, material = 'gravel', surface = 'asphalt') {
  const state = emptyState();
  state.sections[0].length = '20';
  state.sections[0].width = '20';
  state.fields = { tier: 'baseline', waste: '0', compaction: '0', depth: '4' };
  if (kind === 'cost' || kind === 'compare') {
    delete state.fields.depth;
    delete state.fields.waste;
  }
  let context =
    'Illustrative 20 × 20 ft measurements; allowances excluded unless shown. Material inputs are examples, not a project design.';
  if (kind === 'asphalt') {
    if (material === 'asphalt millings') {
      state.fields.density = String((defaults.millingsBulkDensity.value! * 2000) / 27);
      context =
        'Loose-stockpile illustration using the Anchorage 1-inch-minus RAP reference. Depth and density both describe loose material; compaction is not inferred.';
    } else {
      state.fields.depth = String(defaults.asphaltThickness.value);
      state.fields.density = String(defaults.asphaltDensity.value);
      context =
        'Illustrative measurements with the CAPA thickness and Asphalt Institute compacted-density references. Your pavement design and producer density replace these references.';
    }
  }
  if (kind === 'gravel' || kind === 'layers') {
    const key =
      material === 'pea gravel'
        ? 'peaGravelDensity'
        : material === 'rock'
          ? 'rockDensity'
          : material === 'crusher run'
            ? 'crusherRunDensity'
            : material === 'road base'
              ? 'roadBaseDensity'
              : 'crushedStoneDensity';
    state.fields.density = String(defaults[key].value);
    if (kind === 'layers') {
      state.fields.baseDepth = '4';
      state.fields.baseDensity = String(defaults.roadBaseDensity.value);
      context =
        'Illustrative equal layer depths, using separate Two Rivers crushed-stone and Sutherland AB-minus density references. Layer design and compaction remain project inputs.';
    }
  }
  if (kind === 'concrete') {
    state.fields.waste = String(defaults.concreteWaste.value);
    state.fields.bagSize = '80';
    state.fields.bagYield = String(defaults.bagYield.value);
    context =
      'Illustrative slab measurements with editable NRMCA ordering contingency and QUIKRETE Concrete Mix 1101 80 lb label yield.';
  }
  if (kind === 'sealcoat') {
    const p = presets[0];
    state.fields.coverage = String(p.selectedCoverageSqFtPerGallon);
    state.fields.coats = String(p.coats);
    state.fields.containerSize = String(p.containerGallons);
    context =
      'Illustrative measured area using Latex-ite Ultra Shield smooth-surface lower coverage, per coat, and the named container size. Follow your current label.';
  }
  if (kind === 'paver') {
    Object.assign(state.fields, {
      paverLength: '8',
      paverWidth: '4',
      baseDepth: '6',
      sandDepth: '1',
      baseDensity: String(defaults.roadBaseDensity.value),
      sandDensity: '1.3',
    });
    context =
      'Illustrative entered paver dimensions, layer depths, and bedding density. These example measurements are not recommended defaults; enter product and design values.';
  }
  if (kind === 'converter') {
    state.fields.amount = '1';
    state.fields.density = String(defaults.crushedStoneDensity.value);
    context =
      'One entered cubic yard using the Two Rivers 5/8-inch crushed-stone reference. Replace density for your material.';
  }
  return { context, result: evaluateTool(kind, state, surface) };
}
