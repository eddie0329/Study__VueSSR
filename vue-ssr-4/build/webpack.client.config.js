const webpack = require("webpack");
const { merge } = require("webpack-merge");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const base = require("./webpack.base.config");

module.exports = merge(base, {
  entry: {
    app: "./src/entry-client",
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": "client",
    }),
    new webpack.optimize.SplitChunksPlugin({
      name: "vendor",
      minChunks: function(module) {
        // a module is extracted into the vendor chunk if...
        return (
          // it's inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file (due to extract-text-webpack-plugin limitation)
          !/\.css$/.test(module.request)
        );
      },
    }),
    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    new webpack.optimize.SplitChunksPlugin({
      name: "manifest",
      minChunks: Infinity,
    }),
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
  ],
});
