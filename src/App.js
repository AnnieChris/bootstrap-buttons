import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HoverEffects from './components/HoverEffects';
import MouseEvents from './components/MouseEvents';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='*' element={<Error />} /> */}
          <Route path='/hovereffects' element={<HoverEffects />} />
          <Route path='/mouseevents' element={<MouseEvents />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;
