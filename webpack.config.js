const fs = require('fs');
const os = require('os');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function getPagesDir() {
    // 分析 src/pages 下面的文件夹，默认是每个文件夹下都应作为一个独立的入口，独立的 html 文件
    const dirs = fs.readdirSync('./src/pages', { withFileTypes: true });
    return dirs.filter(a => a.isDirectory())
}

function getEntry() {
  const pagesDir = getPagesDir();
  return pagesDir.reduce((pre, cur) => Object.assign({ [cur.name]: './src/pages/' + cur.name + '/index.js' }, pre), {})
}

function getHtmlTitles() {
  const pagesDir = getPagesDir();
  return pagesDir.map(a => a.name);
}

function getExcludeChunks(array, current) {
  return array.reduce((pre, cur) => cur !== current ? pre.concat([cur, 'manifest_' + cur]) : pre, [])
}

module.exports = {
    entry: getEntry(),
    module: {
      rules: [{
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: 'babel-loader'
      }, {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          miniCssExtractPlugin.loader, 
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
            }
          }, {
              loader: "less-loader" // compiles Less to CSS
          }],
      },{
        test: /\.(png|jpg|gif|jpeg)$/,
        include: [
          path.resolve(__dirname, "src/assets")
        ],
        use: ['file-loader','image-webpack-loader']
      }]
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "app")
      ],  // 解析模块时的查找目录
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'initial',
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            filename: 'common_[chunkhash].js'
          },
        //   util: {
        //     minSize: 500,
        //     priority: 10,
        //     filename: 'util.[chunkhash].js',
        //     // test: /utils\.js/,
        //   }
        }
      },
      runtimeChunk: {
        name: entrypoint => `manifest_${entrypoint.name}`
      },
      minimizer: [new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: os.cpus().length - 1
      })]
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
      }),
      // new htmlWebpackPlugin({
      //   title: 'index',
      //   excludeChunks: ['globList', 'manifest_globList'],
      //   filename: 'index.html'
      // })
      ...getHtmlTitles().map((t, _, a) => new htmlWebpackPlugin({
        title: t,
        excludeChunks: getExcludeChunks(a, t),
        filename: t + '.html',
        template: './src/template.html'
      })),
      new miniCssExtractPlugin({
        filename: '[name]_[chunkhash].css',
        // chunkFilename: '[id].css',
      })
    ]
};