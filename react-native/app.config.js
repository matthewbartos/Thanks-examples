const path = require("path");
const withReactNativeWebView = require("./src/plugins/withReactNativeWebview");

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
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.jdlegaspi.example",
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff",
      },
      package: "com.jdlegaspi.example",
    },
    web: {},
    extra: {
      eas: {
        projectId: "8c27d946-2e60-47cb-83ce-be4c96199c11",
      },
    },
    plugins: [
      path.resolve(__dirname, "./src/plugins/withReactNativeWebview.js"),
    ],
  },
};
