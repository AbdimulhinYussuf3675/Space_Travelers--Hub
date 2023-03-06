import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './routes/mission';
import Profile from './routes/profile';
import Rocket from './routes/rockets';
import Navbar from './components/Navbar';

const App = () => {
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
