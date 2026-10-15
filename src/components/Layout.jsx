import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import { useLanguage } from '../context/LanguageContext';

const ComingSoonModal = lazy(() => import('./ComingSoonModal'));

const Layout = () => {
  const { isComingSoonOpen } = useLanguage();

  return (
    <div className="min-h-screen bg-vami-dark text-white overflow-x-hidden">
      <SkipToContent />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      {isComingSoonOpen && (
        <Suspense fallback={null}>
          <ComingSoonModal />
        </Suspense>
      )}
    </div>
  );
};

export default Layout;
