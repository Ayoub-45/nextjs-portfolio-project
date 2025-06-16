import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { Project } from '@/types';
import projectsData from '@/data/projects.json';
import { motion } from 'framer-motion';

export default function ProjectDetail({ project }: { project: Project }) {
  if (!project) return <Layout><p>Project not found.</p></Layout>;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.content}</p>
      </motion.div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((proj) => ({
    params: { slug: proj.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectsData.find((p) => p.slug === params?.slug);

  return {
    props: {
      project: project || null,
    },
  };
};
