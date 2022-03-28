<script setup lang="ts">
import {
  ref,
  onMounted,
  watchEffect,
  reactive,
  nextTick,
  computed,
  watch,
  onUnmounted,
} from "vue";
// import { $ref } from 'vue/macros'  //响应性语法糖
import TodoItem from "./TodoItem.vue";

defineProps<{ msg: string }>();

const count = ref(0);
let isGreen = ref(false);
let list = ref([1, 2, 3, 4, 5]);
let todo = ref({ text: 123 });
const name = reactive({ name: "reactive", count });

function addClick() {
  if (name.count === 5) watch2();//在count为5时会清除watch2侦听器
  nextTick(() => {
    // console.log("dom更新完成后的操作", "[isCountThree]:" + isCountThree.value);
  });
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
 * 如果想在侦听器回调中能访问被 Vue 更新之后的DOM，添加{flush:'post'}
 * 后置刷新的 watchEffect() 有个更方便的别名 watchPostEffect()
 */
let watchEffect1 = watchEffect(
  () => {
    // if(count.value%2===0){
    //   todo.value.text=count.value
    // }
    // console.log('监听中。。。',todo.value.text)
    if (name.count % 2 === 0) {
      todo.value.text = name.count;
      console.log("监听中。。。", todo.value.text);
    }
  }
  // {flush: 'post'}
);

//异步回调创建一个侦听器，它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏
function watch2(){}
setTimeout(() => {
  watch2 = watchEffect(() => {
    console.log(`异步侦听器：${count.value}`);
  });
  // watchEffect1()  //调用该回调函数即可清除侦听器
}, 5000);

/**
 * watch 的第一个参数可以是不同形式的“来源”：
 * 它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个来源组成的数组;
 * 不能直接侦听响应式对象的property，而是用getter函数（如下）；
 */
watch(count, (newVal) => {
  // console.log(`watch监听count:${newVal}`);
});
// watch(name.count,(count)=>{console.log(`watch监听property${count}`);}) //此处为错误示范
watch(
  () => {
    return name.count;
  },
  (count) => {
    console.log(`watch侦听响应式对象的property【count】:${count}`);
  }
  // { deep: true,flush: 'post' }
);

/**
 * 计算属性 ref
 */
const isCountThree = computed(() => {
  return name.count === 3 ? "Yes" : "No";
});

onMounted(() => {
  // console.log("【onMounted】count:" + count.value);
  console.log("【onMounted】count:" + name.count);
});
onUnmounted(() => {});
</script>

<template>
  <h1 :class="{ green: isGreen, h1: true }" @click="changeColor">{{ msg }}</h1>
  <!-- <div class="mapArray"><span v-for="item in list">{{item+'-'}}</span></div> -->
  <button type="button" @click="addClick">
    {{ name.count }},count is: {{ count }}
  </button>
  <TodoItem :todo="todo"></TodoItem>
  <div class="computed">count等于3：{{ isCountThree }}</div>
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
