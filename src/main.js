import { createApp } from 'vue'
import './style.css'
import './style.less'
import './base'
import App from './App.vue'
import Antd from './base'
const app = createApp(App) 

app.use(Antd)
app.mount('#app')
