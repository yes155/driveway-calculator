module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: [
        'http://localhost/asphalt-calculator/',
        'http://localhost/asphalt-driveway-cost/',
        'http://localhost/',
      ],
      numberOfRuns: 1,
      // Lighthouse defaults to mobile emulation; 'mobile' is not a valid preset.
      settings: { formFactor: 'mobile' },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
      },
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
