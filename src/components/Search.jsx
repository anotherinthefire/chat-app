import { useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

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

      {user && <div className="border-b border-gray-400 p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-blue-950">
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