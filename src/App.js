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
import Links from "./components/Links";

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
      <Container fluid>
        <Navbar />
        {/* responsive for mobile */}
        {isTabletOrMobile && (
          <div className="mobile">
            <div id="header">
              <Header />
            </div>
            <div className="mobile" data-aos="zoom-in">
              <div className="filler">
                <h1>Find me on</h1>
                <BsChevronDown />
              </div>
              <Links />
            </div>
            <div style={{ width: "100%" }} data-aos="fade-right" id="work">
              <div className="filler">
                <h1>My latest works: </h1>
                <BsChevronDown />
              </div>
              <div className="mobileWork">
                <Work />
              </div>
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
            <div data-aos="fade-left">
              <div className="filler">
                <h1>Find me on</h1>
                <BsChevronDown />
              </div>
              <Links />
            </div>
            <div>
              {" "}
              <div className="laptopMerge" data-aos="fade-right">
                <div style={{ width: "35rem" }} className="filler">
                  <h1>My latest works: </h1>
                  <BsChevronDown />
                </div>
                <div className="mobileWork">
                  <Work />{" "}
                </div>
              </div>
              {/* split */}
              <div>
                {" "}
                <div className="laptopMerge" data-aos="flip-left">
                  <div style={{ width: "35rem" }} className="filler">
                    <h1>My tech stack</h1>
                    <BsChevronDown />
                  </div>
                  <div className="skillsDiv">
                    <Skills />
                  </div>
                </div>{" "}
              </div>
            </div>
            {/* <div data-aos="slide-right">
              <div className="filler">
                <h1> Contact me! </h1>
                <BsChevronDown />
              </div>
              <Contact />
            </div> */}
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
