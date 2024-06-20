module.exports = () => ({
  name: 'resolve-react',
  configureWebpack() {
    return {
      devtool: 'inline-source-map',
      resolve: {
        extensionAlias: {
          '.js': ['.js', '.ts', '.tsx'],
        },
        alias: {
          react: require.resolve('react'),
          'react-dom$': require.resolve('react-dom'),
          'react-dom/server': require.resolve('react-dom/server'),
        },
      },
    };
  },
});
