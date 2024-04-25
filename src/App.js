import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='fiche/:ficheId' element={<Fiche />} />
          <Route path='*' element={<NotFound />} />
          <Route path='a-propos' element={<About />} />       
        </Routes>
      </Layout>      
    </div>
  );
}

export default App;
