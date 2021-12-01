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
      },
    ]"
    @click="onClick($event)"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { buttonType, buttonSize } from './button'

export default defineComponent({
  name: 'TButton',

  props: {
    type: String as PropType<buttonType>,

    size: String as PropType<buttonSize>,

    circle: Boolean,

    disabled: Boolean,

    round: Boolean,

    plain: Boolean,
  },

  setup(_props, ctx) {
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }

    return { onClick }
  },
})
</script>

<style lang="less" scoped>
@import url('../style/index.less');
</style>
