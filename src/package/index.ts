import TButton, { TButtonGroup } from './button'
import TIcon from './icon'
import TInput from './input'

const COMPONENTS = [TButton, TButtonGroup, TIcon, TInput]

const TUi = {
  install: function (Vue: any, options: {}) {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default TUi
