import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { environments } from '@/utils/env/enviroments'
import { UserRepositoryMock } from '../repositories/mock/user-repository-mock'
import { UserRepositoryHttp } from '../repositories/http/user-repository-http'

export class UserRepositoryFactory {
  static create(): UserRepositoryInterface {
    const { stage } = environments

    switch (stage) {
      case 'test':
        return new UserRepositoryMock()
      case 'prod':
        return new UserRepositoryHttp()
      case 'homolog':
        return new UserRepositoryHttp()
      case 'dev':
        return new UserRepositoryHttp()
      default:
        throw new Error(`No repository found for stage: ${stage}`)
    }
  }
}
