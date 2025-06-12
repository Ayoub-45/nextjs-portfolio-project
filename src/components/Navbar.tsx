"use client"
import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center bg-white dark:bg-gray-900">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-gray-900 dark:text-gray-100">Ayoub Nasraoui</h1>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700">Home</Link>
          <Link
  href="/about"
  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
>
  About
</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    );
}

export default Navbar;
