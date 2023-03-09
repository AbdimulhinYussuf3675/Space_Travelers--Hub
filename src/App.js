import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Mission from 'routes/mission';
import Navbar from './components/Navbar';
import Profile from './routes/profile';
import Rockets from './routes/rockets';
import './styles/App.css';

const App = () => (
  <Container>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </Container>
);

export default App;
