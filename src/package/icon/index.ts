import { App, Plugin } from 'vue'
import TIcon from './src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component(TIcon.name, TIcon)
  },
}

export { TIcon }
