module.exports = {
    cacheDirectory: '.cache/jest',
    clearMocks: true,
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json'],
    verbose: true,
    coverageReporters: [
        "json",
        "html"
      ],
    collectCoverageFrom: [
        "src/**/*.js",
        "src/**/*.{ts,js,jsx}",
        "src/**/**/*.stories.storyshot",
        "src/**/**/*.js",
        "!src/**/**/*.stories.js"
      ],
      coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/path/to/dir/",
        "<rootDir>/src/serviceWorker.js",
        "<rootDir>/src/index.js",
        "<rootDir>/src/App.js"
      ],
      coverageThreshold: {
        "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": 80
        }
      },
      transform: {
        "^.+\\.js$": "babel-jest"
      },
      moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
      },
      setupFiles: ['<rootDir>/.jest/register-context.js'],
      testMatch: ["<rootDir>/Tests/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"]
  };