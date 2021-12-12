<template>
  <div class="inputs">
    <t-input v-model="text" clearable placeholder="write sometings......" />
    <t-input v-model="text" round clearable placeholder="write sometings......" />

    <t-input v-model="textarea" clearable type="textarea" placeholder="this is textarea..." />

    <t-input v-model="textarea" round clearable type="textarea" placeholder="this is textarea..." />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'Inputs',

  setup() {
    const state = reactive({
      text: 'this is a input...',
      textarea: 'this is a textarea!',
    })

    return { ...toRefs(state) }
  },
})
</script>
<style lang="less" scoped>
.inputs {
  margin-bottom: 10px;
}
</style>
