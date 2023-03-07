import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksList from 'routes/mission';
import Navbar from './components/Navbar';
import Profile from './routes/profile';
import Rocket from './routes/rocket';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/categories" element={<Rocket />} />
        <Route path="/categories" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
