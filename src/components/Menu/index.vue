<!--
 * @use: 
 * @description: 顶部菜单
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:36:49
 * @FilePath: /apple-office-website/src/components/Menu/index.vue
-->
<template>
  <div class="main">
    <!-- 菜单 -->
    <div class="a-menu">
      <a-space :size="size">
        <span
          v-for="(item, index) in menuLists"
          @mouseover="handleHover(item)"
          @mouseleave="handleLeave"
          :key="item.id"
          :style="{ fontSize: item.size ? item.size : 'xx-small' }"
          class="a-single-element"
          >{{ item.title ? item.title : item.icon }}</span
        >
      </a-space>
    </div>
    <!-- hover蒙层 -->
    <div class="a-hover-mc">
      <BaseHover v-show="isShowHover" :currComponent="currComponent" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { menuLists } from "../../utils/constant";
import BaseHover from "../BaseHover/index.vue";
const size = ref(50);
const isShowHover = ref(false);
const currComponent = ref({});

const handleHover = (item) => {
  console.log(`🚀 - file: index.vue:41 - handleHover - item:`, item);

  currComponent.value = item.hoverComponent;
  isShowHover.value = true;
};
const handleLeave = () => {
  isShowHover.value = false;
};
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
    position: relative;
  }
}
.a-hover-mc {
  transition: all 1s;
  top: 0;
  left: 0;
}
</style>
