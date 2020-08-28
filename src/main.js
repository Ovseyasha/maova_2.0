import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import router from './router'
import store from './store'
// global components
import Loader from '@/components/app/Loader'
import Message from '@/components/app/Message'
// firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/analytics'
// directives
// import scrolldirective from '@/directives/scroll.directive'

// init components
Vue.component('Loader', Loader)
Vue.component('Message', Message)
// init plugins
Vue.use(VueMeta)
Vue.use(Vuelidate)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/assets/default.jpg',
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
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
// OLD
//    apiKey: 'AIzaSyDffydR-U9oOpMzn0vo8W17qdawxdepC40',
//   authDomain: 'maova-b6223.firebaseapp.com',
//   databaseURL: 'https://maova-b6223.firebaseio.com',
//   projectId: 'maova-b6223',
//   storageBucket: 'gs://maova-b6223.appspot.com',
//   messagingSenderId: '925025116675',
//   appId: '1:925025116675:web:5d4ec0f951759610d3e436',
//   measurementId: 'G-GCCZECYRB7'
const firebaseConfig = {
  apiKey: 'AIzaSyDW9amaT-kZaTTuSYzbwZs7ewNF0dgXJBs',
  authDomain: 'omdesign-om.firebaseapp.com',
  databaseURL: 'https://omdesign-om.firebaseio.com',
  projectId: 'omdesign-om',
  storageBucket: 'omdesign-om.appspot.com',
  messagingSenderId: '731537717616',
  appId: '1:731537717616:web:a8aa520a6f8f4d6717f7b5',
  measurementId: 'G-RD3BNHGCVQ'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
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
