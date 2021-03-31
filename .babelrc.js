module.exports = (api) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          shippedProposals: true,
          // exclude: ['dynamic-import'],
          modules: api.env() !== 'esm' ? 'commonjs' : false,
          targets: { esmodules: true },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import'].filter(Boolean),
  };
};
