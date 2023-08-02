import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="flex items-center bg-blue-950 h-12 p-2 justify-between text-white">
      <span className="font-bold hidden sm:block">WolfChat</span>
      <div className="flex gap-2">
        <img src={currentUser.photoURL} alt="" className="bg-slate-500 h-6 w-6 rounded-full object-cover"/>
        <span>{currentUser.displayName}</span>
        <button className="bg-blue-900 text-xs border-none px-2 py-1" onClick={() => signOut(auth)}>Logout</button> 
      </div>
    </div>
  )
}

export default Navbar