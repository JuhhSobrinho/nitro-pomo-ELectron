module.exports = [
  {
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(mp3|wav|ogg)$/i,
    type: 'asset/resource',
  }
  
];
