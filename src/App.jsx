import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Imprint from './components/Imprint';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="imprint" element={<Imprint />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
