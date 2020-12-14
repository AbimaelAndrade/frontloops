const colors = require("./colors");

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      bluesky: "#98c6fa"
    }
  },
  variants: {},
  plugins: [],
};
