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
    <span class="t-button__icon">
      <slot name="icon"></slot>
    </span>
    <span class="t-button__content">
      <slot></slot>
    </span>
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

    dashed: Boolean,

    text: Boolean,
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
.t-button {
  display: inline-flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;

  &__icon {
    font-size: 16px;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
}
</style>
