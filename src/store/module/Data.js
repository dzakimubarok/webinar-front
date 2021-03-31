import EventService from '../../services/Event.services'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const events = {
  namespaced: true,
  state: {
    events: [],
    event: {},
    initialState
  },

  mutations: {
    GET_POSTS(state, data) {
      state.events = data
    },
    GET_EVENT(state, data) {
      state.event = data
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
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
    },
    login({ commit }, user) {
      return EventService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      EventService.logout();
      commit('logout');
    },
  }
}
export default events 