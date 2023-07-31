import Message from "./Message"

const Messages = () => {
  return (
    <div className="messages bg-gray-100 p-2 h-[calc(100%-96px)] overflow-y-scroll">
        <Message />
        <Message />

    </div>
  )
}

export default Messages