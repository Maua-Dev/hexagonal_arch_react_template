import { createContext, ReactNode, useState } from 'react'
import { User } from '../../domain/entities/user'

type UserContextType = {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User>({} as User)

  return (
    <UserContext.Provider value={{ users, setUsers, user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
