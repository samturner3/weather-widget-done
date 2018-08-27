module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'jest',
  ],
  "parser": "babel-eslint",
  "rules":{
      "indent": [2, "tab"],
      "no-tabs": 0,
      "space-before-function-paren": 0,
      "semi": 0,
      "react/jsx-indent": [1, 'tab'],
      "react/prop-types": [0],
      "react/jsx-indent-props": [1, 'tab'],
      "no-debugger": [0]
  },
  env: {
    'es6': true,
    'jest/globals': true,
    'browser': true,
  },
  "globals": {
    "shallow": true,
    "mount": true,
  }
};