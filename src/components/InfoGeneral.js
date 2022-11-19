import React from 'react';
import '../styles/info.css';
import { useRef,useEffect } from 'react';

const InfoGeneral = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button info clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='infoGeneral'>
      <h1> First-Name  Last-Name <button className='edit' id='education' ref={ref}>EDIT</button></h1>
      <h3> Role</h3>
      <p>Mir1im ver1ian1,quis r1oJtr exercitatiol ullalnco lalIoriJliJi ut
         aliquip ex e comlno doconseuat. Duis aute irure dolor ir
         reUrehenderit in voluptate velit loremo docolsequat</p>
    </div>
  )
}

export default InfoGeneral