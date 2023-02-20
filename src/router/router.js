import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'


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
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DbzLayout" */ '@/modulos/dbz/layout/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                // se puede encapsular todas las direcciones
                // beforeEnter: [ isAuthenticatedGuard ],
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

// Guard global - sincrono
// router.beforeEach((to, from, next) => {
//     // console.log({ to, from, next });
//     const randon = Math.random() * 100
//     if( randon > 50 ){
//         console.log("Autenticado");
//         next();
//     }else{
//         next({name: 'pokemon-home'})
//     }
//     next()
// })

// GUARD GLOBAL
// const canAccess = () => {
//     return new Promise( resolve => {
//         const randon = Math.random() * 100
//         if( randon > 50 ){
//             console.log("Autenticado - CAN ACCESS")
//             resolve(true);
//         } else {
//             console.log(randon, 'Bloqueado por el guard')
//             resolve(false)
//         }
//     } )
// }

// router.beforeEach( async(to, from, next) => {

//     const authorized = await canAccess()

//     authorized ? next() : next({name: 'pokemon-home'})
// })


export default router