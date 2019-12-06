# webpack-split-pro

基于 webpack 配置的一个项目，集成了 react, less, 打包后 pages 每个文件夹都生成单独的 html

路由使用传统模式的 html 请求，不使用 react-router

区分正式环境和开发环境

分离 manifest 有助于缓存的利用。每次变动对应文件才会使得打包的 js 文件 hash 发生变化。

但是有个缺点是 common.js 文件会被所有页面引入，无论该页面是否使用 common.js 中的内容。
