import About from './component/About';
import Awards from './component/Awards';
import Education from './component/Education';
import Experience from './component/Experience';
import Interests from './component/Interests';
import Nav from './component/Nav';
import Projects from './component/Projects';
import Skills from './component/Skills';




function App() {

  return (
    <>
      <Nav />
      <div className="container-fluid p-0">
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </>
  );
}

export default App;
