<!--
 * @use: 
 * @description: 顶部菜单
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:36:49
 * @FilePath: /apple-office-website/src/components/Menu/index.vue
-->
<template>
  <div class="a-menu">
    <a-space :size="size">
      <span
        v-for="(item, index) in menuLists"
        :key="index"
        :style="{ fontSize: item.size ? item.size : 'xx-small' }"
        class="a-single-element"
        >{{ item.title ? item.title : item.icon }}</span
      >
    </a-space>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { menuLists } from "../../utils/constant";
const size = ref(38);
</script>
<style lang="less" scoped>
.a-menu {
  width: 100%;
  height: 44px;
  min-width: 1200px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-style: normal;
  .a-single-element {
    cursor: pointer;
  }
}
</style>
