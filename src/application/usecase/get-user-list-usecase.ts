import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'

export class GetUserListUseCase {
  private readonly userRepository: UserRepositoryInterface

  constructor(
    userRepository: UserRepositoryInterface = UserRepositoryFactory.create()
  ) {
    this.userRepository = userRepository
  }
  async execute() {
    return this.userRepository.list()
  }
}
