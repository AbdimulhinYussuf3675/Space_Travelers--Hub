import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mission from 'routes/mission';
import Navbar from './components/Navbar';
import Profile from './routes/profile';
import Rockets from './routes/rockets';
import './styles/App.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
