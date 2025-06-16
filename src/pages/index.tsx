"use client"
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ayoub | Portfolio</title>
      </Head>

      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          >
          <Image
            src="/images/profile.jpeg"
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          >
          {"Hi, I'm Ayoub Nasraoui 👋"}
        </motion.h1>

        <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          >
          {"I'm a software engineer passionate about full-stack development, DevOps culture, and building modern web apps with great UX."}
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          >
       
        </motion.div>
      </div>
  
    </Layout>
  );
}
