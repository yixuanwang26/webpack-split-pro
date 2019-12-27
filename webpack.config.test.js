const path = require('path');
module.exports = {
    entry: './esH.js',
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(__dirname, 'test'),
        pathinfo: true,  // 开发模式中打包时引入模块相关注解
    },
};