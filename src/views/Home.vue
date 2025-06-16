<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
/**
 * features配置项;
 */
const features = [
  {
    title: '工具箱',
    description: '使用工具箱里提供的众多功能',
    icon: 'tool',
    route: '/toolbox'
  },
  {
    title: '界面设置',
    description: '您可进行工具箱自定义界面设置',
    icon: 'settings',
    route: '/settings'
  }
];
</script>

<template>
  <div class="home-container">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">qy-ToolBox-Website</h1>
        <p class="hero-subtitle">一款现代化、美观、好用的工具箱</p>
        <div class="hero-actions">
          <a-button type="primary"   size="large" shape="round" @click="router.push('/toolbox')" status="success">
            开始使用
            <template #icon>
              <icon-right/>
            </template>
          </a-button>
          <a-button size="large" shape="round">
            了解更多
            <template #icon>
              <icon-info-circle/>
            </template>
          </a-button>
        </div>
      </div>
      <div class="hero-image">
        <img src="/MingcuteToolFill.svg" alt="Hero Image"/>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">主要功能</h2>
      <div class="feature-grid">
        <a-card v-for="(feature, index) in features" :key="index" class="feature-card"
                :style="{ animationDelay: `${index * 0.1}s` }" hoverable @click="router.push(feature.route)">
          <template #cover>
            <div class="feature-icon">
              <icon-settings v-if="feature.icon === 'settings'"/>
              <icon-tool v-if="feature.icon==='tool'"/>
            </div>
          </template>
          <a-card-meta>
            <template #title>{{ feature.title }}</template>
            <template #description>{{ feature.description }}</template>
          </a-card-meta>
        </a-card>
      </div>
    </section>

    <section class="cta">
      <div class="cta-content">
        <h2 class="cta-title">准备好开始使用了吗？</h2>
        <p class="cta-description">立即体验qy-ToolBox-Website提供的众多工具</p>
        <a-button type="primary" status="success" size="large" shape="round" @click="router.push('/toolbox')">
          开始使用
          <template #icon>
            <icon-plus/>
          </template>
        </a-button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.home-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #eaffd0 0%, #95e1d3 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  cursor: pointer;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #f5f5f5;
  margin-bottom: 32px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 0 20px #95e1d3);
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #f5f5f5;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #eaffd0 0%, #95e1d3 100%);
    border-radius: 2px;
  }
}

.features {
  padding: 60px 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: #eaffd0;
  }

  :deep(.arco-card-header) {
    border-bottom: none;
  }

  :deep(.arco-card-meta-title) {
    color: #f5f5f5;
    font-size: 1.2rem;
    font-weight: 600;
  }

  :deep(.arco-card-meta-description) {
    color: #bbb;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: linear-gradient(90deg, #eaffd0 0%, #95e1d3 100%);
  color: #f7f8fa;
  font-size: 3rem;
}

.cta {
  margin-top: 60px;
  //padding: 60px 40px;
  background: linear-gradient(90deg, rgba(234, 255, 208, 0.85) 0%, rgba(149, 225, 211, 0.95) 100%);
  border-radius: 16px;
  text-align: center;
  position: relative;
  margin-bottom: 5vh;
  padding-bottom: 1.3vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.cta-description {
  font-size: 1.2rem;
  color: #272e3b;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
