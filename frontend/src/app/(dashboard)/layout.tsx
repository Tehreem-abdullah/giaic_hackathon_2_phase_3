// T040: Dashboard layout with navigation bar and user menu

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { Button } from '@/components/ui/Button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <nav className="bg-card-bg border-b border-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-primary">
                ✨ Todo App
              </h1>

              {/* Navigation Links */}
              <div className="flex items-center gap-1">
                <Link
                  href="/tasks"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-transparent ${
                    pathname === '/tasks'
                      ? 'bg-primary/10 text-primary border-primary'
                      : 'text-gray-300 hover:bg-primary/5 hover:text-primary hover:border-primary/30'
                  }`}
                >
                  📋 Tasks
                </Link>
                <Link
                  href="/chat"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border border-transparent ${
                    pathname === '/chat'
                      ? 'bg-primary/10 text-primary border-primary'
                      : 'text-gray-300 hover:bg-primary/5 hover:text-primary hover:border-primary/30'
                  }`}
                >
                  💬 Chat Assistant
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user && (
                <>
                  <span className="text-sm text-gray-300">{user.email}</span>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    Sign Out
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
