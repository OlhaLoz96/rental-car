'use client';

import { PulseLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <PulseLoader
        color="var(--accent-dark)"
        margin={5}
        size={12}
        speedMultiplier={0.8}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
