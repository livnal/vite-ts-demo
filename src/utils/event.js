/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-04-21 16:30:13
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-04-21 16:35:32
 */
import { onMounted, onUnmounted } from 'vue'

/**
 * 封装事件监听的添加和移除方法
 * @param {*} target  需要添加事件的对象
 * @param {*} event 事件名称
 * @param {*} callback 需要执行的操作
 */
export function useEventListener(target, event, callback) {
  onMounted(() => {
    target.addEventListener(event, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}
