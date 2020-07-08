import firebase from 'firebase/app'
import store from '../index'
export default {
  namespaced: true,
  state: {
    projects: [],
    project: null
  },
  getters: {
    projects (state) {
      return state.projects
    },
    project (state) {
      return state.project
    }
  },
  mutations: {
    LoadProjects (state, payload) {
      state.projects = payload
    },
    addNewService (state, payload) {
      state.projects.push(payload)
    },
    loadProjectById (state, payload) {
      state.project = payload
    }
  },
  actions: {
    async LoadProjects ({ commit }) {
      store.commit('common/clearError')
      try {
        const projects = await firebase.database().ref('projects').once('value')
        const loadProjects = projects.val()
        // console.log(loadServices)
        const projectsArray = []
        if (loadProjects !== null) {
          Object.keys(loadProjects).forEach((key) => {
            const s = loadProjects[key]
            projectsArray.push({
              ...s,
              id: key
            })
          })
        }
        commit('LoadProjects', projectsArray)
      } catch (error) {
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async addNewPorject ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const newProject = payload.project
        const project = await firebase.database().ref('projects').push(newProject)
        // ---------------------- BG -------------------------------------------
        const key = project.key
        const fileName = payload.img.name
        // const ext = fileName.slice(fileName.lastIndexOf('.'))
        const storages = await firebase.storage().ref(`projects/bg/${key}/${fileName}`).put(payload.img)
        const imageUrl = await storages.ref.getDownloadURL()
        await firebase.database().ref('projects').child(key).update({ img: imageUrl, fileName: fileName })
        // ---------------------- SLIDER -------------------------------------------
        for (let i = 0; i < newProject.imgs.length; i++) {
          if (typeof (newProject.imgs[i].img) !== 'string') {
            const slideName = Math.random() + newProject.imgs[i].img.name
            const slideFile = newProject.imgs[i].img
            const storagesSlide = await firebase.storage().ref(`projects/slides/${key}/${slideName}`).put(slideFile)
            const slideUrl = await storagesSlide.ref.getDownloadURL()
            const index = i
            const title = newProject.imgs[i].title
            newProject.imgs[i].fileName = slideName
            await firebase.database().ref(`projects/${key}/imgs/${index}`).update({ img: slideUrl, title: title, fileName: slideName })
          }
        }
        // done logic here
        commit('addNewService', {
          ...newProject,
          id: project.key
        })
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async editProject ({ commit, getters, dispatch }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const newProject = payload.project
        const id = payload.id
        // ---------------------- BG -------------------------------------------
        if (typeof (newProject.img) !== 'string') {
          // const fileName = newProject.img.name
          await dispatch('loadProjectById', id)
          const fileName = getters.project.fileName
          const storages = await firebase.storage().ref(`projects/bg/${id}/${fileName}`).put(newProject.img)
          const imageUrl = await storages.ref.getDownloadURL()
          newProject.img = imageUrl
        }
        // ---------------------- SLIDER -------------------------------------------
        if (payload.deletedName.length) {
          for (let i = 0; i < payload.deletedName.length; i++) {
            const storage = firebase.storage()
            const storageRef = storage.ref()
            const desertRef = storageRef.child(`projects/slides/${id}/${payload.deletedName[i]}`)
            await desertRef.delete()
          }
        }
        for (let i = 0; i < newProject.imgs.length; i++) {
          if (typeof (newProject.imgs[i].img) !== 'string') {
            const slideName = Math.random() + newProject.imgs[i].fileName
            const slideFile = newProject.imgs[i].img
            const storagesSlide = await firebase.storage().ref(`projects/slides/${id}/${slideName}`).put(slideFile)
            const slideUrl = await storagesSlide.ref.getDownloadURL()
            newProject.imgs[i].img = slideUrl
            newProject.imgs[i].fileName = slideName
          }
        }
        await firebase.database().ref('projects').child(id).update(newProject)
        store.dispatch('projects/LoadProjects')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async deleteProjectById ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        await firebase.database().ref('projects').child(id).remove()
        store.dispatch('projects/LoadProjects')
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    },
    async loadProjectById ({ commit }, payload) {
      store.commit('common/clearError')
      try {
        // здесь отправить на сервер
        const id = payload
        const project = await firebase.database().ref('projects').child(id).once('value')
        const loadProject = project.val()
        commit('loadProjectById', loadProject)
      } catch (error) {
        // error logic here
        store.commit('common/setError', error.message)
        throw error
      }
    }
  }
}
