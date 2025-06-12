"use client"
import Layout from '@/components/Layout';

export default function About() {
  const content = `
  I'm a passionate developer with interest in full-stack development, cloud, and DevOps.I love building useful,scalable,and beautiful products.
  `
  return (
    <Layout>
      <h1 className="text-3xl font-semibold ">About Me</h1>
      <p className="mt-4 text-gray-700">
        {content}
      </p>
    </Layout>
  );
}
