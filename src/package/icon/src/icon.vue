<template>
  <Icon class="t-icon" :size="size" :color="color" :tag="tag">
    <slot></slot>
  </Icon>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { Icon } from '@vicons/utils'
export default defineComponent({
  name: 'TIcon',

  components: { Icon },

  props: {
    size: {
      type: [String, Number],
      default: 30,
    },

    color: String,

    tag: String,
  },

  setup() {
    const instance = getCurrentInstance()
    console.log(instance)
  },
})
</script>

<style lang="less" scoped></style>
