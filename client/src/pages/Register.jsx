//src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // console.log({ name, email, password });


  const handleRegister = async () => {
    await API.post('/auth/register', { name, email, password });
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold  text-red-500 mb-4">Register</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border border-pink-300 bg-pink-100 text-pink-900 p-2 w-full mb-2"/>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border border-pink-300 bg-pink-100 text-pink-900 p-2 w-full mb-2"/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border border-pink-300 bg-pink-500 text-pink-900 p-2 w-full mb-2"/>
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}
