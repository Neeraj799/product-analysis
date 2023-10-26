import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './Home/Home';
import Header from './Header/Header';
import Login from "./Login/Login";



function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        
      </nav>
    </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
