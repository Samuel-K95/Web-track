import { getServerSession } from "next-auth"
import {options} from '../api/auth/[...nextauth]/options'
import Home from "./page"
import AuthProvider from "./AuthProvider"

const layout = async() => {
    const session = await getServerSession(options)
  return (
    <AuthProvider session={session} >
        <Home />
    </AuthProvider>
  )
}

export default layout