import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TravelAgencyHomepage from './pages/homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelAgencyHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
