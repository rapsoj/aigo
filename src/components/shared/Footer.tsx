import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo.png" 
                alt="AIGO Logo" 
                className="h-10 w-auto" 
              />
              <div>
                <div className="text-lg font-bold text-text-primary font-heading">AIGO</div>
                <div className="text-sm text-text-secondary font-body">AI for Good Oxford</div>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md font-body">
              AIGO brings together students, researchers, and innovators to use AI for measurable public good.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/oxford-aigo/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/youngaileaderslinz/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-mint transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@youngaileaderslinz" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-peach transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-text-primary font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-text-secondary hover:text-accent-mint transition-colors font-body">Programs</Link></li>
            </ul>
          </div>

          {/* Contact & Theme Toggle */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-text-primary font-heading">Contact</h3>
            <div className="space-y-3 text-text-secondary font-body mb-6">
              <p>info@aigo.org.uk</p>
              <p>Oxford, UK</p>
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background hover:bg-accent-blue/20 transition-colors duration-200 text-text-secondary hover:text-text-primary"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              <span className="text-sm font-body">Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-text-secondary mb-4 md:mb-0 font-body">
              <Link to="/legal" className="hover:text-text-primary transition-colors">Legal</Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-text-secondary font-body">
              <span>© 2025 AIGO</span>
              <span>•</span>
              <a 
                href="https://aiforgood.itu.int/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                Part of the UN's AI for Good initiative
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;