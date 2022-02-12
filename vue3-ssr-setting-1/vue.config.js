const WebpackManifestPlugin = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const path = require("path");
const IS_SSR = Boolean(process.env.VUE_APP_SSR);

module.exports = {
  devServer: {
    port: "9000",
    disableHostCheck: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  chainWebpack: (config) => {
    /* Define IS_SSR in process.env */
    config.plugin("define").tap((definitions) => {
      definitions[0]["process.env"]["IS_SSR"] = IS_SSR;
      return definitions;
    });
    if (IS_SSR) {
      config.resolve.alias.set(
        "vue3-component-library/components",
        path.resolve(__dirname, "node_modules/vue3-component-library/dist/cjs")
      );
      config.entry("app").clear().add("./src/entry-server.js");
      config.target("node");
      config.output.libraryTarget("commonjs2");
      config
        .plugin("manifest")
        .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));
      config.externals(
        nodeExternals({
          allowlist: /\.(css|vue)$/,
        })
      );
      config.optimization.splitChunks(false).minimize(false);
      config.plugins.delete("hmr");
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      config.plugins.delete("progress");
      config.plugins.delete("friendly-errors");
      config.plugin("limit").use(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      );
    } else {
      config.resolve.alias.set(
        "vue3-component-library/components",
        path.resolve(__dirname, "node_modules/vue3-component-library/dist/esm")
      );
      config.devServer.disableHostCheck(true);
      config.entry("app").clear().add("./src/entry-client.js");
      config.target("web");
    }
  },
};
