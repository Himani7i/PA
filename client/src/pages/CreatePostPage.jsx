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
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border rounded-lg mb-4"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
