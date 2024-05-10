import { getPopularMovies, BASE_IMAGE_URL } from '@/lib/data';
import PopularMoviesSlider from './PopularMoviesSlider';

import styles from './styled/now-playing-movies.module.css';

export default async function PopularMoviesList() {
  const popularMovies = await getPopularMovies();
  const slides = popularMovies.map((movie) => {
    const { poster_path: posterPath } = movie;
    return {
      ...movie,
      poster_path: `${BASE_IMAGE_URL}${posterPath}`,
    };
  });
  return (
    <section className={styles['now-playing-container']}>
      <PopularMoviesSlider slides={slides} />
    </section>
  );
}
