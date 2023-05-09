/*
 * @Descripttion:函数按钮防抖 使用方法
 *<el-button v-debounce="点击事件名">点击</el-button>
 * @version:
 * @FilePath: /vite-demo/src/directives/debounce.ts
 */

import { DirectiveBinding } from 'vue';

interface HTMLElementPlus extends HTMLElement {
  disabled?: boolean;
}
export default {
  // 渲染的时候
  mounted: (el: HTMLElementPlus, binding: DirectiveBinding) => {
    let timer: NodeJS.Timeout;
    // 添加点击事件
    el.addEventListener('click', () => {
      // 防抖定时器
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // 定时触发
        binding.value();
      }, 500);
    });
  }
};
