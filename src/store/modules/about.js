import firebase from 'firebase/app'
import store from '../index'
export default {
  namespaced: true,
  state: {
    about: {}
  },
  getters: {
    img (state) {
      return state.about.img
    },
    skills (state) {
      return state.about.skills
    },
    about (state) {
      return state.about.about
    },
    all (state) {
      return state.about
    }
  },
  mutations: {
    loadAbout (state, payload) {
      state.about = payload
    },
    saveAs (state, payload) {
      state.about = payload
    }
  },
  actions: {
    // -MA0mY_wLX4ydQIAna1e
    async update ({ commit, getters, dispatch }, payload) {
      try {
        const id = '-MA0mY_wLX4ydQIAna1e'
        // avatar
        if (typeof (payload.img) !== 'string') {
          const fileName = payload.img.name
          const Dstorage = firebase.storage()
          const storageRef = Dstorage.ref()
          const desertRef = storageRef.child(`about/avatar/${id}__${getters.all.imgName}`)
          await desertRef.delete()
          // await firebase.storage().ref(`about/avatar/${id}__${payload.imgName}`).delete()
          const storage = await firebase.storage().ref(`about/avatar/${id}__${fileName}`).put(payload.img)
          const imgUrl = await storage.ref.getDownloadURL()
          payload.img = imgUrl
          payload.imgName = fileName
        }
        // skills
        if (payload.names.length) {
          for (let j = 0; j < payload.names.length; j++) {
            const Dstorage = firebase.storage()
            const storageRef = Dstorage.ref()
            const desertRef = storageRef.child(`about/skills/${id}__${payload.names[j]}`)
            await desertRef.delete()
            payload.names = []
          }
        }

        for (let i = 0; i < payload.skills.length; i++) {
          if (typeof (payload.skills[i].img) !== 'string') {
            const skillName = payload.skills[i].img.name
            const skillFile = payload.skills[i].img
            const storageSkils = await firebase.storage().ref(`about/skills/${id}__${skillName}`).put(skillFile)
            const skillUrl = await storageSkils.ref.getDownloadURL()
            payload.skills[i].img = skillUrl
          }
        }
        // соединяет то что есть и оюновляет то что добавили
        const updateData = {
          ...getters.all,
          ...payload
        }
        await firebase.database().ref(`about/${id}`).update(updateData)
      } catch (error) {
        store.commit('common/setError', error)
        throw error
      }
    },
    async loadAbout ({ commit }, payload) {
      const id = '-MA0mY_wLX4ydQIAna1e'
      store.commit('common/clearError')
      try {
        // done logic here
        const about = (await firebase.database().ref('about').once('value')).val()
        commit('loadAbout', about[id])
      } catch (error) {
        store.commit('common/setError', error.message)
        throw error
      }
    }
  }
}
