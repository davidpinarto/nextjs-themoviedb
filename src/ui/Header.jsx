import Navigation from './Navigation';
import styles from './styled/header.module.css';

export default function Header() {
  return (
    <header id={styles.header}>
      <p id={styles.p}>TheMovieDB</p>
      <Navigation />
    </header>
  );
}
