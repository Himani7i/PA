// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="p-4 border border-pink-700 rounded shadow-sm mb-4 bg-pink-800 text-pink-100">
      <p>{post.content}</p>
      <small className="text-pink-300">— {post.author.name} • {new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}