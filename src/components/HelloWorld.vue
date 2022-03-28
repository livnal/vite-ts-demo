<script setup lang="ts">
import { ref, onMounted ,watchEffect, reactive, nextTick,computed} from "vue";
// import { $ref } from 'vue/macros'  //响应性语法糖
import TodoItem from './TodoItem.vue'

defineProps<{ msg: string }>();

const count = ref(0);
let isGreen = ref(false);
let list = ref([1,2,3,4,5]);
let todo=ref({text:123})
const name=reactive({name:'reactive',count})

function addClick() {
  nextTick(()=>{
    console.log("dom更新完成后的操作","[isCountThree]:"+isCountThree.value)
  })
  // return count.value++;
  return name.count++;
}
/**
 * Attribute绑定
 */
function changeColor() {
  isGreen.value = !isGreen.value;
}

/**
 * 侦听器
 */
watchEffect(()=>{
  // if(count.value%2===0){
  //   todo.value.text=count.value
  // }
  // console.log('监听中。。。',todo.value.text)
  if(name.count%2===0){
    todo.value.text=name.count
  }
  console.log('监听中。。。',todo.value.text)
})

/**
 * 计算属性 ref
 */
const isCountThree = computed(()=>{
  return name.count===3?'Yes':'No';
})

onMounted(() => {
  // console.log("【onMounted】count:" + count.value);
  console.log("【onMounted】count:" + name.count);
});


</script>

<template>
  <h1 :class="{ green: isGreen, h1: true }" @click="changeColor">{{ msg }}</h1>
  <!-- <div class="mapArray"><span v-for="item in list">{{item+'-'}}</span></div> -->
  <button type="button" @click="addClick">{{name.count}},count is: {{ count }}</button>
  <TodoItem :todo="todo"></TodoItem>
  <div class="computed">count等于3：{{isCountThree}}</div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.h1 {
  cursor: pointer;
}
.green {
  color: green;
}
</style>
