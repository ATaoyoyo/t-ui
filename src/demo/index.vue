<template>
  <div class="demo">
    <div class="left-aside">
      <aside>
        <template v-for="(item, index) in data.links" :key="index">
          <h3 class="component-type-title">
            <span>{{ item.title }}</span>
            <span>（{{ item.components.length }}）</span>
          </h3>
          <router-link v-for="(link, i) in item.components" :key="i" :to="link.path">
            <div class="component-item" :class="{ active: $route.path === link.path }">
              <span class="component-name zh">{{ link.name }}</span>
              <span class="component-name en">{{ link.componentName }}</span>
            </div>
          </router-link>
        </template>
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
import components from './list.json'

const data = reactive({
  links: components.map((item) => {
    return {
      title: item.title,
      components: item.components.map((cpn) => ({
        ...cpn,
        path: `/components/${cpn.path}`,
        name: cpn.componentZhName,
      })),
    }
  }),
})
</script>
<style lang="less" scoped>
@import '../theme/common/var.less';
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
    overflow: hidden;

    .component-type-title {
      padding-left: 20px;
      font-size: 14px;
      font-weight: normal;
      color: #666;
    }

    .component-item {
      padding-left: 40px;
      line-height: 35px;

      .component-name {
        display: inline-block;
        margin-right: 5px;
        font-weight: normal;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

        &.en {
          color: #666;
        }

        &.zh {
          font-weight: 400;
          color: #333;
        }
      }

      &.active {
        background-color: tint(@primaryColorHover, 90%);
        border-radius: 3px;

        .component-name {
          color: @primaryColor;
        }
      }

      &:hover {
        .zh,
        .en {
          color: @primaryColor;
        }
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
      }
    }
  }

  .main {
    flex: 1;
    padding-left: 10px;
    height: 100%;
  }
}
</style>
