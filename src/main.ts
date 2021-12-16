import { createApp } from 'vue'
import App from './App.vue'
import TUi from './package'
import router from './router'

import './theme/index.less'

const app = createApp(App)

app.use(TUi)
app.use(router)

app.mount('#app')
