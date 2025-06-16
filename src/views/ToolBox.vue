<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { useToolboxStore } from "../store/toolboxStore";
import { computed } from "vue";

// 使用工具箱状态管理
const toolboxStore = useToolboxStore();
const selectedToolId = computed(() => toolboxStore.selectedToolId);
const toolItems = computed(() => toolboxStore.toolItems);
const toolsByCategory = computed(() => toolboxStore.toolsByCategory);

// 处理工具项选择
const handleToolSelect = (id: string) => {
  toolboxStore.setSelectedTool(id);
};

const onCollapse = (val: any, type: string) => {
  console.log("value:", val)
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  Message.info({
    content,
    duration: 2000,
  });
}
</script>

<template>
  <div class="tool-box-container">
    <div class="left-menu-container">
      <div class="menu-demo">
        <a-menu
            :style="{ width: '200px' }"
            :default-open-keys="['left-sub-menu']"
            :selected-keys="[selectedToolId]"
            breakpoint="xl"
            @collapse="onCollapse"
        >
          <a-menu-item-group>
            <template #title>
              <span><icon-tool/>工具箱</span>
            </template>
            <a-menu-item
              v-for="item in toolItems"
              :key="item.id"
              @click="handleToolSelect(item.id)"
              :class="{ 'active-tool-item': selectedToolId === item.id }"
            >
              {{ item.title }}
            </a-menu-item>
          </a-menu-item-group>
        </a-menu>
      </div>
    </div>

    <div class="content-container">
      <div class="banner">
        <!-- 遮罩层 -->
        <div class="banner-mask"></div>
        <!-- 标题覆盖在遮罩层上 -->
        <div class="title" style="display: flex;flex-direction: column;align-items: flex-start;gap: 1.5vh">
          <div style="font-weight: bolder;font-size: larger">欢迎使用工具箱</div>
          <div style="color:cornsilk">使用工具箱里的工具完成你的各种需求吧!</div>
          <div style="">
            <a-button style="border-radius: 15px">工具箱介绍-></a-button>
          </div>
        </div>
      </div>
<!--       工具卡片网格-->
      <div class="tools-grid">

          <div
              v-for="item in toolItems"
              :key="item.id"
              class="tool-card"
              :class="{ 'active-tool-card': selectedToolId === item.id }"
              @click="handleToolSelect(item.id)"
          >
            <div class="tool-icon">
              <icon-tool />
            </div>
            <div class="tool-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>


      </div>
    </div>

    <div class="right-menu-container">
      <div class="menu-demo">
        <a-menu
            :style="{ width: '200px' }"
            :selected-keys="[selectedToolId]"
            breakpoint="xl"
            @collapse="onCollapse"
        >
          <template v-for="(tools, category) in toolsByCategory" :key="category">
            <a-menu-item-group :title="category">
              <a-menu-item
                v-for="tool in tools"
                :key="tool.id"
                @click="handleToolSelect(tool.id)"
                :class="{ 'active-tool-item': selectedToolId === tool.id }"
              >
                {{ tool.title }}
              </a-menu-item>
            </a-menu-item-group>
          </template>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.menu-demo {
  box-sizing: border-box;
  height: calc(100vh - 64px);
  background-color: var(--color-neutral-2);
  overflow-y: auto; /* 添加内部滚动条 */
}

.tool-box-container {
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-menu-container,
.right-menu-container {
  flex: 0 0 200px;
  height: 100%;
}

.content-container {
  flex: 1;
  padding: 20px;
  overflow-y: auto; /* 添加内部滚动条 */
  display: block;

}

.banner {
  width: 100%;
  height: 20vh;
  background-image: url("/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-top: 10px; /* 添加顶部间距，避免被header遮挡 */
}

/* 遮罩层样式*/
.banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
}

/* 标题样式 */
.title {
  position: absolute;
  top: 10%;
  left: 3%;
  color: white;
  font-size: 1.2rem;
  z-index: 1;
  white-space: pre-wrap;
  text-align: left;
}

/* 工具卡片网格 */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;
}

.tool-card {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #3a3a3a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(149, 225, 211, 0.3);
  border-color: #95e1d3;
}

.active-tool-card {
  background-color: #1e3a3a;
  border-color: #eaffd0;
  box-shadow: 0 8px 15px rgba(234, 255, 208, 0.4);
}

.active-tool-card h3 {
  color: #eaffd0;
}

.active-tool-card p {
  color: #f5f5f5;
}

.tool-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 24px;
  color: #95e1d3;
  margin-bottom: 12px;
}

.tool-info h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #f5f5f5;
}

.tool-info p {
  margin: 0;
  font-size: 14px;
  color: #aaa;
}

/* 菜单项激活样式 */
.active-tool-item {
  background-color: #272e3b;;
  color: #00B42A !important;
  font-weight: bold;
}

:deep(.arco-menu-item:hover) {
  color: #4CD263;
}

:deep(.arco-menu-light .arco-menu-item.arco-menu-selected) {
  color: #00B42A;
  background-color: #272e3b;
}



.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
