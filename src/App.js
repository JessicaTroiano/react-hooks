import Home from './pages/home';
import Sobre from './pages/sobre';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HookUseContext from './componentes/HookUseContext';

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/sobre">Sobre</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
          </Routes>
          </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
