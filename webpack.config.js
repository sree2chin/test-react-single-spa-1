const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "chin",
    projectName: "test",
    webpackConfigEnv,
    argv,
  });

  console.log("webpack ========================== ", JSON.stringify(merge(defaultConfig, {
    entry: {
      ['chin-test']: ['./src/chin-test'],
      ['test-1']: ['./src/test-1']
    },
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    output: {
      chunkFilename: "[name].js",
      filename: "[name].js"
    }
  })));
  return merge(defaultConfig, {
    entry: {
      ['chin-test']: ['./src/chin-test'],
      ['test-1']: ['./src/test-1']
    },
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    output: {
      chunkFilename: "[name].js",
      filename: "[name].js"
    }
  });
};
