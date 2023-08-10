import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Settings } from "./pages/settings";
import { Navbar } from "./components/Navbar/Navbar";
import { ChangePassword } from "./pages/changePassword";
import { RemindPassword } from './pages/remindPassword';
import { AddOffer } from './pages/addOffer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/o_nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/ustawienia" element={<Settings />} />
          <Route path="/zmiana_hasla" element={<ChangePassword />} />
          <Route path="/odzyskaj" element={<RemindPassword />} />
          <Route path="/dodaj_oferte" element={<AddOffer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
