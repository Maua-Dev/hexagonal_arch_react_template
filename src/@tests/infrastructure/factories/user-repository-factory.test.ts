import { expect, it, describe } from 'vitest'
import { UserRepositoryMock } from '@/infrastructure/repositories/mock/user-repository-mock'
import { UserRepositoryFactory } from '@/infrastructure/factories/user-repository-factory'
import { UserRepositoryHttp } from '@/infrastructure/repositories/http/user-repository-http'

describe('user respository factory', () => {
  it('should create user repository mock', async () => {
    const userRepositoryMock = new UserRepositoryMock()
    const userRepositoryMockCreated = UserRepositoryFactory.create('test')

    expect(userRepositoryMock).toStrictEqual(userRepositoryMockCreated)
  })

  it('should create user repository http 1', async () => {
    const userRepositoryHttp = new UserRepositoryHttp()
    const userRepositoryHttpCreated = UserRepositoryFactory.create('dev')

    expect(userRepositoryHttp).toStrictEqual(userRepositoryHttpCreated)
  })

  it('should create user repository http 2', async () => {
    const userRepositoryHttp = new UserRepositoryHttp()
    const userRepositoryHttpCreated = UserRepositoryFactory.create('homolog')

    expect(userRepositoryHttp).toStrictEqual(userRepositoryHttpCreated)
  })

  it('should create user repository http 3', async () => {
    const userRepositoryHttp = new UserRepositoryHttp()
    const userRepositoryHttpCreated = UserRepositoryFactory.create('prod')

    expect(userRepositoryHttp).toStrictEqual(userRepositoryHttpCreated)
  })
})
