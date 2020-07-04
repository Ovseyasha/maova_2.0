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
        title: 'Обо мне',
        link: '/admin/about'
      },
      {
        title: 'Услуги',
        link: '/admin/services'
      },
      {
        title: 'Портфолио',
        link: '/admin/projects'
      },
      {
        title: 'Контакты',
        link: '/admin/contacts'
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
