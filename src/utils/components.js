/*
 * @use: 
 * @description: 动态渲染组件
 * @SpecialInstructions:  这里全部使用异步组件加载的方式进行处理，后面的组件数量会比较大，这里全部进行异步处理
 * @Author: clearlove
 * @Date: 2023-06-06 17:12:25
 * @FilePath: /apple-office-website/src/utils/components.js
 */
import { defineAsyncComponent } from 'vue'

// 商店hover组件 
const HoverStoreContent = defineAsyncComponent(() => import('../components/singleModules/Store/HoverContent/index.vue'))
// Mac hover组件
const HoverMacContent = defineAsyncComponent(() => import('../components/singleModules/Mac/HoverContent/index.vue'))
// iPad hover组件
const HoverIpadContent = defineAsyncComponent(() => import('../components/singleModules/iPad/HoverContent/index.vue'))

export {
  HoverStoreContent,
  HoverMacContent,
  HoverIpadContent
}