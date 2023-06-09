module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'import',
    'react-hooks',
    's2000promax-plugin',
    'unused-imports',
  ],
  rules: {
    // 'import/no-unresolved': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'no-return-await': 'off',
    'react/button-has-type': 'off',
    'no-restricted-globals': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'role',
          'as',
          'border',
          'feature',
        ],
      },
    ],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-undef': 'off',
    's2000promax-plugin/path-checker': [
      'error',
      {
        alias: '@',
      },
    ],
    's2000promax-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFiles: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
    's2000promax-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        testFiles: ['**/StoreProvider', '**/testing'],
      },
    ],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
      },
    ],
    'react/no-unstable-nested-components': 'warn',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
