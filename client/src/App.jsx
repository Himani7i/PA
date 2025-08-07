// src/App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-pink-950 min-h-screen text-pink-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
      </div>
    </BrowserRouter>    
  );
}
export default App;