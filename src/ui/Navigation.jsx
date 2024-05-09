import Link from 'next/link';
import styles from './styled/navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul id={styles.ul}>
        <li id={styles.li}>
          <Link href="/upcoming">Upcoming</Link>
        </li>
        <li id={styles.li}>
          <Link href="/now_playing">Now Playing</Link>
        </li>
        <li id={styles.li}>
          <Link href="/popular">Popular</Link>
        </li>
        <li id={styles.li}>
          <Link href="/top_rated">Top Rated</Link>
        </li>
      </ul>
    </nav>
  );
}
