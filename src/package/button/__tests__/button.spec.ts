import { mount, shallowMount } from '@vue/test-utils'
import TButton, { TButtonGroup } from '../index'

const text = 'that girl I never forget...'

describe('Button.vue', () => {
  it('render text', () => {
    const wrapper = shallowMount(TButton, {
      slots: {
        default: text,
      },
    })

    expect(wrapper.text()).toBe(text)
  })

  it('create primary button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        type: 'primary',
      },
    })

    expect(wrapper.classes()).toContain('is-primary')
  })

  it('create dashed button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        dashed: true,
      },
    })

    expect(wrapper.classes()).toContain('is-dashed')
  })

  it('create small size button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        size: 'small',
      },
    })

    expect(wrapper.classes()).toContain('is-small')
  })

  it('create circle button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        circle: true,
      },
    })

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('create round button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        round: true,
      },
    })

    expect(wrapper.classes()).toContain('is-round')
  })

  it('create plain button', () => {
    const wrapper = shallowMount(TButton, {
      props: {
        plain: true,
      },
    })

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('create disabled button', () => {
    const wrapper = shallowMount(TButton, {
      props: { disabled: true },
    })

    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('button click', async () => {
    const wrapper = shallowMount(TButton, {
      slots: {
        default: text,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toBeDefined()
  })

  it('button group', () => {
    const wrapper = mount({
      template: `
        <t-button-group>
          <t-button>button one</t-button>
          <t-button>button two</t-button>
        </t-button-group>
      `,

      components: {
        't-button': TButton,
        't-button-group': TButtonGroup,
      },
    })

    expect(wrapper.classes()).toContain('t-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })
})
