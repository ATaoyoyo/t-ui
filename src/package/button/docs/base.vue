<template>
  <div class="base-buttons">
    <t-button @click="handleClick('Default')">Default</t-button>
    <t-button @click="handleClick('Primary')" type="primary">Primary</t-button>
    <t-button @click="handleClick('Info')" type="info">Info</t-button>
    <t-button @click="handleClick('Success')" type="success">Success</t-button>
    <t-button @click="handleClick('Warning')" type="warning">Warning</t-button>
    <t-button @click="handleClick('Error')" type="error">Error</t-button>
  </div>
</template>
<script>
export default {
  name: 'Base',

  setup() {
    const handleClick = (value) => console.log(value)

    return { handleClick }
  },
}
</script>
<style lang="less" scoped>
.base-buttons {
  .t-button {
    margin: 0 10px 10px 0;
  }
}
</style>
