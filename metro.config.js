const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// Point to the correct CSS file location under the app directory
module.exports = withNativeWind(config, { input: './app/global.css' })