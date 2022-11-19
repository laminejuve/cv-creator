import React from 'react';
import {FaMailBulk , FaLocationArrow , FaLink , FaPhone ,FaWindowClose} from 'react-icons/fa';
import {useState } from 'react';

let INITIAL_STATE = {
  location: 'Paris, France',
  email: 'jack@gmail.com',
  phone: '+3378945678',
  link: 'jack.com',
};
const EMPTY_STATE = {
  location: '',
  email: '',
  phone: '',
  link: '',
};

const Contact = () => {
  const [form, setForm] = useState({INITIAL_STATE });
  
  const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.id]: event.target.value,
      });
    };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      setForm({
        ...form,
        [event.target.id]: event.target.value,
      });
      INITIAL_STATE = form;
      setForm({location:'',email:'',phone:'',link:''});
      toggleModal();
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
  <div className='contactsSec contact'>
            <h1>CONTACTS  <button className='edit' id ='contact' onClick={toggleModal}>EDIT</button></h1>
           <p> <FaLocationArrow/> &nbsp; {INITIAL_STATE.location}</p>
           <p> <FaMailBulk/> &nbsp; {INITIAL_STATE.email}</p>
           <p> <FaPhone/> &nbsp; {INITIAL_STATE.phone}</p>
           <p> <FaLink /> &nbsp; {INITIAL_STATE.link}</p> 
            {modal &&
          ( <div className="modal">
               <div onClick={toggleModal} className="overlay"></div>
               <div className="modal-content">
               <button className="close-modal" onClick={toggleModal}>
                           <FaWindowClose />
                       </button>
               <form onSubmit={handleSubmit}>
                       <div>
                        <label htmlFor="location">Location</label>
                        <input 
                              id="location"
                              type="text"
                              value={form.location}
                              onChange={handleChange}
                              placeHolder="Enter your current Location"
                              />
                          </div>
                        <div>
                         <label htmlFor="email">Email</label>
                         <input
                             id="email"
                             type="email"
                             value={form.email}
                             onChange={handleChange}
                             placeHolder="name@example.com"
                            />
                        </div>
                        <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                              id="phone"
                              type="text"
                              value={form.phone}
                              onChange={handleChange}
                              placeHolder="Enter your Phone Number"
                           />
                          </div>
                        <div>
                         <label htmlFor="link">Link</label>
                         <input
                             id="link"
                             type="text"
                             value={form.link}
                             onChange={handleChange}
                             placeHolder="Enter your WebSite"
                            />
                        </div>
                        <button type="submit">Submit</button>
                   </form>
                       
               </div>
                    
            </div>)}
    </div>)
}

export default Contact