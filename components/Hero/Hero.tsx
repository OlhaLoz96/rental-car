import css from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className="container">
        <h1 className={css.heroTitle}>Find your perfect rental car</h1>
        <p className={css.description}>Reliable and budget-friendly rentals for any journey</p>
        <Link href="/catalog" aria-label="Catalog" className={`${css.button} button`}>
          View Catalog
        </Link>
      </div>
    </section>
  );
}
