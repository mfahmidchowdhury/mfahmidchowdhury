import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/m-fahmid-chowdhury-463b2a177/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/mfahmidchowdhury" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.udemy.com/user/mohammad-fahmid-chowdhury-4/">
        <SiUdemy />
      </a>
    </div>
  );
};

export default HeaderSocials;
