import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <SocialLinks />
    </>
  );
}

export default App;
