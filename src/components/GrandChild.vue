<script setup lang="ts">
import { ref, useAttrs, onMounted } from 'vue'

// 这里的透传attrs并不是响应式的，不能通过侦听器去监听它的变化；
// 如果需要响应性，可以使用prop，或者使用onUpdated()使得在每次更新时结合最新的attrs执行副作用
const attrs = useAttrs()

const grandCount = 0

onMounted(() => {
  console.log('attrs1', attrs)
})
</script>
<template>
  <div class="grandCild">
    <h3>孙子组件</h3>
    <p>grandCount：{{ grandCount }}</p>
  </div>
</template>
