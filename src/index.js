import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Footer from './footer';

const headerIndex = ReactDOM.createRoot(document.getElementById('header'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const footerIndex = ReactDOM.createRoot(document.getElementById('footer'));

headerIndex.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
footerIndex.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
