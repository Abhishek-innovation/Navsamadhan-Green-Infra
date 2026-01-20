import React, { useState, useEffect } from 'react';
import { Menu, X, Recycle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem, PageRoute } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', path: PageRoute.HOME },
    { label: 'About', path: PageRoute.ABOUT },
    { label: 'Services', path: PageRoute.SERVICES },
    { label: 'Projects', path: PageRoute.PROJECTS },
    { label: 'Contact', path: PageRoute.CONTACT },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-slate-200 shadow-lg py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(PageRoute.HOME)}>
            <div className={`p-2 rounded-xl mr-3 transition-colors ${scrolled ? 'bg-emerald-100' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Recycle className={`h-6 w-6 ${scrolled ? 'text-emerald-600' : 'text-emerald-500'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Navsamadhan
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>
                Green Infra
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden ${
                  currentPage === item.path
                    ? 'text-emerald-600 bg-emerald-50/50'
                    : scrolled ? 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {currentPage === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-emerald-100/50 rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(PageRoute.CONTACT)}
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20 ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-emerald-600' 
                  : 'bg-emerald-500 text-white hover:bg-emerald-400'
              }`}
            >
              Partner With Us
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    currentPage === item.path
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;