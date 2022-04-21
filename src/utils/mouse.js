/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-04-21 16:29:11
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-04-21 16:38:44
 */
import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })
  return { x, y }
}
