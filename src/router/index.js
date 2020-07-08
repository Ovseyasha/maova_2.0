import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
Vue.use(VueRouter)

const routes = [
  // content
  {
    path: '/',
    name: 'Main',
    meta: { layout: 'main' },
    component: () => import('@/views/Content/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: 'content' },
    component: () => import('@/views/Content/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    meta: { layout: 'content' },
    component: () => import('@/views/Content/Services.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: { layout: 'content' },
    component: () => import('@/views/Content/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'Project',
    meta: { layout: 'content' },
    component: () => import('@/views/Content/Project.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { layout: 'content' },
    component: () => import('@/views/Content/Contacts.vue')
  },
  // admin
  {
    path: '/admin',
    name: 'Login',
    meta: { layout: 'admin' },
    component: () => import('@/views/Admin/Login.vue')
  },
  {
    path: '/admin/menu',
    name: 'Menu',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Menu.vue')
  },
  {
    path: '/admin/about',
    name: 'a_About',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/About.vue')
  },
  {
    path: '/admin/services',
    name: 'a_Services',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Services/List.vue')
  },
  {
    path: '/admin/services/add',
    name: 'a_Services_add',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Services/Add.vue')
  },
  {
    path: '/admin/services/edit/:id',
    name: 'a_Services_edit',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Services/Edit.vue')
  },
  {
    path: '/admin/projects',
    name: 'a_Projects',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Projects/List.vue')
  },
  {
    path: '/admin/projects/add',
    name: 'a_Projects_add',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Projects/Add.vue')
  },
  {
    path: '/admin/projects/edit/:id',
    name: 'a_Projects_edit',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Projects/Edit.vue')
  },
  {
    path: '/admin/contacts',
    name: 'a_Contacts',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Contacts/List.vue')
  },
  {
    path: '/admin/contacts/view/:id',
    name: 'a_Contacts_view',
    meta: { layout: 'admin', auth: true },
    component: () => import('@/views/Admin/Contacts/View.vue')
  },
  {
    path: '*',
    name: 'Error',
    meta: { layout: 'content' },
    component: () => import('@/views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//  будет вызываться перед каждой сменой роутера
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  // проверка есть ли у путя тег мета с требование авторизации
  const reuireAuth = to.matched.some(record => record.meta.auth)
  if (reuireAuth && !currentUser) {
    next('/admin?message=login')
  } else {
    next()
  }
})
export default router
