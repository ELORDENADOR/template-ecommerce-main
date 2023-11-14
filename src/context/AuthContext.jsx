import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextComponent = ({children}) => {

const [user,setUser] = useState({})
const [isLogged,setIsLogged] = useState(false)
console.log("inicial",isLogged)

const handleLogin = (userLogged)=>{
  setUser(userLogged)
  setIsLogged(true)
  console.log("cambio",isLogged)
}

const logoutContext = ()=>{
    setUser({})
    setIsLogged(false)
    console.log("nuevo cambio",isLogged)
}

let data = {
    user,
    isLogged,
    handleLogin,
    logoutContext
}

  return (
   <AuthContext.Provider value={data}>
      {children}
   </AuthContext.Provider>
  )
}

export default AuthContextComponent