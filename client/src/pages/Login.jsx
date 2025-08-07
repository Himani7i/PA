// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/axios';
import {useAuth } from '../context/AuthContext'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
    const res = await API.post('/auth/login', { email, password }, {
      withCredentials: true
    });
    // console.log('Login success:', res.data);
    setUser(res.data.user);
    navigate('/');
  } catch (err) {
    console.error('Login failed:', err.response?.data || err.message);
    alert(err.response?.data?.error || 'Login failed');
  }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border border-pink-300 bg-pink-100 text-pink-900 p-2 w-full mb-2"/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border border-pink-300 bg-pink-100 text-pink-900 p-2 w-full mb-2"/>
      <button onClick={handleLogin} className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}