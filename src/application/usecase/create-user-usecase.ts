import { User } from '@/domain/entities/user'
import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'

export class CreateUserListUseCase {
  private readonly userRepository: UserRepositoryInterface

  constructor() {
    this.userRepository = UserRepositoryFactory.create()
  }
  async execute(user: User) {
    return this.userRepository.create(user)
  }
}
