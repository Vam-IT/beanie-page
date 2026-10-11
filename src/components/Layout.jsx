import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import ComingSoonModal from './ComingSoonModal';

const Layout = () => {
  return (
    <div className="min-h-screen bg-vami-dark text-white overflow-x-hidden">
      <SkipToContent />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <ComingSoonModal />
    </div>
  );
};

export default Layout;
