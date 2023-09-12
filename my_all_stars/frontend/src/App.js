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
import Cart from './pages/Cart';
import AdresseDelivery from './pages/AdresseDelivery';
import Placeorder from './pages/Placeorder';
import PayementMethod from './pages/PayementMethod';


function App() {
  return (
      <Router>
        <BeforeNav />
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shoe/:id' element={<Shoe />} />
          <Route path='/sign/:id' element={<Shoe />} />
          <Route path='/adresseDelivery' element={<AdresseDelivery />} />
          <Route path='/placeorder' element={<Placeorder />} />
          <Route path='/payementmethod' element={<PayementMethod />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
