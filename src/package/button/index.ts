import { App, Plugin } from 'vue'

import TButton from './src/button.vue'
import TButtonGroup from './src/button-group.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component(TButton.name, TButton)
    app.component(TButtonGroup.name, TButtonGroup)
  },
}

export { TButton, TButtonGroup }
