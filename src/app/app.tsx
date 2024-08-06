import { useEffect, useState } from 'react'
import { User } from '../domain/entities/user'
import { userService } from '../services/user-service'

export function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await userService.listUsers()
        setUsers(userList)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])
  return (
    <>
      <h1 className="flex flex-col text-9xl">React</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}
