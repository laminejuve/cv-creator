import React from 'react';
import { useEffect,useRef } from 'react';


const Hobbie = () => {
    const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button Hobbies clicked');
    };

    const element = ref.current;
    console.log(element);

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='contactsSec hobbie'>
            <h1>HOBBIES <button id='hobbie' ref={ref}>EDIT</button></h1>
            <p> Add Hobies here</p>
        </div>
  )
}

export default Hobbie;