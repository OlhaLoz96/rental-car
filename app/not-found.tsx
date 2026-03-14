'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Редірект через 5 секунд
    const timer = setTimeout(() => router.push('/'), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist</p>
      <p>Yoy will be redirected to the home page in a few seconds…</p>
    </>
  );
}
