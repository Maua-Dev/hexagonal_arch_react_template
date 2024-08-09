import { User } from '@/domain/entities/user'
import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'

interface GetUserListUseCaseInterface {
  execute(): Promise<User[]>
}

export class GetUserListUseCase implements GetUserListUseCaseInterface {
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
