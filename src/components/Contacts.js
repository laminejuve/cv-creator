import React from "react";
import profilePhoto from "../assets/profile.png";
import "../styles/contacts.css";
import Contact from "./Contact";
import FindMe from "./FindMe";
import Hobby from "./Hobby";
import Language from "./Language";
import Skill from "./Skill";

const Contacts = () => {
  return (
    <div className="contacts">
      <img src={profilePhoto} alt="profile" />
      <Contact />
      <Language />
      <Skill />
      <Hobby />
      <FindMe />
    </div>
  );
};

export default Contacts;
