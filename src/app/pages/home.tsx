import { useEffect } from 'react'
import { useUsers } from '../hooks/use-users'
import { UserCard } from '../components/user-card'

export function Home() {
  const { users, fetchUsers } = useUsers()

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-12">
      <h1 className="flex flex-col text-4xl font-semibold sm:text-6xl md:text-8xl">
        Hexagonal Arch
      </h1>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}
