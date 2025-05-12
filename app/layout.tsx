import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Hospital App',
  description: 'Hospial App description',
  icons:'/next.svg'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: '1rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
