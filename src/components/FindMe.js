import React from 'react';
import { useEffect,useRef } from 'react';
import {FaTwitter ,FaFacebook , FaLinkedin , FaGithub } from 'react-icons/fa'

const FindMe = () => {
    const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button Find ME clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='contactsSec findMe'>
           <h1>FIND ME <button id='findMe' ref={ref}>EDIT</button></h1>
           <p> <FaFacebook /> Facebook </p>
           <p> <FaTwitter /> Twitter </p> 
           <p> <FaLinkedin/> LinkedIn</p>
           <p> <FaGithub/> GitHub</p>
    </div>
  )
}

export default FindMe;