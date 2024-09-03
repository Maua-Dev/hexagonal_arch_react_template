import { expect, it, describe } from 'vitest'
import { User } from '@/domain/entities/user'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { CreateUserUseCase } from '@/application/usecase/create-user-usecase'
import { UserService } from '@/services/user-service'
import { DeleteUserUseCase } from '@/application/usecase/delete-user-usecase'
import { GetUserListUseCase } from '@/application/usecase/get-user-list-usecase'
import { GetUserUseCase } from '@/application/usecase/get-user-usecase'

describe('get user list service', () => {
  it('should return a list of users', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserListUseCase = new GetUserListUseCase(userRepository)
    const userService = new UserService(getUserListUseCase)
    const users = await userService.listUsers()

    expect(users).toHaveLength(6)
  })
})

describe('get user service', () => {
  it('should return a user', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserUseCase = new GetUserUseCase(userRepository)
    const userService = new UserService(undefined, getUserUseCase)
    const user = await userService.getUser(6)

    expect(user.id).toBe(6)
    expect(user.name).toBe('Mrs. Dennis Schulist')
    expect(user).toBeInstanceOf(User)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserUseCase = new GetUserUseCase(userRepository)
    const userService = new UserService(undefined, getUserUseCase)

    expect(async () => await userService.getUser(1)).rejects.toThrowError(
      'User not found'
    )
  })
})

describe('create user service', () => {
  it('should create a user and return the created user', async () => {
    const userRepository = new UserRepositoryMock()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const userService = new UserService(undefined, undefined, createUserUseCase)
    const lengthBefore = (await userRepository.list()).length
    const user = new User(1, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    const response = await userService.createUser(user)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(7)
    expect(response).toStrictEqual(user)
  })

  it('should throw error because the user already exists', async () => {
    const userRepository = new UserRepositoryMock()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    const userService = new UserService(undefined, undefined, createUserUseCase)
    const user = new User(6, 'Vini Jr', 'vini@jr.com', {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337'
    })

    expect(async () => await userService.createUser(user)).rejects.toThrowError(
      'User already exists'
    )
  })
})

describe('delete user service', () => {
  it('should delete a user and return the deleted user', async () => {
    const userRepository = new UserRepositoryMock()
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)
    const userService = new UserService(
      undefined,
      undefined,
      undefined,
      deleteUserUseCase
    )
    const lengthBefore = (await userRepository.list()).length
    const user = await userRepository.find(6)

    const deletedUser = await userService.deleteUser(6)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(5)
    expect(deletedUser).toStrictEqual(user)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)
    const userService = new UserService(
      undefined,
      undefined,
      undefined,
      deleteUserUseCase
    )

    expect(async () => await userService.deleteUser(1)).rejects.toThrowError(
      'User not found'
    )
  })
})
