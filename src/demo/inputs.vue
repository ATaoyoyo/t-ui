<template>
  <div class="inputs">
    <t-input v-model="text" clearable type="textarea" placeholder="write sometings......" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'Inputs',

  setup() {
    const state = reactive({
      text: 'this is a input...',
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
