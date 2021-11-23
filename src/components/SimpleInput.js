import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // if use only one time, and don't need check directly, REF would be a good choose
  console.log("SimpleInput");
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [enteredNameIsValid, setInteredNameIsValid] = useState(true);
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setInteredNameIsValid(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //  add a simple validation
    if (enteredName.trim().length === 0) {
      setInteredNameIsValid(false);
      return;
    }
    setInteredNameIsValid(true);
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

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          ref={nameInputRef}
        />
      </div>
      {!enteredNameIsValid && <p className="error-text">invalid name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
