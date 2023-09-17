"use strict";
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: "Module" },
});
const e = require("./ui/index.js");
require("../../node_modules/.pnpm/tailwindcss@3.3.2/node_modules/tailwindcss/tailwind.css.js");
const i = require("./ui/my-button/index.js"),
  n = {
    install: (t) => {
      for (let u in e) t.use(e[u]);
    },
  };
exports.MyButton = i.MyButton;
exports.default = n;
