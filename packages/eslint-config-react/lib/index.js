/**
 * React with hooks
 */

module.exports = {
  extends: [
    '@geux',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  // Overrides rules
  rules: {
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-unstable-nested-components': 'off',
    'react/style-prop-object': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-pascal-case': 'error',
    'react/boolean-prop-naming': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': 'error',
    'react/destructuring-assignment': 'warn',
    'react/sort-comp': [
      'error',
      {
        order: ['static-variables', 'static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/sort-prop-types': 'warn',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent': [
      'warn',
      2,
      {
        indentLogicalExpressions: false,
      },
    ],
    'react/jsx-indent-props': [
      'warn',
      {
        indentMode: 2,
        ignoreTernaryOperator: false,
      },
    ],
  },
};
