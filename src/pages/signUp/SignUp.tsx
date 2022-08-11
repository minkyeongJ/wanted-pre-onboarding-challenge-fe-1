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
} from "./Styles";
import useSignUp from "../../hooks/useSignUp";
import useHandleSignUp from "../../hooks/useHandleSignUp";
import useSignUpValidation from "../../hooks/useSignUpValidation";

export default function SignUp() {
  const { error, signUp } = useSignUp();
  const { userInfo, handleInputId, handleInputPw } = useHandleSignUp();
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
    console.log(error);
  };

  const handleId = (e: any) => {
    handleInputId(e.target.value);
    handleCheckId(e.target.value);
  };

  const handlePw = (e: any) => {
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
              <p>{validationMessage.idValidationMessage}</p>
              <Label htmlFor="input_pw">비밀번호</Label>
              <Input
                type="password"
                name="userPw"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handlePw}
              />
              <p>{validationMessage.pwValidationMessage}</p>
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
