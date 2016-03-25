var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/bench_bnb.cjsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.cjsx$/, loaders: ['coffee-loader', 'cjsx-loader']
      },
      {
        test: /\.coffee$/, loader: 'coffee-loader'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx", ".cjsx", ".coffee" ]
  }
};
