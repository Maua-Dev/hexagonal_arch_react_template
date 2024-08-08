import { expect, it, describe } from 'vitest'
import { User } from '@/domain/entities/user'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { GetUserUseCase } from '@/application/usecase/get-user-usecase'

describe('get user use case', () => {
  it('should return a user', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserUseCase = new GetUserUseCase(userRepository)
    const user = await getUserUseCase.execute(6)

    expect(user.id).toBe(6)
    expect(user.name).toBe('Mrs. Dennis Schulist')
    expect(user).toBeInstanceOf(User)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserUseCase = new GetUserUseCase(userRepository)

    expect(async () => await getUserUseCase.execute(1)).rejects.toThrowError(
      'User not found'
    )
  })
})
