<template>
  <div class="button">
    <div class="buttons">
      <TButton>Default</TButton>
      <TButton type="primary">Primary</TButton>
      <TButton type="success">Success</TButton>
      <TButton type="warning">Warning</TButton>
      <TButton type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton round>Default</TButton>
      <TButton round type="primary">Primary</TButton>
      <TButton round type="success">Success</TButton>
      <TButton round type="warning">Warning</TButton>
      <TButton round type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton plain>Default</TButton>
      <TButton plain type="primary">Primary</TButton>
      <TButton plain type="success">Success</TButton>
      <TButton plain type="warning">Warning</TButton>
      <TButton plain type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton round plain>Default</TButton>
      <TButton round plain type="primary">Primary</TButton>
      <TButton round plain type="success">Success</TButton>
      <TButton round plain type="warning">Warning</TButton>
      <TButton round plain type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton dashed>Default</TButton>
      <TButton dashed type="primary">Primary</TButton>
      <TButton dashed type="success">Success</TButton>
      <TButton dashed type="warning">Warning</TButton>
      <TButton dashed type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton round dashed>Default</TButton>
      <TButton round dashed type="primary">Primary</TButton>
      <TButton round dashed type="success">Success</TButton>
      <TButton round dashed type="warning">Warning</TButton>
      <TButton round dashed type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton circle>
        <TIcon color="#212121"><BarbellOutline /></TIcon>
      </TButton>
      <TButton circle type="primary">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton circle type="success">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton circle type="warning">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton circle type="error">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle>
        <TIcon color="#2080F0"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle type="primary">
        <TIcon color="#2080F0"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle type="success">
        <TIcon color="#18A058"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle type="warning">
        <TIcon color="#FCB040"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle type="error">
        <TIcon color="#D03050"><BarbellOutline /></TIcon>
      </TButton>
    </div>

    <div class="buttons">
      <TButton>Default</TButton>
      <TButton type="primary">
        <template #icon>
          <t-icon>
            <CardOutline />
          </t-icon>
        </template>
        Primary
      </TButton>
      <TButton size="middle" type="success">Success</TButton>
      <TButton size="small" type="warning">Warning</TButton>
      <TButton size="mini" type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton round>Default</TButton>
      <TButton round type="primary">
        <template #icon>
          <t-icon>
            <CardOutline />
          </t-icon>
        </template>
        Primary
      </TButton>
      <TButton round size="middle" type="success">Success</TButton>
      <TButton round size="small" type="warning">Warning</TButton>
      <TButton round size="mini" type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton dashed round>Default</TButton>
      <TButton dashed round type="primary">
        <template #icon>
          <t-icon>
            <CardOutline />
          </t-icon>
        </template>

        Primary
      </TButton>
      <TButton dashed round size="middle" type="success">Success</TButton>
      <TButton dashed round size="small" type="warning">Warning</TButton>
      <TButton dashed round size="mini" type="error">Error</TButton>
    </div>

    <div class="buttons">
      <TButton circle type="primary">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="middle" circle type="success">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="small" circle type="warning">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="mini" circle type="error">
        <TIcon color="#fff"><BarbellOutline /></TIcon>
      </TButton>
      <TButton dashed circle type="primary">
        <TIcon color="#2080F0"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="middle" dashed circle type="success">
        <TIcon color="#18A058"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="small" dashed circle type="warning">
        <TIcon color="#FCB040"><BarbellOutline /></TIcon>
      </TButton>
      <TButton size="mini" dashed circle type="error">
        <TIcon color="#D03050" size="15"><BarbellOutline /></TIcon>
      </TButton>
    </div>

    <div class="buttons">
      <TButton plain disabled>Default</TButton>
      <TButton text>Just a Text Button</TButton>
    </div>
  </div>
</template>
<script lang="ts">
import { BarbellOutline, CardOutline } from '@vicons/ionicons5'
export default {
  name: 'Buttons',

  components: { BarbellOutline, CardOutline },
}
</script>
<style lang="less" scoped>
button {
  margin: 0 10px 10px 0 !important;
}
.buttons {
  display: flex;
  align-items: center;
}
</style>
