import TButton, { TButtonGroup } from './button'
import TIcon from './icon'

const COMPONENTS = [TButton, TButtonGroup, TIcon]

const TUi = {
  install: function (Vue: any, options: {}) {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default TUi
