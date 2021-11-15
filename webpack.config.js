const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = {
  entry: {
    main: './index.js',
  },
  module: {
    loaders: [
      {
        test: /postMock.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-webview': 'react-native-web-webview',
    },
  },
};
