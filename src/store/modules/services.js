import firebase from 'firebase/app'
import store from '../index'
export default {
  namespaced: true,
  state: {
    services: [],
    service: null
  },
  getters: {
    services (state) {
      return state.services
    },
    servicesName (state) {
      const arrName = []
      for (let i = 0; i < state.services.length; i++) {
        arrName.push(state.services[i].title)
      }
      return arrName
    },
    service (state) {
      return state.service
    }
  },
  mutations: {
    addNewService (state, payload) {
      state.services.push(payload)
    },
    loadServices (state, payload) {
      state.services = payload
    },
    loadServiceById (state, payload) {
      state.service = payload
    }
  },
  actions: {
    async loadServices ({ commit }) {
      store.commit('common/clearError')
      try {
        const services = await firebase.database().ref('services').once('value')
        const loadServices = services.val()
        const servicesArray = []
        if (loadServices !== null) {
          Object.keys(loadServices).forEach((key) => {
            const s = loadServices[key]
            servicesArray.push({
              ...s,
              id: key
            })
          })
        }

        commit('loadServices', servicesArray)
      } catch (error) {
        store.commit('common/setError', error.message)

        throw error
      }
    },
    async addNewService ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        // console.log(payload)
        const newService = payload.service
        const service = await firebase.database().ref('services').push(newService)
        // console.log(service.key)
        const key = service.key
        const fileName = payload.img.name
        const ext = fileName.slice(fileName.lastIndexOf('.'))
        const storages = await firebase.storage().ref('services/bg/' + key + ext).put(payload.img)
        const imageUrl = await storages.ref.getDownloadURL()

        await firebase.database().ref('services').child(key).update({ img: imageUrl, ext: ext })

        newService.img = imageUrl
        newService.ext = ext
        // done logic here
        commit('addNewService', {
          ...newService,
          id: service.key
        })
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async editServices ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        // console.log(payload)

        const id = payload.id
        const newService = payload.service

        if (typeof (newService.img) !== 'string') {
          const fileName = newService.img.name
          const ext = fileName.slice(fileName.lastIndexOf('.'))
          const storages = await firebase.storage().ref('services/bg/' + id + ext).put(newService.img)

          const imageUrl = await storages.ref.getDownloadURL()
          newService.img = imageUrl
          newService.ext = ext
        }
        await firebase.database().ref('services').child(id).update(newService)
        store.dispatch('services/loadServices')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },

    async deleteServicesById ({ commit, dispatch, getters }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        await dispatch('loadServiceById', id)
        const s = getters.service
        const ext = s.ext
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const desertRef = storageRef.child(`services/bg/${id}${ext}`)
        await desertRef.delete()
        await firebase.database().ref('services').child(id).remove()
        store.dispatch('services/loadServices')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async loadServiceById ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        const service = (await firebase.database().ref('services').child(id).once('value')).val()
        commit('loadServiceById', service)
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    }
  }
}
