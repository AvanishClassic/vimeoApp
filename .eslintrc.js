module.exports = {
  env: {
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "airbnb/hooks",
    "plugin:react-native/all",
    "prettier",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.eslint.json",

    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    // allow .js files to contain JSX code
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", "tsx", "ts"] },
    ],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    // prevent eslint to complain about the "styles" variable being used before it was defined
    "no-use-before-define": ["error", { variables: false }],

    // ignore errors for the react-navigation package
    "react/prop-types": [
      "error",
      { ignore: ["navigation", "navigation.navigate"] },
    ],
  },
};
