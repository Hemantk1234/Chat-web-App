import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="a119b959-0707-41d4-a32a-6555a97da246"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;