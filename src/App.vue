<script setup lang="ts"></script>

<template>
  <div style="margin-bottom: 10px">
    <h3>Base</h3>
    <TButton type="default">Default</TButton>
    <TButton type="primary">Primary</TButton>
    <TButton type="success">Success</TButton>
    <TButton type="warning">Warning</TButton>
    <TButton type="danger">Danger</TButton>
    <TButton type="info">Info</TButton>
    <TButton type="text">Button Text</TButton>
    <div></div>
    <TButton :plain="true" type="default">Default</TButton>
    <TButton :plain="true" type="primary">Primary</TButton>
    <TButton :plain="true" type="success">Success</TButton>
    <TButton :plain="true" type="warning">Warning</TButton>
    <TButton :plain="true" type="danger">Danger</TButton>
    <TButton :plain="true" type="info">Info</TButton>
    <TButton :plain="true" type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Disabled</h3>
    <TButton :disabled="true" type="default">Default</TButton>
    <TButton :disabled="true" type="primary">Primary</TButton>
    <TButton :disabled="true" type="success">Success</TButton>
    <TButton :disabled="true" type="warning">Warning</TButton>
    <TButton :disabled="true" type="danger">Danger</TButton>
    <TButton :disabled="true" type="info">Info</TButton>
    <TButton :disabled="true" type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Round</h3>
    <TButton :round="true" type="default">Default</TButton>
    <TButton :round="true" type="primary">Primary</TButton>
    <TButton :round="true" type="success">Success</TButton>
    <TButton :round="true" type="warning">Warning</TButton>
    <TButton :round="true" type="danger">Danger</TButton>
    <TButton :round="true" type="info">Info</TButton>
    <TButton :round="true" type="text">Button Text</TButton>
  </div>

  <div style="margin-bottom: 10px">
    <h3>Cricle</h3>
    <TButton type="default" :circle="true">圆</TButton>
    <TButton type="primary" :circle="true">圆</TButton>
    <TButton type="success" :circle="true">圆</TButton>
    <TButton type="warning" :circle="true">圆</TButton>
    <TButton type="danger" :circle="true">圆</TButton>
    <TButton type="info" :circle="true">圆</TButton>
    <TButton type="text" :circle="true">圆</TButton>
  </div>

  <div>
    <h3>Size</h3>
    <TButton>Default</TButton>
    <TButton size="middle">Middle</TButton>
    <TButton size="small">Small</TButton>
    <TButton size="mini">mini</TButton>
    <div></div>
    <TButton :round="true">Default</TButton>
    <TButton :round="true" size="middle">Middle</TButton>
    <TButton :round="true" size="small">Small</TButton>
    <TButton :round="true" size="mini">mini</TButton>
    <div></div>
    <TButton size="default" type="default" :circle="true">圆</TButton>
    <TButton size="middle" type="default" :circle="true">圆</TButton>
    <TButton size="small" type="default" :circle="true">圆</TButton>
    <TButton size="mini" type="default" :circle="true">圆</TButton>
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
      <TButton type="primary">Two Button</TButton>
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
