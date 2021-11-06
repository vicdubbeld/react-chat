import MessageForm from "./ChatFeed";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";



const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            //if there are messages, find last message
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username;
        })
    }

    renderMessages()

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed