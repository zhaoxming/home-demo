import Vue from 'vue'
import Router from 'vue-router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)


export default new Router({
    mode: 'history',
    
    routes: [{
            path: '/',
        component: resolve => require(['../components/index.vue'], resolve)
        },
        {
            path: '/index',
            component: resolve => require(['../components/index.vue'], resolve)
        },
        {
            path: '/houseList/:queryStr',
            component: resolve => require(['../components/houseList.vue'], resolve),
            meta: { scrollToTop: true }
        },
        {
            path: '/houseDetail/:houseId',
            component: resolve => require(['../components/houseDetail.vue'], resolve),
            meta: { scrollToTop: true }
        },
        {
            path: '/mapbox',
            name: 'mapbox',
            component: resolve => require(['../components/mapbox.vue'], resolve)
        },
        {
            path: '/aboutUs',
            component: resolve => require(['../components/aboutUs.vue'], resolve),
            meta: { scrollToTop: true }
        }


    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
          } else {
            const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
            if (to.hash) {
              position.selector = to.hash
              return position
            }
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
              // cords will be used if no selector is provided,
              // or if the selector didn't match any element.
              position.x = 0
              position.y = 0
              return position
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position
          }
    },
})