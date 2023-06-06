<!--
 * @use: 
 * @description: 基础布局
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:47:12
 * @FilePath: /appleOfficeWebsite/src/components/BaseLayout/index.vue
-->
<template>
  <div class="container">
    <Menu />
  </div>
</template>
<script setup>
import Menu from '../Menu/index.vue'
</script>
<style lang="less" scoped>
  .container{
    width : 100%;
    position: fixed;
    top: 10px;
    background-color : rgba(22, 22, 23, .8);
  }
</style>