import * as t from "./ui/index.mjs";
import "../../node_modules/.pnpm/tailwindcss@3.3.2/node_modules/tailwindcss/tailwind.css.mjs";
import { MyButton as a } from "./ui/my-button/index.mjs";
const i = {
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  a as MyButton,
  i as default
};
