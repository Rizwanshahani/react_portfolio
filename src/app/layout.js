import '../index.css';
import '../App.css';
import '../qry.css';
import Navbar from '../components/navbar';
import SiteFooter from '../components/site-footer';
import { ThemeProvider } from '../components/theme-provider';

export const metadata = {
  title: {
    default: 'Rizwan Shahani | Portfolio',
    template: '%s | Rizwan Shahani',
  },
  description: 'Portfolio of Rizwan Shahani, full stack web developer.',
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
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
