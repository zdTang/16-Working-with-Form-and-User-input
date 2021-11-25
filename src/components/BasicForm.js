import { useState } from "react";

const BasicForm = (props) => {
  console.log("basic from run !");

  const [enteredName, setEnteredName] = useState("");
  const [isNameTouched, setNameTouched] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
  };

  // Here find a issue, if don't comment the trim() line
  // then the last letter cannot be deleted
  // as when we delete the last letter, the latter in the memory has been deleted
  // while as we have the trim().length logic, it will not trigger the setState again
  // so that the component will not be rendered, so that the last letter is always be there

  const nameChangeHandler = (event) => {
    setNameTouched(true);
    //if (event.target.value.trim().length !== 0) {
    setEnteredName(event.target.value.trim());
    // }
  };
  const nameBlurHandler = (event) => {
    setNameTouched(true);
    if (event.target.value.trim().length !== 0) {
      isNameValid = true;
    }
  };

  let isNameValid = enteredName.trim().length !== 0;
  let isNameDisplayOK = false;
  if (isNameTouched && isNameValid) {
    isNameDisplayOK = true;
  } else if (!isNameTouched && !isNameValid) {
    isNameDisplayOK = true;
  }

  let nameStyle = isNameDisplayOK ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <div className={nameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {!isNameDisplayOK && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
