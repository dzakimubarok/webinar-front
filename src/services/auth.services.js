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
      .catch(err => {
        console.log(err)
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      passsword: user.passsword
    });
  }
}

export default new AuthService();

