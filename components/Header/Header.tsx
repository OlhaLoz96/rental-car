import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href="/" aria-label="Home" className={css.logo}>
          <Image src="/logo.svg" width={104} height={16} alt="logo" />
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Link href="/" className={css.navigationLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className={css.navigationLink}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
