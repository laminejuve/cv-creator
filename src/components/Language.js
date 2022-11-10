import React from 'react';
import { useEffect,useRef } from 'react';


const Language = () => {
    const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button Langauges clicked');
    };

    const element = ref.current;
    console.log(element);

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='contactsSec language'>
           <h1>LANGUAGES <button id='language' ref={ref}>EDIT</button></h1>
           <p> Add Languages here</p>
    </div>
  )
}

export default Language;