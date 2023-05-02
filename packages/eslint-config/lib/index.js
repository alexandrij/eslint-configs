/**
 * Рекомендованные правила EsLint
 *
 * @see https://eslint.org/docs/latest/rules/
 */
module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },

  rules: {
    /**
     * Requires the use of single quotes wherever possible
     *
     * @see https://eslint.org/docs/rules/quotes
     */
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    /**
     * Requires the use of trailing commas in object and array literals
     *
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * Require or disallow semicolons instead of ASI
     *
     * @see https://eslint.org/docs/latest/rules/semi#rule-details
     */
    semi: ['error', 'always'],

    'no-debugger': 'warn',
    'no-var': ['error'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-magic-numbers': 'off',
  },
};
