import { User } from '../entities/user'

export interface UserServiceInterface {
  listUsers(): Promise<User[]>
  getUser(id: number): Promise<User>
  createUser(user: User): Promise<User>
  deleteUser(id: number): Promise<User>
}
