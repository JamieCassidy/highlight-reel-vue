module.exports = {
  entry: "./src/javascript/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue"
      }
    ]
  }
}
