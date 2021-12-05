<template>
  <div class="button">
    <div>
      <TButton>Default</TButton>
      <TButton type="primary">Primary</TButton>
      <TButton type="success">Success</TButton>
      <TButton type="warning">Warning</TButton>
      <TButton type="error">Error</TButton>
    </div>

    <div>
      <TButton round>Default</TButton>
      <TButton round type="primary">Primary</TButton>
      <TButton round type="success">Success</TButton>
      <TButton round type="warning">Warning</TButton>
      <TButton round type="error">Error</TButton>
    </div>

    <div>
      <TButton plain>Default</TButton>
      <TButton plain type="primary">Primary</TButton>
      <TButton plain type="success">Success</TButton>
      <TButton plain type="warning">Warning</TButton>
      <TButton plain type="error">Error</TButton>
    </div>

    <div>
      <TButton round plain>Default</TButton>
      <TButton round plain type="primary">Primary</TButton>
      <TButton round plain type="success">Success</TButton>
      <TButton round plain type="warning">Warning</TButton>
      <TButton round plain type="error">Error</TButton>
    </div>

    <div>
      <TButton dashed>Default</TButton>
      <TButton dashed type="primary">Primary</TButton>
      <TButton dashed type="success">Success</TButton>
      <TButton dashed type="warning">Warning</TButton>
      <TButton dashed type="error">Error</TButton>
    </div>

    <div>
      <TButton round dashed>Default</TButton>
      <TButton round dashed type="primary">Primary</TButton>
      <TButton round dashed type="success">Success</TButton>
      <TButton round dashed type="warning">Warning</TButton>
      <TButton round dashed type="error">Error</TButton>
    </div>

    <div>
      <TButton circle>圆</TButton>
      <TButton circle type="primary">圆</TButton>
      <TButton circle type="success">圆</TButton>
      <TButton circle type="warning">圆</TButton>
      <TButton circle type="error">圆</TButton>
      <TButton dashed circle>圆</TButton>
      <TButton dashed circle type="primary">圆</TButton>
      <TButton dashed circle type="success">圆</TButton>
      <TButton dashed circle type="warning">圆</TButton>
      <TButton dashed circle type="error">圆</TButton>
    </div>

    <div>
      <TButton>Default</TButton>
      <TButton type="primary">Primary</TButton>
      <TButton size="middle" type="success">Success</TButton>
      <TButton size="small" type="warning">Warning</TButton>
      <TButton size="mini" type="error">Error</TButton>
    </div>

    <div>
      <TButton round>Default</TButton>
      <TButton round type="primary">Primary</TButton>
      <TButton round size="middle" type="success">Success</TButton>
      <TButton round size="small" type="warning">Warning</TButton>
      <TButton round size="mini" type="error">Error</TButton>
    </div>

    <div>
      <TButton dashed round>Default</TButton>
      <TButton dashed round type="primary">Primary</TButton>
      <TButton dashed round size="middle" type="success">Success</TButton>
      <TButton dashed round size="small" type="warning">Warning</TButton>
      <TButton dashed round size="mini" type="error">Error</TButton>
    </div>

    <div>
      <TButton circle type="primary">圆</TButton>
      <TButton size="middle" circle type="success">圆</TButton>
      <TButton size="small" circle type="warning">圆</TButton>
      <TButton size="mini" circle type="error">圆</TButton>
      <TButton dashed circle type="primary">圆</TButton>
      <TButton size="middle" dashed circle type="success">圆</TButton>
      <TButton size="small" dashed circle type="warning">圆</TButton>
      <TButton size="mini" dashed circle type="error">圆</TButton>
    </div>

    <div>
      <TButton plain disabled>Default</TButton>
      <TButton text>Just a Text Button</TButton>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Buttons',
}
</script>
<style lang="less" scoped>
button {
  margin: 0 10px 10px 0;
}
</style>
