import firebase from 'firebase/app'
import store from '../index'
export default {
  namespaced: true,
  state: {
    admin: null
  },
  getters: {
    admin (state) {
      return state.admin
    }
  },
  mutations: {
    setAdmin (state, payload) {
      state.admin = payload
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const admin = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        commit('setAdmin', { id: admin.user.uid })
        store.commit('common/setError', null)
      } catch (error) {
        // error logic here
        store.commit('common/setError', error)
        throw error
      }
    },
    getUid ({ commit }) {
      const user = firebase.auth().currentUser
      commit('setAdmin', { id: user.uid })
      return user ? user.uid : null
    },
    async logOut ({ commit }) {
      await firebase.auth().signOut()
      commit('setAdmin', null)
    }
  }
}
