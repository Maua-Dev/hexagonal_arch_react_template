import { User } from '@/domain/entities/user'
import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'

interface CreateUserUseCaseInterface {
  execute(user: User): Promise<User>
}

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  private readonly userRepository: UserRepositoryInterface

  constructor(
    userRepository: UserRepositoryInterface = UserRepositoryFactory.create()
  ) {
    this.userRepository = userRepository
  }
  async execute(user: User) {
    return this.userRepository.create(user)
  }
}
