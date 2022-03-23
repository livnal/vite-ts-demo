<!--
 * @Descripttion: 
 * @version: 
 * @Author: jiaolina
 * @Date: 2022-03-23 15:28:25
 * @LastEditors: jiaolina
 * @LastEditTime: 2022-03-23 17:38:50
-->
<script setup lang="ts"> 
  import {ref} from 'vue'
  const props=defineProps({
    todo:Object
  })

</script>

<template >
  <div>第{{props.todo?.text}}个item</div>
</template>

<style lang="scss" scoped></style>