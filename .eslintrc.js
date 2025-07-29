module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ]
  }
};
