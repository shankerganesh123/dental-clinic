import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const PAGES = {
  home: Home,
  about: About,
  services: Services,
  gallery: Gallery,
  contact: Contact,
};

function App() {
  const [page, setPage] = useState('home');

  const navigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const Page = PAGES[page] ?? Home;

  return (
    <div className="flex min-h-screen flex-col">
      <Nav page={page} onNavigate={navigate} />
      <main className="flex-1">
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
