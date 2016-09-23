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
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.vue$/,
        loader: "vue"
      }
    ]
  }
}
