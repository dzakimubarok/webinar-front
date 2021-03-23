import EventService from '../../services/Event.services'

const events = {
  namespaced: true,
  state: {
    events: []
  },

  mutations: {
    GET_POSTS(state, data) {
      state.events = data

    },
  },

  actions: {
    getAllPost({ commit }) {
      return EventService.getPublicContent()
        .then(response => {
          commit('GET_POSTS', response.data)
        })
        .catch(error => console.log(error))
    }
  }

}
export default events 