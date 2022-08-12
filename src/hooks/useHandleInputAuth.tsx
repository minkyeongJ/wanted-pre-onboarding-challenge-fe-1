import { useState } from "react";

export default function useHandleInputAuth() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputId = (e: string) => {
    setUserInfo((currentData) => ({
      ...currentData,
      email: e,
    }));
  };

  const handleInputPw = (e: string) => {
    setUserInfo((currentData) => ({
      ...currentData,
      password: e,
    }));
  };
  return { userInfo, handleInputId, handleInputPw };
}
