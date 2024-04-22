import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Fiche from './components/Fiche';
import NotFound from './components/NotFound';
import About from './components/About';
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
