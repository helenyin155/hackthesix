'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex">
      <nav className="w-64 p-5 border-r border-gray-300">
        <div className="mb-10">
          <div className="text-2xl font-bold flex items-center">
            <span role="img" aria-label="bear" className="mr-2">🐻</span>
            Logo Here
          </div>
        </div>
        <ul className="list-none p-0">
          <li className="mb-5">
            <Link href="/profile" className={`flex items-center ${pathname === '/profile' ? 'underline' : ''}`}>
              <span role="img" aria-label="profile" className="mr-2">👤</span>
              Jessica's Profile
            </Link>
          </li>
          <li className="mb-5">
            <Link href="/chatbot" className={`flex items-center ${pathname === '/chatbot' ? 'underline' : ''}`}>
              <span role="img" aria-label="chat" className="mr-2">💬</span>
              Financial Assistant
            </Link>
          </li>
        </ul>
        <div className="border-t border-gray-300 my-5"></div>
        <div className="mb-5 text-gray-500">MY GOALS</div>
        <ul className="list-none p-0">
          <li className="mb-5">
            <Link href="/goals/1" className={`flex items-center ${pathname === '/goals/1' ? 'underline' : ''}`}>
              <span role="img" aria-label="goal" className="mr-2">🎯</span>
              Goal #1
            </Link>
          </li>
          <li className="mb-5">
            <Link href="/goals/2" className={`flex items-center ${pathname === '/goals/2' ? 'underline' : ''}`}>
              <span role="img" aria-label="goal" className="mr-2">🎯</span>
              Goal #2
            </Link>
          </li>
        </ul>
        <div className="border-t border-gray-300 my-5"></div>
        <div className="mt-auto">
          <Link href="/settings" className={`flex items-center ${pathname === '/settings' ? 'underline' : ''}`}>
            <span role="img" aria-label="settings" className="mr-2">⚙️</span>
            Settings
          </Link>
        </div>
      </nav>
      <main className="flex-1 p-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;
