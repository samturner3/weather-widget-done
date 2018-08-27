module.exports = {
  testEnvironment: 'node',
  rootDir: 'src',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.test.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/__tests__'
  ]
};
