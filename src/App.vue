<template>
  <t-button type="info" @click="handClick" icon="CashOutline">
    <template #icon>
      <t-icon>
        <cash-icon />
      </t-icon>
    </template>
    Icon Button
  </t-button>
</template>

<script setup lang="ts">
import { CashOutline as CashIcon } from '@vicons/ionicons5'
const handClick = (e: MouseEvent) => console.log(e)
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
