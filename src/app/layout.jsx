import Header from '@/ui/Header';
import { inter } from '@/ui/fonts';
import Footer from '@/ui/Footer';

import styles from './layout.module.css';
import '@/ui/global.css';

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
