import Home from './components/home';
import Experience from './components/experience';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <main className="home-page">
      <Home />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
