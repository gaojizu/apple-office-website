<!--
 * @use: 
 * @description: 公共的Hover渲染部分
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 17:49:04
 * @FilePath: /apple-office-website/src/components/singleModules/CommonHover/index.vue
-->
<template>
  <div>
    <div class="f-content">
      <div class="f-item" v-for="(item, index) in hoverInfos">
        <h6>{{ item.navigationName }}</h6>
        <div class="f-item-content">
          <h3 v-for="(it, d) in item.products">{{ it.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  hoverInfos : Array
})
</script>
<style lang="less" scoped>
  .f-content {
  display: flex;
  flex-direction: row;
  .f-item {
    margin-top: 40px;
    margin-right: 30px;
    h6 {
      color: gray;
      margin: 0;
      padding: 0;
    }
    .f-item-content {
      margin-top: 10px;
      h3 {
        color: #fff;
        cursor: pointer;
        margin-top: 10px;
        padding: 0;
        
      }
    }
  }
}
</style>