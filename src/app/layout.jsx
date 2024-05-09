export default async function RootLayout({ children }) {
  return (
    <html lang="en" data-arp-injected="true">
      <body>{children}</body>
    </html>
  );
}
