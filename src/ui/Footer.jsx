import styles from './styled/footer.module.css';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <p id={styles.p}>Created By David Pinarto with Next.js 14 and TheMovieDB API</p>
    </footer>
  );
}
