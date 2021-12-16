<template>
  <button
    class="t-button"
    :class="[
      type ? 'is-' + type : 'is-default',
      size ? 'is-' + size : '',
      {
        'is-circle': circle,
        'is-disabled': disabled,
        'is-round': round,
        'is-plain': plain,
        'is-dashed': dashed,
        'is-text': text,
      },
    ]"
    @click="onClick($event)"
  >
    <span class="t-button__content">
      <span class="t-button__icon" :style="{ marginRight: $slots.icon ? '5px' : 0 }">
        <slot name="icon"></slot>
      </span>
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, PropType } from 'vue'

import { buttonType, buttonSize } from './interface'

export default defineComponent({
  name: 'TButton',

  props: {
    type: String as PropType<buttonType>,

    size: String as PropType<buttonSize>,

    circle: Boolean,

    disabled: Boolean,

    round: Boolean,

    plain: Boolean,

    dashed: Boolean,

    text: Boolean,
  },

  setup(props, ctx) {
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }

    return { onClick }
  },
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>
