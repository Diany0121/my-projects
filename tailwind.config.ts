import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'green': '#4FA553',
      'grisStrone': '#3d3d40',
      'grismediun': '#9c9c9c77',
      'grisLight': '#d9d9d9',
      'bgBeige': '#EFEEED',
    },
    fontFamily: {
      'mono': ['IBM Plex Mono'],
      'sans': ['IBM Plex Sans'],
    },
  },
  plugins: [],
};
export default config;
