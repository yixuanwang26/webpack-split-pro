const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(__dirname, 'dist'),
        pathinfo: true,  // 开发模式中打包时引入模块相关注解
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        compress: true, // 在启动后虽然打的包显示是一样大的，但是浏览器请求的时候是请求压缩过的资源，体积会小很多。
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});