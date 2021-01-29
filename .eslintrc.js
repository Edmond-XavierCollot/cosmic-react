const globals = require("./globals");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
  },
  globals: Object.keys(globals).reduce(
    (acc, key) => ({ ...acc, [key]: "readonly" }),
    {}
  ),
};
