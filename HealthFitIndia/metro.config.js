// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
  // Add this to exclude problematic packages
  // exclude: [
  //   /node_modules\/@react-navigation/,
  //   /node_modules\/react-native-safe-area-context/,
  // ],
});