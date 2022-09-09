import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import List from './Components/List/List';
import Basket from './Components/Basket/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="list" element={<List />} />
      <Route path="basket" element={<Basket />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

