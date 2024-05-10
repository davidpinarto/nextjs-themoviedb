import { Suspense } from 'react';
import Hero from '@/ui/Hero';

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </main>
  );
}
