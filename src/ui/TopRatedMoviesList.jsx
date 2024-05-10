import { getTopRatedMovies, BASE_IMAGE_URL } from '@/lib/data';
import TopRatedMoviesSlider from './TopRatedMoviesSlider';

import styles from './styled/top-rated-movies.module.css';

export default async function TopRatedMoviesList() {
  const topRatedMovies = await getTopRatedMovies();
  const slides = topRatedMovies.map((movie) => {
    const { poster_path: posterPath } = movie;
    return {
      ...movie,
      poster_path: `${BASE_IMAGE_URL}${posterPath}`,
    };
  });
  return (
    <section className={styles['top-rated-container']}>
      <TopRatedMoviesSlider slides={slides} />
    </section>
  );
}
