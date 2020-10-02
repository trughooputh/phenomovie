import axios from 'axios'

const CONFIG = {
  BASE_URL: 'https://www.omdbapi.com/',
  API_KEY: 'cccb3e06'
}
const API = {
  movie: {
    details (IMDBiD) {
      return axios.get(`${CONFIG.BASE_URL}?i=${IMDBiD}&apikey=${CONFIG.API_KEY}`)
    },
    search (query) {
      return axios.get(`${CONFIG.BASE_URL}?s=${query}&type=movie&plot=full&apikey=${CONFIG.API_KEY}`)
    }
  }
}

export default API
