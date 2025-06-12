"use client"
import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold">Contact Me</h1>
      <p className="mt-4 text-gray-700">Feel free to reach out via:</p>
      <ul className="mt-4 space-y-2">
        <li>Email: <a href="mailto:you@example.com" className="text-blue-600">you@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600">yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-600">@yourusername</a></li>
      </ul>
    </Layout>
  );
}
