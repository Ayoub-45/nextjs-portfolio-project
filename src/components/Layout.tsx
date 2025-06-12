"use client"
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-8">
        {children}
      </main>
    </>
  );
}
