export default {
  expo: {
    name: 'Weather-App',
    slug: 'Weather-App',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.forecast.weatherapp',
    },
    android: {
      package: 'com.forecast.weatherapp',
      adaptiveIcon: {
        backgroundColor: '#ffffff',
      },
    },
    plugins: [
      [
        'expo-build-properties',
        {
          ios: {
            flipper: true,
          },
        },
      ],
    ],
  },
};
