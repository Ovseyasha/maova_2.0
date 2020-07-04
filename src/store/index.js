import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import about from './modules/about'
import services from './modules/services'
import projects from './modules/projects'
import contacts from './modules/contacts'
import common from './modules/common'
import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    about,
    services,
    projects,
    contacts,
    common,
    admin
  }
})
