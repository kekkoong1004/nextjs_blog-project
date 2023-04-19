const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = async (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: 'billy',
        MONGODB_PASSWORD: 'tadHlVoJovYaResX',
        MONGODB_CLUSTER: 'cluster0',
        MONGODB_DATABASE: 'test-blog',
      },
    };
    return nextConfig;
  } else {
    /** @type {import('next').NextConfig} */

    const nextConfig = {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: 'billy',
        MONGODB_PASSWORD: 'tadHlVoJovYaResX',
        MONGODB_CLUSTER: 'cluster0',
        MONGODB_DATABASE: 'shawn-blog',
      },
    };
    return nextConfig;
  }
};
module.exports = nextConfig;
