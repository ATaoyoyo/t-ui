<script setup lang="ts">
import Buttons from '@/demo/buttons.vue'
import Inputs from '@/demo/inputs.vue'
import { AirplaneOutline } from '@vicons/ionicons5'
</script>

<template>
  <div id="app">
    <Inputs />
    <Buttons />
    <TIcon color="#f66">
      <AirplaneOutline />
    </TIcon>
  </div>
</template>

<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px auto;
  width: 750px;
}
</style>
