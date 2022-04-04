/** @see https://nextjs.org/docs/advanced-features/using-mdx */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
const withTM = require('next-transpile-modules')(['@packages/ui']);

module.exports = withMDX(
  withTM({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    reactStrictMode: true,
  }),
);
