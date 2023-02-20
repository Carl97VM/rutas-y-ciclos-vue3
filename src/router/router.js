import { createRouter, createWebHashHistory } from 'vue-router'


// Definir las rutas con los componentes existentes
const routes = [
    {
        path: '/',
        redirect: '/pokemon',
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import( /* webpackChunkName: "PockemonLayout" */ '@/modulos/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '../modulos/pokemon/pages/ListPage')
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AbouttPage" */ '../modulos/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modulos/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const  id = Number( route.params.id )
                    return isNaN( id ) ? {id:1} : {id } 
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-home'}
            },
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DbzLayout" */ '@/modulos/dbz/layout/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import( /*webpackChunkName: "ListPage" */ '@/modulos/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import( /*webpackChunkName: "ListPage" */ '@/modulos/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters'}
            },
        ]
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