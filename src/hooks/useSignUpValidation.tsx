import { useState } from "react";
import { USER_VALIDATION_ERRORS } from "../constants";

export default function useSignUpValidation() {
  const [validationMessage, setValidationMessage] = useState({
    idValidationMessage: "",
    pwValidationMessage: "",
  });
  const [buttonOff, setButtonOff] = useState(true);
  const checkId = /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const handleCheckId = (userInfo: any) => {
    if (checkId.test(userInfo.email)) {
      setButtonOff(true);
    } else {
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        idValidationMessage: USER_VALIDATION_ERRORS.INVALID_ID,
      }));
    }
  };

  const handleCheckPw = (userInfo: any) => {
    if (userInfo.password.length === 8) {
      setButtonOff(true);
    } else {
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        pwValidationMessage: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
      }));
    }
  };

  return { validationMessage, buttonOff, handleCheckId, handleCheckPw };
}
