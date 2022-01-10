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
  <TButton circle> 蛤 </TButton>
  <TButton circle type="primary"> 蛤 </TButton>
  <TButton circle type="success"> 蛤 </TButton>
</template>
```

:::

## 文字按钮

:::demo

```vue
<template>
  <t-button text>text button</t-button>
  <t-button text type="success">text button</t-button>
  <t-button text disabled type="info">text button</t-button>
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

## 不同尺寸的按钮

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

通过设置 `size`，属性来设置不同的按钮尺寸，可供选择的尺寸有：`medium`、`small`、`mini`。
:::demo

```vue
<template>
  <t-button>Default</t-button>
  <t-button size="medium">Medium</t-button>
  <t-button size="small">Small</t-button>
  <t-button size="mini">Mini</t-button>
</template>
```

:::

:::demo

```vue
<template>
  <t-button icon="CashOutline">
    <template #icon>
      <t-icon>
        <cash-icon />
      </t-icon>
    </template>
    来点钞票
  </t-button>
  <t-button>
    <template #icon>
      <t-icon>
        <cash-icon />
      </t-icon>
    </template>
    来点钞票
  </t-button>
</template>
<script setup>
import { ref } from 'vue'
// import Vicons from '@vicons/ionicons5'
</script>
```

:::
