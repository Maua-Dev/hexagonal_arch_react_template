import { useEffect } from 'react'
import { useUsers } from './hooks/use-users'

export function App() {
  const { fetchUsers, users } = useUsers()

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
