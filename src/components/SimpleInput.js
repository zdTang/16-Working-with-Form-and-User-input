import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  // if use only one time, and don't need check directly, REF would be a good choose
  console.log("SimpleInput");
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid, request HTTP now!");
    }
  }, enteredNameIsValid);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsValid(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    //  add a simple validation
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName(""); // reset the input

    // Use Ref Approaches
    var result = nameInputRef.current.value; // get value with REF
    if (result.trim() === "") {
      return;
    }
    //nameInputRef.current.value="";   // legal, but it will manipulate DOM, let REACT to do it
    console.log("ref=", result);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          ref={nameInputRef}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">invalid name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
