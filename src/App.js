
import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

// Styles
import './Styles.css';

// Pages 
import Header from "./pages/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Donate from './pages/Donate';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
