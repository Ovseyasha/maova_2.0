import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
// global components
import Loader from '@/components/app/Loader'
// firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
// directives
// import scrolldirective from '@/directives/scroll.directive'

// init components
Vue.component('Loader', Loader)
// init plugins
Vue.use(VueMeta)
Vue.use(Vuelidate)
Vue.config.productionTip = false
// init directives
Vue.directive('scroll', {
  inserted: function (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

const firebaseConfig = {
  apiKey: 'AIzaSyDffydR-U9oOpMzn0vo8W17qdawxdepC40',
  authDomain: 'maova-b6223.firebaseapp.com',
  databaseURL: 'https://maova-b6223.firebaseio.com',
  projectId: 'maova-b6223',
  storageBucket: 'gs://maova-b6223.appspot.com',
  messagingSenderId: '925025116675',
  appId: '1:925025116675:web:5d4ec0f951759610d3e436',
  measurementId: 'G-GCCZECYRB7'
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
