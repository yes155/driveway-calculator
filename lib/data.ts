import prices from '@/data/prices.json';
import defaults from '@/data/defaults.json';
import presets from '@/data/product-presets.json';
import type { ToolKind, ToolState } from './calc/ui';
import { emptyState } from './calc/ui';
export type DataValue = {
  value: number | null;
  verified: boolean;
  source: string | null;
  retrievedOn: string | null;
  unit: string;
  scope?: string;
};
export const priceBook = prices as Record<string, Record<string, DataValue>>;
export const defaultBook = defaults as Record<string, DataValue>;
export const sealcoatPresets = presets;
export function verifiedValue(record: DataValue | undefined) {
  return record?.verified && record.source ? record.value : null;
}
export function hasPrice(surface: string) {
  return (
    verifiedValue(priceBook[surface]?.installedLow) !== null &&
    verifiedValue(priceBook[surface]?.installedHigh) !== null
  );
}
export function initialToolState(kind: ToolKind, material = 'material'): ToolState {
  const state = emptyState();
  state.fields.tier = 'baseline';
  state.fields.waste = '0';
  state.fields.compaction = '0';
  const set = (key: string, name: string) => {
    const value = verifiedValue(defaultBook[name]);
    if (value !== null) state.fields[key] = String(value);
  };
  if (kind === 'asphalt' && material === 'asphalt') {
    set('density', 'asphaltDensity');
    set('depth', 'asphaltThickness');
  }
  if (kind === 'concrete') {
    set('depth', 'concreteThickness');
    set('waste', 'concreteWaste');
  }
  if (kind === 'gravel') {
    if (material === 'pea gravel') set('density', 'peaGravelDensity');
    if (material === 'rock') set('density', 'rockDensity');
    if (material === 'crusher run') set('density', 'crusherRunDensity');
    if (material === 'road base') set('density', 'roadBaseDensity');
  }
  return state;
}
