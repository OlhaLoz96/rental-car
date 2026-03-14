'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h2>An error occurred</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </>
  );
}
