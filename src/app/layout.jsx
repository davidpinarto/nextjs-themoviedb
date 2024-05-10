import Header from '@/ui/Header';
import { inter } from '@/ui/fonts';
import { getTopRatedMovies } from '@/lib/data';
import Footer from '@/ui/Footer';

import styles from './layout.module.css';
import '@/ui/global.css';

export async function generateMetadata() {
  const topRatedMovie = (await getTopRatedMovies()).slice(0, 5);

  return {
    title: {
      template: '%s | David Pinarto',
      default: 'TheMovieDB',
    },
    description: 'TheMovieDB Web Front-End with TheMovieDB API that created with Next.js by David Pinarto',
    applicationName: 'TheMovieDB David Pinarto',
    authors: [{ name: 'David Pinarto' }],
    generator: 'Next.js',
    keywords: ['david pinarto', 'code', 'web development', 'javascript', 'react', 'node.js', 'next.js', 'web dev', 'html', 'css'],
    referrer: 'origin-when-cross-origin',
    creator: 'David Pinarto',
    publisher: 'David Pinarto',
    openGraph: {
      title: 'TheMovieDB Open Graph',
      description: 'Get all top movies list on TheMovieDB Front-End Web by David Pinarto',
      url: 'https://nextjs.org',
      siteName: 'Next.js',
      images: topRatedMovie.map((movie) => ({
        url: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        width: 250,
        height: 500,
        alt: movie.title,
      })),
      locale: 'en_US',
      type: 'website',
    },
  };
}
export default async function RootLayout({ children }) {
  return (
    <html lang="en" data-arp-injected="true">
      <body id={styles.body} className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
