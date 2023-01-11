import {} from '@chakra-ui/react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';


function App() {
  return (
    <div className="App">
      <Router> 
            <Routes>
              
                <Route path="/" element = {<Homepage/>} exact></Route>
                <Route path="/chats" element = {<ChatPage/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
