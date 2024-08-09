import { User } from '@/domain/entities/user'
import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'

interface DeleteUserUseCaseInterface {
  execute(id: number): Promise<User>
}

export class DeleteUserUseCase implements DeleteUserUseCaseInterface {
  private readonly userRepository: UserRepositoryInterface

  constructor(
    userRepository: UserRepositoryInterface = UserRepositoryFactory.create()
  ) {
    this.userRepository = userRepository
  }
  async execute(id: number) {
    return this.userRepository.delete(id)
  }
}
