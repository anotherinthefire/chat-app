import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"

const Home = () => {

  return (
    <div className="h-screen bg-slate-400 flex items-center justify-center">
        <div className="border w-2/3 h-4/5 flex rounded-lg overflow-hidden">
          <Sidebar />
          <Chat />
        </div>
    </div>
  )
}

export default Home