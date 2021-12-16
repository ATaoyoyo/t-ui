import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { InputPlugin } from './input'

const COMPONENTS = [ButtonPlugin, IconPlugin, InputPlugin]

const TUi: Plugin = {
  install: function (app: App, options: {}) {
    COMPONENTS.forEach((component) => {
      component.install?.(app)
    })
  },
}

export default TUi

export * from './button'
export * from './icon'
export * from './input'
