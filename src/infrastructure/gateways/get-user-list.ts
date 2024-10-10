import { User } from '@/domain/entities/user'
import { HttpClient, HttpResponse } from '../http/http'
import { api } from '../http/api'
import { AxiosError } from 'axios'
import { HTTP_STATUS_CODE } from '@/utils/enums/status-code'

interface GetUserList {
  load(): Promise<HttpResponse<User[]>>
}

class GetUserListGateway implements GetUserList {
  constructor(private readonly httpClient: HttpClient<HttpResponse<User[]>>) {}

  async load(): Promise<HttpResponse<User[]>> {
    return await this.httpClient.request({
      method: 'get',
      url: '/users'
    })
  }
}

/*

  HttpClient implementation using fetch

  const fetchHttpClient: HttpClient<HttpResponse<User[]>> = {
    async request(data) {
      try {
        const response = await fetch(environments + data.url, {
          method: data.method
        })

        if (response.status === 404) {
          throw new Error('Users not found')
        }

        if (!response.ok) {
          throw new Error('Error fetching: ' + response.statusText)
        }

        const dataResponse = ((await response.json()) as User[]).map((user) =>
          User.fromJson(user)
        )

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

const axiosHttpClient: HttpClient<HttpResponse<User[]>> = {
  async request(data) {
    try {
      const response = await api.request<User[]>({
        method: data.method,
        url: data.url
      })

      return {
        statusCode: response.status,
        data: response.data.map((user) => User.fromJson(user))
      }
    } catch (error) {
      if (
        (error as AxiosError).response?.status === HTTP_STATUS_CODE.NOT_FOUND
      ) {
        throw new Error('Users not found')
      }
      throw new Error((error as Error).message)
    }
  }
}

export const getUserListGateway = new GetUserListGateway(axiosHttpClient)
