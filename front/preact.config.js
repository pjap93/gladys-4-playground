require('dotenv').config();

const { GLADYS_GATEWAY_API_URL, LOCAL_API_URL } = process.env;
const webpack = require('webpack');

const asyncPlugin = require('preact-cli-plugin-fast-async');

module.exports = function (config) {
  asyncPlugin(config);
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.GLADYS_GATEWAY_API_URL': JSON.stringify(GLADYS_GATEWAY_API_URL),
      'process.env.LOCAL_API_URL': JSON.stringify(LOCAL_API_URL)
    })
  );
};