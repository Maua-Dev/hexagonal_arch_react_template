import { UserRepositoryInterface } from '../../domain/interfaces/user-repository-interface'
import { UserRepositoryHttp } from '../repositories/http/user-repository-http'
import { UserRepositoryMock } from '../repositories/mock/user-repository-mock'

export class UserRepositoryFactory {
  static create(): UserRepositoryInterface {
    const stage = import.meta.env.VITE_STAGE || 'dev'

    switch (stage) {
      case 'test':
        return new UserRepositoryMock()
      case 'prod':
        return new UserRepositoryHttp()
      case 'hml':
        return new UserRepositoryHttp()
      case 'dev':
        return new UserRepositoryHttp()
      default:
        throw new Error(`No repository found for stage: ${stage}`)
    }
  }
}
