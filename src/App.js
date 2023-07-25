import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Menu} from "./pages/Menu";
function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">Home  </Link>
      <Link to="/contact">  Contact  </Link>
      <Link to="menu">  Menu</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1> "Page not Found"</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
