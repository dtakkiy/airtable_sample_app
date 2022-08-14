module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/src/**/*.(spec|test).[jt]s'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
