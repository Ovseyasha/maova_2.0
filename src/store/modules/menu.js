export default {
  namespaced: true,
  state: {
    list: [
      {
        title: 'Обо мне',
        link: '/about'
      },
      {
        title: 'Услуги',
        link: '/services'
      },
      {
        title: 'Портфолио',
        link: '/projects'
      },
      {
        title: 'Контакты',
        link: '/contacts'
      }
    ],
    adminList: [
      {
        title: 'На сайт',
        link: '/',
        icon: 'fa-link',
        exact: true
      },
      {
        title: 'Статистика',
        link: '/admin/menu',
        icon: 'fa-chart-pie'
      },
      {
        title: 'Обо мне',
        link: '/admin/about',
        icon: 'fa-address-card'
      },
      {
        title: 'Услуги',
        link: '/admin/services',
        icon: 'fa-paint-roller'
      },
      {
        title: 'Портфолио',
        link: '/admin/projects',
        icon: 'fa-hand-holding-usd'
      },
      {
        title: 'Контакты',
        link: '/admin/contacts',
        icon: 'fa-id-card',
        count: true
      }
    ]
  },
  getters: {
    list (state) {
      return state.list
    },
    adminList (state) {
      return state.adminList
    }
  },
  mutations: {

  },
  actions: {

  }
}
