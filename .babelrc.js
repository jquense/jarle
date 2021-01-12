module.exports = (api) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        shippedProposals: true,
        targets: { esmodules: true },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    api.env() !== 'esm' && '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-syntax-dynamic-import',
  ].filter(Boolean),
});
