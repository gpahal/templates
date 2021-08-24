const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-native-web']);
const withImages = require('next-images');
const withFonts = require('next-fonts');

const nextConfig = {};

module.exports = withPlugins(
  [withTM, withImages, withFonts, [withExpo, { projectRoot: __dirname }]],
  nextConfig
);
