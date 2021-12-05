import { shallowMount } from '@vue/test-utils'
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
    const wrapper = shallowMount(TButtonGroup, {
      slots: {
        default: '<TButton>Button 1</TButton><TButton>Button 2</TButton>',
      },
    })

    expect(wrapper.text()).toContain('Button 1Button 2')
  })
})