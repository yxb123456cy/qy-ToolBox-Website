<script setup lang="ts">
import MainLayout from './layout/MainLayout.vue';
import {onMounted} from "vue";
import {useDefaultDataStore} from "./store/defaultData.ts";

const defaultDataStore = useDefaultDataStore();
onMounted(() => {
  /**
   * 初始化头像URL;
   */
  defaultDataStore.setDefaultAvatarURL(import.meta.env.VITE_DEFAULT_AVATER_URL as string);
})
</script>

<template>
  <MainLayout/>
</template>

<style>
/* 全局样式 */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(149, 225, 211, 0.68);
  color: #1d2129;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #2a2a2a;
}

::-webkit-scrollbar-thumb {
  background: #3a3a3a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #95e1d3;
}
</style>
