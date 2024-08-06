/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpRequest<T = any, H = any> = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  body?: T
  headers?: H
}

export type HttpResponse<T> = {
  statusCode: number
  data?: T
}

export interface HttpClient<V> {
  request(data: HttpRequest): Promise<V>
}
