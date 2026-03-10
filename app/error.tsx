'use client';

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return <p>An error occurred. {error.message}</p>;
}
