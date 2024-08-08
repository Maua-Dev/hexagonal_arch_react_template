import { GetUserListUseCase } from '../application/usecase/get-user-list-usecase'
import { GetUserUseCase } from '../application/usecase/get-user-usecase'
import { User } from '../domain/entities/user'
import { UserServiceInterface } from '../domain/interfaces/user-service-interface'

export class UserService implements UserServiceInterface {
  private getUserListUseCase: GetUserListUseCase
  private getUserUseCase: GetUserUseCase

  constructor() {
    this.getUserListUseCase = new GetUserListUseCase()
    this.getUserUseCase = new GetUserUseCase()
  }

  async listUsers(): Promise<User[]> {
    return await this.getUserListUseCase.execute()
  }

  async getUser(id: number): Promise<User> {
    return await this.getUserUseCase.execute(id)
  }

  async createUser(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }

  async deleteUser(id: number): Promise<User> {
    throw new Error('Method not implemented.')
  }
}

export const userService = new UserService()
