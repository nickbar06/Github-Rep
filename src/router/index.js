import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import Overview from '../views/Overview.vue';
import Repositories from '../views/Repository.vue';

const routes = [
    {
        path: '/',
        name: 'Overview',
        component: Overview
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/repositories',
        name: 'Repositories',
        component: Repositories
    }
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

export default router;