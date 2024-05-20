// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//       {
//         protocol: "https",
//         hostname: "*.googleusercontent.com",
//         port: "",
//         pathname: "**",
//       },
//     ],
//   },
// }

// module.exports = nextConfig

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "standalone",
    images: {
      domains: ["lh3.googleusercontent.com"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "https",
          hostname: "**.googleusercontent.com",
          port: "",
          pathname: "**",
        },
      ],
    },
  };
  return nextConfig;
};
