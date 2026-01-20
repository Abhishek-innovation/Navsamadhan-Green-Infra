import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { PageRoute } from './types';

const App: React.FC = () => {
  // Simple hash-based routing state
  const [currentPath, setCurrentPath] = useState<string>(PageRoute.HOME);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || PageRoute.HOME;
      setCurrentPath(hash);
    };

    // Set initial path
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case PageRoute.HOME:
        return <Home onNavigate={navigate} />;
      case PageRoute.ABOUT:
        return <AboutPage />;
      case PageRoute.SERVICES:
        return <Services onNavigate={navigate} />;
      case PageRoute.PROJECTS:
        return <Projects />;
      case PageRoute.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Navbar currentPage={currentPath} onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;