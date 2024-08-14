import { defineConfig } from 'dumi';

const basePath = process.env.GH_PAGES ? '/input/' : '/';
const publicPath = process.env.GH_PAGES ? '/input/' : '/';

export default defineConfig({
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Input',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.doc',
  base: basePath,
  publicPath,
});
