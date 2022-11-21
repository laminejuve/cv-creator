import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

let skills = [];

const Skill = () => {
  const [form, setForm] = useState({ skill: "" });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    skills.push(form);
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

  const listItems = skills.map((member) => <li>{member.skill}</li>);

  return (
    <div className="contactsSec skill">
      <h1>
        Skills{" "}
        <button className="edit" id="skill" onClick={toggleModal}>
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
                <label htmlFor="skill">Skill</label>
                <input
                  id="skill"
                  type="text"
                  value={form.skill}
                  onChange={handleChange}
                  placeHolder="Enter a new Skill"
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
export default Skill;
