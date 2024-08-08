import { User } from '@/domain/entities/user'
import { useUsers } from '../hooks/use-users'

type UserCardProps = {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const { deleteUser } = useUsers()

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this user?'))
      await deleteUser(user.id)
  }

  return (
    <div
      onClick={handleDelete}
      className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-white p-4 drop-shadow-md transition-all duration-200 hover:scale-105 hover:bg-red-100 md:p-6"
    >
      <h2 className="font-bold">{user.name}</h2>
      <p className="font-light">{user.email}</p>
    </div>
  )
}
