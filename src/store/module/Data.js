import EventService from '../../services/Event.services'

const events = {
  namespaced: true,
  state: {
    events: [],
    event: {}
  },

  mutations: {
    GET_POSTS(state, data) {
      state.events = data
    },
    GET_EVENT(state, data) {
      state.event = data
    }
  },

  actions: {
    getAllPost({ commit }) {
      return EventService.getPublicContent()
        .then(response => {
          commit('GET_POSTS', response.data)
        })
        .catch(error => console.log(error))
    },
    getPostID({ commit }, id) {
      return EventService.getPublicContentId(id)
        .then(response => {
          commit('GET_EVENT', response.data)
        })
        .catch(error => console.log(error))
    }
  }

}
export default events 