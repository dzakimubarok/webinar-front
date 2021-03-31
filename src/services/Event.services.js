import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/api/event/'

class EventService {
  async getPublicContent() {
    return await axios.get(API_URL + '/')
  }
  async getPublicContentId(id) {
    return await axios.get(API_URL + id)
  }
  async getUserBoard() {
    return await axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new EventService();