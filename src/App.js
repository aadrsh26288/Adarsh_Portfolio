// import logo from './logo.svg';
import './App.css';
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import Header from './Components/Header'
import Home from './Components/Home';
import Utilities from './Components/Utilities'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import{DarkModeProvider} from './Content/darkModeContext'


function App() {
  return (
    <DarkModeProvider>
 
    <div className="">
    <Router>
          <Header/>
    <Routes>
      <Route  exact path="/" element={<Home /> } />
      <Route   path="/about" element={<About/>} />
      <Route   path="/utilities" element={<Utilities />} />
      <Route   path="/projects" element={<Projects />} />
    </Routes>
    <Footer/>
    </Router>
  
    </div>


    </DarkModeProvider>

  );
}

export default App;
