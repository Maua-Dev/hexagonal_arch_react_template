import { expect, it, describe } from 'vitest'
import { User } from '@/domain/entities/user'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'

describe('get user list in repository mock', () => {
  it('should return a list of users', async () => {
    const userRepository = new UserRepositoryMock()
    const users = await userRepository.list()

    expect(users).toHaveLength(6)
  })
})

describe('get user in repository mock', () => {
  it('should return a user', async () => {
    const userRepository = new UserRepositoryMock()
    const user = await userRepository.find(6)

    expect(user.id).toBe(6)
    expect(user.name).toBe('Mrs. Dennis Schulist')
    expect(user).toBeInstanceOf(User)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()

    expect(async () => await userRepository.find(1)).rejects.toThrowError(
      'User not found'
    )
  })
})

describe('create user in repository mock', () => {
  it('should create a user and return the created user', async () => {
    const userRepository = new UserRepositoryMock()
    const lengthBefore = (await userRepository.list()).length
    const user = new User(1, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    const response = await userRepository.create(user)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(7)
    expect(response).toStrictEqual(user)
  })

  it('should throw error because the user already exists', async () => {
    const userRepository = new UserRepositoryMock()
    const user = new User(6, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    expect(async () => await userRepository.create(user)).rejects.toThrowError(
      'User already exists'
    )
  })
})

describe('delete user in repository mock', () => {
  it('should delete a user and return the deleted user', async () => {
    const userRepository = new UserRepositoryMock()
    const lengthBefore = (await userRepository.list()).length
    const user = await userRepository.find(6)

    const deletedUser = await userRepository.delete(6)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(5)
    expect(deletedUser).toStrictEqual(user)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()

    expect(async () => await userRepository.delete(1)).rejects.toThrowError(
      'User not found'
    )
  })
})
