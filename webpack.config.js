const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 


module.exports = {
  entry: './src/index.js', // Only entry for index.html
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  mode: 'production',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/i, 
        type: 'asset/resource',
      },
     
      {
        test: /\.html$/, // Process HTML files (for index.html)
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template for index.html
      filename: 'index.html',  // Output filename for index.html
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'images' }, // Copies `src/images` to `dist/images`
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'src'), 
    hot: true,                             
    open: true,                             
    port: 8080,                             
    historyApiFallback: true,              
  },
};
