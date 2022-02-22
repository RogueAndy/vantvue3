import { createApp } from 'vue'
import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
  watch,
  computed
} from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar } from 'vant'



// const app = createApp(App)
// app.use(NavBar)
// app.use(router)
// app.mount('#app')

createApp(App).use(NavBar).use(router).mount('#app')
