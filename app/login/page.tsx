'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        setError('Incorrect password');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F2] text-[#1B1B1B] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/ll.webp" 
            alt="Coffee Nutz" 
            className="h-auto w-auto max-h-24 object-contain"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-transparent border-b border-[#1B1B1B]/20 py-2 font-sans text-lg focus:outline-none focus:border-[#1B1B1B] transition-colors placeholder:text-[#1B1B1B]/40"
              disabled={isLoading}
            />
            {error && (
              <p className="font-sans text-sm text-[#E07856] mt-1">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-[#1B1B1B] text-[#FBF7F2] font-sans py-3 px-4 rounded-none mt-4 hover:bg-[#1B1B1B]/90 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Checking...' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}
