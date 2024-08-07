import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  typescript: {
    // https://storybook.js.org/docs/configure/integration/typescript#extending-the-default-configuration <---- *** DOCUMENTATION TO INFER TYPES AUTOMATICALLY
    reactDocgen: 'react-docgen-typescript',
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    // reactDocgenTypescriptOptions: {}
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)

    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) =>
      rule?.['test']?.test('.svg')
    )
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}
export default config
