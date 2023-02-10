import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [firstNameError, setFirstNameError] = useState({});
  const [lastNameError, setLastNameError] = useState({});
  const [ageError, setAgeError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setFirstName("");
      setLastName("");
      setAge("");
    }
  };

  const formValidation = () => {
    const firstNameError = {};
    const lastNameError = {};
    const ageError = {};
    let isValid = true;

    if (firstName.length === 0) {
      firstNameError.firstNameNull = "You should write something!";
      isValid = false;
    }

    if (lastName.length === 0) {
      lastNameError.lastNameNull = "You should write something!";
      isValid = false;
    }

    if (/[a-z]/gi.test(age)) {
      ageError.ageErrorContainsLetters = "You should not use letters here!";
      isValid = false;
    }

    if (+age < 18) {
      ageError.ageErrorTooLow = "You should be at least 18 years old!";
      isValid = false;
    }
    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setAgeError(ageError);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-row">
        <div className="label-row">
          <label htmlFor="first-name">First Name:</label>
          {Object.keys(firstNameError).map((key) => {
            return <p className="error">{firstNameError[key]}</p>;
          })}
        </div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="first-name"
          className="first-name"
          name="first-name"
          type="text"
        />
      </div>
      <div className="input-row">
        <div className="label-row">
          <label htmlFor="last-name">Last Name:</label>
          {Object.keys(lastNameError).map((key) => {
            return <p className="error">{lastNameError[key]}</p>;
          })}
        </div>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" className="last-name" name="class-name" />
      </div>
      <div className="input-row">
        <div className="label-row">
          <label htmlFor="age">Age:</label>
          {Object.keys(ageError).map((key) => {
            return <p className="error">{ageError[key]}</p>;
          })}
        </div>
        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" id="age" className="age" name="age" />
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}
