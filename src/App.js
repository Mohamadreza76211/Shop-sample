import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Carousel from './components/body/Carousel'
import Login from './components/header/Login'
import Register from './components/header/Register'
import Dashboard from './components/header/Dashboard'
import NoMatchPage from './components/header/NoMatchPage'
import MainComponents from './components/MainComponents';

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
      <div >
        <Routes>
          <Route path="/" exact element={<MainComponents />} />
          {/* <Route path="/carousel" exact element={<Carousel />} /> */}
          <Route path="/login"  element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
