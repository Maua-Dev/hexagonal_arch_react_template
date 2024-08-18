import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { environments } from '@/utils/env/enviroments'
import { UserRepositoryMock } from '../repositories/mock/user-repository-mock'
import { UserRepositoryHttp } from '../repositories/http/user-repository-http'
import { STAGE } from '@/utils/enums/stage'

export class UserRepositoryFactory {
  static create(stage: STAGE = environments.stage): UserRepositoryInterface {
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
