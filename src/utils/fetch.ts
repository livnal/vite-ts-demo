/*
 * @Descripttion:
 * @version:
 * @Author: jiaolina
 * @Date: 2022-04-21 17:13:10
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-04-21 17:29:34
 */
import { isRef, ref, unref, watchEffect } from 'vue'

export function useFetch(url: any) {
  const data: any = ref(null)
  const error: any = ref(null)
  function doFetch() {
    // 在请求前重设状态
    data.value = ref(null)
    error.value = ref(null)
    // unref() 解包可能为ref的值
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }
  if (isRef(url)) {
    // 如果输入的url是一个ref，那么启用一个响应式的请求
    watchEffect(doFetch)
  } else {
    // 否则只请求一次，避免监听器的额外开销
    doFetch()
  }
  return { data, error }
}
