import '../index.css';
import '../App.css';
import '../qry.css';
import Navbar from '../components/navbar';
import SiteFooter from '../components/site-footer';
import { ThemeProvider } from '../components/theme-provider';
import WhatsAppButton from '../components/whatsapp-button';

export const metadata = {
  metadataBase: new URL('https://rizwanshahani.vercel.app'),
  title: {
    default: 'Rizwan Shahani | Portfolio',
    template: '%s | Rizwan Shahani',
  },
  description: 'Portfolio of Rizwan Shahani, junior frontend developer and IT graduate.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
