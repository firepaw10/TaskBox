module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", '@storybook/addon-a11y', "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};