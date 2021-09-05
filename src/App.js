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
import Contact from "./components/Contact";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";
import { BsChevronDown } from "react-icons/bs";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Container>
        <Navbar />
        {/* responsive for mobile */}
        {isTabletOrMobile && (
          <div className="mobile">
            <div id="header">
              <Header />
            </div>
            <div style={{ width: "100%" }} data-aos="fade-right" id="work">
              <div className="filler">
                <h1>My latest works: </h1>
                <BsChevronDown />
              </div>
              <Work />
            </div>
            <div className="mobile" data-aos="flip-left">
              <div className="filler">
                <h1>My tech stack</h1>
                <BsChevronDown />
              </div>
              <Skills />
            </div>
            <div data-aos="slide-right">
              <div className="filler">
                <h1> Contact me! </h1>
                <BsChevronDown />
              </div>
              <Contact />
            </div>
          </div>
        )}
        {/* for laptops */}
        {isDesktopOrLaptop && (
          <div>
            <div style={{ height: "100vh" }}>
              <Header />
            </div>
            <div>
              {" "}
              <div className="laptopMerge" data-aos="fade-right">
                <div className="filler">
                  <h1>My latest works: </h1>
                  <BsChevronDown />
                </div>
                <Work />{" "}
              </div>
              {/* split */}
              <div>
                {" "}
                <div className="laptopMerge" data-aos="flip-left">
                  <div className="filler">
                    <h1>My tech stack</h1>
                    <BsChevronDown />
                  </div>
                  <Skills />
                </div>{" "}
              </div>
            </div>
            <Contact />
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
