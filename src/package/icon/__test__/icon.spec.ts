import { mount } from '@vue/test-utils'
import TIcon from '../index'

import { AlbumsOutline as Icon } from '@vicons/ionicons5'

describe('icon.vue', () => {
  it('render icon', () => {
    const wrapper = mount({
      template: `
        <t-icon><i-con /></t-icon>
      `,

      components: {
        't-icon': TIcon,
        'i-con': Icon,
      },
    })

    expect(wrapper.classes()).toContain('t-icon')
    expect(wrapper.findAll('svg').length).toBe(1)
  })
})
