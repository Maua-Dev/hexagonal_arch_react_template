import { useContext } from 'react'
import { UserContext } from '../contexts/user-context'
import { userService } from '@/services/user-service'

export const useUsers = () => {
  const userContext = useContext(UserContext)

  if (!userContext) {
    throw new Error('useUsers must be used within an UserProvider')
  }

  const { user, users, setUser, setUsers } = userContext

  const fetchUsers = async () => {
    try {
      const userList = await userService.listUsers()
      setUsers(userList)
    } catch (error) {
      console.error(error)
    }
  }

  return { user, users, setUser, setUsers, fetchUsers }
}
