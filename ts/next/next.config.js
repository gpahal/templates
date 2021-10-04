const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins(
  [withImages, withFonts],
  nextConfig
);
