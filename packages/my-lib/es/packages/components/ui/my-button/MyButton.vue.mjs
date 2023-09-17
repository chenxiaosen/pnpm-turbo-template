import { defineComponent as o, openBlock as n, createElementBlock as s, createElementVNode as r, toDisplayString as c } from "vue";
const a = { class: "rounded-md bg-green-400" }, p = { class: "p-5 text-red-400" }, m = /* @__PURE__ */ o({
  __name: "MyButton",
  props: {
    text: { default: "按钮" }
  },
  setup(t) {
    const e = t;
    return (d, _) => (n(), s("button", a, [
      r("span", p, c(e.text), 1)
    ]));
  }
});
export {
  m as default
};
