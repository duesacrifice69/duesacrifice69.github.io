import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import useTitleLoop from "./utils/titleLoop";
import { useRef } from "react";
import useIntersectionObserve from "./hooks/useIntersectionObserve";

const App = () => {
  const heroRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const projectsRef = useRef();
  const testomonialsRef = useRef();
  const contactRef = useRef();

  const activeId = useIntersectionObserve({
    refs: [
      heroRef,
      aboutRef,
      workRef,
      testomonialsRef,
      projectsRef,
      contactRef,
    ],
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  });

  useTitleLoop();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar active={activeId} />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Experience ref={workRef} />
        <Tech />
        <Projects ref={projectsRef} />
        <Feedbacks ref={testomonialsRef} />
        <div className="relative z-0">
          <Contact ref={contactRef} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
