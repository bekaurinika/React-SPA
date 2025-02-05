import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { API_ENDPOINTS } from '../constants';

export default function Home() {
  const { t } = useTranslation();
  const { data: posts, loading, error } = useFetch(`${API_ENDPOINTS.POSTS}?_limit=3`);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="max-w-4xl mx-auto text-center px-4"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 
                       text-transparent bg-clip-text">
          {t('welcome')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to="/about"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg 
                     hover:bg-blue-700 transition-all duration-300 transform 
                     hover:scale-105 hover:shadow-lg"
        >
          {t('about')}
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mt-12">
        {loading && (
          <div className="col-span-3 py-12">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 
                          border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{t('loading')}</p>
          </div>
        )}

        {error && (
          <div className="col-span-3 bg-red-100 dark:bg-red-900 p-4 rounded-lg">
            <p className="text-red-600 dark:text-red-300">{t('fetchError')}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-red-600 dark:text-red-300 underline"
            >
              {t('retry')}
            </button>
          </div>
        )}

        {posts?.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg 
                       hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {post.body}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">🌙 Dark Mode</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Toggle between light and dark themes
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">🌍 Multi-language</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Support for English and Georgian
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 