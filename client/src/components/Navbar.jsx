// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import {useAuth } from '../context/AuthContext';
import API from '../utils/axios';

export default function Navbar() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await API.post('/auth/logout');
    setUser(null);
  };

  return (
    <nav className="p-4 flex justify-between shadow bg-rose-800 sticky top-0 z-50 text-pink-100">
      <Link to="/" className="text-xl font-bold text-pink-100 hover:text-pink-300">MiniLinkedIn</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to={`/profile/${user._id}`}className="hover:text-pink-400">{user.name}</Link>
            <button onClick={handleLogout} className="text-sm text-pink-300 hover:text-pink-400">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-pink-300">Login</Link>
            <Link to="/register" className="hover:text-pink-300">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}