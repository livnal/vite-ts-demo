/*
 * @Descripttion:/自定义指令，使 v-focus 在所有组件中都可用
 * @version:
 * @FilePath: /vite-demo/src/directives/foucs.ts
 */
interface HTMLElementPlus extends HTMLElement {
  disabled?: boolean;
}
export default {
  mounted: (el: HTMLElementPlus) => {
    console.log(el.attributes);
    if (el.tagName !== 'INPUT') {
      const dom: any = el.children[0].children[0];
      dom.focus();
    } else {
      el.focus();
    }
  }
};
