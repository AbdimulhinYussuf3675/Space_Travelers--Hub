import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Missions from "Routes/mission";
import Profile from "Routes/profile";
import Rocket from "Routes/rockets";
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
</div>
}

export default App;
