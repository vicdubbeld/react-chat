import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

//App component
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="11f74c2e-6647-4b6d-81ab-d4b9abeaa48e"
      userName="billybob"
      userSecret="12341234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
