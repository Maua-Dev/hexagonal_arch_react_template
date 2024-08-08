import { User } from '../entities/user'

export interface UserRepositoryInterface {
  find(id: number): Promise<User | null>
  list(): Promise<User[]>
  create(user: User): Promise<User>
  delete(id: number): Promise<User | null>
}
