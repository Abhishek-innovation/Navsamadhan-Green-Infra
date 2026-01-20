import React from 'react';
import { PageRoute } from '../types';
import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-white">
               <Recycle className="h-8 w-8 text-emerald-500" />
               <span className="text-2xl font-display font-bold">Navsamadhan</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Bridging the gap between waste generation and scientific disposal. 
              Committed to the Swachh Bharat Mission and building a cleaner Bihar through sustainable innovation.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-300">Operational in Begusarai, Bihar</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: PageRoute.HOME },
                { label: 'About Us', path: PageRoute.ABOUT },
                { label: 'Services', path: PageRoute.SERVICES },
                { label: 'Projects', path: PageRoute.PROJECTS },
                { label: 'Contact', path: PageRoute.CONTACT },
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.path)} 
                    className="hover:text-emerald-400 transition-colors text-sm font-medium hover:translate-x-1 duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-display font-semibold text-lg mb-6">Legal & Support</h4>
            <ul className="space-y-3">
              <li><span className="hover:text-emerald-400 cursor-pointer transition-colors text-sm">Privacy Policy</span></li>
              <li><span className="hover:text-emerald-400 cursor-pointer transition-colors text-sm">Terms of Service</span></li>
              <li><span className="hover:text-emerald-400 cursor-pointer transition-colors text-sm">Safety Protocols</span></li>
              <li><span className="hover:text-emerald-400 cursor-pointer transition-colors text-sm">CIN: U38210BR2024PTC000000</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; 2024 Navsamadhan Green Infra Pvt. Ltd.</p>
          <p className="mt-2 md:mt-0">Designing a greener future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;