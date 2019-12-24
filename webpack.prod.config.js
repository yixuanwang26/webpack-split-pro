const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name]_[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
      },
    // plugins: [
    //     new BundleAnalyzerPlugin(),
    // ]
});