import { createContext, ReactNode, useState } from 'react'
import { User } from '../../domain/entities/user'

type UserContextType = {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([])

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}
