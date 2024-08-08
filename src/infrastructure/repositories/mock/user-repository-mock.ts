import { User } from '@/domain/entities/user'
import { UserRepositoryInterface } from '@/domain/interfaces/user-repository-interface'

export class UserRepositoryMock implements UserRepositoryInterface {
  private readonly users: User[] = [
    new User(6, 'Mrs. Dennis Schulist', 'Karley_Dach@jasper.info', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    }),
    new User(7, 'Kurtis Weissnat', 'Telly.Hoeger@billy.biz', {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099'
    }),
    new User(8, 'Nicholas Runolfsdottir V', 'Sherwood@rosamond.me', {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169'
    }),
    new User(9, 'Glenna Reichert', 'Chaim_McDermott@dana.io', {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109'
    }),
    new User(10, 'Clementina DuBuque', 'Rey.Padberg@karina.biz', {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261'
    }),
    new User(11, 'Flavio Murata', 'flaviomurata@brownie.com', {
      street: 'Praça Mauá 1',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261'
    })
  ]

  async find(id: number): Promise<User> {
    const user = this.users.find((user) => user.id === id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async list(): Promise<User[]> {
    if (this.users.length === 0) {
      throw new Error('No users found')
    }

    return this.users
  }

  async create({ id, name, email, address }: User): Promise<User> {
    if (this.users.find((user) => user.id === id)) {
      throw new Error('User already exists')
    }

    const user = new User(id, name, email, address)
    this.users.push(user)

    return user
  }

  async delete(id: number): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const user = this.users[userIndex]
    this.users.splice(userIndex, 1)
    return user
  }
}
