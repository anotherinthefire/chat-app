const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-950 h-12 p-2 justify-between text-white">
      <span className="font-bold hidden sm:block">WolfChat</span>
      <div className="flex gap-2">
        <img src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/363424501_675186351316112_4049125895322136204_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGjIbS5TlrMAX_eobLp&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBD6muQ7rkUdR077YNhsgYwytmVicvLra0fUvmHOuSl2Q&oe=64CBD1A5" alt="" className="bg-slate-500 h-6 w-6 rounded-full object-cover"/>
        <span>Ron</span>
        <button className="bg-blue-900 text-xs border-none px-2 py-1">Logout</button>
      </div>
    </div>
  )
}

export default Navbar