// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter />
        <Footer/>        
      </BrowserRouter>
    </>
  )
}

export default App
