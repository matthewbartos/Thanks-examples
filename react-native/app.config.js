const path = require("path");

module.exports = {
  expo: {
    name: "example",
    slug: "example",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    plugins: [
      path.resolve(__dirname, "./src/plugins/withReactNativeWebview.js"),
    ],
  },
};
