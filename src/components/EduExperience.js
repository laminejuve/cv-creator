import React from 'react';
import { useEffect ,useRef } from 'react';

const EduExperionce = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button education clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='education'>
        <h2>EDUCATION  <button className='edit' id='education' ref={ref}>EDIT</button></h2>
    </div>
  )
}

export default EduExperionce