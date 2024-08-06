import { UserRepositoryInterface } from '../../domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '../../infrastructure/factories/user-repository-factory'

export class GetUserListUseCase {
  private readonly userRepository: UserRepositoryInterface

  constructor() {
    this.userRepository = UserRepositoryFactory.create()
  }
  async execute() {
    return this.userRepository.list()
  }
}
