import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path='admins' element={<Admin />}></Route>
          <Route path='users' element={<User />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

