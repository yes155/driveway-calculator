export const SITE = {
  name: 'Driveway Calculators',
  url: 'https://drivewaycalc.online',
  author: 'Farrukh Abdullah',
  stage: process.env.SITE_STAGE === 'launch' ? 'launch' : 'draft',
} as const;
export const FLAGS = {
  leads: process.env.NEXT_PUBLIC_LEADS_ENABLED === 'true',
  ads: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
};
