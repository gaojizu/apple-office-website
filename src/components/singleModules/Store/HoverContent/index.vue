<!--
 * @use: 
 * @description: store 中 hover内容 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 15:43:11
 * @FilePath: /apple-office-website/src/components/singleModules/Store/HoverContent/index.vue
-->
<template>
  <div>
    <CommonHover :hoverInfos="hoverInfos"/>
  </div>
</template>
<script setup>
import { hoverInfos } from "./constant";
</script>
<style lang="less" scoped>
</style>
