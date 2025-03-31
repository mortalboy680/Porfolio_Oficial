import './App.css';
import './styles/normalize.css';
import 'boxicons';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Nav from './components/nav';
import Footer from './components/footer';
//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';



function App() {
  return (
    <div className='body bodyBackground manrope'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
