import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "../constants";

export default function useSignUp() {
  const [error, setError] = useState(null);
  const signUp = async (userInfo) => {
    try {
      const reqURL = `${SERVER_URL}/users/create`;
      const response = axios.post(reqURL, userInfo);
      return response;
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  return { error, signUp };
}
