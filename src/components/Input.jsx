import img from "../assets/icons/photo.svg"
import clip from "../assets/icons/paper-clip.svg"


const Input = () => {
  return (
    <div className="bg-white h-12 flex items-center justify-between px-2">
        <input type="text" placeholder="enter message..." className="w-9/12" />
        <div className="send flex items-center gap-5">
            <img src={clip} alt="clip icon" className="h-6 w-6 cursor-pointer"/>
            <input type="file" className="hidden text-slate-950 text-lg" id="file"/>
            <label htmlFor="file">
                <img src={img} alt="image icon"className="h-6 w-6 cursor-pointer"/>
            </label>
            <button className="px-2 py-1 bg-blue-900 text-white">Send</button>
        </div>
    </div>
  )
}

export default Input