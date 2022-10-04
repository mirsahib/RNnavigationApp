/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const package = '/home/mirsahib/Desktop/RNNotificationSound'

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver:{nodeModulesPaths: [package]},
  watchFolders:[package]
};
