import { createApp } from 'vue'
<<<<<<< HEAD
=======
import './scss/index.scss'
>>>>>>> refs/remotes/origin/main
import App from './App.vue'
import { router } from './router'

<<<<<<< HEAD
const app = createApp(App)
app.mount('#app')
=======
createApp(App).use(router).mount('#app')
>>>>>>> refs/remotes/origin/main
