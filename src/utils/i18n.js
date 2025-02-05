import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../constants';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our SPA',
      about: 'About Us',
      contact: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      darkMode: 'Dark Mode',
      language: 'Language',
      error404: 'Page Not Found',
      backHome: 'Back to Home',
      formSuccess: 'Message sent successfully!',
      loading: 'Loading...',
      retry: 'Retry',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      close: 'Close',
      menu: 'Menu'
    }
  },
  ka: {
    translation: {
      welcome: 'კეთილი იყოს თქვენი მობრძანება',
      about: 'ჩვენს შესახებ',
      contact: 'კონტაქტი',
      name: 'სახელი',
      email: 'ელ-ფოსტა',
      message: 'შეტყობინება',
      submit: 'გაგზავნა',
      darkMode: 'მუქი რეჟიმი',
      language: 'ენა',
      error404: 'გვერდი ვერ მოიძებნა',
      backHome: 'მთავარ გვერდზე დაბრუნება',
      formSuccess: 'შეტყობინება წარმატებით გაიგზავნა!',
      loading: 'იტვირთება...',
      retry: 'ხელახლა ცდა',
      required: 'ეს ველი სავალდებულოა',
      invalidEmail: 'გთხოვთ შეიყვანოთ სწორი ელ-ფოსტის მისამართი',
      close: 'დახურვა',
      menu: 'მენიუ'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Add language detection and fallback
i18n.on('languageChanged', (lng) => {
  if (!SUPPORTED_LANGUAGES.includes(lng)) {
    i18n.changeLanguage('en');
  }
  localStorage.setItem('language', lng);
});

export default i18n; 