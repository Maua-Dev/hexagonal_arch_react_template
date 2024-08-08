import { expect, it, describe } from 'vitest'
import { User } from '@/domain/entities/user'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { CreateUserUseCase } from '@/application/usecase/create-user-usecase'

describe('create user use case', () => {
  it('should create a user and return the created user', async () => {
    const userRepository = new UserRepositoryMock()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const lengthBefore = (await userRepository.list()).length
    const user = new User(1, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    const response = await createUserUseCase.execute(user)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(7)
    expect(response).toStrictEqual(user)
  })

  it('should throw error because the user already exists', async () => {
    const userRepository = new UserRepositoryMock()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const user = new User(6, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    expect(
      async () => await createUserUseCase.execute(user)
    ).rejects.toThrowError('User already exists')
  })
})
