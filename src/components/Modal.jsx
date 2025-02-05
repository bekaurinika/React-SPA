import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Modal({ isOpen, onClose, children, title }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 
                       md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-white dark:bg-gray-800 
                       rounded-lg shadow-xl p-6 max-w-lg w-full"
          >
            {title && (
              <h2 className="text-xl font-semibold mb-4">{title}</h2>
            )}
            {children}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
                         dark:text-gray-400 dark:hover:text-gray-200"
              aria-label={t('close')}
            >
              ✕
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 