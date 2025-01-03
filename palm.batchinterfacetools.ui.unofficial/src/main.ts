import { createApp } from 'vue'
import router from './router' 
import App from './App.vue'
// import bootstrap js this way so that it can be injected to each vue
// loading it more than once (importing to an individual vue) can cause
// navbar to stop working
import * as bootstrap from 'bootstrap'

createApp(App).use(router).provide('bootstrap', bootstrap).mount('#app')
