import { User } from '../../../domain/entities/user'
import { getUserListGateway } from '../../gateways/get-user-list'
import { UserRepositoryInterface } from '../../../domain/interfaces/user-repository-interface'
import { getUserGateway } from '../../gateways/get-user'
export class UserRepositoryHttp implements UserRepositoryInterface {
  async find(id: number): Promise<User> {
    try {
      const response = await getUserGateway.load(id)

      return response.data as User
    } catch (error) {
      throw new Error(
        'Something went wrong on find user: ' + (error as Error).message
      )
    }
  }

  async list(): Promise<User[]> {
    try {
      const response = await getUserListGateway.load()

      return response.data as User[]
    } catch (error) {
      throw new Error(
        'Something went wrong on list users: ' + (error as Error).message
      )
    }
  }

  async create(user: User): Promise<User> {
    throw new Error('Method not implemented. ' + user)
  }

  async delete(id: number): Promise<User> {
    throw new Error('Method not implemented. ' + id)
  }
}
