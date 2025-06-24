import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import App from './App.jsx'
import Header from './components/header/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header /> {/* Renderiza apenas o Header */}
  </StrictMode>
)
