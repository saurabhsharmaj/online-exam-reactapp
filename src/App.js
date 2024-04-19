import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Exam from './components/Exam/Exam';
import Report from './components/Report/Report';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="exam" element={<Exam />} />    
          <Route path="report" element={<Report/>} />    
          <Route path="about" element={<About />} />            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
