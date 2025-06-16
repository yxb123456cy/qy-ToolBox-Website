<script setup lang="ts">
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {Message} from "@arco-design/web-vue";

const router = useRouter();
const route = useRoute();
const activeKey = computed(() => route.path);
/**
 * 回到首页;
 */
const goHome = () => {
  router.push("/");
}
/**
 * 处理导航菜单点击事件;
 * @param key 导航键;
 */
const handleMenuClick = (key: string) => {
  if (key === 'settings') {
    Message.info("请等待实现")
  } else {
    router.push(key);
  }
};
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="logo-container">
        <img src="/MingcuteToolFill_white.svg" alt="Logo" class="logo"/>
        <h1 class="app-title" @click="goHome">qy-ToolBox-Website</h1>
      </div>
      <a-menu
          mode="horizontal"
          :selected-keys="[activeKey]"
          @menu-item-click="handleMenuClick"
          class="main-menu"
      >
        <a-menu-item key="/">首页</a-menu-item>
        <!--         todo 设置网站设置界面-->
        <a-menu-item key="/settings">网站设置</a-menu-item>
      </a-menu>
      <div>
        <a-avatar
            image-url="https://yzujcnshvfnzphdlkecu.supabase.co/storage/v1/object/public/password-qy/public/avatar/1749973056867_28.jpg">
        </a-avatar>
      </div>
    </header>
    <main class="main-content">
<!--      路由视图-->
      <router-view/>
    </main>
    <footer class="footer">
      <p>© 2025 qy-toolBox-Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped lang="less">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1d2129;
  color:#f7f8fa;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  background-color: #95e1d3;
  border-bottom: 1px solid #2a2a2a;
  box-shadow: 0 2px 4px rgba(149, 225, 211, 0.75);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 32px;
  margin-right: 12px;
}

.app-title {
  /*  todo 为项目标题添加跳转首页*/
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(90deg, #f7f8fa 0%,#1d2129 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-menu {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-bottom: none;
}

:deep(.arco-menu-light) {
  background-color: transparent;
}


.main-content {
  flex: 1;
  padding: 24px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer {
  text-align: center;
  padding: 16px;
  background-color: #95e1d3;
  color: #f7f8fa;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(149, 225, 211, 0.75);
}
</style>
