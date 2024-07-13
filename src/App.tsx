import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Nav/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
