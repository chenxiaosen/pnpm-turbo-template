module.exports = {
  content: [
    `./index.html`,
    `./src/**/*.{vue,js,ts,jsx,tsx}`,
    `./node_modules/@wepig-app/components/**/*.{vue,js,ts,jsx,tsx}`,
    `../../packages/components/**/*.{vue,js,ts,jsx,tsx}`,
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
  },
}
