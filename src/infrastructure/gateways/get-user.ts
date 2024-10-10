import { HttpClient, HttpResponse } from '../http/http'
import { User } from '@/domain/entities/user'
import { api } from '../http/api'
import { AxiosError } from 'axios'
import { HTTP_STATUS_CODE } from '@/utils/enums/status-code'

interface GetUser {
  load(id: number): Promise<HttpResponse<User>>
}

class GetUserGateway implements GetUser {
  constructor(private readonly httpClient: HttpClient<HttpResponse<User>>) {}

  async load(id: number): Promise<HttpResponse<User>> {
    return await this.httpClient.request({
      method: 'get',
      url: `/${id}`
    })
  }
}

/*

  HttpClient implementation using fetch

  const fetchHttpClient: HttpClient<HttpResponse<User>> = {
    async request(data) {
      try {
        const response = await fetch(environments.apiUrl + data.url, {
          method: data.method
        })

        if (response.status === 404) {
          throw new Error('User not found')
        }

        if (!response.ok) {
          throw new Error('Error fetching: ' + response.statusText)
        }

        const dataResponse = (await response.json()) as User

        return {
          statusCode: response.status,
          data: dataResponse
        }
      } catch (error) {
        throw new Error((error as Error).message)
      }
    }
  }

*/

const axiosHttpClient: HttpClient<HttpResponse<User>> = {
  async request(data) {
    try {
      const response = await api.request<User>({
        method: data.method,
        url: data.url
      })

      return {
        statusCode: response.status,
        data: response.data
      }
    } catch (error) {
      if (
        (error as AxiosError).response?.status === HTTP_STATUS_CODE.NOT_FOUND
      ) {
        throw new Error('User not found')
      }
      throw new Error((error as Error).message)
    }
  }
}

export const getUserGateway = new GetUserGateway(axiosHttpClient)
