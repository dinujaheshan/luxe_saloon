import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Luxe Saloon | Premium Hair & Beauty Studio',
  description: 'Experience world-class hair styling, color treatments, spa services, and beauty care at Luxe Saloon. Book your appointment today.',
  keywords: 'luxury salon, hair salon, beauty studio, hair color, spa, barber, nail art',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
