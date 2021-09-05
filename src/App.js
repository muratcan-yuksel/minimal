import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/app.css";
import Work from "./components/Work";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Container>
        {isTabletOrMobile && (
          <div id="mobile">
            <Navbar />
            <div id="header">
              <Header />
            </div>
            <div data-aos="fade-right" id="work">
              <Work />
            </div>
            <div data-aos="fade-left">
              <Skills />
            </div>
          </div>
        )}

        {/* <div className="divs" data-aos="fade-up">
        My work:
      </div>
      <div className="divs" data-aos="fade-left">
        alfjasfasfjlasdfljaflafş asfd asdfk af asdf asdfki sadfkasdifkasdfk
      </div>{" "}
      <div className="divs" data-aos="fade-down">
        lolo
      </div>{" "}
      <div className="divs" data-aos="fade-up">
        lolo
      </div> */}
      </Container>
    </div>
  );
}

export default App;
