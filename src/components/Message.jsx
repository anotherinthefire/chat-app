const Message = () => {
    return (
        <div>
            <div className="flex gap-5">
            <div className="messageinfo flex flex-col text-gray-500 font-light mb-5">
                <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/117923482_1176581019407321_6129043764444000457_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L0_nl71iO0kAX-uP7cA&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfAMfSiMkIbpXO343W1CgAjn6fyYMrfozfiCDax5u7QmKQ&oe=64EEBD9D"
                className="h-10 w-10 rounded-full object-cover"/>
                <span>just now</span>
            </div>
            <div className="messagecontent w-2/3 flex flex-col gap-2 mb-5">
                <p className="bg-white p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg max-w-max">Hello bebegurl</p>
                <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/117923482_1176581019407321_6129043764444000457_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L0_nl71iO0kAX-uP7cA&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfAMfSiMkIbpXO343W1CgAjn6fyYMrfozfiCDax5u7QmKQ&oe=64EEBD9D"
                className="rounded-lg"/>
            </div>
        </div>

        <div className="flex gap-5 flex-row-reverse">
            <div className="messageinfo flex flex-col text-gray-500 font-light mb-5">
                <img src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/363424501_675186351316112_4049125895322136204_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGjIbS5TlrMAX_eobLp&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBD6muQ7rkUdR077YNhsgYwytmVicvLra0fUvmHOuSl2Q&oe=64CBD1A5"
                className="h-10 w-10 rounded-full object-cover"/>
                <span>just now</span>
            </div>
            <div className="messagecontent w-2/3 flex flex-col gap-2 mb-5 items-end">
                <p className="bg-slate-500 text-white p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-max">hi</p>
                <img src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/363424501_675186351316112_4049125895322136204_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGjIbS5TlrMAX_eobLp&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBD6muQ7rkUdR077YNhsgYwytmVicvLra0fUvmHOuSl2Q&oe=64CBD1A5"/>
            </div>
        </div>
        </div>
  )
}

export default Message