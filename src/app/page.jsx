import { Suspense } from 'react';
import Hero from '@/ui/Hero';
import UpcomingMoviesList from '@/ui/UpcomingMoviesList';

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
      </section>
    </main>
  );
}
