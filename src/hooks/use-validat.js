import React, { useState } from "react";

function useValidate(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValueTouched, setValueTouched] = useState(false);

  const valueChangeHandler = (event) => {
    //setValueTouched(true);
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setValueTouched(true);
  };

  //let isNameValid = enteredName.trim().length !== 0;
  let isValueValid = validateValue(enteredValue);
  let isValueDisplayOK = false;
  if (isValueTouched && isValueValid) {
    isValueDisplayOK = true;
  } else if (!isValueTouched && !isValueValid) {
    isValueDisplayOK = true;
  }

  let valueStyle = isValueDisplayOK ? "form-control" : "form-control invalid";

  return {
    enteredValue,
    valueChangeHandler,
    valueBlurHandler,
    isValueDisplayOK,
    valueStyle,
  };
}
export default useValidate;
