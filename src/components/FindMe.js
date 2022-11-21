import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWindowClose,
} from "react-icons/fa";

let INITIAL_STATE = {
  facebook: "Facebook",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  github: "GitHub",
};

const FindMe = () => {
  const [form, setForm] = useState({ INITIAL_STATE });

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
    setForm({ facebook: "", twitter: "", linkedin: "", github: "" });
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

  return (
    <div className="contactsSec findMe">
      <h1>
        Find Me{" "}
        <button className="edit" id="findMe" onClick={toggleModal}>
          EDIT
        </button>
      </h1>
      {INITIAL_STATE.facebook !== "" && (
        <p>
          {" "}
          <FaFacebook /> &nbsp; {INITIAL_STATE.facebook}{" "}
        </p>
      )}
      {INITIAL_STATE.twitter !== "" && (
        <p>
          {" "}
          <FaTwitter /> &nbsp; {INITIAL_STATE.twitter}{" "}
        </p>
      )}
      {INITIAL_STATE.linkedin !== "" && (
        <p>
          {" "}
          <FaLinkedin /> &nbsp; {INITIAL_STATE.linkedin}
        </p>
      )}
      {INITIAL_STATE.github !== "" && (
        <p>
          {" "}
          <FaGithub /> &nbsp; {INITIAL_STATE.github}
        </p>
      )}
      {modal && (
        <div className="modal">
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
        </div>
      )}
    </div>
  );
};

export default FindMe;
