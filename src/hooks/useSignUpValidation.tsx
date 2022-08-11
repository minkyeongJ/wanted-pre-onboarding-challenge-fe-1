import { useEffect, useState } from "react";
import { USER_VALIDATION_ERRORS } from "../constants";

export default function useSignUpValidation() {
  const [validationMessage, setValidationMessage] = useState({
    idValidationMessage: "",
    pwValidationMessage: "",
  });
  const [isInputValidateState, setIsInputValidateState] = useState({
    id: false,
    password: false,
  });
  const checkId = /[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const handleCheckId = (inputId: any) => {
    if (checkId.test(inputId)) {
      setIsInputValidateState((currentState) => ({
        ...currentState,
        id: true,
      }));
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        idValidationMessage: "",
      }));
    } else {
      setIsInputValidateState((currentState) => ({
        ...currentState,
        id: false,
      }));
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        idValidationMessage: USER_VALIDATION_ERRORS.INVALID_ID,
      }));
    }
  };

  const handleCheckPw = (inputPw: any) => {
    if (inputPw.length >= 8) {
      setIsInputValidateState((currentState) => ({
        ...currentState,
        password: true,
      }));
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        pwValidationMessage: "",
      }));
    } else {
      setIsInputValidateState((currentState) => ({
        ...currentState,
        password: false,
      }));
      setValidationMessage((currentMessage) => ({
        ...currentMessage,
        pwValidationMessage: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
      }));
    }
  };

  return {
    validationMessage,
    isInputValidateState,
    handleCheckId,
    handleCheckPw,
  };
}
