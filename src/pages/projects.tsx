"use client"
import Card from '@/components/Card';
import Layout from '@/components/Layout';
const projects=[{
  title: 'Task Manager',
  desc: 'Full-stack app with Next.js + PostgreSQL + REST API.',
},
{
  title: 'DevOps Blog',
  desc: 'A blog built using static generation and Markdown.',
},
{
  title: 'Weather App',
  desc: 'React + API-based weather checker with geolocation.',
},
]
export default function Projects() {
  return (
    <Layout>
      {
        projects.map((project, i) => (
          <Card key={i} project={project}/>
        ))
      }
    </Layout>
  );
}
