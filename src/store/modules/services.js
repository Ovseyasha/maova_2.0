import firebase from 'firebase/app'
/* eslint-disable */
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
      try {
        const loadServices = (await firebase.database().ref('services').once('value')).val()
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
        throw error
      }
    },
    async addNewService ({ commit }, payload) {
      try {
        // здесь отправить на сервер
        const newService = payload.service
        const service = await firebase.database().ref('services').push(newService)
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
        throw error
      }
    },
    async editServices ({ commit }, payload) {
      try {
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
        throw error
      }
    },

    async deleteServicesById ({ commit, dispatch, getters }, payload) {
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
        throw error
      }
    },
    async loadServiceById ({ commit }, payload) {
      try {
        // здесь отправить на сервер
        const id = payload
        const service = (await firebase.database().ref('services').child(id).once('value')).val()
        commit('loadServiceById', service)
      } catch (error) {
        // error logic here
        throw error
      }
    }
  }
}
