import { HttpClient, HttpResponse } from '../http/http'
import { User } from '../../domain/entities/user'

interface GetUserList {
  load(): Promise<HttpResponse<User[]>>
}

class GetUserListGateway implements GetUserList {
  constructor(private readonly httpClient: HttpClient<HttpResponse<User[]>>) {}

  async load(): Promise<HttpResponse<User[]>> {
    return await this.httpClient.request({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users'
    })
  }
}

const httpClient: HttpClient<HttpResponse<User[]>> = {
  async request(data) {
    try {
      const response = await fetch(data.url, {
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

export const getUserListGateway = new GetUserListGateway(httpClient)
