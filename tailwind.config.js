module.exports = {
  ///jit enables the new feature or the brand new latest tech in tailwind css .(just in time)
  mode: "jit",
  ///purge is basically allows tailwind css to clean up all the css which we end up using.
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
