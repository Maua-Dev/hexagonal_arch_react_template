import { UserRepositoryInterface } from '../../domain/interfaces/user-repository-interface'
import { UserRepositoryFactory } from '../../infrastructure/factories/user-repository-factory'

export class GetUserUseCase {
  private readonly userRepository: UserRepositoryInterface

  constructor() {
    this.userRepository = UserRepositoryFactory.create()
  }
  async execute(id: number) {
    return this.userRepository.find(id)
  }
}
