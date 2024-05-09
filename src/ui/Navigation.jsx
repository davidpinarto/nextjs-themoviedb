import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link href="/now_playing">Now Playing</Link>
        </li>
        <li>
          <Link href="/popular">Popular</Link>
        </li>
        <li>
          <Link href="/top_rated">Top Rated</Link>
        </li>
      </ul>
    </nav>
  );
}
