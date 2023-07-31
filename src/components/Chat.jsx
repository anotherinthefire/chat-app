import Cam from "../assets/icons/video-camera.svg"
import Add from "../assets/icons/user-plus.svg"
import More from "../assets/icons/ellipsis-horizontal.svg"
import Messages from "./Messages"
import Input from "./Input"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo h-12 bg-slate-700 flex items-center justify-between text-gray-300 p-2">
        <span>Dreyn</span>
        <div className="chatIcon flex gap-2">
          <img src={Cam} alt="" className="h-6 w-6"/>
          <img src={Add} alt="" className="h-6 w-6"/>
          <img src={More} alt="" className="h-6 w-6"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat