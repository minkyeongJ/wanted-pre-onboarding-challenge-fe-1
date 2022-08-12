import { useState } from "react";

export default function useHandleLogin() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInpuId = (e: string) => {
    setUserInfo((currentData) => ({
      ...currentData,
      email: e,
    }));
  };

  const handleInpuPw = (e: string) => {
    setUserInfo((currentData) => ({
      ...currentData,
      password: e,
    }));
  };
  return { userInfo, handleInpuId, handleInpuPw };
}
