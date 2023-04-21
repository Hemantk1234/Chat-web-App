import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="a119b959-0707-41d4-a32a-6555a97da246"
            userName="Hemant"
            userSecret="442301"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;