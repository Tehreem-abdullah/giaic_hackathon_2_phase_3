// T105: Landing page with branding and auth CTAs

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle green grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,122,77,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">
            ✨ Todo App
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero section */}
        <div className="py-20 md:py-32 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-transparent border border-primary rounded-full">
            <span className="text-sm font-medium text-primary">🚀 Modern Task Management</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Focus Better. 
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-success-light">
              Get Things Done.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A calm and powerful todo app designed for deep focus.
            Create, edit, and track your tasks effortlessly in a beautiful dark interface.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup">
              <Button variant="primary" size="lg">
                🎯 Get Started Free
              </Button>
            </Link>
            <Link href="/signin">
              <Button variant="secondary" size="lg">
                Sign In →
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-transparent border border-primary rounded-xl p-6 hover:shadow-[0_0_15px_rgba(31,122,77,0.2)] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Smart Task Management
            </h3>
            <p className="text-gray-400">
              Intuitive organization tools to keep your tasks structured and accessible.
            </p>
          </div>

          <div className="bg-transparent border border-primary rounded-xl p-6 hover:shadow-[0_0_15px_rgba(31,122,77,0.2)] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Priority & Focus Mode
            </h3>
            <p className="text-gray-400">
              Set priorities and focus on what matters most with distraction-free mode.
            </p>
          </div>

          <div className="bg-transparent border border-primary rounded-xl p-6 hover:shadow-[0_0_15px_rgba(31,122,77,0.2)] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Minimal Distraction Interface
            </h3>
            <p className="text-gray-400">
              Clean design focused on productivity without unnecessary distractions.
            </p>
          </div>

          <div className="bg-transparent border border-primary rounded-xl p-6 hover:shadow-[0_0_15px_rgba(31,122,77,0.2)] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Fast & Lightweight
            </h3>
            <p className="text-gray-400">
              Optimized for speed and efficiency to keep you productive.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Add Your Tasks</h3>
              <p className="text-gray-400">Quickly create new tasks with titles and descriptions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Organize & Prioritize</h3>
              <p className="text-gray-400">Set priorities and organize your tasks efficiently</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Stay Productive Every Day</h3>
              <p className="text-gray-400">Track your progress and maintain focus daily</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 text-center border-t border-primary">
          <h2 className="text-3xl font-bold text-foreground mb-6">Build Your Daily Focus Habit</h2>
          <Link href="/signup">
            <Button variant="primary" size="lg">
              Start Using Todo App
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-600 border-t border-primary">
          <p>&copy; 2026 Todo App. Built with Next.js, FastAPI, and PostgreSQL.</p>
        </footer>
      </div>
    </div>
  );
}
