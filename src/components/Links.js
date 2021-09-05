import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "../style/app.css";

function Links() {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
        target="_blank"
      >
        <AiFillLinkedin size={50} />
      </a>
      <a href="https://github.com/muratcan-yuksel" target="_blank">
        <AiFillGithub size={50} />
      </a>
      <a href="https://twitter.com/CodingSirius" target="_blank">
        <AiOutlineTwitter size={50} />
      </a>
      <a
        class="decorate"
        href="https://muratcanyuksel.hashnode.dev/"
        target="_blank"
      >
        My blog
      </a>
    </div>
  );
}

export default Links;
