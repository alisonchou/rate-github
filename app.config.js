import 'dotenv/config';

export default {
    expo: {
        name: 'rate-repository-app',
        slug: 'rate-repository-app',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: [
            '**/*',
        ],
        ios: {
            supportsTablet: true,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            apolloUrl: process.env.APOLLO_URL,
        },
    }
};
