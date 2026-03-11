import Link from "next/link";

export const metadata = {
  title: "Blog | openPuppeteer",
  description:
    "Articles about web automation, Puppeteer, headless browsers, and developer productivity tools.",
};

const blogPosts = [
  {
    slug: "puppeteer-web-automation-guide",
    title: "Getting Started with Puppeteer for Web Automation",
    description:
      "Learn how to use Puppeteer for web scraping, testing, and automation. A comprehensive guide for developers.",
    date: "2024-03-10",
    category: "Tutorials",
  },
  {
    slug: "headless-browser-testing-2024",
    title: "Headless Browser Testing in 2024: Best Practices",
    description:
      "Modern approaches to automated testing with headless browsers. Performance tips and common pitfalls to avoid.",
    date: "2024-03-08",
    category: "Testing",
  },
  {
    slug: "developer-productivity-tools",
    title: "Essential Developer Tools for 2024: Automation & Beyond",
    description:
      "A curated list of tools every developer should know, from browser automation to journaling apps.",
    date: "2024-03-05",
    category: "Productivity",
  },
  {
    slug: "journaling-for-developers",
    title: "Why Every Developer Should Keep a Work Journal",
    description:
      "How daily journaling improves debugging, documentation, and career growth for software engineers.",
    date: "2024-03-02",
    category: "Productivity",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-4">
          <Link href="/" className="text-gray-600 hover:text-black text-sm">
            ← Back to openPuppeteer
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Articles about web automation, headless browsers, and developer
          productivity.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {post.category}
                </span>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
