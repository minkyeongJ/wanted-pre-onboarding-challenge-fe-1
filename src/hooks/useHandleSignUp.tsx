import { useState } from "react";
import useSignUpValidation from "./useSignUpValidation";

export default function useHandleSignUp() {
  const { validationMessage, buttonOff, handleCheckId, handleCheckPw } =
    useSignUpValidation();
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const handleId = (e: any) => {
    setUserInfo((currentData) => ({
      ...currentData,
      id: e.target.value,
    }));
  };

  const handelPw = (e: any) => {
    setUserInfo((currentData) => ({
      ...currentData,
      password: e.target.value,
    }));
  };
  return { userInfo, handleId, handelPw };
}
