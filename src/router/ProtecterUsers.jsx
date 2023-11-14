import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Outlet,Navigate } from "react-router-dom"

const ProtecterUsers = () => {

const {isLoggeed} = useContext(AuthContext)


  return <>
  {
    isLoggeed ? <Outlet /> : <Navigate to="/login" />
  }
  
  </>
}
export default ProtecterUsers