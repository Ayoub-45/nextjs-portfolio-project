import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectsPageProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <Layout>
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid gap-6 grid-cols-1 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={`/projects/${proj.slug}`}>
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {proj.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{proj.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await import('../../data/projects.json');
  return {
    props: {
      projects: data.default,
    },
  };
};
