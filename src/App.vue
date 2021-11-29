<script setup lang="ts"></script>

<template>
  <div style="margin-bottom: 10px">
    <h3>Base</h3>
    <TButton type="default">Default</TButton>
    <TButton type="primary">Primary</TButton>
    <TButton type="success">Success</TButton>
    <TButton type="warning">Warning</TButton>
    <TButton type="error">Error</TButton>
    <TButton type="info">Info</TButton>
    <TButton type="text">Button Text</TButton>
    <div></div>
    <TButton plain type="default">Default</TButton>
    <TButton plain type="primary">Primary</TButton>
    <TButton plain type="success">Success</TButton>
    <TButton plain type="warning">Warning</TButton>
    <TButton plain type="error">Error</TButton>
    <TButton plain type="info">Info</TButton>
    <TButton plain type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Disabled</h3>
    <TButton disabled type="default">Default</TButton>
    <TButton disabled type="primary">Primary</TButton>
    <TButton disabled type="success">Success</TButton>
    <TButton disabled type="warning">Warning</TButton>
    <TButton disabled type="error">Error</TButton>
    <TButton disabled type="info">Info</TButton>
    <TButton disabled type="text">Button Text</TButton>
    <div></div>
    <TButton plain disabled type="default">Default</TButton>
    <TButton plain disabled type="primary">Primary</TButton>
    <TButton plain disabled type="success">Success</TButton>
    <TButton plain disabled type="warning">Warning</TButton>
    <TButton plain disabled type="error">Error</TButton>
    <TButton plain disabled type="info">Info</TButton>
    <TButton plain disabled type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Round</h3>
    <TButton round type="default">Default</TButton>
    <TButton round type="primary">Primary</TButton>
    <TButton round type="success">Success</TButton>
    <TButton round type="warning">Warning</TButton>
    <TButton round type="error">Error</TButton>
    <TButton round type="info">Info</TButton>
    <TButton round type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Cricle</h3>
    <TButton type="default" circle>圆</TButton>
    <TButton type="primary" circle>圆</TButton>
    <TButton type="success" circle>圆</TButton>
    <TButton type="warning" circle>圆</TButton>
    <TButton type="error" circle>圆</TButton>
    <TButton type="info" circle>圆</TButton>
    <TButton type="text" circle>圆</TButton>
  </div>

  <div>
    <h3>Size</h3>
    <TButton>Default</TButton>
    <TButton size="middle">Middle</TButton>
    <TButton size="small">Small</TButton>
    <TButton size="mini">mini</TButton>
    <div></div>
    <TButton round>Default</TButton>
    <TButton round size="middle">Middle</TButton>
    <TButton round size="small">Small</TButton>
    <TButton round size="mini">mini</TButton>
    <div></div>
    <TButton size="default" type="default" circle>圆</TButton>
    <TButton size="middle" type="default" circle>圆</TButton>
    <TButton size="small" type="default" circle>圆</TButton>
    <TButton size="mini" type="default" circle>圆</TButton>
  </div>

  <div>
    <h3>Button Group</h3>
    <TButtonGroup>
      <TButton type="primary">Prev Button</TButton>
      <TButton type="primary">Next Button</TButton>
    </TButtonGroup>

    <div></div>
    <TButtonGroup>
      <TButton type="primary">One Button</TButton>
      <TButton disabled type="primary">Two Button</TButton>
      <TButton type="primary">Three Button</TButton>
    </TButtonGroup>
  </div>
</template>

<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px auto;
  width: 750px;

  h3 {
    padding: 5px 0;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  button {
    margin-right: 10px;
    margin-bottom: 10px !important;
  }
}
</style>
