export const API_ENDPOINTS = {
  POSTS: 'https://jsonplaceholder.typicode.com/posts',
  USERS: 'https://jsonplaceholder.typicode.com/users'
};

export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language',
  CONTACT_MESSAGES: 'contactMessages'
};

export const SUPPORTED_LANGUAGES = ['en', 'ka'];

export const ERROR_MESSAGES = {
  FETCH_ERROR: {
    en: 'Failed to fetch data. Please try again.',
    ka: 'მონაცემების მიღება ვერ მოხერხდა. გთხოვთ სცადოთ ხელახლა.'
  },
  REQUIRED_FIELD: {
    en: 'This field is required',
    ka: 'ეს ველი სავალდებულოა'
  },
  INVALID_EMAIL: {
    en: 'Please enter a valid email address',
    ka: 'გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი'
  }
}; 