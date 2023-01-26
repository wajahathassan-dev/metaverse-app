import { useRef } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import New from "./components/New";
import People from "./components/People";
import Working from "./components/Working";
import World from "./components/World";
import GlobalStyles from "./globalStyles";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worldRef = useRef(null);
  const workRef = useRef(null);
  const newRef = useRef(null);
  const peopleRef = useRef(null);

  const handleClick = target => {
    if (target === 'home') {
      homeRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (target === 'about'){
      aboutRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (target === 'world') {
      worldRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (target === 'work') {
      workRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (target === 'new'){
      newRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (target === 'people'){
      peopleRef.current?.scrollIntoView({behavior: 'smooth'})
    } 
  }
  return (
    <div className="App">
      <GlobalStyles />
      <div ref={homeRef}></div>
      <Navbar handleClick={handleClick}/>
      <Header/>
      <About ref={aboutRef}/>
      <World ref={worldRef}/>
      <Working ref={workRef}/>
      <New ref={newRef}/>
      <People ref={peopleRef}/>
      <Footer />
    </div>
  );
}

export default App;