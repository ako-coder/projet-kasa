import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Fiche from './Fiche';
import NotFound from './NotFound';
import About from './About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fiche/:ficheId' element={<Fiche />} />
        <Route path='404' element={<NotFound />} />
        <Route path='a-propos' element={<About />} />       
      </Routes>      
    </div>
  );
}

export default App;
