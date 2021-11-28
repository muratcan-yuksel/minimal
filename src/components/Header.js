import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "../style/app.css";
import "../style/header.css";

function Header() {
  return (
    <div className="headerContainer">
      <h1 className="neon">Hey! This is Murat. I'm a web developer</h1>
      <h2 className="neon">I work with VueJS and Ruby on Rails by day</h2>
      <h2 className="neon">Solidity and ReactJS by night</h2>
      <div id="arrowDiv">
        <p class="arrow">&#8681;</p>
      </div>
    </div>
    // <div>
    //   <TypeWriterEffect
    //     className="typeWriter"
    //     textStyle={{
    //       color: "white",
    //       fontWeight: 500,
    //       fontSize: "3em",
    //       margin: "1em 0 10px 1em",
    //       textShadow:
    //         "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,   0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff",
    //     }}
    //     startDelay={500}
    //     cursorColor="white"
    //     multiText={["Hello, world."]}
    //     multiTextDelay={1000}
    //     typeSpeed={50}
    //   />
    //   <TypeWriterEffect
    //     className="typeWriter"
    //     textStyle={{
    //       color: "white",
    //       fontWeight: 500,
    //       fontSize: "3em",
    //       margin: "1em 0 10px 1em",

    //       textShadow:
    //         "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,   0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff",
    //     }}
    //     startDelay={1500}
    //     cursorColor="white"
    //     multiText={["This is Murat. I'm a web developer."]}
    //     multiTextDelay={1000}
    //     typeSpeed={50}
    //   />
    //   <TypeWriterEffect
    //     className="typeWriter"
    //     textStyle={{
    //       color: "white",
    //       fontWeight: 500,
    //       fontSize: "3em",
    //       margin: "1em 0 10px 1em",

    //       textShadow:
    //         "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,   0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff",
    //     }}
    //     startDelay={3000}
    //     cursorColor="white"
    //     multiText={["I work with VueJS and Ruby on Rails by day."]}
    //     multiTextDelay={3000}
    //     typeSpeed={50}
    //   />
    //   <TypeWriterEffect
    //     className="typeWriter"
    //     textStyle={{
    //       color: "white",
    //       fontWeight: 500,
    //       fontSize: "3em",
    //       margin: "1em 0 10px 1em",

    //       textShadow:
    //         "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,   0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff",
    //     }}
    //     startDelay={5000}
    //     cursorColor="white"
    //     multiText={["Solidity and ReactJS by night."]}
    //     multiTextDelay={1000}
    //     typeSpeed={50}
    //   />
    //   <div id="arrowDiv">
    //     <p class="arrow">&#8681;</p>
    //   </div>
    // </div>
  );
}

export default Header;
