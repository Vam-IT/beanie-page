import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Imprint from './components/Imprint';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="imprint" element={<Imprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
