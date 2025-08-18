import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Lab from './components/Lab';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      <nav>
            <ul>
              <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/support">Support</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/lab">Labs</NavLink>
                </li>
            </ul>
        </nav>
      <Routes>
        {/* <Route path="/" element={<div>this is home page</div>}></Route>
        <Route path="/about" element={<div>this is about page</div>}></Route>
        <Route path="/labs" element={<div>this is lab page</div>}></Route>
        <Route path="/support" element={<div>this is support page</div>}></Route> */}
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="/lab" element={<Lab/>}></Route>
          <Route path='*' element={<div>Page not found</div>}></Route>
        </Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
