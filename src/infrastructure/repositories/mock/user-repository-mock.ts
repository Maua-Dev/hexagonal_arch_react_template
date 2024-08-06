import { User } from '../../../domain/entities/user'
import { UserRepositoryInterface } from '../../../domain/interfaces/user-repository-interface'

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
    })
  ]

  find(id: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)
    return Promise.resolve(user || null)
  }
  list(): Promise<User[]> {
    return Promise.resolve(this.users)
  }
}
