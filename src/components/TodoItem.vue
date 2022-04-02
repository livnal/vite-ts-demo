<!--
 * @Descripttion: 
 * @version: 
 * @Author: jiaolina
 * @Date: 2022-03-23 15:28:25
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-03-30 11:26:53
-->
<script setup lang="ts"> 
  import {computed, ref,watchEffect,onMounted} from 'vue'
import VueWait from 'vue-wait';

let wait = new VueWait();
 //defineProps() 宏中的参数不可以访问 <script setup> 中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。
  const props = defineProps<{  
    todo:Object
  }>()
  const emit = defineEmits(['changeColor'])
  const child = ref();
  const a=ref(12)
watchEffect(() => {
  if(child.value){
    console.log('已挂载ref',child);
    child.value.style.color = 'blue'
  }else{
    console.log('child的ref未挂载');
  }
})

let loading = computed(()=>{
if(props.todo.text===6){
  // wait.end('boxLoad');
}
})

onMounted(()=>{
  console.log('wait',wait);
  // wait.start('boxLoad');
})

/**
 * 宏显式暴露
 * 使用了 <script setup> 的组件时默认私有的：一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西，
 * 除非子组件在其中通过 defineExpose 宏显式暴露
 * */
defineExpose ({
  child,a
})
</script>


<template >
<v-wait for="boxLoad">
  <template slot="waiting">
    <div>
      <img src="../assets/loading.gif" alt="">
    </div>
  </template>
  <div class="child" ref="child">
    <h3>child</h3>
    <p>第{{ props.todo?.text }}个item</p>
    <button @click="emit('changeColor')">改变标题颜色</button>
    <slot/>
  </div>

</v-wait>
</template>

<style lang="scss" scoped>
.child {
  border: 1px solid black;
  padding: 2px;
}
</style>