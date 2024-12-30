module.exports = {
  testEnvironment: "jest-environment-jsdom", // Explicitly set the jsdom test environment
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest to transform JavaScript and JSX files
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results", // Directory for JUnit XML reports
        outputName: "junit.xml", // Name of the JUnit XML file
      },
    ],
  ],
};
