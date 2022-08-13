import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "../constants";

export default function useSignUp() {
  const [error, setError] = useState(null);
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState("");
  const signUp = async (userInfo: object) => {
    try {
      const reqURL = `${SERVER_URL}/users/create`;
      const response = await axios.post(reqURL, userInfo);
      setSignUpSuccessMessage(response.data.message);
      return response;
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };
  return { error, signUpSuccessMessage, signUp };
}
