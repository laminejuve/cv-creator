import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "../styles/modal.css";

let hobbies = [];

const Hobby = () => {
  const [form, setForm] = useState({ hobby: "" });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    hobbies.push(form);
    toggleModal();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const listItems = hobbies.map((member) => <li>{member.hobby}</li>);

  return (
    <div className="contactsSec hobbie">
      <h1>
        HOBBIES{" "}
        <button id="hobbie" onClick={toggleModal} className="edit">
          EDIT
        </button>
      </h1>
      <ul> {listItems} </ul>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <FaWindowClose />
            </button>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="hobby">Hobby</label>
                <input
                  id="hobby"
                  type="text"
                  value={form.hobby}
                  onChange={handleChange}
                  placeHolder="Enter a Hobby"
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobby;
