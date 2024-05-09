import Navigation from './Navigation';
import styles from './styled/header.module.css';

export default function Header() {
  return (
    <header id={styles.header}>
      <h1 id={styles.h1}>TheMovieDB</h1>
      <Navigation />
    </header>
  );
}
