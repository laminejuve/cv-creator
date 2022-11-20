import React, { useState } from "react";
import { FaStar, FaWindowClose } from "react-icons/fa";

let langues = [];

const Language = () => {
  const [form, setForm] = useState({ langue: "", level: 2 });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    form.level = +form.level;
    langues.push(form);
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

  const listItems = langues.map((member) => (
    <li>
      {member.langue} &nbsp;&nbsp;{" "}
      {[...Array(member.level)].map((e, i) => (
        <FaStar key={i} />
      ))}{" "}
    </li>
  ));

  return (
    <div className="contactsSec language">
      <h1>
        Languages{" "}
        <button className="edit" id="language" onClick={toggleModal}>
          ADD
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
                <label htmlFor="langue">Language</label>
                <input
                  id="langue"
                  type="text"
                  value={form.langue}
                  onChange={handleChange}
                  placeholder="Add a Language"
                  required
                />
              </div>
              <div>
                <label htmlFor="level">Level</label>
                <select
                  id="level"
                  name="level"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your level</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                  <option value="4">Professional</option>
                  <option value="5">Native</option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Language;
