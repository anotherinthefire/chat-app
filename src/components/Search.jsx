import { useContext, useState } from "react"
import { collection, doc, getDocs, getDoc, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase"
import AuthContext from "../context/AuthContext"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "user"),
      where("displayName", "==", username)
    )

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  }
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    const combinedId = 
    currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid
    try{
      const res = await getDoc(doc(db, "chats", combinedId))

      if(!res.exists()){
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })

        
        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]: {
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    }catch(err){}
  }
  return (
    <div className="text-white">
      <div className="p-2 border-b border-gray-400">
        <input
          type="text"
          placeholder="find user"
          className="bg-transparent border-none text-white outline-none"
          onChange={e => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>

      {err && <span>User not found!</span>}

      {user && <div className="border-b border-gray-400 p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-blue-950" onClick={handleSelect}>
        <img src={user.photoURL}
          className="h-12 w-12 rounded-full object-cover" />
        <div className="">
          <span className="font-medium text-lg">{user.displayName}</span>
        </div>
      </div>
      }

    </div>
  )
}

export default Search