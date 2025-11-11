/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  webpack: (config, { isServer }) => {
    // Find the rule that handles CSS
    const cssRule = config.module.rules.find((rule) => rule.oneOf);

    if (cssRule) {
      // Add a rule to ignore CSS imports specifically from mermaid
      cssRule.oneOf.unshift({
        test: /\.css$/,
        include: /node_modules[\\/]mermaid/,
        use: "null-loader",
      });
    }

    return config;
  },
};

export default nextConfig;
