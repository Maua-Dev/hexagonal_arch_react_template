import { expect, it, describe } from 'vitest'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { DeleteUserUseCase } from '@/application/usecase/delete-user-usecase'

describe('delete user use case', () => {
  it('should delete a user and return the deleted user', async () => {
    const userRepository = new UserRepositoryMock()
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)
    const lengthBefore = (await userRepository.list()).length
    const user = await userRepository.find(6)

    const deletedUser = await deleteUserUseCase.execute(6)
    const lengthAfter = (await userRepository.list()).length

    expect(lengthBefore).toBe(6)
    expect(lengthAfter).toBe(5)
    expect(deletedUser).toStrictEqual(user)
  })

  it('should throw error because the user does not exist', async () => {
    const userRepository = new UserRepositoryMock()
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)

    expect(async () => await deleteUserUseCase.execute(1)).rejects.toThrowError(
      'User not found'
    )
  })
})
