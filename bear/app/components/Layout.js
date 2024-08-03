'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="bear" style={{ marginRight: '10px' }}>🐻</span>
            Logo Here
          </div>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '20px' }}>
            <Link href="/profile" style={{ textDecoration: pathname === '/profile' ? 'underline' : 'none' }}>
              <span role="img" aria-label="profile" style={{ marginRight: '10px' }}>👤</span>
              Jessica's Profile
            </Link>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <Link href="/chatbot" style={{ textDecoration: pathname === '/chatbot' ? 'underline' : 'none' }}>
              <span role="img" aria-label="chat" style={{ marginRight: '10px' }}>💬</span>
              Financial Assistant
            </Link>
          </li>
        </ul>
        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>
        <div style={{ marginBottom: '20px', color: '#888' }}>MY GOALS</div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '20px' }}>
            <Link href="/goals/1" style={{ textDecoration: pathname === '/goals/1' ? 'underline' : 'none' }}>
              <span role="img" aria-label="goal" style={{ marginRight: '10px' }}>🎯</span>
              Goal #1
            </Link>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <Link href="/goals/2" style={{ textDecoration: pathname === '/goals/2' ? 'underline' : 'none' }}>
              <span role="img" aria-label="goal" style={{ marginRight: '10px' }}>🎯</span>
              Goal #2
            </Link>
          </li>
        </ul>
        <div style={{ borderTop: '1px solid #ddd', margin: '20px 0' }}></div>
        <div style={{ marginTop: 'auto' }}>
          <Link href="/settings" style={{ textDecoration: pathname === '/settings' ? 'underline' : 'none' }}>
            <span role="img" aria-label="settings" style={{ marginRight: '10px' }}>⚙️</span>
            Settings
          </Link>
        </div>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
