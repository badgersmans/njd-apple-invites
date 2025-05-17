// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const { withNativeWind } = require('nativewind/metro');

const {wrapWithReanimatedMetroConfig} = require('react-native-reanimated/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */

let config = getDefaultConfig(__dirname);

config = wrapWithReanimatedMetroConfig(config);
config = withNativeWind(config, { input: './global.css' });

module.exports = config;