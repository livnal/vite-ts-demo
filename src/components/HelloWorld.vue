<script setup lang="ts">
import { ref, onMounted ,watchEffect} from "vue";
import TodoItem from './TodoItem.vue'

defineProps<{ msg: string }>();

const count = ref(0);
let isGreen = ref(false);
let list = ref([1,2,3,4,5]);
let todo=ref({text:123})

function addClick() {
  return count.value++;
}
/**
 * Attribute绑定
 */
function changeColor() {
  isGreen.value = !isGreen.value;
}

watchEffect(()=>{
  if(count.value%2===0){
    todo.value.text=count.value
  }
  console.log('监听中。。。',todo.value.text)
})

onMounted(() => {
  console.log("【onMounted】count:" + count.value);
});


</script>

<template>
  <h1 :class="{ green: isGreen, h1: true }" @click="changeColor">{{ msg }}</h1>
  <div class="mapArray"><span v-for="item in list">{{item+'-'}}</span></div>
  <button type="button" @click="addClick">count is: {{ count }}</button>
  <TodoItem :todo="todo"></TodoItem>
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
