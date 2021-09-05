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
        cursorColor="white"
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
        cursorColor="white"
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
        cursorColor="white"
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
        cursorColor="white"
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
        startDelay={11500}
        cursorColor="#3F3D56"
        multiText={["Find me at..."]}
        multiTextDelay={1000}
        typeSpeed={50}
      />
    </div>
  );
}

export default Header;
