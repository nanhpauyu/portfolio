import About from './component/About';
import Awards from './component/Awards';
import Database from './component/Database';
import Education from './component/Education';
import Experience from './component/Experience';
import Interests from './component/Interests';
import Career from './component/Career';
import Nav from './component/Nav';
import Projects from './component/Projects';
import Skills from './component/Skills';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './config';




function App() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${url}api/get_data`);
  //       setData(JSON.parse(response.data)); // Set the fetched data to state
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, []);
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
        {/* <Career data={data} />
        <Database data={data} /> */}
      </div>
    </>
  );
}

export default App;
