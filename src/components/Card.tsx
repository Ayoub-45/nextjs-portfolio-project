"use client";

import React from 'react';

interface Project {
  title: string;
  desc: string;
}

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <article
      className="bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {project.desc}
      </p>
    </article>
  );
};

export default Card;
