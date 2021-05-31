// const { compilerOptions } = require('./tsconfig.json')
// const { pathsToModuleNameMapper } = require('ts-jest/utils')

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/tests/**'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
  ],

  // A preset that is used as a base for Jest's configuration
  preset: '@shelf/jest-mongodb',

  // A map from regular expressions to paths to transformers
  transform: {
      '.+\\.ts$': 'ts-jest'
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: pathsToModuleNameMapper(
  //   compilerOptions.paths,
  //   { prefix: '<rootDir>/src/' }
  // ),

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/tests'],

  // The test environment that will be used for testing
  testEnvironment: 'node',
};
