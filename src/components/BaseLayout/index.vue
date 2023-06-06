<!--
 * @use: 
 * @description: 基础布局
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:47:12
 * @FilePath: /apple-office-website/src/components/BaseLayout/index.vue
-->
<template>
  <div class="container">
    <!-- 广告模块 -->
    <BaseAdver />
    <!-- 菜单模块 -->
    <Menu />
    <!-- 页面内容展示区 -->
  </div>
</template>
<script setup>
import Menu from "../Menu/index.vue";
import BaseAdver from "../BaseAdver/index.vue";
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: rgba(22, 22, 23, 0.8);
}
</style>
