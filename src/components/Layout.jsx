import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: 'welcome' },
    { path: '/about', label: 'about' },
    { path: '/contact', label: 'contact' }
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-gray-900'
    }`}>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
          {/* Desktop Navigation */}
          <div className="h-16 flex items-center justify-between">
            <div className="hidden md:flex space-x-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`hover:text-gray-300 transition-colors ${
                    location.pathname === path ? 'text-blue-400' : ''
                  }`}
                >
                  {t(label)}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label={t('darkMode')}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label={t('language')}
              >
                {i18n.language === 'en' ? '🇬🇪' : '🇬🇧'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={t('menu')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4"
              >
                <div className="flex flex-col space-y-4">
                  {navLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`hover:text-gray-300 transition-colors ${
                        location.pathname === path ? 'text-blue-400' : ''
                      }`}
                    >
                      {t(label)}
                    </Link>
                  ))}
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={toggleTheme}
                      className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label={t('darkMode')}
                    >
                      {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label={t('language')}
                    >
                      {i18n.language === 'en' ? '🇬🇪' : '🇬🇧'}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4" role="main">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white" role="contentinfo">
        <div className="container mx-auto px-4 text-center py-4">
          <p>&copy; {new Date().getFullYear()} React SPA</p>
        </div>
      </footer>
    </div>
  );
} 