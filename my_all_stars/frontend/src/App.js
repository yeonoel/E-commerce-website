import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Accueil from './pages/Accueil';
import Header from './components/Header';
import BeforeNav from './components/BeforeNav';
import Footer from './components/Footer';
import Shoe from './pages/Shoe';

function App() {
  return (
      <Router>
        <BeforeNav />
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/shoe/:id' element={<Shoe />} />

        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
