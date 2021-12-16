<template>
  <Icon class="t-icon" :size="size" :color="color" :tag="tag">
    <slot></slot>
  </Icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@vicons/utils'
export default defineComponent({
  name: 'TIcon',

  components: { Icon },

  props: {
    size: { type: [String, Number], default: 17 },

    color: String,

    tag: String,
  },
})
</script>

<style lang="less" scoped>
.t-icon {
  text-align: center;
  vertical-align: middle;
}
</style>
