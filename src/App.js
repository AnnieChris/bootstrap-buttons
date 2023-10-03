import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavMenuBar from './components/NavMenuBar';
import HoverEffects from './components/HoverEffects';
import MouseEvents from './components/MouseEvents';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenuBar />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/bootstrap-buttons' element={<Home />} />
          <Route path='*' element={<Error />} /> 
          <Route path='/hovereffects' element={<HoverEffects />} />
          <Route path='/mouseevents' element={<MouseEvents />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;
