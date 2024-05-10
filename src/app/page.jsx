import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import UpcomingMoviesList from '@/ui/UpcomingMoviesList';
import NowPlayingMoviesList from '@/ui/NowPlayingMoviesList';
import PopularMoviesList from '@/ui/PopularMoviesList';

import styles from './page.module.css';

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <section className={styles['content-container']}>
        <section className={styles['upcoming-section']}>
          <h2>UPCOMING</h2>
          <UpcomingMoviesList />
        </section>
        <section className={styles['now-playing-section']}>
          <h2>NOW PLAYING</h2>
          <NowPlayingMoviesList />
        </section>
        <section className={styles['popular-section']}>
          <h2>POPULAR</h2>
          <PopularMoviesList />
        </section>
      </section>
    </main>
  );
}
