/*
 * @use: 
 * @description: 
 * @SpecialInstructions: 无
 * @Author: clearlove
 * @Date: 2023-06-06 10:25:56
 * @FilePath: /apple-office-website/src/main.js
 */
import { createApp } from 'vue'
import './style.css'
import './style.less'
import './base'
import App from './App.vue'
import Antd from './base'
// FIXME: 该组件封装为全局组件，使用频率过高
import CommonHover from './components/singleModules/CommonHover/index.vue'

const app = createApp(App) 

app.use(Antd)
app.component('CommonHover',CommonHover)
app.mount('#app')
