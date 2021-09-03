import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/app.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div className="divs" data-aos="fade-up">
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
      </div>
    </div>
  );
}

export default App;
