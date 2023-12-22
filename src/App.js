//import logo from './logo.svg';
//import './App.css';
import './index.css';
import NavBar from './components/Navbar/NavBar';
import Intro from './components/Introduction/Intro';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Skills from './routes/Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route pathproject='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
