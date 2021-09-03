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
          fontSize: "1.5em",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "Hello world, this is Murat, a front-end web developer",
          "My main focus is creating React.js applications",
          "Contact me by =>",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
}

export default Header;