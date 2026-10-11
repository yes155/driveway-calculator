import next from 'eslint-config-next/core-web-vitals';
export default [...next, { ignores: ['out/**', '.next/**', 'docs/source-review.md'] }];
