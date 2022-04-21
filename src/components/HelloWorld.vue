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
  onUpdated,
  provide,
  readonly,
} from 'vue'
// import { $ref } from 'vue/macros'  //响应性语法糖
import TodoItem from './TodoItem.vue'

defineProps<{ msg: string }>()

const count = ref(0)
const isGreen = ref(false)
const list = ref([1, 2, 3, 4, 5])
const todo: Object = ref({ text: 123 })
const name = reactive({ name: 'reactive', count, a: '12' })
const todoItem = ref()

function addClick() {
  if (name.count === 5) {
    watch2()
    console.log('异步侦听器已清除！')
  } // 在count为5时会清除watch2侦听器
  nextTick(() => {
    // console.log("dom更新完成后的操作", "[isCountThree]:" + isCountThree.value);
  })
  // return count.value++;
  return name.count++
}
/**
 * Attribute绑定
 */
function changeColor() {
  isGreen.value = !isGreen.value
}

/**
 * 侦听器
 * 如果想在侦听器回调中能访问被 Vue 更新之后的DOM，添加{flush:'post'}
 * 后置刷新的 watchEffect() 有个更方便的别名 watchPostEffect()
 */
const watchEffect1 = watchEffect(
  () => {
    // if(count.value%2===0){
    //   todo.value.text=count.value
    // }
    // console.log('监听中。。。',todo.value.text)
    if (name.count % 2 === 0) {
      todo.value.text = name.count
      console.log('监听中。。。', todo.value.text)
    }
  },
  // {flush: 'post'}
)

// 异步回调创建一个侦听器，它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏
let watch2: any
setTimeout(() => {
  watch2 = watchEffect(() => {
    console.log(`异步侦听器：${count.value}`)
  })
  // watchEffect1()  //调用该回调函数即可清除侦听器
}, 3000)

/**
 * watch 的第一个参数可以是不同形式的“来源”：
 * 它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个来源组成的数组;
 * 不能直接侦听响应式对象的property，而是用getter函数（如下）；
 */
watch(count, (newVal) => {
  // console.log(`watch监听count:${newVal}`);
})
// watch(name.count,(count)=>{console.log(`watch监听property${count}`);}) //此处为错误示范
watch(
  () => {
    return name.count
  },
  (count) => {
    console.log(`watch侦听响应式对象的property【count】:${count}`)
  },
  // { deep: true,flush: 'post' }
)

/**
 * 计算属性 ref
 */
const isCountThree = computed(() => {
  return name.count === 3 ? 'Yes' : 'No'
})

/**
 * 依赖注入
 * 当使用响应式 provide/inject 值时，建议尽可能将任何对响应式状态的变更都保持在 provider 内部。
 * 如果你想确保从 provide 传过来的数据不能被 injector 的组件更改，你可以使用readonly() 来包装提供的值
 * 
 * 使用 Symbol 作注入名
    但如果你正在构建大型的应用程序，包含非常多的依赖供给，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。建议在一个单独的文件中导出这些注入名 Symbol
 */
const provideMsg = ref('hello')
function updateProvideMsg() {
  provideMsg.value = 'updateVal'
}
provide('provideMsg', { provideMsg, updateProvideMsg })
provide('provideCount', readonly(count))

onMounted(() => {
  // console.log("【onMounted】count:" + count.value);
  console.log('【onMounted】count:' + name.count)
  console.log('child:' + todoItem.value?.a)
})
onUnmounted(() => {
  watch2()
})
</script>

<template>
  <h1 :class="{ green: isGreen, h1: true }" @click="changeColor">{{ msg }}</h1>
  <!-- <div class="mapArray"><span v-for="item in list">{{item+'-'}}</span></div> -->
  <button type="button" @click="addClick">
    {{ name.count }},count is: {{ count }}
  </button>
  <todo-item
    ref="todoItem"
    :todo="todo"
    :parent="'hello'"
    @changeColor="changeColor"
    ><template #todoSlot="{ msg, label }"
      ><p>{{ msg }} {{ label }}</p></template
    ></todo-item
  >
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
