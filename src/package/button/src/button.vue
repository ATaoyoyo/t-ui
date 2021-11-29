<template>
  <button
    class="t-button"
    :class="[
      type ? 'is-' + type : 'is-default',
      size,
      {
        'is-circle': circle,
        'is-disabled': disabled,
        'is-round': round,
        'is-plain': plain,
      },
    ]"
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
})
</script>

<style lang="less" scoped>
@import url('../style/index.less');
</style>
