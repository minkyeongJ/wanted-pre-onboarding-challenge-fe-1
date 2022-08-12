import { useState } from "react";

export default function useHandleSignUp() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputId = (e: any) => {
    setUserInfo((currentData) => ({
      ...currentData,
      email: e,
    }));
  };

  const handleInputPw = (e: any) => {
    setUserInfo((currentData) => ({
      ...currentData,
      password: e,
    }));
  };
  return { userInfo, handleInputId, handleInputPw };
}
