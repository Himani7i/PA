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
    <nav className="p-4 flex justify-between shadow bg-white sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold">MiniLinkedIn</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to={`/profile/${user._id}`}>{user.name}</Link>
            <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}