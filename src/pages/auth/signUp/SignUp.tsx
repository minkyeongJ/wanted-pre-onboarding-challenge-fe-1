import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputSection,
  JoinSection,
  Label,
  PositionCenter,
  Title,
  TitleSection,
  Validate,
} from "./Styles";
import useSignUp from "../../../hooks/useSignUp";
import useHandleInputAuth from "../../../hooks/useHandleInputAuth";
import useSignUpValidation from "../../../hooks/useSignUpValidation";
import { AUTH_SUCCESS_MESSAGE } from "../../../constants";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { error, signUpSuccessMessage, signUp } = useSignUp();
  const { userInfo, handleInputId, handleInputPw } = useHandleInputAuth();

  const {
    validationMessage,
    isInputValidateState,
    handleCheckId,
    handleCheckPw,
  } = useSignUpValidation();

  const onSubmitSignUp = (e: any) => {
    e.preventDefault();
    console.log(userInfo);
    signUp(userInfo).then((response) => console.log(response));
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputId(e.target.value);
    handleCheckId(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputPw(e.target.value);
    handleCheckPw(e.target.value);
  };

  const [buttonOff, setButtonOff] = useState(true);
  useEffect(() => {
    if (isInputValidateState.id && isInputValidateState.password) {
      setButtonOff(false);
    } else {
      setButtonOff(true);
    }
  }, [isInputValidateState]);

  const navigate = useNavigate();
  useEffect(() => {
    if (signUpSuccessMessage === AUTH_SUCCESS_MESSAGE.SIGNUP_SUCCESS) {
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    }
  }, [signUpSuccessMessage]);

  return (
    <>
      <JoinSection>
        <PositionCenter>
          <TitleSection>
            <Title>회원가입</Title>
          </TitleSection>
          <form method="post" onSubmit={onSubmitSignUp}>
            <InputSection>
              <Label htmlFor="input_id">아이디</Label>
              <Input
                type="email"
                name="userId"
                id="input_id"
                placeholder="아이디를 입력하세요."
                onChange={handleId}
              />
              <Validate>{validationMessage.idValidationMessage}</Validate>
              <Label htmlFor="input_pw">비밀번호</Label>
              <Input
                type="password"
                name="userPw"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handlePw}
              />
              <Validate>{validationMessage.pwValidationMessage}</Validate>
            </InputSection>
            <Button type="submit" disabled={buttonOff}>
              회원가입
            </Button>
          </form>
        </PositionCenter>
      </JoinSection>
    </>
  );
}
