import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Outlet } from 'react-router-dom';


export function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}