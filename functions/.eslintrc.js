module.exports = {
  // Specifies the JavaScript language options you want to support.
  parserOptions: {
    ecmaVersion: 2021, // Use the latest ECMAScript version.
    sourceType: 'module', // Allows the use of imports.
    ecmaFeatures: {
      jsx: true, // Enable JSX for React or other frameworks.
    },
  },

  // Specifies the environments your code runs in.
  env: {
    browser: true, // Browser global variables.
    node: true, // Node.js global variables.
    es2021: true, // Enable all ECMAScript 2021 features.
  },

  // Specifies a set of recommended rules.
  extends: [
    'eslint:recommended', // The base set of recommended rules.
  ],

  // Specifies individual rules to override or add.
  rules: {
    // Examples of custom rules:
    // "indent": ["error", 2], // Enforce 2-space indentation.
    // "quotes": ["error", "single"], // Enforce single quotes.
    // "semi": ["error", "always"], // Enforce semicolons at the end of statements.
  },
};