// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="p-4 border rounded shadow-sm mb-4">
      <p className="text-gray-800">{post.content}</p>
      <small className="text-gray-500">— {post.author.name} • {new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}