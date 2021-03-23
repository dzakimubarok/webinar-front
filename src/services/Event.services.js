import axios from 'axios'

const API_URL = 'http://localhost:3000/api/event/'

class EventService {
  getPublicContent() {
    return axios.get(API_URL + '/')
  }
}

export default new EventService();