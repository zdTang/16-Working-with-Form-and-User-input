import React, { useState } from "react";

function useValidate(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValueTouched, setValueTouched] = useState(false);

  const nameChangeHandler = (event) => {
    //setValueTouched(true);
    setEnteredValue(event.target.value);
  };
  const nameBlurHandler = () => {
    setValueTouched(true);
  };

  //let isNameValid = enteredName.trim().length !== 0;
  let isNameValid = validateValue(enteredName);
  let isNameDisplayOK = false;
  if (isNameTouched && isNameValid) {
    isNameDisplayOK = true;
  } else if (!isNameTouched && !isNameValid) {
    isNameDisplayOK = true;
  }

  let nameStyle = isNameDisplayOK ? "form-control" : "form-control invalid";

  return {
    enteredValue,
    isValueTouched,
    nameChangeHandler,
    nameBlurHandler,
    nameStyle,
  };
}
export default useValidate;
