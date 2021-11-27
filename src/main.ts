import { createApp } from 'vue'
import App from './App.vue'
import TUi from './package'

const app = createApp(App)

app.use(TUi)

app.mount('#app')
