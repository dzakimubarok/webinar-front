import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth/'

class AuthService {
  async login(user) {
    await axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      })
  }

  async logout() {
    await localStorage.removeItem('user')
  }

  async register(user) {
    console.log(user)
    await axios
      .post(API_URL + 'signup', {
        username: user.username,
        email: user.email,
        password: user.password
      });
  }
}

export default new AuthService();

