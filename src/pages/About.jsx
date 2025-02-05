import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../hooks/useFetch';
import { API_ENDPOINTS } from '../constants';

export default function About() {
  const { t } = useTranslation();
  const { data: user, loading, error } = useFetch(`${API_ENDPOINTS.USERS}/1`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-4"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">{t('about')}</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
      </motion.div>

      <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-lg mb-12">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
        </p>
      </motion.div>

      {loading && (
        <motion.div variants={itemVariants} className="text-center py-8">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 
                         border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t('loading')}</p>
        </motion.div>
      )}

      {error && (
        <motion.div
          variants={itemVariants}
          className="bg-red-100 dark:bg-red-900 p-4 rounded-lg text-center"
        >
          <p className="text-red-600 dark:text-red-300">{t('fetchError')}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-red-600 dark:text-red-300 underline"
          >
            {t('retry')}
          </button>
        </motion.div>
      )}

      {user && (
        <motion.div
          variants={itemVariants}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Name:</span>
                <span>{user.name}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                <span>{user.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                <span>{user.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Website:</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Company Details</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Company:</span>
                <span>{user.company.name}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Catch Phrase:</span>
                <span>{user.company.catchPhrase}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">BS:</span>
                <span>{user.company.bs}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 