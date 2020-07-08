import firebase from 'firebase/app'
import store from '../index'
export default {
  namespaced: true,
  state: {
    contacts: [],
    mails: [],
    mail: {}
  },
  getters: {
    contacts (state) {
      return state.contacts
    },
    mails (state) {
      return state.mails
    },
    mail (state) {
      return state.mail
    }
  },
  mutations: {
    loadContacts (state, payload) {
      state.contacts = payload
    },
    loadMails (state, payload) {
      state.mails = payload
    },
    addMail (state, payload) {
      state.mails.push(payload)
    },
    getMailById (state, payload) {
      state.mail = payload
    }
  },
  actions: {
    async loadContacts ({ commit }) {
      const id = '-MANQPK_xhzGbZt821xh'
      store.commit('common/clearError')
      try {
        const contacts = await firebase.database().ref('contacts').once('value')
        const loadContacts = contacts.val()
        commit('loadContacts', loadContacts[id])
      } catch (error) {
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async editContacts ({ commit }, payload) {
      const id = '-MANQPK_xhzGbZt821xh'
      store.commit('common/clearError')
      try {
        const newContacts = payload.contacts
        if (payload.price !== null) {
          const fileName = payload.price.name
          const ext = fileName.slice(fileName.lastIndexOf('.'))
          const storages = await firebase.storage().ref(`contacts/price/${id}${ext}`).put(payload.price)
          const fileUrl = await storages.ref.getDownloadURL()
          newContacts.price = fileUrl
          newContacts.ext = ext
        }
        await firebase.database().ref('contacts').child(id).update(newContacts)
        store.dispatch('contacts/loadContacts')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    // MAILS
    async loadMails ({ commit }) {
      store.commit('common/clearError')
      try {
        const mails = await firebase.database().ref('mails').once('value')
        const loadMails = mails.val()
        // console.log(loadServices)
        const mailsArr = []
        if (loadMails !== null) {
          Object.keys(loadMails).forEach((key) => {
            const s = loadMails[key]
            mailsArr.push({
              ...s,
              id: key
            })
          })
        }
        commit('loadMails', mailsArr)
      } catch (error) {
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async addMail ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        const newMail = payload
        newMail.state = 'new'
        const mails = await firebase.database().ref('mails').push(newMail)
        commit('addMail', {
          ...newMail,
          id: mails.key
        })
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async deleteMailById ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        await firebase.database().ref('mails').child(id).remove()
        store.dispatch('contacts/loadMails')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async getMailById ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        const mail = await firebase.database().ref('mails').child(id).once('value')
        // console.log(mail.val())
        commit('getMailById', mail.val())
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async readMsg ({ commit, dispatch }, payload) {
      // const id = '-MANQPK_xhzGbZt821xh'
      try {
        await firebase.database().ref('mails').child(payload).update({ state: 'read' })
        await dispatch.loadMails
      } catch (error) {
        console.log(error)
      }
    }
  }
}
