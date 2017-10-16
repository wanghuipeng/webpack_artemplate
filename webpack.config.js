const path = require('path'); // 导入路径包

module.exports = {
    entry: { "index": path.resolve(__dirname, 'index') },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/'
  },

    // 使用loader模块
    module: {
      loaders: [
        {test: /\.css$/, loader: "style-loader!css-loader"}
      ]
    }
};