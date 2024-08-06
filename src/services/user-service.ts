import { GetUserListUseCase } from '../application/usecase/get-user-list-usecase'
import { GetUserUseCase } from '../application/usecase/get-user-usecase'
import { User } from '../domain/entities/user'

export class UserService {
  private getUserListUseCase: GetUserListUseCase
  private getUserUseCase: GetUserUseCase

  constructor() {
    this.getUserListUseCase = new GetUserListUseCase()
    this.getUserUseCase = new GetUserUseCase()
  }

  async listUsers(): Promise<User[]> {
    return await this.getUserListUseCase.execute()
  }

  async getUser(id: number): Promise<User | null> {
    return await this.getUserUseCase.execute(id)
  }
}

export const userService = new UserService()
