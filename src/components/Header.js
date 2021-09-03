import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function Header() {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "3em",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "Hello, world.",
          // "I'm a front-end web developer",
          // "My main focus is creating React.js applications",
          // "Contact me by =>",
        ]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "3em",
        }}
        startDelay={3500}
        cursorColor="#3F3D56"
        multiText={["This is Murat."]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "3em",
        }}
        startDelay={5500}
        cursorColor="#3F3D56"
        multiText={["I'm a front-end web developer."]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "3em",
        }}
        startDelay={8000}
        cursorColor="#3F3D56"
        multiText={["My main focus is creating React.js applications."]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "3em",
        }}
        startDelay={11000}
        cursorColor="#3F3D56"
        multiText={["Contact me by =>"]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
    </div>
  );
}

export default Header;
