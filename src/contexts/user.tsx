import React, { createContext, useState } from 'react'

type UserType = {
  firstname: string
  lastname: string
  email: string
}

type PropsUserContext = {
  state: UserType
  setState: React.Dispatch<React.SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
  state: {
    firstname: '',
    lastname: '',
    email: ''
  },

  setState: () => {}
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }

export default UserContext