"use client"
import React from 'react';
interface myCardProps{
    project: any;
}
const Card = ({project}:myCardProps) => {
    return (
<div   className="bg-gray-100 dark:bg-gray-800 shadow-md p-6 rounded-xl hover:shadow-xl transition">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
  <p className="mt-2 text-gray-700 dark:text-gray-300">{project.desc}</p>
</div>
    );
}

export default Card;
