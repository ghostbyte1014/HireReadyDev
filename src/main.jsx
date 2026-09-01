import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('PWA ServiceWorker registered with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('PWA ServiceWorker registration failed: ', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
