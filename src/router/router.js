import { createRouter, createWebHashHistory } from 'vue-router'


// Definir las rutas con los componentes existentes
const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '../modulos/pokemon/pages/ListPage')
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AbouttPage" */ '../modulos/pokemon/pages/AboutPage') 
    },
    { 
        path: '/id', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../modulos/pokemon/pages/PokemonPage') 
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import( /* webpackChunkName: "NoPageFound" */ '../modulos/shared/pages/NoPageFound') 
    },
]

// 
const router = createRouter({

    history: createWebHashHistory(),
    routes,

})


export default router