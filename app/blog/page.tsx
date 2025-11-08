// app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { id: "1", title: "Understanding Next.js Routing" },
    { id: "2", title: "Dynamic Routes in Next.js 14" },
    { id: "3", title: "Server Components Explained" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
