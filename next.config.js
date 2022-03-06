const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      styles: resolve("styles"),
      utils: resolve("utils"),
    },
  },
};
