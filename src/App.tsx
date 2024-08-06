
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './Sections.tsx/Home';
import Navbar from './Components/TopMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Navbar/>
            {/* <Nav/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            {/* <Footer /> */}
        </Router>
      </header>
    </div>
  );
}

export default App;
