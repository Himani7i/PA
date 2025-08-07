// src/pages/CreatePostPage.jsx
import React, { useState, useContext } from 'react';
import API from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../context/AuthContext';

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      await API.post('/posts', { content });
      setContent('');
      navigate('/');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-pink-900 rounded-xl shadow-2xl border border-pink-700 text-pink-100">
      <h2 className="text-2xl font-bold mb-4 text-pink-100">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 bg-pink-800 text-pink-100 placeholder-pink-300 border border-pink-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows="4"
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-md shadow transition duration-200 ease-in-out"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
