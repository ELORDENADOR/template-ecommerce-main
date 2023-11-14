import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtecterAdmin = () => {

    const {user} = useContext(AuthContext)
  return <>
    {
        user?.rol === "TEHUJNJV7E" ? <Outlet /> : <Navigate to ="/" />  

    }

  </>
}
export default ProtecterAdmin