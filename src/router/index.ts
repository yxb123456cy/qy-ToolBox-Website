import {createRouter, createWebHistory, type RouteRecordRaw,} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {title: '首页'}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
//
router.afterEach((to, from, next) => {
    console.log(to, from, next);
    // 置顶;
    window.scrollTo(0, 0);
});

export default router;
