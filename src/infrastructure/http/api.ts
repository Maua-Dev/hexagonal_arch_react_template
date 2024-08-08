import { environments } from '@/utils/env/enviroments'
import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: environments.apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    console.log(`Intercepted error: ${(error as AxiosError).message}`)
    return Promise.reject(error)
  }
)
