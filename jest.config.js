module.exports = {
  displayName: 'MODULE_NAME',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['js/**/!(*.test|*.d).{js,ts}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/',
    '/translations/',
    'babel.config.js',
    'jest.config.js',
    'setup-jest.js',
    'vite.config.ts',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.[j|t]s$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)s?$',
};
