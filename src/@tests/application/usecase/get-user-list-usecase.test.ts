import { expect, it, describe } from 'vitest'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { GetUserListUseCase } from '@/application/usecase/get-user-list-usecase'

describe('get user list use case', () => {
  it('should return a list of users', async () => {
    const userRepository = new UserRepositoryMock()
    const getUserListUseCase = new GetUserListUseCase(userRepository)
    const users = await getUserListUseCase.execute()

    expect(users).toHaveLength(6)
  })
})
