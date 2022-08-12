import { SERVER_URL } from "../constants";
import axios from "axios";
import { useState } from "react";

export default function useLogin() {
  const [error, setError] = useState(null);
  const [loginSuccessMessage, setLoginSuccessMessage] = useState("");
  const login = async (userInfo: object) => {
    try {
      const reqURL = `${SERVER_URL}/users/login`;
      const response = await axios.post(reqURL, userInfo);
      localStorage.setItem("token", `${response.data.token}`);
      setLoginSuccessMessage(response.data.message);
      return response;
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };
  return { error, loginSuccessMessage, login };
}
