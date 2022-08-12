import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  InputSection,
  JoinBtn,
  Label,
  LoginSection,
  PositionCenter,
  Title,
  TitleSection,
} from "./Styles";
import useHandleInputAuth from "../../../hooks/useHandleInputAuth";
import useLogin from "../../../hooks/useLogin";
import { USER_SUCCESS_MESSAGE } from "../../../constants";

export default function Login() {
  const navigate = useNavigate();
  const { userInfo, handleInputId, handleInputPw } = useHandleInputAuth();
  const { error, loginSuccessMessage, login } = useLogin();

  if (loginSuccessMessage === USER_SUCCESS_MESSAGE.LOGIN_SUCCESS) {
    navigate("/");
  }

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    login(userInfo);
    console.log(error);
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputId(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputPw(e.target.value);
  };

  return (
    <>
      <LoginSection>
        <PositionCenter>
          <TitleSection>
            <Title>로그인</Title>
          </TitleSection>
          <form method="post" onSubmit={onSubmitLogin}>
            <InputSection>
              <Label htmlFor="input_id">아이디</Label>
              <Input
                type="email"
                id="input_id"
                placeholder="아이디를 입력하세요."
                onChange={handleId}
              />
              <Label htmlFor="input_pw">비밀번호</Label>
              <Input
                type="password"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handlePw}
              />
            </InputSection>
            <Button type="submit">login</Button>
          </form>
          <JoinBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </JoinBtn>
        </PositionCenter>
      </LoginSection>
    </>
  );
}
