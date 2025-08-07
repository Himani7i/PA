// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/axios';
import PostCard from '../components/PostCard';

export default function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUserData(res.data));
  }, [id]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 text-pink-800">
      <h2 className="text-2xl font-bold mb-2">{userData.user.name}</h2>
      <h3 className="text-xl font-semibold mb-2">Posts</h3>
      {userData.posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
}