import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './components/Home';

const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const Imprint = lazy(() => import('./components/Imprint'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const element = document.querySelector(hash);
        if (element) {
          const navOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementPosition - navOffset),
            behavior: 'smooth',
          });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer = setTimeout(scrollToElement, 200);
        return () => clearTimeout(timer);
      }
      return;
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
            <Route
              path="privacy"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Privacy />
                </Suspense>
              }
            />
            <Route
              path="terms"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Terms />
                </Suspense>
              }
            />
            <Route
              path="imprint"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Imprint />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
