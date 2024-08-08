import { HttpClient, HttpResponse } from '../http/http'
import { User } from '../../domain/entities/user'

interface GetUser {
  load(id: number): Promise<HttpResponse<User>>
}

class GetUserGateway implements GetUser {
  constructor(private readonly httpClient: HttpClient<HttpResponse<User>>) {}

  async load(id: number): Promise<HttpResponse<User>> {
    return await this.httpClient.request({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/users/${id}`
    })
  }
}

const httpClient: HttpClient<HttpResponse<User>> = {
  async request(data) {
    try {
      const response = await fetch(data.url, {
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

export const getUserGateway = new GetUserGateway(httpClient)
