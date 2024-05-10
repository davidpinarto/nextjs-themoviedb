import { getNowPlayingMovies, BASE_IMAGE_URL } from '@/lib/data';
import NowPlayingMoviesSlider from './NowPlayingMoviesSlider';

import styles from './styled/now-playing-movies.module.css';

export default async function NowPlayingMoviesList() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const slides = nowPlayingMovies.map((movie) => {
    const { poster_path: posterPath } = movie;
    return {
      ...movie,
      poster_path: `${BASE_IMAGE_URL}${posterPath}`,
    };
  });
  return (
    <section className={styles['now-playing-container']}>
      <NowPlayingMoviesSlider slides={slides} />
    </section>
  );
}
