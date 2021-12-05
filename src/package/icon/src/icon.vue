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
    size: [String, Number],

    color: String,

    tag: String,
  },

  setup() {
    const instance = getCurrentInstance()
    console.log(instance)
  },
})
</script>

<style lang="less" scoped>
.t-icon {
  text-align: center;
  vertical-align: middle;
}
</style>
