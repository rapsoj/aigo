import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft border-b border-border' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105">
            <img 
              src="/logo.png" 
              alt="AIGO Logo" 
              className="h-10 w-auto" 
            />
            <div className="hidden lg:block">
              <div className="text-lg font-bold text-text-primary font-heading">AIGO</div>
              <div className="text-sm text-text-secondary font-body">AI for Good Oxford</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-1 py-2 text-sm font-medium transition-all duration-200 font-body ${
                  location.pathname === item.href
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-mint rounded-full" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-mint to-accent-peach rounded-full opacity-0 transition-opacity duration-200 hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent-blue/20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link
              to="/join"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach shadow-soft hover:shadow-medium font-heading"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent-blue/20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-secondary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-background border-t border-border animate-fadeInUp">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-text-primary bg-gradient-to-r from-accent-blue/10 to-accent-mint/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-4 mt-6 px-6 py-3 rounded-full text-center font-semibold bg-gradient-to-r from-accent-blue to-accent-mint text-white hover:from-accent-mint hover:to-accent-peach transition-all duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;