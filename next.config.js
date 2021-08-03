module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "@utils/*": ["utils/*"],
      "@components/*": ["components/*"]
    },
  },
  publicRuntimeConfig: {
    CONTENTFUL_SPACE_ID: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}`,
    CONTENTFUL_ENVIRONMENT: `master`,
    CONTENTFUL_ACCESS_TOKEN: `${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`
  }
};
