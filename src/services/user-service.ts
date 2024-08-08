import { CreateUserUseCase } from '@/application/usecase/create-user-usecase'
import { GetUserListUseCase } from '../application/usecase/get-user-list-usecase'
import { GetUserUseCase } from '../application/usecase/get-user-usecase'
import { User } from '../domain/entities/user'
import { UserServiceInterface } from '../domain/interfaces/user-service-interface'
import { DeleteUserUseCase } from '@/application/usecase/delete-user-usecase'

class UserService implements UserServiceInterface {
  private getUserListUseCase: GetUserListUseCase
  private getUserUseCase: GetUserUseCase
  private createUserUseCase: CreateUserUseCase
  private deleteUserUseCase: DeleteUserUseCase

  constructor() {
    this.getUserListUseCase = new GetUserListUseCase()
    this.getUserUseCase = new GetUserUseCase()
    this.createUserUseCase = new CreateUserUseCase()
    this.deleteUserUseCase = new DeleteUserUseCase()
  }

  async listUsers(): Promise<User[]> {
    return await this.getUserListUseCase.execute()
  }

  async getUser(id: number): Promise<User> {
    return await this.getUserUseCase.execute(id)
  }

  async createUser(user: User): Promise<User> {
    return await this.createUserUseCase.execute(user)
  }

  async deleteUser(id: number): Promise<User> {
    return await this.deleteUserUseCase.execute(id)
  }
}

export const userService = new UserService()
