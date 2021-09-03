import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div data-aos="fade-up">lolo</div>
    </div>
  );
}

export default App;
