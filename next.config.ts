import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    // Avoid bundling 'canvas' for the client-side (as canvas is usually only required in the server)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }

    // Optionally, you can add more customizations here if necessary
    return config;
  },

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/', // URL path to redirect from
        destination: '/home', // Destination URL path
        permanent: true, // Permanent redirect (HTTP 301)
      },
    ];
  },

  // Experimental features (optional)
  experimental: {
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
};

export default nextConfig;
