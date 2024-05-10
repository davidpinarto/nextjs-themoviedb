import { getTopRatedMovies } from '@/lib/data';
import HeroSlider from './HeroSlider';

import styles from './styled/hero.module.css';

export default async function Hero() {
  const topRatedMovie = await getTopRatedMovies();
  const slides = topRatedMovie.slice(0, 3).map((movie) => {
    const { backdrop_path: backdropPath, title, overview } = movie;
    return {
      imageSrc: `https://image.tmdb.org/t/p/original/${backdropPath}`,
      title,
      overview,
    };
  });
  return (
    <section id={styles.section}>
      <HeroSlider slides={slides} />
    </section>
  );
}
