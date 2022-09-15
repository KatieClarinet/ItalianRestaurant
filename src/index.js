import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Menu from './Components/Menu/Menu';
// import Basket from './Components/Basket/Basket';
import "./index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      {/* <Route path="basket" element={<Basket />} /> */}
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

