<template>
  <div class="t-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TButtonGroup',
})
</script>
<style lang="less" scoped>
@import url('@/style/theme.less');
.t-button-group {
  /deep/ .t-button {
    margin: 0 !important;
    border-radius: 0;

    &:nth-child(2n) {
      border-left: 0.5px solid @default;
      border-right: 0.5px solid @default;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}
</style>
