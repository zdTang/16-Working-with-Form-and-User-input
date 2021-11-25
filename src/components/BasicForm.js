import useValidate from "../hooks/use-validate";

const BasicForm = (props) => {
  console.log("basic from run !");

  // Control state of firstName
  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValueDisplayOK: isNameDisplayOK,
    valueStyle: nameStyle,
  } = useValidate((item) => item.trim().length !== 0);

  // Control state of last Name
  const {
    enteredValue: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    isValueDisplayOK: isLastNameDisplayOK,
    valueStyle: lastNameStyle,
  } = useValidate((item) => item.trim().length !== 0);

  // Control state of Email
  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValueDisplayOK: isEmailDisplayOK,
    valueStyle: emailStyle,
  } = useValidate((item) => item.includes("@"));

  const submitHandler = (event) => {
    event.preventDefault();
  };

  // Here find a issue, if don't comment the trim() line
  // then the last letter cannot be deleted
  // as when we delete the last letter, the latter in the memory has been deleted
  // while as we have the trim().length logic, it will not trigger the setState again
  // so that the component will not be rendered, so that the last letter is always be there

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
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {!isLastNameDisplayOK && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {!isEmailDisplayOK && (
          <p className="error-text">Entered email address is not valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
