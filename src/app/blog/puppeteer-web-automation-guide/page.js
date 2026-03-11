import Link from "next/link";

export const metadata = {
  title: "Getting Started with Puppeteer for Web Automation | openPuppeteer",
  description:
    "Learn how to use Puppeteer for web scraping, testing, and automation. A comprehensive guide for developers.",
};

export default function PuppeteerGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-gray-600 hover:text-black text-sm"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              Tutorials
            </span>
            <time className="text-sm text-gray-500 ml-3">March 10, 2024</time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Getting Started with Puppeteer for Web Automation
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Puppeteer is a powerful Node.js library that provides a high-level
            API to control headless Chrome or Chromium. Whether you&apos;re building
            web scrapers, running automated tests, or generating PDFs,
            Puppeteer makes browser automation accessible and efficient.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            What is Puppeteer?
          </h2>
          <p className="text-gray-700 mb-4">
            Puppeteer is developed by Google and allows you to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Generate screenshots and PDFs of pages</li>
            <li>Crawl Single-Page Applications and generate pre-rendered content</li>
            <li>Automate form submission, UI testing, and keyboard input</li>
            <li>Create an automated testing environment</li>
            <li>Capture a timeline trace to diagnose performance issues</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Using openPuppeteer
          </h2>
          <p className="text-gray-700 mb-4">
            Instead of setting up Puppeteer locally, you can use{" "}
            <Link href="/" className="text-black underline hover:text-gray-600">
              openPuppeteer
            </Link>{" "}
            as a service. Simply deploy to Vercel and start making API calls
            without worrying about browser dependencies or server configuration.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg my-6">
            <code className="text-sm text-gray-800">
              GET https://your-deployment.vercel.app/api/pptr?url=https://example.com
            </code>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Best Practices for Web Automation
          </h2>
          <p className="text-gray-700 mb-4">
            When working with browser automation, keep these practices in mind:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              <strong>Document your workflows:</strong> Keep notes about your
              automation scripts. A tool like{" "}
              <a
                href="https://opennotepad.app?ref=openpuppeteer-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-600"
              >
                OpenNotepad
              </a>{" "}
              is perfect for quick, no-signup note-taking during development.
            </li>
            <li>
              <strong>Handle errors gracefully:</strong> Always wrap your
              automation in try-catch blocks.
            </li>
            <li>
              <strong>Respect rate limits:</strong> Don&apos;t overwhelm target
              servers with too many requests.
            </li>
            <li>
              <strong>Use wait strategies:</strong> Use proper wait conditions
              instead of arbitrary timeouts.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Common Use Cases
          </h2>
          <p className="text-gray-700 mb-4">
            Puppeteer excels in scenarios like:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>E2E testing for web applications</li>
            <li>Monitoring website availability and performance</li>
            <li>Taking screenshots for visual regression testing</li>
            <li>Automating repetitive browser tasks</li>
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-10">
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">
              Keep Track of Your Development
            </h3>
            <p className="text-emerald-800 mb-4">
              Building automation scripts? Keep a development journal to track
              your progress, document edge cases, and note debugging insights.
            </p>
            <a
              href="https://opennotepad.app?ref=openpuppeteer-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Try OpenNotepad — No signup required
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-gray-600 hover:text-black">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
