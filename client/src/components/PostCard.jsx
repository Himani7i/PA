// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="p-4 border border-pink-300 rounded shadow-sm mb-4 bg-pink-50 text-pink-900">
      <p>{post.content}</p>
      <small className="text-pink-300">— {post.author.name} • {new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}