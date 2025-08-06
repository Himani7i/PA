// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import API from '../utils/axios';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (

    <div className="max-w-xl mx-auto p-4 bg-blue-50 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 bg-blue-50">Home</h1>
      <CreatePost onPost={post => setPosts([post, ...posts])} />
      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  );
}