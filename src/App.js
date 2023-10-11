import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Blog from './components/blog';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<About/>} />
        </Routes>
    </Router>
    
  )
}

export default App;
