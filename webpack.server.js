const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './server/index.js',
  },

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: 'babel-loader'
      },
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'config'),
          to: path.resolve(__dirname, 'server-build'),
        },
      ],
    }),
  ],
};
