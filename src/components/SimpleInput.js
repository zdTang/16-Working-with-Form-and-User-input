import { useState } from "react";

const SimpleInput = (props) => {
  console.log("SimpleInput");
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
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
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
