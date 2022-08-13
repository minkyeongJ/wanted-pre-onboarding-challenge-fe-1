import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Styles";
import useHandleInputAuth from "../../../hooks/useHandleInputAuth";
import useLogin from "../../../hooks/useLogin";
import { AUTH_SUCCESS_MESSAGE } from "../../../constants";

export default function Login() {
  const navigate = useNavigate();
  const { userInfo, handleInputId, handleInputPw } = useHandleInputAuth();
  const { error, loginSuccessMessage, login } = useLogin();

  useEffect(() => {
    if (loginSuccessMessage === AUTH_SUCCESS_MESSAGE.LOGIN_SUCCESS) {
      navigate("/");
    }
  }, [loginSuccessMessage]);

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
      <Styled.LoginSection>
        <Styled.PositionCenter>
          <Styled.TitleSection>
            <Styled.Title>로그인</Styled.Title>
          </Styled.TitleSection>
          <form method="post" onSubmit={onSubmitLogin}>
            <Styled.InputSection>
              <Styled.Label htmlFor="input_id">아이디</Styled.Label>
              <Styled.Input
                type="email"
                id="input_id"
                placeholder="아이디를 입력하세요."
                onChange={handleId}
              />
              <Styled.Label htmlFor="input_pw">비밀번호</Styled.Label>
              <Styled.Input
                type="password"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handlePw}
              />
            </Styled.InputSection>
            <Styled.Button type="submit">login</Styled.Button>
          </form>
          <Styled.JoinBtn
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </Styled.JoinBtn>
        </Styled.PositionCenter>
      </Styled.LoginSection>
    </>
  );
}
