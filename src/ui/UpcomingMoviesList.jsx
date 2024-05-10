import { getUpcomingMovies, BASE_IMAGE_URL } from '@/lib/data';
import UpcomingMoviesSlider from './UpcomingMoviesSlider';

import styles from './styled/upcoming-movies.module.css';

export default async function UpcomingMoviesList() {
  const upcomingMovies = await getUpcomingMovies();
  const slides = upcomingMovies.map((movie) => {
    const { poster_path: posterPath } = movie;
    return {
      ...movie,
      poster_path: `${BASE_IMAGE_URL}${posterPath}`,
    };
  });
  return (
    <section className={styles['upcoming-container']}>
      <UpcomingMoviesSlider slides={slides} />
    </section>
  );
}
