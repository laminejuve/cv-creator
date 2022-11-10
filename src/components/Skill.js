import React from 'react';
import { useEffect,useRef } from 'react';


const Skill = () => {
    const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button Skills clicked');
    };

    const element = ref.current;
    console.log(element);

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='contactsSec skill'>
            <h1>SKILLS  <button id='skill' ref={ref}>EDIT</button></h1>
            <p> Add Skills here</p>
    </div>
  )
}

export default Skill;