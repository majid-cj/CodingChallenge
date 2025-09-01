import axios from 'axios'

import Config from 'react-native-config'

export const axiosInstance = axios.create({
  baseURL: Config.APP_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const setupNetwork = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      return Promise.reject(error)
    }
  )
}
