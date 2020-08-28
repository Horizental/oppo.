import  Vuerouter from 'vue-router'

import first from '../../components/first.vue'
import homepage from '../../components/homepage.vue'
import type from '../../components/type.vue'
import cars from '../../components/cars.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import sousuo from '../../components/sousuo.vue'
import details from '../../components/details.vue'

export default new Vuerouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/homepage',
                    component:homepage
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/cars',
                    component:cars
                },
                {
                    path:'/my',
                    component:my
                }
            ],
            redirect:'/homepage'
            
        },
        {   path:'/login',
            component:login

        },
        {
            path:'/sousuo',
            component:sousuo
        },
        {
            path:'/details/:id',
            component:details
        },
        {
            path:'/*',
            component:homepage
        }
    ]
})