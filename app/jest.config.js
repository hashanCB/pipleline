module.exports = {
  testEnvironment: "jsdom",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results", // Directory where the reports will be saved
        outputName: "junit.xml", // File name of the report
      },
    ],
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
