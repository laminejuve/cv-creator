import React from 'react';
import {useState } from 'react';
import {FaWindowClose } from 'react-icons/fa'
import '../styles/modal.css';
const INITIAL_STATE = {
  email: '',
  password: '',
};
const Hobbie = () => {
  const [form, setForm] = useState({INITIAL_STATE });
  
  const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.id]: event.target.value,
      });
      console.log(form.email , form.password);
    };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitted');
      console.log("final info "+form.email , form.password);
      setForm(INITIAL_STATE);
    };

    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='contactsSec hobbie'>
            <h1>HOBBIES <button id='hobbie' onClick={toggleModal} className='edit'>EDIT</button></h1>
            <p> Add Hobies here</p>
            {modal &&
            ( <div className="modal">
                 <div onClick={toggleModal} className="overlay"></div>
                 <div className="modal-content">
                 <button className="close-modal" onClick={toggleModal}>
                         <FaWindowClose />
                         </button>
                 <form onSubmit={handleSubmit}>
                         <div>
                          <label htmlFor="facebook">Facebook</label>
                          <input 
                                id="facebook"
                                type="text"
                                value={form.facebook}
                                onChange={handleChange}
                                placeHolder="Enter your Facebook Account"
                                />
                            </div>
                          <div>
                           <label htmlFor="twitter">Twitter</label>
                           <input
                               id="twitter"
                               type="text"
                               value={form.twitter}
                               onChange={handleChange}
                               placeHolder="Enter your Twitter Account"
                              />
                          </div>
                          <div>
                          <label htmlFor="phone">LinkedIn</label>
                          <input
                                id="linkedin"
                                type="text"
                                value={form.linkedin}
                                onChange={handleChange}
                                placeHolder="Enter your LinkedIn Account"
                             />
                            </div>
                          <div>
                           <label htmlFor="github">GitHub</label>
                           <input
                               id="github"
                               type="text"
                               value={form.github}
                               onChange={handleChange}
                               placeHolder="Enter your GitHub Account"
                              />
                          </div>
                          <button type="submit">Submit</button>
                     </form>
                         
                 </div>
                      
              </div>)}
    </div>)
  }
          
   


export default Hobbie;