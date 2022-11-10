import React from 'react';
import '../styles/contacts.css';
import { useEffect,useRef } from 'react';
import profilePhoto from '../assets/profile.png'
import Contact from './Contact';
import Language from './Language';
import Skill from './Skill';
import Hobbie from './Hobbie';
import FindMe from './FindMe';


const Contacts = () => {
  

  return (
    <div className='contacts'>
        <img src={profilePhoto} alt="profile"/> 
        <Contact />
        <Language />
        <Skill />
        <Hobbie />
        <FindMe />   
    </div>
  )
}

export default Contacts