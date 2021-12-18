<template>
  <button
    :class="[
      't-button',
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
import { defineComponent, PropType } from 'vue'

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

  setup(props, ctx) {},
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>
