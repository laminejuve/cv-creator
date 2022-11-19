import React from 'react';
import {useRef , useEffect} from 'react';

const PracExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button experience clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
        <h2>WORKS EXPERIENCE <button className='edit' id='experience'ref={ref}  >EDIT </button></h2>
    </div>
  )
}

export default PracExperience