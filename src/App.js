import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Blog from './components/blog';
import Project from './components/projects';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/projects" element={<Project/>} />
          <Route exact path="/blog" element={<Blog/>} />
        </Routes>
    </Router>
    
  )
}

export default App;
