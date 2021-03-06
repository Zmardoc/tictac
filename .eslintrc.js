module.exports = {
  plugins: ['prettier', 'vue'],
  extends: ['prettier', 'prettier/vue', 'plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/order-in-components': 'off',
    'vue/html-self-closing': ['error', { html: { void: 'any', normal: 'any', component: 'always' } }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
