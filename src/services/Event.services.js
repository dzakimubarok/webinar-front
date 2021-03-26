import axios from 'axios'

const API_URL = 'http://localhost:3000/api/event/'

class EventService {
  async getPublicContent() {
    return await axios.get(API_URL + '/')
  }
  async getPublicContentId(id) {
    return await axios.get(API_URL + id)
  }
}

export default new EventService();