import React from 'react';
import {FaMailBulk , FaLocationArrow , FaLink , FaPhone} from 'react-icons/fa';
import { useEffect,useRef } from 'react';


const Contact = () => {
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
    <div className='contactsSec contact'>
           <h1>CONTACTS  <button id ='contact' ref={ref}>EDIT</button></h1>
           <p> <FaLocationArrow/> &nbsp; Address</p>
           <p> <FaMailBulk/> &nbsp; Mail</p>
           <p> <FaPhone/> &nbsp; Phone</p>
           <p> <FaLink /> &nbsp; WebSite</p> 
        </div>
  )
}

export default Contact