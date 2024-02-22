import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/HomePage.vue'
import Blog from '../pages/BlogPage.vue'
import Contact from '../pages/ContactPage.vue'
import Games from '../pages/GamesPage.vue'
import News from '../pages/NewsPage.vue'
import Support from '../pages/SupportPage.vue'
import NotFound from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home - GGBlog'
        }
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        meta: {
            title: 'Blog - GGBlog'
        }
    },
    {
        path: '/news',
        name: 'News',
        component: News,
        meta: {
            title: 'News - GGBlog'
        },
        reload: true
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Contact - GGBlog'
        }
    },
    {
        path: '/games',
        name: 'Games',
        component: Games,
        meta: {
            title: 'Games - GGBlog'
        }
    },
    {
        path: '/support',
        name: 'Support',
        component: Support,
        meta: {
            title: 'Support - GGBlog'
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 Not Found - GGBlog'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    const titleFromParams = to.params.short

    if (title) {
        document.title = title
    }


    next()
})


export default router