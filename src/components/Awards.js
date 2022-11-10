import React from 'react';
import { useEffect , useRef } from 'react';

const Awards = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button awards clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
        <h2>AWARDS <button id='awards'ref={ref}>EDIT </button></h2>
    </div>
  )
}

export default Awards