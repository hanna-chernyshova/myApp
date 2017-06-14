//const HOST = '10.10.55.46';

module.exports = {
  entry: "./app/App.js",
  output: {
filename: "bundle.js",
            path: './build'
},

  devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
   
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {presets: ['react', 'es2015', "stage-1"]}
      }
    ]
  }
}