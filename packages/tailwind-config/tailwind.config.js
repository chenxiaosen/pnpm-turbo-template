module.exports = {
  content: [
    `./index.html`,
    `./src/**/*.{vue,js,ts,jsx,tsx}`,
    `./node_modules/@my-lib/components/**/*.{vue,js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
  },
};
