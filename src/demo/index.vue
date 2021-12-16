<template>
  <div class="demo">
    <div class="left-aside">
      <aside>
        <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">
          {{ link.name }}
        </router-link>
      </aside>
    </div>

    <div class="main">
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import components from '../package/list.json'

const data = reactive({
  links: components.map((item) => ({
    path: item.path,
    name: item.componentZhName,
  })),
})
</script>
<style lang="less" scoped>
.demo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .left-aside {
    padding: 0 10px;
    width: 280px;
    height: 100%;
    border-right: 1px solid #f1f1f1;
    box-sizing: border-box;
  }

  .main {
    flex: 1;
    padding-left: 10px;
    height: 100%;
  }
}
</style>
