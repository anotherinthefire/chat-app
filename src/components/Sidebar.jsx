import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar border-r border-blue-900 bg-blue-900">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar