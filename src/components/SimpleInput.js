import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // if use only one time, and don't need check directly, REF would be a good choose
  console.log("SimpleInput");
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredName(""); // reset the input
    var result = nameInputRef.current.value; // get value with REF
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
