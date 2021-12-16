import { App, Plugin } from 'vue'
import TInput from './src/input.vue'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component(TInput.name, TInput)
  },
}

export { TInput }
