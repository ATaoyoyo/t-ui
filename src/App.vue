<template>
  <t-button @click="handClick">click me</t-button>
</template>

<script setup lang="ts">
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
