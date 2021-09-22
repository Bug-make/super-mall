import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () => import ('../views/category/home/Home.vue')
const Cart = () => import ('../views/category/cart/Cart.vue')
const Category = () => import ('../views/category/category/Category.vue')
const Profile = () => import ('../views/category/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect:  '/home'
  },
  { 
    path: '/home', 
    meta: { 
      title: "首页"
    },
    component: Home 
  },
  { 
    path: '/category', 
    meta: { 
      title: "分类"
    },
    component: Category 
  },
  { 
    path: '/cart', 
    meta: { 
      title: "购物车"
    },
    component: Cart 
  },
  { 
    path: '/profile',
    meta: { 
      title: "档案"
    }, 
    component: Profile 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title
  next()
})
export default router
