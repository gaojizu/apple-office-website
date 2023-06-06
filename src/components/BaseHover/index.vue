<!--
 * @use: 
 * @description: 鼠标放置菜单上面显示的部分外层
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:35:16
 * @FilePath: /apple-office-website/src/components/BaseHover/index.vue
-->
<template>
  <div class="a-hover-bg">
    <a-row>
      <a-col :span="6"></a-col>
      <a-col :span="12">
        <component :is="props.currComponent"></component>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  currComponent : Object
});
</script>

<style lang="less" scoped>
.a-hover-bg {
  height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  background-color: rgba(22, 22, 23, 0.9);
  color: #fff;
}
</style>
