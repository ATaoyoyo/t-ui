# 按钮 Button

## 基础按钮

使用`type`来区分不同类型的按钮。

:::demo

```vue
<template>
  <div>
    <t-button>Default</t-button>
    <t-button type="primary" @click="handClick">Primary</t-button>
    <t-button type="info">Info</t-button>
    <t-button type="success">Success</t-button>
    <t-button type="warning">Warning</t-button>
    <t-button type="error">Error</t-button>
  </div>
</template>
<script setup>
const handClick = (e) => console.log('primary', e)
</script>
```

:::

## 次要按钮

添加`plain`属性表示这是一个次要按钮。

:::demo

```vue
<template>
  <div>
    <t-button plain>Default</t-button>
    <t-button plain type="primary" @click="handClick">Primary</t-button>
    <t-button plain type="info">Info</t-button>
    <t-button plain type="success">Success</t-button>
    <t-button plain type="warning">Warning</t-button>
    <t-button plain type="error">Error</t-button>
  </div>
</template>
```

:::

## 圆角按钮

使用`round`属性生成一个圆角按钮。

:::demo

```vue
<template>
  <div>
    <t-button round>Default</t-button>
    <t-button round type="primary" @click="handClick">Primary</t-button>
    <t-button round type="info">Info</t-button>
    <t-button round type="success">Success</t-button>
    <t-button round type="warning">Warning</t-button>
    <t-button round type="error">Error</t-button>
  </div>

  <div>
    <t-button plain round>Default</t-button>
    <t-button plain round type="primary" @click="handClick">Primary</t-button>
    <t-button plain round type="info">Info</t-button>
    <t-button plain round type="success">Success</t-button>
    <t-button plain round type="warning">Warning</t-button>
    <t-button plain round type="error">Error</t-button>
  </div>
</template>
```

:::

## 虚线按钮

使用`dashed`属性表示一个虚线按钮。

:::demo

```vue
<template>
  <div>
    <t-button dashed>Default</t-button>
    <t-button dashed type="primary" @click="handClick">Primary</t-button>
    <t-button dashed type="info">Info</t-button>
    <t-button dashed type="success">Success</t-button>
    <t-button dashed type="warning">Warning</t-button>
    <t-button dashed type="error">Error</t-button>
  </div>
  <div>
    <t-button dashed round>Default</t-button>
    <t-button dashed round type="primary" @click="handClick">Primary</t-button>
    <t-button dashed round type="info">Info</t-button>
    <t-button dashed round type="success">Success</t-button>
    <t-button dashed round type="warning">Warning</t-button>
    <t-button dashed round type="error">Error</t-button>
  </div>
</template>
```

:::

## 圆形按钮

圆圆的按钮很可爱～

:::demo

```vue
<template>
  <TButton circle>
    <TIcon color="#212121">蛤</TIcon>
  </TButton>
  <TButton circle type="primary">
    <TIcon color="#fff">蛤</TIcon>
  </TButton>
  <TButton circle type="success">
    <TIcon color="#fff">蛤</TIcon>
  </TButton>
  <TButton circle type="warning">
    <TIcon color="#fff">蛤</TIcon>
  </TButton>
  <TButton circle type="error">
    <TIcon color="#fff">蛤</TIcon>
  </TButton>
  <TButton dashed circle>
    <TIcon color="#2080F0">蛤</TIcon>
  </TButton>
  <TButton dashed circle type="primary">
    <TIcon color="#2080F0">蛤</TIcon>
  </TButton>
  <TButton dashed circle type="success">
    <TIcon color="#18A058">蛤</TIcon>
  </TButton>
  <TButton dashed circle type="warning">
    <TIcon color="#FCB040">蛤</TIcon>
  </TButton>
  <TButton dashed circle type="error">
    <TIcon color="#D03050">蛤</TIcon>
  </TButton>
</template>
```

:::

## 禁用按钮

禁止瑟瑟～

:::demo

```vue
<template>
  <div>
    <t-button disabled>Default</t-button>
    <t-button disabled type="primary" @click="handClick">Primary</t-button>
    <t-button disabled type="info">Info</t-button>
    <t-button disabled type="success">Success</t-button>
    <t-button disabled type="warning">Warning</t-button>
    <t-button disabled type="error">Error</t-button>
  </div>
</template>
<script setup>
const handClick = (e) => console.log('primary', e)
</script>
```

:::
