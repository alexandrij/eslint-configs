/**
 * Based on TypeScript ESLint Rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
  extends: [
    '@geux',
    // Enable all the recommended rules for @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  // Use @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint'],

  // Use @typescript-eslint/parser
  parser: '@typescript-eslint/parser',

  // Set options for @typescript-eslint/parser
  parserOptions: {
    // Set default project value
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject
    project: ['tsconfig.json', 'packages/**/tsconfig.json'],
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // Rules overrides
  rules: {
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': ['warn'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': ['error'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': ['warn'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowStaticOnly: true,
      },
    ],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': ['warn'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': ['warn'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': ['warn'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': ['error'],
  },
};
