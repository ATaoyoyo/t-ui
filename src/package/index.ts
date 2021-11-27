import TButton, { TButtonGroup } from './button'

const COMPONENTS = [TButton, TButtonGroup]

const TUi = {
  install: function (Vue: any, options: {}) {
    COMPONENTS.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default TUi
