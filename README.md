# webpack-split-pro

基于 webpack 配置的一个MPA项目，集成了 react, less, 打包后 pages 每个文件夹都生成单独的 html

路由使用传统模式的 html 请求，不使用 react-router

区分正式环境和开发环境

分离 manifest 有助于缓存的利用。每次变动对应文件才会使得打包的 js 文件 hash 发生变化。

使用 UglifyJsPlugin 对打包后的 javascript 进行了压缩

## todo
1. dll
2. treeShaking
3. CLI工程生成工具