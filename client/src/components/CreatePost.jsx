// src/components/CreatePost.jsx
import { useState } from 'react';
import API from '../utils/axios';

export default function CreatePost({ onPost }) {
  const [content, setContent] = useState('');

  const submitPost = async () => {
    const res = await API.post('/posts', { content });
    onPost(res.data);
    setContent('');
  };

  return (
    <div className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full  bg-pink-100 text-pink-800 border border-pink-300  p-2 rounded"
        placeholder="What's on your mind?"
      ></textarea>
      <button onClick={submitPost} className="mt-2 px-4 py-1 bg-pink-500 hover:bg-pink-400 text-white rounded">Post</button>
    </div>
  );
}
