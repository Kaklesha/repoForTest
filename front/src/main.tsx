import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './router.ts'
// import App from './App.tsx'
import { AuthForm } from './forms/auth-form/index.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter><StrictMode>
    <AuthForm />
  </StrictMode></BrowserRouter>,
)
