/*
For eg. i want to set no-unused-vars as warning in development and throws error on producrtion. To implement
this type of logic we can't do it in rules object inside eslintConfig in package.json since applying the
condition break the json way, thus to implement such logic we create ".eslintrc.js" file and export the
configurations and  the eslint will automatically pickup the settings from .eslintrc.js file and remove eslintConfig
object from package.json

"vue add eslint" => for adding eslint plugin then select standard

If you encountered more eslint error then type "npm run lint --fix" in cmd, then it fixed... no need to
fixed manually
 */

module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard'
  ]
}
