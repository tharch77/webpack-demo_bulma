const path = require("path");
let webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      handlebars: 'handlebars',
      // $: 'jquery',
      // jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
