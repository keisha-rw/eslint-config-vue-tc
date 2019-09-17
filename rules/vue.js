module.exports = {
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/require-direct-export': 'error',
    'vue/no-empty-pattern': 'off',
    // 'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-boolean-default': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx'],
        shouldMatchCase: false
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
};
