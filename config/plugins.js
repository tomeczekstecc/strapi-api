module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("dgii182dt"),
      api_key: env("187784577678993"),
      api_secret: env("JicWO-F4j7QvBeoWBUBg05x0oEw"),
    },
  },
});
