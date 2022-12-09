module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint-config-prettier',
    'plugin:react/recommended',
    'react-app',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off'
  },
  settings: {
    react: {
      version: 'detect',
      '@typescript-eslint/explicit-function-return-type': 'warn'
    }
  }
}
