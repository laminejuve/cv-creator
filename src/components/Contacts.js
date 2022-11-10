import React from 'react';
import '../styles/contacts.css';
import { useEffect,useRef } from 'react';
import profilePhoto from '../assets/profile.png'
import {FaTwitter ,FaFacebook , FaLinkedin ,FaMailBulk , FaLocationArrow , FaLink , FaPhone, FaGithub , FaLanguage} from 'react-icons/fa'
import Contact from './Contact';
import Language from './Language';
import Skill from './Skill';


const Contacts = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button contacts clicked');
    };

    const element = ref.current;
    console.log(element);

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='contacts'>
        <img src={profilePhoto} alt="profile"/> 
        <Contact />
        <Language />
        <Skill />
        
        <div className='contactsSec hobbie'>
            <h1>HOBBIES <button id='hobbie' ref={ref}>EDIT</button></h1>
            <p> Add Hobies here</p>
        </div>
        <div className='contactsSec findMe'>
           <h1>FIND ME <button id='findMe' >EDIT</button></h1>
           <p> <FaFacebook /> Facebook </p>
           <p> <FaTwitter /> Twitter </p> 
           <p> <FaLinkedin/> LinkedIn</p>
           <p> <FaGithub/> GitHub</p>
        </div>
        
        
        
        
    </div>
  )
}

export default Contacts