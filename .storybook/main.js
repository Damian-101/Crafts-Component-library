module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',   
  ],
  "framework": "@storybook/react",
  "typescript": {
    "reactDocgen": "react-docgen",
    "@typescript-eslint/ban-ts-comment": "off"
  },
  'fontawesome-svg-core': {
    'license': 'free'
  }
}