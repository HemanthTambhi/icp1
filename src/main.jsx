import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick-theme.css";
import './assets/css/style.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
